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
    PRODUCTO_EDITADO,
    PRODUCTO_EDITAR_ERROR
} from '../types';

//iniciamos el state
const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoId: 0,
    productoEditar: 0
}
//ejecutamos cada una de las acciones que haga el usuario
export default function(state = initialState, action){
    switch (action.type) {
        case PRODUCTOS_CARGA:
        case AGREGAR_PRODUCTO :
            return {
                ...state,
                loading: action.payload,
                error: null
            }
        case AGREGAR_PRODUCTO_EXITO :
            return {
                ...state,
                productos: [...state.productos, action.payload],
                loading: false
            }
        case PRODUCTOS_ERROR :
        case AGREGAR_PRODUCTO_ERROR :
        case PRODUCTO_ELIMINAR_ERROR :
        case PRODUCTO_EDITAR_ERROR :
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PRODUCTOS_CARGADOS : 
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        case PRODUCTO_ELIMINAR :
            return {
                ...state,
                productoId: action.payload
            }
        case PRODUCTO_ELIMINADO : 
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== state.productoId),
                productoId: 0,
                error: null
            }
        case PRODUCTO_EDITAR :
            return {
                ...state,
                productoEditar: action.payload
            }
        case PRODUCTO_EDITADO : 
            return {
                ...state,
                productoEditar: null,
                productos: state.productos.map( producto => 
                    producto.id === action.payload.id ? producto = action.payload : producto
                )
            }
        default:
            return state
    }
}