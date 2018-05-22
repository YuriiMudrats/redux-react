import {SHOW_ERRORS_SIGNUP,
      SHOW_ERRORS_LOGIN,
      IS_LOGIN,
       GO_AWAY,
       REDIRECT,
       INITIALIZE
      } from '../constan'

const initialState={
        isLoading:false,
        isAuth: false,        
        errorsSignUp: null,
        errorsLogin: null,
        initialaze: false
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
            case GO_AWAY : 
                 return Object.assign({},state,{isAuth: false})  
            case INITIALIZE: 
                 return Object.assign({},state, {initialaze: true}) 
            case REDIRECT: 
                  return Object.assign({},state, {isAuth: true} )  
                       
            default: 
                return state
       }
}