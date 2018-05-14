import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'
import time from '../../data/timezone'
import PropTypes from 'prop-types' 
import {Redirect} from 'react-router-dom'
import validateInput from '../../../../server/shared/validations/signup'
import Input from '../../components/Input'
import Button from '../../components/Button'
import SelectField from '../../components/Select'



class SingupForm extends Component {
        constructor(props){
            super(props)
    
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
   
    // отредактировать валицию на клиентк работатет не правильно
    // isValid(){
    //     const { errors, isValid}=validateInput(this.state)
    //     console.log(errors)
    //     if(!isValid){
    //         this.setState({errors :errors})
    //      }
    //     }

    onSubmit(e){
        // const { history } = this.props 
        console.log(this.props.setReq)
        e.preventDefault()               
        this.props.setReq()
        // .then((data)=>{
        //     this.setState({redirect: true})
        //     }).then( () => {
        //         history.push('/')
        //     }).catch( err => {
        //        const error = err.response.data
        //        this.setState({errors: error, isLoading:false})
        //     })
        
    }

    onChange(e){
         this.props.setData(e)
         }
        render(){                       
  
         return (
            <form onSubmit={this.onSubmit}>
                <h2>SignUpForm</h2>
                <Input
                    inputName="username"
                    type="text"
                    id="usernamesf"
                    eventInput={this.onChange}                
                    label='Username'
                /> 
                <Input
                    inputName="email"
                    type="email"
                    id="emailsf"                
                    eventInput={this.onChange}                
                    label='Email'
                /> 
            <Input
                    inputName="password"
                    type="password"
                    id="passwordsf"                
                    eventInput={this.onChange}                
                    label='Password'
                />
            <Input
                    inputName="passwordConfirm"
                    type="password"
                    id="passwordConfirmsf"                
                    eventInput={this.onChange}                
                    label='PasswordConfirming'
                />
            <SelectField
                    value={this.props.timezone}
                    selectName='timezone'
                    timezone={time}                
                    selectEvent={this.onChange}
            /> 
            {/* отредактировать валидацию   добавтить disable со значение из this*/}
                <Button 
                    buttonName='Sing Up'
                /> 
            </form>      
    )
}
}

SingupForm.propTypes={
    setData: PropTypes.func.isRequired,
    setReq: PropTypes.func.isRequired
}

SingupForm.contextTypes = {
    router: PropTypes.object
  };


export default withRouter(SingupForm)