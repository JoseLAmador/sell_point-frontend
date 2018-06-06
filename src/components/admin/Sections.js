import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Tienda from "../tienda/Tienda";
import Gastos from "../tienda/gastos/Gastos";
import Inventario from "../tienda/inventario/Inventario";
import Compras from "../tienda/compras/Compras";
import Ventas from "../tienda/ventas/Ventas";
import Bancos from "../tienda/bancos/Bancos";
import Reportes from "../tienda/reportes/Reportes";
import Proveedores from "../tienda/proveedores/Proveedores";
import Clientes from "../tienda/clientes/Clientes";

const Sections = ()=>{
    return(
      <div>
          <Switch>
              <Route path={"/shop/tienda"} component={Tienda} />

              <Route path={"/shop/gastos"} component={Gastos} />
              <Route path={"/shop/inventario"} component={Inventario} />
              <Route path={"/shop/compras"} component={Compras} />
              <Route path={"/shop/ventas"} component={Ventas} />
              <Route path={"/shop/bancos"} component={Bancos} />
              <Route path={"/shop/reportes"} component={Reportes} />
              <Route path={"/shop/proveedores"} component={Proveedores} />
              <Route path={"/shop/clientes"} component={Clientes} />
          </Switch>
      </div>
    );

};

export default Sections;