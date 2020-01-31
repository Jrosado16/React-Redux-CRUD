import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nuevoProductoActions } from '../actions/ProductoActions';

const NuevoProducto = ({history}) => {
    //definimos el state
    const [producto, guardarProducto] = useState('');
    const [precio, guardarPrecio] = useState(0);

    const dispatch = useDispatch();
    //ejecutar el action para guardar el producto
    const agregarProducto = (producto) => dispatch(nuevoProductoActions(producto));

    //acceder al state
    const cargando = useSelector( state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    console.log(cargando)

    //submit del form
    const submitAgregarProducto = (e) => {
        e.preventDefault();

        //validamos el formulario
        if(producto === '' || Number(precio) <= 0){
            return
        }
        //actualizamos el state
        agregarProducto({
            producto,
            precio
        });

        //direcioar
        history.push('/');

    }
    return ( 
      <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">Agregar Producto</h2>    

                    <form
                    onSubmit={submitAgregarProducto}
                    >
                        <div className="form-group">
                            <label>Nombre Producto</label>
                            <input type="text" 
                                className="form-control"
                                placeholder="Nombre del Producto"
                                name="producto"
                                value={producto}
                                onChange={(e) => guardarProducto(e.target.value)}

                            />
                        </div>
                        <div className="form-group">
                            <label>Precio del Producto</label>
                            <input type="number" 
                                className="form-control"
                                placeholder="Ingrese el precio del producto"
                                name="precio"
                                value={precio}
                                onChange={(e) => guardarPrecio(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Guardar</button>
                    </form>

                    { cargando ? <p className="text-center mt-3">Cargando...</p> : null }
                    { error ? <p className="alert alert-danger p1 mt-4 text-center">Hubo un error</p> : null }

                </div>
            </div>
          </div>
      </div>  
    );
}
 
export default NuevoProducto;