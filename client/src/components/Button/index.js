import React,{Component} from 'react'
import PropTypes from 'prop-types'

const Button=({buttonName, name, type})=>{
    return (
        <div className='form-group'>
           <button type={type} className='btn btn-primary btn-lg'>{buttonName}</button>
        </div>
    )
}

Button.displayName='Button'
Button.defaultProps={
    name: 'btn btn-primary btn-lg',
    type: "submit"
}
Button.propTypes ={
    buttonName: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string
}

export default Button