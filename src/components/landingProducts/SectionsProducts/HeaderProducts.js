import React from 'react';
import {Link} from 'react-router-dom';

const HeaderProducts = ({title})=>{
        return(
            <header className={"headerProductos"}>
                <div className={"topright"}>
                    <Link to={'/landing'} className={"linkColor"}>
                        <span>Inicio</span>
                    </Link>
                    <Link to={'/productos'} className={"linkColor"}>
                        <span>Productos</span>
                    </Link>
                    <Link to={'/carrito'} className={"linkColor"}>
                        <span>Carrito</span>
                    </Link>
                </div>

                <h2 style={{color:'white'}}><strong>{title}</strong></h2>
            </header>
        );
};

export default HeaderProducts;