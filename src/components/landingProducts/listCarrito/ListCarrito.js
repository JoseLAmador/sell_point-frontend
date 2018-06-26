import React from 'react';
import {Card, Icon, InputNumber} from 'antd';

const {Meta} = Card;

const ListCarrito = ({item, addAmount, substractAmount, deleteItem})=>{
    return(

                <Card style={{marginBottom:15}}>
                    <div style={{width:262, height:159}}>
                        <img alt={item.product.title} src={item.product.image} height={'100%'} width={'100%'} style={{objectFit:'contain', objectPosition:'center'}} />
                    </div>

                    <Meta
                        title={item.product.title}
                        description={item.product.description}
                    />

                    <div className={"cardButtons"}>
                        <InputNumber min={1} max={10} defaultValue={item.amount} style={{marginRight:15}}/>
                        <Icon type="delete" />
                    </div>
                </Card>


    )
};

export default ListCarrito;