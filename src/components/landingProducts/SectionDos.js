import React, {Component} from 'react';
import CarAddProduct from "./SectionsProducts/CardAddProduct";

const data =[
    {
        title: 'Mexico Home Adidas',
        description: 'Administra tus pedidos y tu inventario en todo momento.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81ePlqKHKCL._SL1500_.jpg'
    },
    {
        title: 'Adaptador USB a HDMI',
        description: 'Ofrece múltiples opciones de pago como tarjetas de crédito y Paypal',
        image: 'https://http2.mlstatic.com/sabrent-usb-31-type-c-to-hdmi-adapter-da-hdmc-D_NQ_NP_854424-MLM26629775914_012018-O.webp'
    },
    {
        title: 'Laptop Acer 15.6",AMD ',
        description: 'Crea, administra y comparte cupones promocionales para',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71W0TuD7VLL._SL1134_.jpg'
    },
    {
        title: 'Mexico Home Adidas',
        description: 'Administra tus pedidos y tu inventario en todo momento.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81ePlqKHKCL._SL1500_.jpg'
    },
    {
        title: 'Adaptador USB a HDMI',
        description: 'Ofrece múltiples opciones de pago como tarjetas de crédito y Paypal',
        image: 'https://http2.mlstatic.com/sabrent-usb-31-type-c-to-hdmi-adapter-da-hdmc-D_NQ_NP_854424-MLM26629775914_012018-O.webp'
    },
    {
        title: 'Laptop Acer 15.6",AMD ',
        description: 'Crea, administra y comparte cupones promocionales para',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71W0TuD7VLL._SL1134_.jpg'
    },
    {
        title: 'Mexico Home Adidas',
        description: 'Administra tus pedidos y tu inventario en todo momento.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81ePlqKHKCL._SL1500_.jpg'
    },
    {
        title: 'Adaptador USB a HDMI',
        description: 'Ofrece múltiples opciones de pago como tarjetas de crédito y Paypal',
        image: 'https://http2.mlstatic.com/sabrent-usb-31-type-c-to-hdmi-adapter-da-hdmc-D_NQ_NP_854424-MLM26629775914_012018-O.webp'
    },
];

class SectionDos extends Component{
    render(){
        return(
            <section className={"section-one-products"}>
                <div>
                    <h2>Coleccion Destacada</h2>
                </div>

                <div className={"first-section-two-products"} >
                    {data.map((data, index)=>{
                        return <CarAddProduct data={data} key={index}/>
                    })}
                </div>

            </section>

        );
    }
}

export default SectionDos;