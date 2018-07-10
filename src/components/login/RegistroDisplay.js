import React, {Component} from 'react';
import RegistroForm from "./Registro";
import {Link} from 'react-router-dom';
import logo from '../../imgs/cashier.png';


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
                <div className={"tileStyle"}>
                    <img src={logo} alt="logo" className={"logoPrincipal"}/>
                    <span className={"welcome"}>Registro</span>

                </div>

                <div>
                    <RegistroForm
                        data={registroData}
                        registroIn={this.registroIn}
                        handleText={this.handleText}
                    />
                    <span>
                        Ya tienes cuenta?, <Link to={"/login"}><strong style={{color:'black'}}>INICIA SESION</strong></Link>
                    </span>
                </div>

            </div>
        );
    }
}

export default RegistroDisplay;