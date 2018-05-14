import React,{Component} from 'react'
import Button from '../../components/Button'

class ProtectingPage extends Component {
    render(){
    return (
        <div>
           <h1> Protecting Page</h1>
           <Button
           buttonName='LogOut'
           />
         </div>   
    )
}
}

export default ProtectingPage