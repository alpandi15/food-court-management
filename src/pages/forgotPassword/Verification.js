import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { forgotPassword } from 'actions/auth/forgotAction'
import { toastify } from 'components/Toast/Toastify'

import Header from '../../components/Header'
import TextInput from '../../components/Form/Input'

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
    const result = await forgotPassword({
      account: values.email
    })
    console.log('Ini Response', result)
    if (result.success) {
      toastify({
        type: 'success',
        message: result.meta.message
      })
    } else if (typeof result.detail === 'object') {
      toastify({
        type: 'info',
        message: result.message
      })
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
              <img className="rotate-75" src="static/Image/bg.svg" alt="" />
            </div>
            <div className="text">
              <div className="main-text">
                Kode Verifikasi
              </div>
            </div>
            <div className="image with-text forgot">
              <img src="static/Image/mail_sent.png" alt="" />
            </div>
          </div>
        </div>
        <div className="content">
          <p>
            Silahkan masukkan kode verifikasi yang telah dikirimkan ke email kamu, jangan lupa juga melihat folder spam
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-login">
              <Field
                id="code"
                name="code"
                label="Verification Code"
                type="text"
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
    values: getFormValues('FormVerificationCode')(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  forgotPassword: (email) => dispatch(forgotPassword(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'FormVerificationCode',
  validate
})(ForgotPassword))
