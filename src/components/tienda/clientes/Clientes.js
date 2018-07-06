import React, {Component, Fragment} from 'react';
import TableGeneric from "../generic/TableGeneric";
import {BackTop, message} from 'antd';
import NewCliente from './NewCliente';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as clientesActions from '../../redux/actions/clientes/clientesActions';

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
    {
        title: 'Telefono',
        dataIndex: 'phone_number',
        key: 'phone_number',
    }

    ];

class Clientes extends Component{
    state={
        visible:false,
        selectedRowKeys:[]
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
                this.props.clientesActions.saveCliente(values)
                    .then(r=>{
                        message.success('Guardado con éxito');

                        form.resetFields();
                        this.setState({ visible: false });
                    })
                    .catch(r=>{
                        message.error('El RFC ingresado ya existe, verificalo');
                    })
            }
        })
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    confirm=(e)=> {
        let {selectedRowKeys} = this.state;
        if(selectedRowKeys.length > 0){
            this.deleteCliente();
            message.success('Deleted successfully');
        }
        message.error('Selecciona uno/s item a eliminar');
    };

    cancel=(e) =>{
        message.error('Cancelado');
    };

    deleteCliente=()=>{
        let keys = this.state.selectedRowKeys;
        for(let i in keys){
            this.props.clientesActions.deleteCliente(keys[i])
                .then(r=>{
                    console.log(r)
                }).catch(e=>{
                console.log(e)
            })
        }
        this.setState({selectedRowKeys:[]})
    };

    handlePagination=(pagina)=>{
        let nextLength = pagina.toString().length;
        let newUrl = this.props.clientesData.next;
        if(newUrl===null){
            newUrl = this.props.clientesData.previous;
        }

        if( pagina ===1 && this.props.clientesData.count <= 20){
            newUrl='http'+newUrl.slice(4,newUrl.length);
        }else{
            newUrl='http'+newUrl.slice(4,newUrl.length-nextLength)+pagina;
        }
        this.props.clientesActions.getClientes(newUrl);
    };



    render(){
        const {visible, selectedRowKeys} = this.state;
        const {clientes, clientesData} = this.props;
        return(
            <Fragment>

                <TableGeneric
                    dataSource={clientes}
                    columns={columns}
                    title={"Clientes Page"}
                    showModal={this.showModal}
                    onSelectChange={this.onSelectChange}
                    selectedRowKeys={selectedRowKeys}
                    confirm={this.confirm}
                    cancel={this.cancel}
                    paginationData={clientesData}
                    handlePagination={this.handlePagination}
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

function mapStateToProps(state) {
    return{
        clientes: state.clientes.list,
        clientesData:state.clientes.allData,
        fetched: state.clientes.list !== undefined
    }
}

function mapDispatchToProps(dispatch) {
    return{
        clientesActions:bindActionCreators(clientesActions, dispatch)
    }
}

Clientes = connect(mapStateToProps, mapDispatchToProps)(Clientes);

export default Clientes;