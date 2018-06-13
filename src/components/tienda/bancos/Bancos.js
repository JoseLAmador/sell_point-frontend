import React, {Component, Fragment} from 'react';
import {BackTop} from 'antd';
import TableGeneric from "../generic/TableGeneric";
import NewBanco from './NewBanco';

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
                    title={"Bancos Page"}
                    showModal={this.showModal}
                />

                <NewBanco
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

export default Bancos;