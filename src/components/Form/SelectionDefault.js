import React from 'react'

const SelectionDefault = ({
  id,
  options = [],
  className,
  onChange,
  defaultValue,
  input
}) => {
  return (
    <div className="input-field">
      <select
        type="select"
        id={id}
        className={`browser-default ${className}`}
        onChange={onChange}
        value={defaultValue || ''}
        {...input}
      >
        {
          options && options.map((val, index) => (
            <option value={val.value} key={index}>
              {val.label}
            </option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectionDefault
