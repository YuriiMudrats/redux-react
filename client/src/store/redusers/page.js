import {POST_SIGNUP_FORM} from '../constan'

const initialState={
        isLoading:false,
        redirect: false,
        errors: null        
       }
 

 
 export default function pageState(state=initialState, {type, payload}){
       switch(type) {
            case POST_SIGNUP_FORM: 
                 return Object.assign({}, {isSuccess : true})
            default: 
                return state
       }
}