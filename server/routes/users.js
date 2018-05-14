import express from 'express'
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'
let router = express.Router()
import validateInput from '../shared/validations/signup'


router.post('/', (req, res)=>{
    
   const {errors, isValid}=validateInput(req.body)
   if(isValid) {
       res.json({success: true})
   }  
     else { 
       res.status(400).json(errors)
   }
}
)

export default router