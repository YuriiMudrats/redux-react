import React from 'react'
import PropTypes from 'prop-types'

export default function Alert({error}){
    const alert= {
        color: 'red'
    }
    return (
        <span className='help-block' style={alert}>{error}</span>
    )
}
Alert.displayName='Alert'
Alert.propTypes = {
    error: PropTypes.string
}