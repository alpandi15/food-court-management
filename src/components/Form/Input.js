import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  id,
  label,
  placeholder,
  type = 'text',
  meta: {
    touched,
    error
  },
  contentStyle,
  iconName,
  className = '',
  iconClassName,
  // active = false,
  input
}) => {
  return (
    <div
      style={contentStyle}
      className="input-field col"
    >
      {
        iconName ? <i className={`material-icons prefix ${iconClassName}`}>{iconName}</i> : null
      }
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={touched ? (error ? `${className} invalid` : `${className} valid`) : className}
        {...input}
      />
      <label htmlFor={id} className={`active ${touched ? (error ? 'invalid' : 'valid') : ''}`}>{label}</label>
      {touched && (error && <span className="helper-text" data-error={error} data-success="Valid" />)}
    </div>
  )
}

Input.propTypes = {
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired
}

export default Input
