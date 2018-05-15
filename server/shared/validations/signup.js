import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'


export default function validateInput(data){

    let errors={}

    if(data.username===null){
        errors.username="This username is empty"
    }
    if(data.email===null){
        errors.email="This email is empty"
    }
         
    if(data.password===null){
        errors.password="This password is empty"
    }
    if(data.passwordConfirm===null){
        errors.passwordConfirm="This passwordConfirm is empty"
    }
    if(!Validator.equals(data.password,data.passwordConfirm)){
        errors.passwordConfirm='Password must match'
    }
    if(data.timezone===null){
        errors.timezone="This timezone is empty"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}