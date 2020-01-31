import React from 'react';
import { useDispatch } from 'react-redux';
import { eliminarProductoAction, editarProductoAction } from '../actions/ProductoActions';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

const Producto = ({producto}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    //elinima un produto
    const eliminarProdcuto = (id) => {
        // alerta
        Swal.fire({
            title: 'Deseas Eliminar un Producto?',
            text: "Si eliminas este producto no podras recuperarlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!'
          }).then(async (result) => {
            if (result.value) {
              dispatch(eliminarProductoAction(id));
            }
          })
    }
    //nos redirige a la pagina de edicion
    const irEditarProducto = (producto) => {
        history.push(`/productos/editar/${producto.id}`);
        dispatch(editarProductoAction(producto));
    }
    return ( 
        <tr>
            <td>{ producto.producto }</td>
            <td>{ producto.precio }</td>
            <td>
                <button
                    onClick={() => irEditarProducto(producto)}
                    className="btn btn-warning mr-2">Editar
                </button>
                <button 
                    onClick={ () => eliminarProdcuto(producto.id)}
                className="btn btn-danger">ELiminar</button>
            </td>
        </tr>
     );
}
 
export default Producto;