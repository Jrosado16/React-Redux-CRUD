import { combineReducers } from 'redux';
import Productoeducers from './ProductoReducers';

export default combineReducers({
    productos: Productoeducers
})
