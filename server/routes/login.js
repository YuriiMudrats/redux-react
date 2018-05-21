import express from 'express'
let router = express.Router()
import validLogIn from '../shared/validations/login'
import Users from '../index'
import bcrypt from 'bcrypt'
import saltRounds from '../config'
import hashToken from '../shared/jwt'



router.post('/log', (req, res)=>{    
 let {errors, isValid}=  validLogIn(req.body)

 if(isValid){
    const {email, password}=req.body;     
       
    Users.find({email: email}, (err, users)=>{
      if(err) res.json({isLogin: true, isAuth: false})        
   if(users.length>=1){
   let auth =  bcrypt.compare(password, users[0].hashedPassword,(err, res))
     if(err) console.log(err)
       if(res){
        const token=hashToken(users[0].email)
        console.log(token)
        res.json({isLogin: true, isAuth: true, jwToken: token})
       }
       else {
        res.json({isLogin: true, isAuth: false})
        
       };
      }
      else{
        res.json({isLogin: true, isAuth: false})
      }
      }) 
          
 } else {
   res.status(401).json({errors})
 }
})

export default router