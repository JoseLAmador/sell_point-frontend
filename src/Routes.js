import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginDisplay from './components/login/LoginDisplay';
import RegistroDisplay from "./components/login/RegistroDisplay";
import Admin from "./components/admin/Admin";
import Landing from "./components/landing/Landing";
import LandingProducts from "./components/landingProducts/Principal";


export const Routes=()=>(
    <Switch>
        <Route path={'/login'} component={LoginDisplay}/>
        <Route path={'/registro'} component={RegistroDisplay}/>

        <Route path={'/shop'} component={Admin} />

        <Route path={"/landing"} component={LandingProducts} />

        <Route path={"/"} component={Landing} />



    </Switch>
);
