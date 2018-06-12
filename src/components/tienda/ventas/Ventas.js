import React, {Component, Fragment} from 'react';
import {BackTop} from 'antd';
import TableGeneric from "../generic/TableGeneric";
import NewVenta from './NewVenta';

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
                    title={"Ventas Page"}
                    showModal={this.showModal}
                />

                <NewVenta
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

export default Ventas;