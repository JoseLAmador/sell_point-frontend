import React, {Component} from 'react';
import Inicio from "./Inicio";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Pie from "./Pie";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

class Landing extends Component{
    render(){
        return(
            <div>
                <Inicio/>
                <main>
                    <SectionOne/>
                    <SectionTwo/>
                    <SectionThree/>
                    <SectionFour/>
                </main>
                <Pie/>
            </div>

        );
    }
}

export default Landing