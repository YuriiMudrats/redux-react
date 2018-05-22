import {Route, Redirect} from 'react-router-dom'
import {connect} from 'redux'
import React from 'react' 
import Protected from '../pages/ProptectPage'
const PrivateRoute=({component: Component, ...rest})=>{
    <Route {...rest} component={Protected}/>
        // props=>{
        //     // true ? (
        //     <Component {...props}/>
        //     // (<Redirect to={
        //     //     pathname='/login'
        //     // }/>)

        // }
    // }/>
}
// function mapStateToProps(state){
//     return {

//     }
// }

export default PrivateRoute