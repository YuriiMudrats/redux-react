import axios from "axios";

export default  function SignupRequst(userData){
    return dispatch=>{
      return axios.post('api/users', userData)  
    }

}