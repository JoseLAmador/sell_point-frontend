import React, {Component} from 'react';
import SectionDos from "./SectionDos";
import SectionUno from "./SectionUno";
import SectionTres from "./SectionTres";
import SectionFinal from "./SectionFinal";

class Principal extends Component{
    render(){
        return(
            <div>
                <SectionUno />
                <main>
                    <SectionDos />
                    <SectionTres />
                </main>
                <SectionFinal />
            </div>
        );
    }
}

export default Principal;