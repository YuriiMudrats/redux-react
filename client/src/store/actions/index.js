import axios from "axios";
import {POST_SIGNUP_FORM,
        SET_DATA_TO_STORE,
        SHOW_ERRORS_SIGNUP,
        SHOW_ERRORS_LOGIN,
        PUSH_TO_PROTECT_PAGE} from '../constan'


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
export function setErrorSignUp(payload){
  return {
    type: SHOW_ERRORS_SIGNUP,
    payload
  }
}
export function setErrorLogin(payload){
  return {
    type: SHOW_ERRORS_LOGIN,
    payload
  }
}
export function isSuccessRes(payload){
  return {
    type: PUSH_TO_PROTECT_PAGE ,
    payload
  }
}





export function setReq(){
  return (dispatch, setState, axios)=>{   
    const data=setState().user
      axios.post('/api/users/', data) 
      .then(error=>dispatch(setErrorSignUp(error.data.errors)))
      // .then(())  redirect    
      dispatch(setForm())            
   }
}

export function setLogReq(){
  return (dispatch, setState, axios)=>{ 
     console.log('setLogReq')
    const data=setState().user
    console.log(data)
      axios.post('/api/users/log', data) 
      .then(error=>dispatch(setErrorLogin(error.data.errors)))
         
      dispatch(setForm())            
   }
}
