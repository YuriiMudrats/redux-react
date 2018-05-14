import React from 'react'
import PropTypes from 'prop-types'

const Label=({className, label, id})=>{
        return (
           <label id={id} className={className}>{label}</label>
        )
}
Label.displayName="Label"

Label.defaultProps={
    className: "controle-label"
}

Label.propTypes={
  name: PropTypes.string,
  label: PropTypes.string.isRequired
}

export default Label


