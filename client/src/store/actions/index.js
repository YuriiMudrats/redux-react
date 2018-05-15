import axios from "axios";
import {POST_SIGNUP_FORM, SET_DATA_TO_STORE} from '../constan'

// export default  (userData){
//     return dispatch=>{
//       return axios.post('/api/users', userData)
//       .then()  
//     }

// }

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
export function setReq(){
  return (dispatch, setState, axios)=>{
    const data=setState().user
      axios.post('/api/users/', data)
     .then(data=>console.log(data))
     dispatch(setForm())
   }
}
