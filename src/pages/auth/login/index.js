import React from 'react'
import PropTypes from 'prop-types'
import CustomHelmet from 'components/CustomHelmet'

const Login = ({
  title
}) => {
  return (
    <div>
      <CustomHelmet
        title={title}
      />
      <h2>Ini Halaman Login</h2>
    </div>
  )
}

Login.propTypes = {
  title: PropTypes.string
}

Login.defaultProps = {
  title: 'Login'
}

export default Login
