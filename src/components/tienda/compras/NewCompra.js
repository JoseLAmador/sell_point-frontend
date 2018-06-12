import React from 'react';
import {Modal, Button, Input, Form} from 'antd';

const FormItem = Form.Item;

const NewCompra = Form.create()(
    (props)=>{
        const {visible, onCancel, onCreate, form} = props;

        const {getFieldDecorator} = form;

        return(
            <Modal
                visible={visible}
                title={"Nueva Compra"}
                onCancel={onCancel}
                width={'30%'}
                maskClosable={true}
                footer={[
                    null,
                    null,
                ]}
            >
                <Form>
                    <FormItem
                        label="Name"
                    >
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: 'Completa el campo!',
                            }],
                        })(
                            <Input placeholder={"Nombre del name"} />
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

export default NewCompra;