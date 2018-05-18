import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'
import time from '../../data/timezone'
import PropTypes from 'prop-types' 
import {Redirect} from 'react-router-dom'
import validateInput from '../../../../server/shared/validations/signup'
import Input from '../../components/Input'
import Button from '../../components/Button'
import SelectField from '../../components/Select'
import Alert from '../../components/Alert'



class SingupForm extends Component {
        constructor(props){
            super(props)             
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        
       }
    
    onSubmit(e){
        e.preventDefault()                       
        this.props.setReq()
                
    }

    onChange(e){
         this.props.setData(e)
    }

        render(){  
            const {errors}=this.props                          
              console.log(errors)
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
                {errors&&<Alert error={errors.username}/>}
                <Input
                    inputName="email"
                    type="email"
                    id="emailsf"                
                    eventInput={this.onChange}                                   
                    label='Email'
                 /> 
                 {errors&&<Alert error={errors.email}/>}
                <Input
                    inputName="password"
                    type="password"
                    id="passwordsf"                
                    eventInput={this.onChange}                                   
                    label='Password'                    
                />
                {errors&&<Alert error={errors.password}/>}
                <Input
                    inputName="passwordConfirm"
                    type="password"
                    id="passwordConfirmsf"                
                    eventInput={this.onChange}                
                    label='PasswordConfirming'
                />
                {errors&&<Alert error={errors.passwordConfirm}/>}
                 <SelectField
                    value={this.props.timezone}
                    selectName='timezone'
                    timezone={time}                
                    selectEvent={this.onChange}                    
                    /> 
                {errors&&<Alert error={errors.timezone}/>}
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