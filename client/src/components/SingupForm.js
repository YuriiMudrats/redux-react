import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'
import timezone from '../data/timezone'
import PropTypes from 'prop-types' 
import {Redirect} from 'react-router-dom'
import validateInput from '../../../server/shared/validations/signup'
import TextFieldGroup from '../components/common/TextFieldGroup'


class SingupForm extends Component {

constructor(props){
    super(props)
    this.state = {
        username: null,
        password: null,
        email: null,
        passwordConfirm: null,
        timezone: null,
        errors: null,
        redirect: false          
     }
    this.onSubmit=this.onSubmit.bind(this)
    this.onChange=this.onChange.bind(this);
    
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
        const { history } = this.props 
        e.preventDefault()
        if(true){
        this.setState({errors: null, isLoading: true})
        this.props.SignupRequst(this.state)
        .then((data)=>{
            this.setState({redirect: true})
            }).then( () => {
                history.push('/')
            }).catch( err => {
               const error = err.response.data
               this.setState({errors: error, isLoading:false})
            })
        };
    }
    onChange(e){
         this.setState({[e.target.name]: e.target.value })
         }
           
    render(){
       const {errors} = this.state
       return (
        <form onSubmit={this.onSubmit}>
            <h2>SignUpForm</h2>
         <div className='form-group'>
           <label className='controle-label'>User name</label>
           <input
           name='username'
           type='text'
           value={this.state.username}
           className='form-control'
           onChange={this.onChange}/>
           {errors!==null&&errors.username && <span className='help-block'>{errors.username}</span>}
         </div> 
         <div className='form-group'>
           <label className='controle-label'>Email</label>
           <input
           name='email'
           type='email'
           value={this.state.email}
           className='form-control'
           onChange={this.onChange}/>
            {errors!==null&&errors.email && <span className='help-block'>{errors.email}</span>}
           </div> 
           <div className='form-group'>
           <label className='controle-label'>Password</label>
           <input
           name='password'
           type='password'
           value={this.state.password}
           className='form-control'
           onChange={this.onChange}/>
           {errors!==null&&errors.password && <span className='help-block'>{errors.password}</span>}
           </div>
           <div className='form-group'>
           <label className='controle-label'>Password Conformation</label>
           <input
           name='passwordConfirm'
           type='password'
           value={this.state.passwordConfirm}
           className='form-control'
           onChange={this.onChange}/>
           {errors!==null&&errors.passwordConfirm && <span className='help-block'>{errors.passwordConfirm}</span>}
           </div> 
           <div className='form-group'>
           <label className='controle-label'>TimeZone</label>
           <select
           className='form-control'
           name='timezone'
           onChange={this.onChange}
           value={this.state.timezone}
           >   
                <option value='' disabled >Choose your timezone</option>
                {Object.keys(timezone).map((val, key)=>(
                 <option key={val} value={val}>
                {timezone[val]}
            </option>))}
           </select>
           {errors!==null&&errors.timezone && <span className='help-block'>{errors.timezone}</span>}
           </div>  
           {/* отредактировать валидацию   добавтить disable со значение из this*/}
         <div className='form-group'>
         <button  className='btn btn-primary btn-lg'>SignUp</button>
         </div>   
        </form>      
    )
}
}

SingupForm.propTypes={
    SignupRequst: PropTypes.func.isRequired

}

SingupForm.contextTypes = {
    router: PropTypes.object
  };


export default withRouter(SingupForm)