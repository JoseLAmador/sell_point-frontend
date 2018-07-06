import {combineReducers} from 'redux';
import userReducer from "./user/userReducer";
import clientesReducer from "./clientes/clientesReducer";

const rootReducer = combineReducers({
    user:userReducer,
    clientes:clientesReducer,
});

export default rootReducer;