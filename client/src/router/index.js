import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SingUpPage from '../pages/SingUpPage'
import Protected from '../pages/ProptectPage'
import {withRouter} from 'react-router'
import PrivateRoute from './route'
  

 const Main=()=>( 
     <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={SingUpPage}/>
        {/* <PrivateRoute path="/protected" component={Protected}/> */}
      </Switch>
    )  
 
export default withRouter(Main)

