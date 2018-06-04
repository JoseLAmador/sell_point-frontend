import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Tienda from "../tienda/Tienda";

const Sections = ()=>{
    return(
      <div>
          <Switch>
              <Route path={"/shop/tienda"} component={Tienda} />
          </Switch>
      </div>
    );

};

export default Sections;