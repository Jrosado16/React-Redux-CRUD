import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    PRODUCTOS_CARGA,
    PRODUCTOS_CARGADOS,
    PRODUCTOS_ERROR,
    PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO,
    PRODUCTO_ELIMINAR_ERROR,
    PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_STATE,
    PRODUCTO_EDITADO,
    PRODUCTO_EDITAR_ERROR
} from '../types';

import clienteAxios from '../config/Axios';
import Swal from 'sweetalert2';

//aciton para crear el producto
export function nuevoProductoActions(producto){
    return async (dispatch) => {

        dispatch(agregarProducto())

        try {
            await clienteAxios.post('/productos', producto)
            dispatch(productoGuardado(producto));

            Swal.fire(
                'Correcto',
                'Producto Agregado',
                'success'
            )
        } catch (error) {
            dispatch(productoError(true))
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta nuevamente'
            })
        }
    }
}

//Agregar el producto
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})
const productoGuardado = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
const productoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

//Obtener los productos
export function obtenerProductos(){
    return async (dispatch) => {
        dispatch(cargarProdutos());

        try {
            const productos = await clienteAxios.get('/productos');
            dispatch(productosCargados(productos.data));
        } catch (error) {
            dispatch(productosError());
        }
    }
}

const cargarProdutos = () => ({
    type: PRODUCTOS_CARGA,
    payload: true
});
const productosCargados = (productos) => ({
    type: PRODUCTOS_CARGADOS,
    payload: productos
});
const productosError = () => ({
    type: PRODUCTOS_ERROR,
    payload: true
});


//eliminar producto

export function eliminarProductoAction(id){
    return async (dispatch) => {
        dispatch(eliminarProducto(id))

        try {
            dispatch(productoEliminado(id))
            await clienteAxios.delete(`/productos/${id}`);

            Swal.fire(
                'Eliminado!',
                'Producto eliminado.',
                'success'
            )
                
        } catch (error) {
            dispatch(productoEliminadoError());
        }
    }
}

const eliminarProducto = (id) => ({
    type: PRODUCTO_ELIMINAR,
    payload: id
})
const productoEliminado = (id) => ({
    type: PRODUCTO_ELIMINADO,
    payload: id
})
const productoEliminadoError = () => ({
    type: PRODUCTO_ELIMINAR_ERROR,
    payload: true
})

//Editar producto

export function editarProductoAction(producto){
    return (dispatch) => {
        dispatch(productoState(producto));
    }
}

const productoState = (producto) => ({
    type: PRODUCTO_EDITAR,
    payload: producto
})

export function productoEdiarAction(producto){
    return async (dispatch) => {
        dispatch(editarProducto(producto));

        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto)
            dispatch(productoEditarExito(producto));
            Swal.fire(
                'Editado!',
                'Producto Editado Correctamente.',
                'success'
            )

        } catch (error) {
            dispatch(productoEditarError());
        }
    }
}

const editarProducto = () => ({
    type: PRODUCTO_EDITAR_STATE
})

const productoEditarExito = (producto) => ({
    type: PRODUCTO_EDITADO,
    payload: producto
})

const productoEditarError = () => ({
    type: PRODUCTO_EDITAR_ERROR,
    payload: true
})