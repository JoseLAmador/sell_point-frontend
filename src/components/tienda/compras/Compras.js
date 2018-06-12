import React, {Component, Fragment} from 'react';
import {BackTop} from 'antd';
import TableGeneric from "../generic/TableGeneric";
import NewCompra from './NewCompra';

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

class Compras extends Component{
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
                    title={"Compras Page"}
                    showModal={this.showModal}

                />

                <NewCompra
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

export default Compras;