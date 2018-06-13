import React from 'react';
import {Form, Input, Button, Modal} from 'antd';

const FormItem=Form.Item;

const NewInventario = Form.create()(
    (props)=>{
        const{visible, onCancel, onCreate, form} =props;

        const {getFieldDecorator} = form;

        return(
            <Modal
                visible={visible}
                title={"Nuevo Inventario"}
                onCancel={onCancel}
                width={'30%'}
                maskClosable={true}
                footer={[null, null]}
            >
                <Form>
                    <FormItem
                        label="Producto"
                    >
                        {getFieldDecorator('producto', {
                            rules: [{
                                required: true, message: 'Completa el campo!',
                            }],
                        })(
                            <Input placeholder={"Nombre del producto"} />
                        )}
                    </FormItem>
                </Form>

                <FormItem>
                    <Button type="primary" onClick={onCreate} size="large" className={"buttonGuardar"}>
                        Guardar
                    </Button>
                </FormItem>
            </Modal>
        )
    }
);

export default NewInventario;