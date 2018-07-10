import {combineReducers} from 'redux';
import {GET_PROVEEDORES_SUCCESS, SAVE_PROVEEDOR_SUCCESS, GET_PROVEEDORES_DATA_SUCCESS, DELETE_PROVEEDOR_SUCCESS} from "../../actions/proveedores/proveedoresActions";


function list(state=[], action){
    switch(action.type){
        case GET_PROVEEDORES_SUCCESS:
            return action.proveedores;
        case SAVE_PROVEEDOR_SUCCESS:
            return [action.proveedor, ...state ];
        case DELETE_PROVEEDOR_SUCCESS:
            return state.filter(a=>a.id!==action.proveedorId);

        default:
            return state;
    }
}


function allData(state={}, action) {
    switch (action.type){
        case GET_PROVEEDORES_DATA_SUCCESS:
            return action.dataProveedor;
        default:
            return state;
    }
}


const proveedoresReducer = combineReducers({
    list:list,
    allData:allData,
});


export default proveedoresReducer;