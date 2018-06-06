import React, {Component} from 'react';
import Inicio from "./Inicio";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

class Landing extends Component{
    render(){
        return(
            <div>
                <Inicio/>
                <main>
                    <SectionOne/>
                    <SectionTwo/>

                </main>
            </div>

        );
    }
}

export default Landing