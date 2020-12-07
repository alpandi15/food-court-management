import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'react-materialize'

const Selection = ({
  label,
  className,
  options = [],
  multiple = false,
  onChange,
  defaultValue,
  browserDefault,
  meta: {
    touched,
    error
  },
  input
}) => {
  return (
    <>
      {touched && (error && <span className="helper-text" data-error={error} data-success="Valid" />)}
      <Select
        id="Select-9"
        className={className}
        label={label}
        multiple={multiple}
        noLayout
        browserDefault={browserDefault}
        onChange={onChange}
        {...input}
        options={{
          classes: '',
          dropdownOptions: {
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250
          }
        }}
        value={defaultValue}
      >
        {
          options && options.map((val, index) => (
            <option value={val.value} key={index}>
              {val.label}
            </option>
          ))
        }
      </Select>
    </>
  )
}

Selection.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  browserDefault: PropTypes.bool
}

export default Selection
