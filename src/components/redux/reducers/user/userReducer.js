import {combineReducers} from 'redux';
import {GET_USER_SUCCESS, LOG_OUT_SUCCESS} from "../../actions/users/userActions";



function object(state={}, action){
    switch(action.type){
        case GET_USER_SUCCESS:
            return action.user;
        case LOG_OUT_SUCCESS:
            return state;
        default:
            return state;
    }
}


/*
function list(state=[], action){
    switch(action.type){
        case GET_USERS_SUCCESS:
            return action.users;
        case NEW_USER_SUCCESS:
            return [action.user, ...state];
        case SAVE_USER_PROFILE:
            let user = state.find(u=>{
                return u.id===action.profile.user
            });
            let uList = state.filter(u=>{
                return u.id!==action.profile.user;
            });
            user['profile'] = action.profile;
            return [user, ...uList];
        case DELETE_USER_SUCCESS:
            let list = state.filter(u=>{
                return u.id!==action.user;
            });
            return list;
        case EDIT_USER_SUCCESS:
            user = state.find(u=>{
                return u.id===action.user.id
            });
            uList = state.filter(u=>{
                return u.id!==action.user.id;
            });

            return [action.user, ...uList];
        default:
            return state;
    }
}
*/

const userReducer = combineReducers({
    object:object,
    //list:list
});

export default userReducer

