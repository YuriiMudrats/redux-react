import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SingUpPage from '../pages/SingUpPage'
import ProtectingPage from '../pages/ProptectPage'


  

 const Main=()=>( 
     <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={SingUpPage}/>
        <Route path='/protectpage' component={ProtectingPage}/>
      </Switch>
    )  
 
export default Main

