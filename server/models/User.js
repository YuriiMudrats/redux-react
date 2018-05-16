import mongoose from 'mongoose'
import crypto from 'crypto-js'
import beautifyUnique from 'mongoose-beautiful-unique-validation'

mongoose.Promise = Promise 
const Schema= mongoose.Schema
const schemaUsers= new Schema({
    username: {
        type: String,
        unique: 'The username "{VALUE}" is already taken',
        required: true
    },
     email: {
         type: String,
         unique: 'The email "{VALUE}" is already taken',
         required: true
     },
     timezone: {
         type: String,
         required: true
     },

     hashedPassword: {
         type: String,
         required: true
     },
     salt: {
         type: String,
         required: true
     },
     created: {
         type: Date,
         default: Date.now
     }
})

schemaUsers.plugin(beautifyUnique)

export default schemaUsers