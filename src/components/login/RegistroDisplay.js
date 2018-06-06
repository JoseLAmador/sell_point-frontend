import React, {Component} from 'react';
import RegistroForm from "./Registro";
import {Link} from 'react-router-dom';


class RegistroDisplay extends Component{
    state={
        registroData:{}
    };

    handleText=(e)=>{
        let registroData = this.state.registroData;
        let field = e.target.name;
        registroData[field]=e.target.value;
        this.setState({registroData})
    };

    registroIn=(data)=>{
        console.log(data);
    };

    render(){
        let {registroData} = this.state;
        return(
            <div className={"logIn"}>
                <div className={"header"}>
                    <img src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/shop-icon.png" alt="logo" className={"logoPrincipal"}/>
                    <span className={"welcome"}>Registro</span>

                </div>

                <div>
                    <RegistroForm
                        data={registroData}
                        registroIn={this.registroIn}
                        handleText={this.handleText}
                    />
                    <span>
                        Ya tienes cuenta?, <Link to={"/login"}><strong className={"linkColor"}>INICIA SESION</strong></Link>
                    </span>
                </div>

            </div>
        );
    }
}

export default RegistroDisplay;