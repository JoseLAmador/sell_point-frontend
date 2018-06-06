import React, {Component} from 'react';
import {Form, Icon, Input, Button} from 'antd';

const FormItem = Form.Item;

class Login extends Component{

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err)=>{
            if(!err){
                this.props.logIn(this.props.data)
            }
        })
    };

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
                        rules:[{required:true, message:'Ingresa tu contraseña'}]
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
                    <Button
                        type={"primary"}
                        htmlType={"submit"}
                        className={"login-form-button "}
                        size="large"
                        style={{borderColor:'white', backgroundColor:'#a52915'}}
                    >
                        LogIn
                    </Button>
                </FormItem>

            </Form>
        );
    }
}

const LogIn =Form.create()(Login);
export default LogIn;