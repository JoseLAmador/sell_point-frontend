import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './landingStyle.css';

class Inicio extends Component{
    render(){
        return(
            <header className="header" id={"inicio"} >

                <div >
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Crear tu punto de venta es fácil</span>

                    </h1>
                    <Link to={"/login"} className={"likeButton"}>Empezar</Link>
                </div>
            </header>
        );
    }
}

export default Inicio;