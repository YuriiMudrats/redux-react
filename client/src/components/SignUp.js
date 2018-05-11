import React,{Component} from 'react'
import SingupForm from './SingupForm'
import {connect} from 'react-redux'
import SignupRequst from '../actions/SignupRequst'
import PropTypes from 'prop-types'

class SingUp extends Component {

    render(){
        const {SignupRequst}=this.props
    return (
        <div className='row'>
           <div className='col-md-4 col-md-offset-4'>
           <SingupForm SignupRequst={SignupRequst}/>
            </div> 
         </div>
    )
}
}
SingupForm.propTypes={
    SignupRequst: PropTypes.func.isRequired

}

export default connect((state)=>{return {}}, {SignupRequst})(SingUp)