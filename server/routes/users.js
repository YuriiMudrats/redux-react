import express from 'express'
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'
let router = express.Router()
import validateInput from '../shared/validations/signup'
import mongoose from 'mongoose'
import schemaUsers from '../models'

router.post('/', (req, res)=>{
   var Users=mongoose.model('Users', schemaUsers)     
   const {errors, isValid}=validateInput(req.body)
   if(isValid) {
       
       res.json({isSuccess: true})
   }  
     else { 
       res.json({errors})
   }
}
)

export default router