import React, {Component, Fragment} from 'react';
import TableGeneric from "../generic/TableGeneric";
import {BackTop} from 'antd';
import NewCliente from './NewCliente';

const dataSource = [{
    id: '1',
    client: 'Mike',
    address: "Pachuca, Hgo #506",
    email: 'mike@gmail.com',
    factura:'0019229j3',
    rfc: "MIKE74JD944"
}, {
    id: '2',
    client: 'JOSE',
    address: "Tulancingo, Hgo #506",
    email: 'jose@gmail.com',
    factura:'0019229j3',
    rfc: "JOSE74JD944"
}];

const columns = [
    {
        title: 'Cliente',
        dataIndex: 'client',
        key:'client',
    },
    {
        title: 'Dirección',
        dataIndex: 'address',
        key:'address'
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
        key:'email',
    },
    {
        title: 'RFC',
        dataIndex: 'rfc',
        key: 'rfc'
    },

    ];

class Clientes extends Component{
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
                    title={"Clientes Page"}
                    showModal={this.showModal}
                />

                <NewCliente
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

export default Clientes;