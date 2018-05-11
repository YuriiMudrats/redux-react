import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Label from '../Label'

const InputField=({inputName, value,type, error, eventInput,id})=>{
    return (
        <div className='form-group'>
           <Label label="Username"   id={id}/>
           <input
           id={id}
           name={inputName}
           type={type}
           value={value}
           className='form-control'
           onChange={event}/>
           {{error}!==null&&{error}.username && <span className='help-block'>{{error}.username}</span>}
         </div>
    )
}

TextFieldGroup.propTypes={
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.string.isRequired
}
InputField.displayName="InputField"
TextFieldGroup.defaultProps={
    type: 'text',
}

export default TextFieldGroup