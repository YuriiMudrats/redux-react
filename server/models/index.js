import mongoose from 'mongoose'
import crypto from 'crypto-js'
import beautifyUnique from 'mongoose-beautiful-unique-validation'

mongoose.Promise = Promise 

const schema=  mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true       
               },
     email: {
         type: String,
         unique: true,
         lowercase: true
            },
     
     hashedPassword: {
         type: String
         
     }
})

schema.plugin(beautifyUnique)
 
export default schema