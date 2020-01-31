import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className ="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container"><Link className="text-white" to={'/'} >CRUD - REACT/REDUX</Link></div>

            <Link  to={"/productos/nuevo"}
                className="btn btn-danger d-block d-md-inline-block"
            >Crear Producto &#43;</Link>
        </nav>
     );
}
 
export default Header;