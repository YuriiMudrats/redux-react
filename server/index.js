import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.dev'
import config from './config'
import users from './routes/users'
import mongoose from 'mongoose'
const port=3000
let app=express()
app.use(bodyParser.json())
let router=express.Router()

console.log(users)

app.use(webpackMiddleware(webpack(webpackConfig)))
app.get('/*',(req, resp)=>{
    resp.sendFile(path.join(__dirname, './index.html'))
})
mongoose.connect(config.database, ()=>{
    console.log('db conncted')
})
app.use('/api/users', users)


app.listen(port, ()=> {
    console.log(`Server started port: ${config.port}`)
})