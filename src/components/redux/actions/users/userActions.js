import api from "../../../django/Django";





export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';

export function logInSuccess(user){
    return{
        type:LOG_IN_SUCCESS, user
    }
}


export const logIn=(data)=>(dispatch, getState)=>{
    return api.logIn(data)
        .then(r=>{
            localStorage.setItem('userToken', JSON.stringify(r.token));
            dispatch(checkIfUser());
        }).catch(e=>{
            throw e
        })
};

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export function getUserSuccess(user){
    return{
        type:GET_USER_SUCCESS, user
    }
}

export const getUser=()=>(dispatch, getState)=>{
    return api.getUser()
        .then(r=>{
            dispatch(getUserSuccess(r))
        }).catch(e=>{
            throw e
        })
};

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';

export function logOutSuccess(){
    return{
        type:LOG_OUT_SUCCESS
    }
}

export const logOut=()=>(dispatch)=>{
    localStorage.removeItem('userToken');
    dispatch(logOutSuccess())
};

export const checkIfUser=()=>(dispatch, getState)=>{

    const userToken = JSON.parse(localStorage.getItem('userToken'));
    if(userToken){
        //dispatch the functions
        dispatch(getUser());


    }
};
