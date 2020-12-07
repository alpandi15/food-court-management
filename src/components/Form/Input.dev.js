import React from 'react'
import { TextInput } from 'react-materialize'
import PropTypes from 'prop-types'

const Input = ({
  id,
  label,
  required,
  placeholder,
  password,
  type,
  meta: {
    touched,
    error
  },
  input
}) => {
  return (
    <TextInput
      id={id}
      label={label}
      placeholder={placeholder}
      type={type}
      password={password}
      required={required}
      validate={touched && error}
      error={touched && error ? error : ''}
      {...input}
    />
  )
}

Input.propTypes = {
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  password: PropTypes.bool,
  required: PropTypes.bool
}

export default Input
