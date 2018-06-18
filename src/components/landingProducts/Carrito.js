import React, {Component} from 'react';
import HeaderProducts from "./SectionsProducts/HeaderProducts";
import ListCarrito from './listCarrito/ListCarrito';
import Pie from "../landing/Pie";


class Carrito extends Component{
    render(){
        return(
            <div>
                <HeaderProducts
                    title={"CARRITO"}
                />
                <main>
                    <ListCarrito/>
                </main>
                <Pie/>

            </div>
        );
    }
}

export default Carrito;