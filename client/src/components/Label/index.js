import React from 'react'
import PropTypes from 'prop-types'

export default Laber=({name, label, id})=>{
        return (
           <label id={id} className={name}>{label}</label>
        )
}
Label.displayName="Label"

Label.defaultProps={
    name: "controle-label"
}

Label.propTypes={
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}



