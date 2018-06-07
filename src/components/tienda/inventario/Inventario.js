import React, {Component, Fragment} from 'react';
import {BackTop} from 'antd';
import TableGeneric from "../generic/TableGeneric";

const dataSource = [{
    id: '1',
    producto: 'Sabritas',
    monto: 32,
    fecha: '10 septiembre 2018',
    factura:'0019229j3'
}, {
    id: '2',
    producto: 'Coca-Cola',
    monto: 42,
    fecha: '10 junio 2018',
    factura:'0019229j3'
}];

const columns = [{
    title: 'Producto',
    dataIndex: 'producto',
    key: 'producto',
}, {
    title: 'Monto',
    dataIndex: 'monto',
    key: 'monto',
    render:(monto)=><span>$ {monto}</span>
}, {
    title: 'Registro',
    dataIndex: 'fecha',
    key: 'fecha',
},{
    title: 'Ticket',
    dataIndex: 'factura',
    key: 'factura',
}
];

class Inventario extends Component{
    render(){
        return(
            <Fragment>

                <TableGeneric
                    dataSource={dataSource}
                    columns={columns}
                    title={"Inventario Page"}
                />

                <BackTop visibilityHeight={100} />


            </Fragment>
        );
    }
}

export default Inventario;