import React from 'react'
// import PropTypes from 'prop-types'
import { TimePicker } from 'react-materialize'

const Input = ({
  id,
  label,
  placeholder,
  meta: {
    touched,
    error
  },
  input
}) => {
  console.log('INPOUT ', input)
  return (
    <TimePicker
      id={id}
      name={input.name}
      placeholder={placeholder}
      className={touched ? (error ? 'timepicker' : 'timepicker') : 'timepicker'}
      label={label}
      value={input.value}
      // {...input}
      options={{
        autoClose: false,
        container: null,
        defaultTime: 'now',
        duration: 350,
        fromNow: 0,
        i18n: {
          cancel: 'Cancel',
          clear: 'Clear',
          done: 'Ok'
        },
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        onSelect: null,
        showClearBtn: false,
        twelveHour: true,
        vibrate: true
      }}
    />
  )
}

export default Input
