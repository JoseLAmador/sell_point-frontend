import React, {Component} from 'react';
import HeaderProducts from "./HeaderProducts";
import ListProducts from "../ListProducts";
import SectionFinal from "../SectionFinal";

class SectionProducts extends Component{
    render(){
        return(
            <div>
                <HeaderProducts
                    title={"PRODUCTOS"}
                />
                <main>
                    <ListProducts/>

                </main>
                <SectionFinal/>

            </div>


        );
    }
}

export default SectionProducts;