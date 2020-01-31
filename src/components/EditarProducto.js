import React, { useState, useEffect } from 'react';
import { productoEdiarAction } from '../actions/ProductoActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const EditarProducto = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    //creamos el state
    const [nuevoProducto, guardarProducto] = useState({
        producto: '',
        precio: ''
    })

    const productoEditar = useSelector(state => state.productos.productoEditar);

    //se ejecuta al crearce el componete y al haber cambios en productoEditar
    useEffect( () => {
        guardarProducto(productoEditar)
    }, [productoEditar])
    
    const { producto, precio } = nuevoProducto;

    //edita el producto
    const subtmiEditarProducto = (e) => {
        e.preventDefault();
        dispatch(productoEdiarAction(nuevoProducto))
        history.push('/');
    }
    //escucha los cambios del form
    const onChangeFormulario = (e) =>{
        guardarProducto({
            ...nuevoProducto,
            [e.target.name]: e.target.value
        })
    }
    return ( 
      <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">Editar Producto</h2>    
                    <form
                        onSubmit={subtmiEditarProducto}
                    >
                        <div className="form-group">
                            <label>Nombre Producto</label>
                            <input type="text" 
                                className="form-control"
                                name="producto"
                                placeholder="Nombre del Producto"
                                value={producto}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div className="form-group">
                            <label>Precio del Producto</label>
                            <input type="number" 
                                className="form-control"
                                name="precio"
                                placeholder="Ingrese el precio del producto"
                                value={precio}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Guardar Cambios</button>
                    </form>
                </div>    
            </div>
          </div>
      </div>  
    );
}
 
export default EditarProducto;