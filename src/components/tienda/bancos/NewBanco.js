import React from 'react';
import {Form, Modal, Input, Button} from 'antd';

const FormItem = Form.Item;

const NewBanco = Form.create()(
    (props)=>{
        const {visible, onCancel, onCreate, form} = props;

        const {getFieldDecorator} = form;

        return(
            <Modal
                visible={visible}
                title={"Nuevo Banco"}
                onCancel={onCancel}
                onCreate={onCreate}
                width={'30%'}
                maskClosable={true}
                footer={[
                    null,
                    null,
                ]}
            >
                <Form>
                    <FormItem
                        label="Banco"
                    >
                        {getFieldDecorator('banco', {
                            rules: [{
                                required: true, message: 'Completa el campo!',
                            }],
                        })(
                            <Input placeholder={"Nombre del banco"} />
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

export default NewBanco;

