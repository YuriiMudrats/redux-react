import axios from "axios";
import {POST_SIGNUP_FORM,
        SET_DATA_TO_STORE,
        SHOW_ERRORS_SIGNUP,
        SHOW_ERRORS_LOGIN,
        PUSH_TO_PROTECT_PAGE,
        IS_LOGIN,
        GO_AWAY,
        REDIRECT,
        INITIALIZE,
        CLEAR_STORE} from '../constan'
import {push} from 'react-router-redux'

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
export function isSuccessRes(){
  return {
    type: PUSH_TO_PROTECT_PAGE     
  }
}
export function isLogin(payload){
  return {
    type: IS_LOGIN,
    payload
  }
}
export function exit(){
  return {
    type: GO_AWAY
  }
}
export function redirect(payload){
  return {
    type: REDIRECT,
    payload
  }
}
export function initialize(){
  return {
    type: INITIALIZE
  }
}
export function clearStore(){
  return {
    type: CLEAR_STORE
  }
}






export function setReq(){
  return (dispatch, setState, axios)=>{   
    const data=setState().user
      axios.post('/api/users/', data) 
      .then(data=>{
        const serialValue=JSON.stringify(data.data.jwToken)
        localStorage.setItem('jwToken', serialValue)
        dispatch(isLogin(data))
        dispatch(push('/protected'))},
        error=>{if(error.response.status===401)
          
          dispatch(setErrorSignUp(error.response.data.errors))})
         
      dispatch(setForm())            
   }
}

export function setLogReq(){
  return (dispatch, setState, axios)=>{      
    const data=setState().user    
      axios.post('/api/users/log', data) 
      .then(
        data=>{
          const serialValue=JSON.stringify(data.data.jwToken)
          localStorage.setItem('jwToken', serialValue)
          dispatch(isLogin(data))
          dispatch(push('/protected'))
        },
        error=>{
          if(error.response.data.errors){
            dispatch(setErrorLogin(error.response.data.errors))
          }
          
          if(error.response.data.isReg){
           dispatch(push('/signup'))
        }
      }
      ) 
                
      dispatch(setForm())  
      dispatch(clearStore())          
   }
}
export function GoAway(){
  return (dispatch, setState)=>{
    localStorage.removeItem("jwToken")
   dispatch(exit())
  }
}

export function setProps(){
  return(dispatch, setState)=>{
    if(localStorage.getItem("jwToken")){
      var token = JSON.parse(localStorage.getItem("jwToken"))
      var decoded = jwt.verify(token, config.secret)    
      dispatch(redirect())
      decoded ? dispatch(push('/protected')) : dispatch(push('/'))
    }
  }
}
