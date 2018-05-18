import React,{Component} from 'react'
import SingupForm from './SingupForm'
import {connect} from 'react-redux'
import {setData, setReq} from '../../store/actions/'
import PropTypes from 'prop-types'

class SingUp extends Component {

    render(){
        const {page, setData, setReq}=this.props
        
    return (
        <div className='row'>
           <div className='col-md-4 col-md-offset-4'>
           <SingupForm errors={page} setData={setData} setReq={setReq}/>
            </div> 
         </div>
    )
}
}
SingupForm.propTypes={
    setReq: PropTypes.func.isRequired,
    setData: PropTypes.func.isRequired
}

const mapStateToDispatch = {
        setData,
        setReq
}
function mapStateToProps(state){
   return {
    page : state.page.errorsSignUp
    }
   
} 




export default connect(mapStateToProps , mapStateToDispatch)(SingUp)