import axios from "axios";
import {POST_SIGNUP_FORM, SET_DATA_TO_STORE, MERGE_PROPS, SHOW_ERRORS} from '../constan'

export function setData(payload){
    return {
      type: SET_DATA_TO_STORE,
      payload
  }
}

export function setForm(payload){
    return {
      type: POST_SIGNUP_FORM,
      payload
    }

}
export function changeState(){
  return {
    type: MERGE_PROPS   
  }
}
export function setError(payload){
  return {
    type: SHOW_ERRORS,
    payload
  }
}


export function setReq(){
  return (dispatch, setState, axios)=>{   
    const data=setState().user
      axios.post('/api/users/', data) 
      .then(data=>dispatch(setError(data.data.errors)))    
     dispatch(setForm())
   }
}
