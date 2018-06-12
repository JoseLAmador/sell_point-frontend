import React, {Component, Fragment} from 'react';
import {BackTop} from 'antd';
import TableGeneric from "../generic/TableGeneric";
import NewInventario from './NewInventario';

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
    state={
      visible:false,
    };

    saveFormRef = (form)=>{
        this.form = form;
    };

    handleCancel=()=>{
        this.setState({
            visible: false,
        });

        const form = this.form;
        form.resetFields();
    };

    handleCreate = (e) =>{
        const form = this.form;
        e.preventDefault();

        form.validateFields((err, values)=>{
            if(!err){
                console.log(values);
            }
        })
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    render(){
        const {visible} = this.state;
        return(
            <Fragment>

                <TableGeneric
                    dataSource={dataSource}
                    columns={columns}
                    title={"Inventario Page"}
                    showModal={this.showModal}
                />

                <NewInventario
                    ref={this.saveFormRef}
                    visible={visible}
                    onCancel = {this.handleCancel}
                    onCreate = {this.handleCreate}
                />

                <BackTop visibilityHeight={100} />


            </Fragment>
        );
    }
}

export default Inventario;