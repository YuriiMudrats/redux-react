import {SHOW_ERRORS_SIGNUP,SHOW_ERRORS_LOGIN,IS_LOGIN } from '../constan'

const initialState={
        isLoading:false,
        isAuth: false,        
        errorsSignUp: null,
        errorsLogin: null
       }
 

 
 export default function pageState(state=initialState, {type, payload}){
       switch(type) {
            case SHOW_ERRORS_SIGNUP:             
                 return { ...state, errorsSignUp : payload }
            case SHOW_ERRORS_LOGIN:             
                 return Object.assign({}, state, {errorsLogin : payload})     
            case IS_LOGIN :
                 return Object.assign({},state,{isAuth: payload.data.isAuth
                 } )
            default: 
                return state
       }
}