import React, {Component, Fragment} from 'react';
import {Table, BackTop} from 'antd';

const dataSource = [{
    key: '1',
    name: 'Mike',
    monto: 32,
    fecha: '10 septiembre 2018',
    factura:'0019229j3'
}, {
    key: '2',
    name: 'John',
    monto: 42,
    fecha: '10 junio 2018',
    factura:'0019229j3'
}];

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'Monto',
    dataIndex: 'monto',
    key: 'monto',
    render:(monto)=><span>$ {monto}</span>
}, {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha',
},{
    title: 'Factura',
    dataIndex: 'factura',
    key: 'factura',
}
];

class Inventario extends Component{
    render(){
        return(
            <Fragment>
                <h2>Inventario Page</h2>

                <BackTop visibilityHeight={100} />


                <Table
                    dataSource={dataSource}
                    columns={columns}
                    rowKey={record => record.key}
                    scroll={{x:650}}
                    style={{marginBottom:10}}

                />


            </Fragment>
        );
    }
}

export default Inventario;