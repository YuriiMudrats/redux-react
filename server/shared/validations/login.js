import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validLogIn(data){
    let errors={}
    if(!data.email){
        errors.email="This email is empty"
    }
    if(!data.password){
        errors.password="This password is empty"
    }
   return {
       errors,
       isValid: isEmpty(errors)
   }

}