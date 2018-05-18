import React,{Component} from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Alert from '../../components/Alert'
class LoginForm extends Component {
constructor(props){
    super(props)
        this.onSubmit=this.onSubmit.bind(this)
        this.onChange=this.onChange.bind(this);
        }
    onSubmit(e){
        e.preventDefault()
        this.props.setLogReq()
    }
    onChange(e){
         this.props.setData(e)
         }
       
    render(){
       const errors = this.props.errors.errorsLogin

       console.log(errors)
    return (
        <form onSubmit={this.onSubmit}>
            <h2>Login </h2>
            <Input
                inputName="email"
                type="text"
                id="usernamelf"
                eventInput={this.onChange}                
                label='Email'
            />
            {errors&&<Alert error={errors.email}/>}
            <Input
                inputName="password"
                type="password"
                id="passwordlf"                
                eventInput={this.onChange}                
                label='Password'
            />
            {errors&&<Alert error={errors.password}/>}
            <Button
                buttonName='Login'
            />   
        </form>      
    )
}
}

export default LoginForm