import React, {Component, Fragment} from 'react';
import {BackTop} from 'antd';
import TableGeneric from "../generic/TableGeneric";

const dataSource = [{
    id: '1',
    proveedor: 'Mike',
    fecha: '10 septiembre 2018',
    factura:'0019229j3',
    monto:'345'
}, {
    id: '2',
    proveedor: 'John',
    fecha: '10 junio 2018',
    factura:'0019229j4',
    monto:'995'
}];

const columns = [
    {
        title:'Proveedor',
        dataIndex:'proveedor',
        key:'proveedor'
    },
    {
        title: 'No. Factura',
        dataIndex: 'factura',
        key:"factura"

    },
    {
        title: 'Fecha',
        dataIndex: 'fecha',
        key:"fecha"

    },
    {
        title:'Monto',
        dataIndex: 'monto',
        key: 'monto',
        render: (monto)=><span>$ {monto}</span>
    }
];


class Ventas extends Component{
    render(){
        return(
            <Fragment>

                <TableGeneric
                    dataSource={dataSource}
                    columns={columns}
                    title={"Ventas Page"}

                />

                <BackTop visibilityHeight={100} />

            </Fragment>
        );
    }
}

export default Ventas;