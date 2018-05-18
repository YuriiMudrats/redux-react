import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.dev'
import config from './config'
import signup from './routes/users'
import login from './routes/login'
import mongoose from 'mongoose'
import schema from './models'
const port=3000
let app=express()
app.use(bodyParser.json())
let router=express.Router()


app.use(webpackMiddleware(webpack(webpackConfig)))
app.get('/*',(req, resp)=>{
    resp.sendFile(path.join(__dirname, './index.html'))
})
mongoose.connect(config.database, {autoIndex: false}, function(err){
    if(err) {
        console.log('Some problem with the connection ' +err);
    } else {
        console.log('The Mongoose connection is ready');
    }
})
var Users = mongoose.model("User",  schema )
app.use('/api/users', signup)
app.use('/api/users', login)


app.listen(port, ()=> {
    console.log(`Server started port: ${config.port}`)
})

export default Users