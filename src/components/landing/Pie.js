import React, {Component} from 'react';
import './landingStyle.css';

class Pie extends Component{
    render(){
        return(
            <footer className={"footer"}>
                <div>
                    <img src={require('../../imgs/geek_completo.7e1e87a7.png')} alt={"image_1"} width={'150px'}/>
                </div>
            </footer>
        );
    }
}

export default Pie;