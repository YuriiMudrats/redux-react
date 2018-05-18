import express from 'express'
let router = express.Router()
import validLogIn from '../shared/validations/login'
import Users from '../index'
import bcrypt from 'bcrypt'
import saltRounds from '../config'




router.post('/log', (req, res)=>{
    console.log(req.body)
 let {errors, isValid}=validLogIn(req.body)
 if(isValid){
    const {email, password}=req.body     
    const hash=  bcrypt.hash(password, 10)

    Users.find((err, email)=>{
      if(err)console.log(err)
      console.log(email)
      res.json({isLogin: true})
    })
 } else {
   res.json({errors})
 }
})

export default router