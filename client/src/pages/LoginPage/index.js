import React,{Component} from 'react'
import LoginForm from './LoginForm'
import {connect} from 'react-redux'
import {setData, setLogReq} from '../../store/actions/'
class LoginPage extends Component {

    render(){
          const{page, setData, setLogReq}=this.props
    return (
        <div className='row'>
           <div className='col-md-4 col-md-offset-4'>
           <LoginForm errors={page} setData={setData} setLogReq={setLogReq}/>
            </div> 
         </div>   
    )
}
}
function mapStateToProps(state){
    return {
        page: state.page
    }
}
const mapStateToDispatch = {
    setData,
    setLogReq
}

export default connect(mapStateToProps, mapStateToDispatch)(LoginPage) 