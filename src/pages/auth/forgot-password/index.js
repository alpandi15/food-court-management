import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { forgotPassword } from 'actions/auth/forgotAction'
import { toastify } from 'components/Toast/Toastify'

import Header from 'components/Header'
import TextInput from 'components/Form/Input'

const Background = '/static/Image/bg.svg'
const image = '/static/Image/lock.png'

const validate = ({ email }) => {
  const error = {
    email: !email ? '*Required'
    : !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) ? 'Use email format'
    : email.length > 50 ? 'Username Max 50 Character'
    : undefined
  }

  return error
}

const ForgotPassword = ({
  invalid,
  loading,
  submitting,
  handleSubmit,
  forgotPassword
}) => {
  const onSubmit = async (values) => {
    console.log(values)
    const result = await forgotPassword({
      account: values.email
    })
    if (result.success) {
      toastify({
        type: 'success',
        message: result.meta.message
      })
      Router.push({
        pathname: '/auth/forgot-password/verification',
        query: { email: values.email }
      })
    } else if (typeof result.detail === 'object') {
      toastify({
        type: 'info',
        message: result.message
      })
      Router.push('/auth/forgot-password/verification')
    } else {
      toastify({
        type: 'error',
        message: result.message
      })
    }
  }

  return (
    <>
      <Header
        transparent
      />
      <div className="mobile-layout-content with-header">
        <div>
          <div className="header">
            <div className="background">
              <img className="rotate-75" src={Background} alt="" />
            </div>
            <div className="text">
              <div className="main-text">
                Lupa
                <br />
                Password
              </div>
            </div>
            <div className="image with-text forgot">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div>
          Lupa password ?
        </div>
        <div className="content">
          <p>
            Masukkan alamat email terdaftar kamu, kami akan
            mengirimkan link untuk mereset kata sandi
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-login">
              <Field
                id="email"
                name="email"
                label="Email"
                type="email"
                component={TextInput}
              />
            </div>
            <div className="fixed-button">
              <button disabled={invalid || submitting || loading} className="waves-effect waves-light btn btn-app bg-grey">Kirim</button>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    values: getFormValues('FormForgotPassword')(state)
  }
}

const mapDispatchToProps = dispatch => ({
  forgotPassword: email => dispatch(forgotPassword(email))
})

export default reduxForm({
  form: 'FormForgotPassword',
  validate
})(
  connect(mapStateToProps, mapDispatchToProps)((ForgotPassword))
)
