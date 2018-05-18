import express from 'express'
let router = express.Router()
import validateInput from '../shared/validations/signup'
import Users from '../index'
import bcrypt from 'bcrypt'
import saltRounds from '../config'
import validLogIn from '../shared/validations/login'

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
}
)
router.get('/', (req, res)=>{
     console.log("req.body")
  const {errors, isValid}=validLogIn(req.body)
  if(isValid){
     const {email, password}=req.body 
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