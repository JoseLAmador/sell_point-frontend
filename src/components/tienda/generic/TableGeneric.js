import React, {Fragment} from 'react';
import {Table, Divider, Button} from 'antd';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }}

const TableGeneric = ({dataSource, columns, title, showModal})=>{

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
            />

            <div style={{marginBottom:10, textAlign: 'left' }}>
                <Button type="primary" onClick={showModal} style={{borderColor:'#B9563F', backgroundColor:'#B9563F'}}>Agregar</Button>
            </div>

        </Fragment>
    );
};

export default TableGeneric;