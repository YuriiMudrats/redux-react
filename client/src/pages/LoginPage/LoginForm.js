import React,{Component} from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

class LoginForm extends Component {
constructor(props){
    super(props)
        this.onSubmit=this.onSubmit.bind(this)
        this.onChange=this.onChange.bind(this);
        }
    onSubmit(e){
        e.preventDefault()
        console.log(this.state)
    }
    onChange(e){
         this.setState({[e.target.name]: e.target.value })
         }
       
    render(){
       const {email, errors, password} = this.props
    return (
        <form onSubmit={this.onSubmit}>
            <h2>Login </h2>
            <Input
                inputName="usernane"
                type="text"
                id="usernamelf"
                value={email}
                eventInput={this.onChange}
                error={errors}
                label='Email'
            />
            <Input
                inputName="password"
                type="password"
                id="passwordlf"
                value={password}
                eventInput={this.onChange}
                error={errors}
                label='Password'
            />
            <Button
                buttonName='Login'
            />   
        </form>      
    )
}
}

export default LoginForm