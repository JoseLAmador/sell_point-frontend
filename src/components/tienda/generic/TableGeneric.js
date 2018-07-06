import React, {Fragment} from 'react';
import {Table, Divider, Button, Popconfirm, Icon} from 'antd';


const TableGeneric = ({dataSource,
                          columns,
                          title,
                          showModal,
                          onSelectChange,
                          selectedRowKeys,
                          confirm,
                          cancel,
                          paginationData,
                          handlePagination})=>{
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return(
        <Fragment>

            <div style={{marginBottom:10, color:'rgba(0, 0, 0, 0.65)',textAlign: 'left' }}>
                Tienda
                <Divider type="vertical" />
                {title}
            </div>

            <h2>{title}</h2>

            <Table
                dataSource={dataSource}
                columns={columns}
                rowKey={record => record.id}
                scroll={{x:650}}
                style={{marginBottom:10}}
                rowSelection={rowSelection}
                /*pagination={{
                    pageSize: 10,
                    total:paginationData.count,
                    onChange:handlePagination,
                    showTotal:total => `Total: ${total} ${title}`
                }}*/
            />

            <div style={{marginBottom:10, textAlign: 'left' }}>
                <Button type="primary" onClick={showModal} style={{borderColor:'#7cc097', backgroundColor:'#7cc097'}}>
                    Agregar
                    <Icon type="plus" />
                </Button>

                <Divider type={'vertical'} />

                <Popconfirm title="Estas seguro de eliminar este item?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                    <Button disabled={false} type="primary" style={{borderColor:'#B9563F', backgroundColor:'#B9563F'}} >
                        Eliminar
                        <Icon type="delete" />
                    </Button>
                </Popconfirm>
            </div>

        </Fragment>
    );
};

export default TableGeneric;