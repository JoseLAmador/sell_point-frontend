import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginDisplay from './components/login/LoginDisplay';
import RegistroDisplay from "./components/login/RegistroDisplay";
import Admin from "./components/admin/Admin";
import Landing from "./components/landing/Landing";
import LandingProducts from "./components/landingProducts/Principal";
import SectionProducts from "./components/landingProducts/SectionsProducts/SectionProducts";
import Carrito from "./components/landingProducts/Carrito";


export const Routes=()=>(
    <Switch>
        <Route path={'/login'} component={LoginDisplay}/>
        <Route path={'/registro'} component={RegistroDisplay}/>

        <Route path={'/productos'} component={SectionProducts} />
        <Route path={'/carrito'} component={Carrito} />
        <Route path={'/shop'} component={Admin} />

        <Route path={"/landing"} component={LandingProducts} />

        <Route path={"/"} component={Landing} />



    </Switch>
);
