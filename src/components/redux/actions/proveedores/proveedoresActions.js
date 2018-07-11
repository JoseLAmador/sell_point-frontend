import api from '../../../django/Django';


export const GET_PROVEEDORES_SUCCESS = 'GET_PROVEEDORES_SUCCESS';

export function getProveedoresSuccess(proveedores){
    return{
        type:GET_PROVEEDORES_SUCCESS, proveedores
    }
}

export const GET_PROVEEDORES_DATA_SUCCESS = 'GET_PROVEEDORES_DATA_SUCCESS';

export function getAllProveedoresSuccess(dataProveedor){
    return{
        type:GET_PROVEEDORES_DATA_SUCCESS, dataProveedor
    }
}

export const getProveedores=(url)=>(dispatch, getState)=>{
    return api.getProveedores(url)
        .then(r=>{
            dispatch(getProveedoresSuccess(r.results));
            dispatch(getAllProveedoresSuccess(r));
        }).catch(e=>{
            throw e
        })
};


/*FORM PROVEEDOR SAVE*/

export const SAVE_PROVEEDOR_SUCCESS = 'SAVE_PROVEEDOR_SUCCESS';

export function saveProveedorSuccess(proveedor){
    return{
        type:SAVE_PROVEEDOR_SUCCESS, proveedor
    }
}

export const saveProveedor=(proveedor)=>(dispatch, getState)=>{
    return api.newProveedor(proveedor)
        .then(r=>{
            dispatch(saveProveedorSuccess(r));
            dispatch(getProveedores());
        }).catch(e=>{
            throw e
        })
};

/*DELETE PROVEEDOR*/

export const DELETE_PROVEEDOR_SUCCESS = 'DELETE_PROVEEDOR_SUCCESS';

export function deleteProveedorSuccess(proveedorId){
    return {
        type:DELETE_PROVEEDOR_SUCCESS, proveedorId
    }
}

export const deleteProveedor=(proveedorId)=>(dispatch, getState)=>{
    return api.deleteProveedor(proveedorId)
        .then(r=>{
            dispatch(deleteProveedorSuccess(proveedorId));
            dispatch(getProveedores());
        }).catch(e=>{
            throw e
        })
};