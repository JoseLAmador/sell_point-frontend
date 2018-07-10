import React, {Component} from 'react';
import LogIn from "./Login";
import {Link} from 'react-router-dom';

import * as userActions from '../redux/actions/users/userActions';
import {message} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from '../../imgs/cashier.png';


class LoginDisplay extends Component{
    state={
        data:{}
    };

    handleText=(e)=>{
        let data = this.state.data;
        let field = e.target.name;
        data[field]=e.target.value;
        this.setState({data})
    };

    logIn=(data)=>{

        this.props.userActions.logIn(data)
            .then(r=>{
                this.props.history.push('/shop/clientes');
                message.success(`Welcome ${data.username}`)
            }).catch(e=>{
            for (let i in e.response.data){
                message.error(e.response.data[i])
            }
        })
    };

    render(){
        let {data} = this.state;

        return(
            <div className={"logIn"}>
                <div className={"tileStyle"}>
                    <img src={logo} alt="logo" className={"logoPrincipal"}/>
                    <span className={"welcome"}>Bienvenido</span>

                </div>

                <div>
                    <LogIn
                        data={data}
                        logIn={this.logIn}
                        handleText={this.handleText}
                    />
                    <span>
                        No tienes cuenta?, <Link to={"/registro"}><strong style={{color:'black'}}>REGISTRATE</strong></Link>
                    </span>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return{
        userActions:bindActionCreators(userActions, dispatch)
    }
}

LoginDisplay = connect(mapStateToProps, mapDispatchToProps)(LoginDisplay);
export default LoginDisplay;
