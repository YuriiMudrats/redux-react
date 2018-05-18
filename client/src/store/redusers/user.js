import {SET_DATA_TO_STORE} from '../constan'

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
                
         default:  
            return state
     }       
 }