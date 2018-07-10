import React from 'react';
import {Form, Input, Button, Modal} from 'antd';

const FormItem = Form.Item;

const NewProveedor = Form.create()(
    (props)=>{
        const{visible, onCancel, onCreate, form} = props;

        const {getFieldDecorator} = form;

        return(
            <Modal
                visible={visible}
                title={"Nuevo Proveedor"}
                onCancel={onCancel}
                width={'45%'}
                maskClosable={true}
                footer={[
                    null,
                    null,
                ]}
            >
                <Form>
                    <FormItem
                        label="Proveedor"
                    >
                        {getFieldDecorator('provider', {
                            rules: [{
                                required: true, message: 'Completa el campo!',
                            }],
                        })(
                            <Input placeholder={"Nombre del proveedor"} />
                        )}
                    </FormItem>

                    <FormItem
                        label="Dirección"
                    >
                        {getFieldDecorator('address', {
                            rules: [{
                                required: true, message: 'Completa el campo!',
                            }],
                        })(
                            <Input placeholder={"Dirección del proveedor"} />
                        )}
                    </FormItem>

                    <FormItem
                        label="RFC del Proveedor"
                    >
                        {getFieldDecorator('rfc', {
                            rules: [{
                                required: true, message: 'Completa el campo!',
                            }],
                        })(
                            <Input minLength={"13"} maxLength={"13"} placeholder={" RFC del proveedor"}  />
                        )}
                    </FormItem>

                    <FormItem
                        label="Correo electrónico"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'No es una dirección de correo válida!',
                            }, {
                                required: true, message: 'Ingresa un E-mail!',
                            }],
                        })(
                            <Input placeholder={"correo@gmail.com"}/>
                        )}
                    </FormItem>

                    <FormItem
                        label="Teléfono"
                    >
                        {getFieldDecorator('phone_number', {
                            rules: [{
                                required: true, message: 'Completa el campo!',
                            }],
                        })(
                            <Input minLength={"10"} maxLength={"10"}  placeholder={"Teléfono a 10 dígitos"}/>
                        )}
                    </FormItem>
                </Form>

                <FormItem>
                    <Button type="primary" onClick={onCreate} size="large" className={"buttonGuardar"}>
                        Guardar
                    </Button>
                </FormItem>
            </Modal>
        );
    }
);

export default NewProveedor;