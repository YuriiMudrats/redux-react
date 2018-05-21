import express from 'express'
let router = express.Router()
import validateInput from '../shared/validations/signup'
import Users from '../index'
import bcrypt from 'bcrypt'
import saltRounds from '../config'
import validLogIn from '../shared/validations/login'
import jwt from 'jsonwebtoken'

router.post('/', async(req, res)=>{  
     
   const {errors, isValid}=validateInput(req.body)
   if(isValid) {
    const {username, password, email}=req.body
    const hash= await bcrypt.hash(password, 10)      
    let user =new Users({username: username,
                         email: email, 
                         hashedPassword: hash})
      user.save()                    
               
      res.json({isSign: true})
       
          }  
     else { 
       res.json({errors})
   }
});


export default router