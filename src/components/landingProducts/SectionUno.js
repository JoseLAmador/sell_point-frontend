import React, {Component} from 'react';
import MenuProducts from "./SectionsProducts/MenuProducts";
class SectionUno extends Component{
    render(){
        return(
            <header className="headerProduct" id={"inicio"} >
                <MenuProducts />

                <div >
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">ARNUR-SHOP</span>
                        <span className="heading-primary--sub">Compra en linea de forma <strong>SEGURA</strong></span>
                    </h1>
                </div>
            </header>
        );
    }
}

export default SectionUno;