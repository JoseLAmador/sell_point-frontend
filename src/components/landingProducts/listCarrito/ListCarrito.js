import React from 'react';
import {Card, Icon} from 'antd';

const {Meta} = Card

const ListCarrito = ()=>{
    return(

        <Card
            style={{ width: 500, display:'flex' }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" height={'100%'} width={'100%'} />}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
            <Meta
                title="Card title"
                description="This is the description"
            />
        </Card>

    )
};

export default ListCarrito;