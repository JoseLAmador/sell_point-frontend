import React, {Component} from 'react';
import CarAddProduct from "./SectionsProducts/CardAddProduct";
import {connect} from 'react-redux';
import * as cartActions from '../redux/actions/cartActions';
import {bindActionCreators} from 'redux';

const data =[
    {
        title: 'Mexico Home Adidas',
        description: 'Administra tus pedidos y tu inventario en todo momento.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81ePlqKHKCL._SL1500_.jpg',
        id:1
    },
    {
        title: 'Adaptador USB a HDMI',
        description: 'Ofrece múltiples opciones de pago como tarjetas de crédito y Paypal',
        image: 'https://http2.mlstatic.com/sabrent-usb-31-type-c-to-hdmi-adapter-da-hdmc-D_NQ_NP_854424-MLM26629775914_012018-O.webp',
        id:2
    },
    {
        title: 'Laptop Acer 15.6",AMD ',
        description: 'Crea, administra y comparte cupones promocionales para',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71W0TuD7VLL._SL1134_.jpg',
        id:3
    },
    {
        title: 'Mexico Home Adidas',
        description: 'Administra tus pedidos y tu inventario en todo momento.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81ePlqKHKCL._SL1500_.jpg',
        id:4
    },
    {
        title: 'Adaptador USB a HDMI',
        description: 'Ofrece múltiples opciones de pago como tarjetas de crédito y Paypal',
        image: 'https://http2.mlstatic.com/sabrent-usb-31-type-c-to-hdmi-adapter-da-hdmc-D_NQ_NP_854424-MLM26629775914_012018-O.webp',
        id:5
    },
    {
        title: 'Laptop Acer 15.6",AMD ',
        description: 'Crea, administra y comparte cupones promocionales para',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71W0TuD7VLL._SL1134_.jpg',
        id:6
    },
    {
        title: 'Mexico Home Adidas',
        description: 'Administra tus pedidos y tu inventario en todo momento.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81ePlqKHKCL._SL1500_.jpg',
        id:7
    },
    {
        title: 'Adaptador USB a HDMI',
        description: 'Ofrece múltiples opciones de pago como tarjetas de crédito y Paypal',
        image: 'https://http2.mlstatic.com/sabrent-usb-31-type-c-to-hdmi-adapter-da-hdmc-D_NQ_NP_854424-MLM26629775914_012018-O.webp',
        id:8
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
                        let cartItem = {
                            product: data,
                            amount: 1,
                        };
                        return <CarAddProduct data={data} key={index} addItemCart={this.props.cartActions.addToCart} item={cartItem} />
                    })}
                </div>

            </section>

        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return{
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        cartActions: bindActionCreators(cartActions, dispatch),
    }
}

SectionDos = connect(mapStateToProps, mapDispatchToProps)(SectionDos);

export default SectionDos;