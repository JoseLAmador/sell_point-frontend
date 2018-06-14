import React, {Component} from 'react';
import HeaderProducts from "./SectionsProducts/HeaderProducts";
import ListCarrito from './listCarrito/ListCarrito';


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

            </div>
        );
    }
}

export default Carrito;