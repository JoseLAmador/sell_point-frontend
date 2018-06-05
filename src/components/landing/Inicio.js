import React, {Component} from 'react';
import {Button} from 'antd';
import './landingStyle.css';

class Inicio extends Component{
    render(){
        return(
            <header className="header" id={"inicio"} >

                <div >
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Crear tu tienda online es fácil</span>
                        <span className="heading-primary--sub">ArnusShop</span>
                    </h1>
                    <Button>Leer mas</Button>
                </div>
            </header>
        );
    }
}

export default Inicio;