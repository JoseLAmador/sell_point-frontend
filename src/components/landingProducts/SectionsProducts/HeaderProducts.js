import React from 'react';
import MenuProducts from "./MenuProducts";

const HeaderProducts = ({title})=>{
        return(
            <header className={"headerProductos"}>
                <MenuProducts />
                <h2 style={{color:'white'}}><strong>{title}</strong></h2>
            </header>
        );
};

export default HeaderProducts;