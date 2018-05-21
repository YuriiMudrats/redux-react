import {Route, Redirect} from 'react-router-dom'
import {connect} from 'redux'
import React from 'react' 

const PrivateRoute=({component: Component, ...rest},)=>{
    <Route {...rest} render={
        props=>{
            true ? (
            <Component {...props}/>) :
            (<Redirect to={
                pathname='/login'
            }/>)

        }
    }/>
}
// function mapStateToProps(state){
//     return {

//     }
// }

export default PrivateRoute