import React from 'react';
import {Card, Icon, InputNumber, Button} from 'antd';

const {Meta} = Card;

const ListCarrito = ()=>{
    return(

        <section className={"section-cart-list"}>

            <div style={{display:'flex', flexWrap:'wrap'}}>

            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Card
                    style={{display:'flex', marginTop: 15 }}
                >
                    <div style={{width:262, height:159, backgroundColor:'red'}}>
                        <img alt="example" src="https://images-na.ssl-images-amazon.com/images/I/81ePlqKHKCL._SL1500_.jpg" height={'100%'} width={'100%'} />
                    </div>

                    <Meta
                        title="2016-2017 Mexico Home Adidas"
                        description="Administra tus pedidos y tu inventario en todo momento."
                    />

                    <div className={"cardButtons"}>
                        <InputNumber min={1} max={10} defaultValue={1} style={{marginRight:15}}/>
                        <Icon type="delete" />
                    </div>
                </Card>

                <Card
                    style={{ display:'flex', marginTop: 15 }}

                >
                    <div style={{width:262, height:159, backgroundColor:'red'}}>
                        <img alt="example" src="https://images-na.ssl-images-amazon.com/images/I/71W0TuD7VLL._SL1134_.jpg" height={'100%'} width={'100%'} />
                    </div>
                    <Meta
                        title="Laptop Acer 15.6,AMD"
                        description="Administra tus pedidos y tu inventario en todo momento."
                    />

                    <div className={"cardButtons"}>
                        <InputNumber min={1} max={10} defaultValue={1} style={{marginRight:15}}/>
                        <Icon type="delete" />
                    </div>
                </Card>

                <Card
                    style={{ display:'flex', marginTop: 15 }}
                >
                    <div style={{width:262, height:159, backgroundColor:'red'}}>
                        <img alt="example" src="https://images-na.ssl-images-amazon.com/images/I/81OXg-wXMgL._SL1500_.jpg" height={'100%'} width={'100%'} />
                    </div>

                    <Meta
                        title="Adaptador USB a HDMI"
                        description="Administra tus pedidos y tu inventario en todo momento."
                    />

                    <div className={"cardButtons"}>
                        <InputNumber min={1} max={10} defaultValue={1} style={{marginRight:15}}/>
                        <Icon type="delete" />
                    </div>
                </Card>
            </div>

            <div style={{marginTop:15, marginLeft:15}}>
                <Card>
                    <Meta
                        title="Subtotal del pedido:  $369.00"
                        description="3 productos en tu carrito"
                    />

                    <Button style={{marginLeft:5}}>
                        Proceder al pago
                    </Button>
                </Card>

            </div>

            </div>
        </section>

    )
};

export default ListCarrito;