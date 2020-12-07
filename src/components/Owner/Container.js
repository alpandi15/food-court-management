import React from 'react'

const Container = ({
  children
}) => {
  return (
    <>
      <div className="col s12 m8 l9">
        {children}
      </div>
    </>
  )
}

export default Container
