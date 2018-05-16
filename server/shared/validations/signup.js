import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'


export default function validateInput(data){

    let errors={}

    if(!data.username){
        errors.username="This username is empty"
    }
    if(!data.email){
        errors.email="This email is empty"
    }
         
    if(!data.password){
        errors.password="This password is empty"
    }
    
    if(!data.passwordConfirm){
        errors.passwordConfirm="This passwordConfirm is empty"
    }
    if(data.passwordConfirm&&data.passwordConfirm){
    if(!Validator.equals(data.password,data.passwordConfirm)){
        errors.passwordConfirm='Password must match'
    }}

    if(!data.timezone){
        errors.timezone="This timezone is empty"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}