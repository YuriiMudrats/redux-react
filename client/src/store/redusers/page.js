import {SHOW_ERRORS} from '../constan'

const initialState={
        isLoading:false,
        redirect: false,
        errors: null        
       }
 

 
 export default function pageState(state=initialState, {type, payload}){
       switch(type) {
            case SHOW_ERRORS: 
                 return Object.assign({}, state, {errors : payload})
            default: 
                return state
       }
}