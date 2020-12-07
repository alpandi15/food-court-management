import React from 'react'
import PropTypes from 'prop-types'
// import { Textarea } from 'react-materialize'

const Input = ({
  id,
  label,
  placeholder,
  type = 'text',
  meta: {
    touched,
    error
  },
  dataLength = 120,
  contentStyle,
  active = false,
  input
}) => {
  return (
    <div
      style={contentStyle}
      className="input-field col"
    >
      {/* <Textarea
      id={id}
      type={type}
      placeholder={placeholder}
      className={touched ? (error ? 'materialize-textarea invalid' : 'materialize-textarea valid') : 'materialize-textarea'}
      data-length={dataLength}
      label={label}
      error={touched ? (error || '') : ''}
      validate
      {...input}
    /> */}
      <textarea
        id={id}
        type={type}
        placeholder={placeholder}
        className={touched ? (error ? 'materialize-textarea invalid' : 'materialize-textarea valid') : 'materialize-textarea'}
        data-length={dataLength}
        {...input}
      />
      <label htmlFor={id} className={active ? 'active' : ''}>{label}</label>
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
