import React, {Fragment} from 'react';
import {Table, Divider} from 'antd';

const TableGeneric = ({dataSource, columns, title})=>{
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
            />
        </Fragment>
    );
};

export default TableGeneric;