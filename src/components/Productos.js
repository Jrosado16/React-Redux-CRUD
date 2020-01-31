import React, { useEffect } from 'react';
import { obtenerProductos } from '../actions/ProductoActions';
import { useDispatch, useSelector } from 'react-redux';
import Producto from './Producto';

const NuevoProducto = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        const getproductos = () => dispatch(obtenerProductos());
        getproductos();
        
        // eslint-disable-next-line
    }, [])
    //obtenemos los datos del state del reducer
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector( state => state.productos.error);

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">

                { error ? <p className="alert alert-danger text-center">Hubo un error</p> : null}

                <table className="table table-strip">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   productos.length === 0 ? 'No hay Datos' : (
                                productos.map( producto => (
                                    <Producto 
                                        key={producto.id}
                                        producto={producto}
                                    />
                                ))
                        )}
                    </tbody>
                </table>  
            </div>
        </div>
    );
}
 
export default NuevoProducto;