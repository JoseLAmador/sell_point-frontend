import React, {Component} from 'react';
import LogIn from "./Login";
import {Link} from 'react-router-dom';


class LoginDisplay extends Component{
    state={
        userData:{}
    };

    handleText=(e)=>{
        let userData = this.state.userData;
        let field = e.target.name;
        userData[field]=e.target.value;
        this.setState({userData})
    };

    logIn=(data)=>{
        console.log(data);
    };

    render(){
        let {userData} = this.state;
        return(
            <div className={"logIn"}>
                <div className={"tileStyle"}>
                    <img src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/shop-icon.png" alt="logo" className={"logoPrincipal"}/>
                    <span className={"welcome"}>Bienvenido</span>

                </div>

                <div>
                    <LogIn
                        data={userData}
                        logIn={this.logIn}
                        handleText={this.handleText}
                    />
                    <span>
                        No tienes cuenta?, <Link to={"/registro"}><strong className={"linkColor"}>REGISTRATE</strong></Link>
                    </span>
                </div>

            </div>
        );
    }
}

export default LoginDisplay;
