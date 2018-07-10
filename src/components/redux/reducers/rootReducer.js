import {combineReducers} from 'redux';
import userReducer from "./user/userReducer";
import clientesReducer from "./clientes/clientesReducer";
import proveedoresReducer from "./proveedores/proveedoresReducer";

const rootReducer = combineReducers({
    user:userReducer,
    clientes:clientesReducer,
    proveedores: proveedoresReducer,
});

export default rootReducer;