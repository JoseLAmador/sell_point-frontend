import React, {Component, Fragment} from 'react';
import {BackTop} from 'antd';
import TableGeneric from "../generic/TableGeneric";

const dataSource = [{
    id: '1',
    name: 'Mike',
    monto: 32,
    fecha: '10 septiembre 2018',
    factura:'0019229j3'
}, {
    id: '2',
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

class Proveedores extends Component{
    render(){
        return(
            <Fragment>

                <TableGeneric
                    dataSource={dataSource}
                    columns={columns}
                    title={"Proveedores Page"}

                />

                <BackTop visibilityHeight={100} />

            </Fragment>
        );
    }
}

export default Proveedores;