import React, {Component}  from 'react';
import Main from './src/router'
import NavBar from './src/components/NavBar'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import config from '../server/config'
import jwt from 'jsonwebtoken'
import {Redirect} from 'react-router-dom'

class App extends Component{
    constructor(props){
      super(props)
    }
    
     render(){
      return(
       <div className='container'>
          <NavBar/>
          <Main/>
       </div>
  
  )
}
} ; 

export default App
