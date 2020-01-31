import axios from 'axios';
//configuramos un cliente de axios
const clienteAxios = axios.create({
    baseURL: 'http://localhost:4000/'
});

export default clienteAxios;