import React from 'react'
import './form-input.scss'

const FormInput = ({handleChange, label, ...otherProps}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${otherProps.value.length} ? 'shrink' : '' `}
        ></label>
      ) : null}
    </div>
  )
}

export default FormInput
