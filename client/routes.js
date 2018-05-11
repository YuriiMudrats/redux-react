import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Greeting from './store/components/Greeting'
import LoginPage from './store/components/LoginPage'
import SignUpPage from './store/components/SignUp'


  

 const Main=()=>( 
     <Switch>
         <Route path="/" exact component={Greeting}/>
         <Route path="/login"  component={LoginPage}/>
         <Route path="/signup" component={SignUpPage} />
     </Switch>
    )  
 
export default Main

