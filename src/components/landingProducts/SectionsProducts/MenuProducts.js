import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MenuProducts extends Component{
    render(){
        return(
            <ul className="snip1555 topMenu">
                <li><Link to={'/landing'} data-hover="Inicio">Inicio</Link></li>
                <li><Link to={'/productos'} data-hover="Productos">Productos</Link></li>
                <li><Link to={'/carrito'} data-hover="Carrito">Carrito</Link></li>
            </ul>
        );
    }
}

export default MenuProducts;