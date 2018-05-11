import React,{Component} from 'react'
import Input from './Input'

class LoginForm extends Component {
constructor(props){
    super(props)
    this.state={
        username: null,
        email: null           
     }
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
        { }=this.props
    return (
        <form onSubmit={this.onSubmit}>
            <h2>Login </h2>
            <Input
             name="usernane"
             type="username"
             id="input"
            />
            <div className='form-group'>
           <label className='controle-label'>Password</label>
           <input
           name='password'
           type='password'
           value={this.state.password}
           className='form-control'
           onChange={this.onChange}/>
           </div>
             <div className='form-group'>
         <button className='btn btn-primary btn-lg'>Login</button>
         </div>   
        </form>      
    )
}
}

export default LoginForm