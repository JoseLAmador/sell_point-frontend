import React, {Component} from 'react';
import {Form, Icon, Input, Button} from 'antd';

const FormItem = Form.Item;

class Registro extends Component{
    state={
        confirmDirty:false,
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err)=>{
            if(!err){
                this.props.registroIn(this.props.data)
            }
        })
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Las contraseñas no coinciden!');
        } else {
            callback();
        }
    }

    render(){
        const {getFieldDecorator} = this.props.form;
        const {handleText} = this.props;

        return(
            <Form onSubmit={this.handleSubmit} className={"login-form"}>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Ingresa un correo electronico valido!', type:'email' }],
                    })(
                        <Input
                            name={"email"}
                            onChange={handleText}
                            prefix={<Icon type={"user"} style={{color:'rgba(0,0,0,.25)'}} />}
                            placeholder={"E-mail"}
                            size={"large"}
                        />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('password', {
                        rules:[{required:true, message:'Ingresa tu contraseña'},
                            {validator:this.validateToNextPassword}]
                    })(
                        <Input
                            name={'password'}
                            onChange={handleText}
                            prefix={<Icon type={"lock"} style={{color:'rgba(0,0,0,.25)'}} />}
                            type={"password"}
                            placeholder={"Password"}
                            size={"large"}
                        />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('password_confirm', {
                        rules:[{required:true, message:'Tu contraseña no coincide, verifica'},
                            {validator:this.compareToFirstPassword}]
                    })(
                        <Input
                            name={'password_confirm'}
                            onChange={handleText}
                            prefix={<Icon type={"lock"} style={{color:'rgba(0,0,0,.25)'}} />}
                            type={"password"}
                            placeholder={"Confirma tu contraseña"}
                            size={"large"}
                            //onBlur={this.handleConfirmBlur}
                        />
                    )}
                </FormItem>

                <FormItem>
                    <Button
                        type={"primary"}
                        htmlType={"submit"}
                        className={"login-form-button "}
                        size="large"
                        style={{borderColor:'#B9563F', backgroundColor:'#B9563F'}}
                    >
                        Registrate
                    </Button>
                </FormItem>

            </Form>
        );
    }
}

const RegistroForm =Form.create()(Registro);
export default RegistroForm;