import {SET_DATA_TO_STORE, MERGE_PROPS} from '../constan'

const initialState={
         username: '',
         password: '',
         email: '',
         passwordConfirm: '',
         timezone: ''
         }
 
 export default function userState(state=initialState, {type, payload}){
     switch(type){
         case SET_DATA_TO_STORE : 
            return Object.assign( state, {
                [payload.target.name] : payload.target.value
         })
           case MERGE_PROPS : 
           return Object.assign({},{username, password, email, timezone})       
         default:  
            return state
     }       
 }