import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Label from '../Label'

const InputField=({inputName, value,type, error, eventInput,id,label})=>{
    return (
        <div className='form-group'>
           <Label label={label} id={id}/>
           <input
           id={id}
           name={inputName}
           type={type}
           value={value}
           className='form-control'
           onChange={eventInput}/>
           {/* {{error}!==null&&{error}.username && <span className='help-block'>{{error}.username}</span>} */}
         </div>
    )
}

InputField.propTypes={
    id: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    eventInput: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}
InputField.displayName="InputField"
InputField.defaultProps={
    type: 'text',
}

export default InputField