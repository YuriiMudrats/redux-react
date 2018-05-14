import React from 'react'
import PropTypes from 'prop-types'
import Label from '../Label'

const SelectField=({timezone, value , selectName, errors, selectEvent})=>{ 
    return (
    <div className='form-group'>
        <Label label="Timezone" />
           <select
           className='form-control'
           name={selectName}
           onChange={selectEvent}
           value={value}
           >   
                <option value='' disabled >Choose your timezone</option>
                {Object.keys(timezone).map((val, key)=>(
                 <option key={val} value={val}>
                {timezone[val]}
                 </option>))}
           </select>
           {{errors}!==null&&{errors}.timezone && <span className='help-block'>{{errors}.timezone}</span>}
    </div> 
    )}

    SelectField.displayName="SelectField" 
    SelectField.propsTypes = {
        timezone: PropTypes.object.isRequired,
        value: PropTypes.string,
        selectName: PropTypes.string.isRequired,
        errors: PropTypes.object
    }

    export default SelectField