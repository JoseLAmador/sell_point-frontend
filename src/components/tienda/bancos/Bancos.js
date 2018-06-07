import React, {Component, Fragment} from 'react';
import {BackTop} from 'antd';
import TableGeneric from "../generic/TableGeneric";

const dataSource = [{
    id: '1',
    banco: 'HSBC',
    monto: 32,
    fecha: '10 septiembre 2018',
    cuenta:'0019229j3'
}, {
    id: '2',
    banco: 'BANAMEX',
    monto: 42,
    fecha: '10 junio 2018',
    cuenta:'0019229j3'
}];

const columns = [{
    title: 'Banco',
    dataIndex: 'banco',
    key: 'banco',
}, {
    title: 'Cash',
    dataIndex: 'monto',
    key: 'monto',
    render:(monto)=><span>$ {monto}</span>
},
    {
      title:"Cuenta",
      dataIndex:"cuenta",
      key:"cuenta",
    },
    {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha',
},
];

class Bancos extends Component{
    render(){
        return(
            <Fragment>

                <TableGeneric
                    dataSource={dataSource}
                    columns={columns}
                    title={"Bancos Page"}
                />

                <BackTop visibilityHeight={100} />



            </Fragment>
        );
    }
}

export default Bancos;