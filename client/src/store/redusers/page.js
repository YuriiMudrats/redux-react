import {SHOW_ERRORS_SIGNUP,SHOW_ERRORS_LOGIN,PUSH_TO_PROTECT_PAGE, } from '../constan'

const initialState={
        isLoading:false,
        isLogin: false,
        redirect: false,
        errorsSignUp: null,
        errorsLogin: null
       }
 

 
 export default function pageState(state=initialState, {type, payload}){
       switch(type) {
            case SHOW_ERRORS_SIGNUP:             
                 return Object.assign({}, state, {errorsSignUp : payload})
            case SHOW_ERRORS_LOGIN:             
                 return Object.assign({}, state, {errorsLogin : payload})     
            case PUSH_TO_PROTECT_PAGE :
                 return Object.assign({},state,{isLogin: true} )
            default: 
                return state
       }
}