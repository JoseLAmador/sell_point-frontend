import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as proveedoresActions from '../../redux/actions/proveedores/proveedoresActions';
import {BackTop} from 'antd';
import TableGeneric from "../generic/TableGeneric";
import NewProveedor from './NewProveedor';
import {message} from "antd/lib/index";



const columns = [{
    title: 'Proveedor',
    dataIndex: 'provider',
    key: 'provider',
}, {
    title: 'Direccion',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
},{
    title: 'RFC',
    dataIndex: 'rfc',
    key: 'rfc',
},
    {
        title: 'Telefono',
        dataIndex: 'phone_number',
        key: 'phone_number'
    }
];

class Proveedores extends Component{
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

        let {owner} = this.props;

        form.validateFields((err, values)=>{
            if(!err){
                values['owner_id'] = owner.id;
                this.props.proveedoresActions.saveProveedor(values)
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
        this.deleteProveedor();
        message.success('Deleted successfully');
    };

    cancel=(e) =>{
        message.error('Cancelado');
    };

    deleteProveedor=()=>{
        let keys = this.state.selectedRowKeys;
        for(let i in keys){
            this.props.proveedoresActions.deleteProveedor(keys[i])
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
        let newUrl = this.props.proveedoresData.next;
        if(newUrl===null){
            newUrl = this.props.proveedoresData.previous;
        }

        if( pagina ===1 && this.props.proveedoresData.count <= 20){
            newUrl='http'+newUrl.slice(4,newUrl.length);
        }else{
            newUrl='http'+newUrl.slice(4,newUrl.length-nextLength)+pagina;
        }
        this.props.proveedoresActions.getProveedores(newUrl);
    };

    render(){
        const {visible, selectedRowKeys} = this.state;
        const {proveedores, proveedoresData} = this.props;

        return(
            <Fragment>

                <TableGeneric
                    dataSource={proveedores}
                    columns={columns}
                    title={"Proveedores Page"}
                    showModal={this.showModal}
                    onSelectChange={this.onSelectChange}
                    selectedRowKeys={selectedRowKeys}
                    confirm={this.confirm}
                    cancel={this.cancel}
                    paginationData={proveedoresData}
                    handlePagination={this.handlePagination}

                />

                <NewProveedor
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
        owner:state.user.object,
        proveedores: state.proveedores.list,
        proveedoresData:state.proveedores.allData,
        fetched: state.proveedores.list !== undefined && state.user.object !== undefined
    }
}

function mapDispatchToProps(dispatch) {
    return{
        proveedoresActions:bindActionCreators(proveedoresActions, dispatch)
    }
}

Proveedores = connect(mapStateToProps, mapDispatchToProps)(Proveedores);

export default Proveedores;