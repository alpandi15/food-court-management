import React from 'react'

const SearchInput = ({
  id,
  placeholder,
  autoComplete,
  onClick,
  disabled,
  onChange,
  input
}) => {
  return (
    <div className="d-flex align-items-center contain-search-input"
      onClick={onClick}
    >
      <div className="icon-search">
        <img src="/static/Icon/Search.svg" alt="" />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="search-input"
        autoComplete={autoComplete}
        disabled={disabled}
        onChange={onChange}
        {...input}
      />
    </div>
  )
}

export default SearchInput
