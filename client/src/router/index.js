import React,{Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SingUpPage from '../pages/SingUpPage'
import Protected from '../pages/ProptectPage'
import {withRouter} from 'react-router'
import PrivateRoute from './route'
import config from '../../../server/config'
import jwt from 'jsonwebtoken'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import {setProps} from '../store/actions'

class Main extends Component{ 
    constructor(props){
      super(props)
    }
    componentDidMount(){
              // this.props.setProps()          
        }

    render(){
      return(
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={SingUpPage}/>
        <Route path='/protected' component={Protected}/>
      </Switch> 

      )}
}  
const mapStateToDispatch={
  setProps
}  
export default  Main

