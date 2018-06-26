import React, {Component} from 'react';
import HeaderProducts from "./SectionsProducts/HeaderProducts";
import ListCarrito from './listCarrito/ListCarrito';
import Pie from "../landing/Pie";
import {connect} from 'react-redux';
import * as cartActions from '../redux/actions/cartActions';
import {bindActionCreators} from 'redux';

import {Card, Button, Row, Col} from 'antd';


class Carrito extends Component{
    state={
      order:{
          total:0,
          products:[],
      }
    };


    render(){
        let {cart} = this.props;
        return(
            <div>
                <HeaderProducts
                    title={"CARRITO"}
                />
                <main>
                    <section className={"section-cart-list"}>

                        <Row gutter={16}>
                            <Col span={15} >
                                {cart.map((data, index)=>{
                                    return <ListCarrito
                                        key={index}
                                        addAmount={this.props.cartActions.addAmount}
                                        substractAmount={this.props.cartActions.substractAmount}
                                        deleteItem={this.props.cartActions.deleteItem}
                                        item={data}
                                    />
                                })}
                            </Col>
                            <Col span={9} >
                                <Card>
                                    <div  style={{display:'flex', flexDirection:'column'}}>


                                    <span>Subtotal del pedido: <strong>$369.00</strong></span>
                                    <span style={{fontSize:12}}>{cart.length} productos en tu carrito</span>


                                    <Button style={{marginTop:15}}>
                                        Proceder al pago
                                    </Button>
                                    </div>
                                </Card>
                            </Col>
                        </Row>


                    </section>

                </main>
                <Pie/>

            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return{
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return{
        cartActions: bindActionCreators(cartActions, dispatch),
    }
}

Carrito = connect(mapStateToProps, mapDispatchToProps)(Carrito);
export default Carrito;