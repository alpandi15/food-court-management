import React from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { verification } from 'actions/auth/verificationAction'
import { toastify } from 'components/Toast/Toastify'
import { TYPE_CODE_FORGOT, TYPE_ACCOUNT_EMAIL } from 'constants'

import Header from 'components/Header'
import TextInput from 'components/Form/Input'
import CountDown from './countdownTimer'

const Background = '/static/Image/bg.svg'
const image = '/static/Image/mail_sent.png'

const validate = ({ email }) => {
  const error = {
    email: !email ? '*Required'
    : !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) ? 'Use email format'
    : email.length > 50 ? 'Username Max 50 Character'
    : undefined
  }

  return error
}

const VerificationCode = ({
  invalid,
  loading,
  submitting,
  handleSubmit,
  verification,
  error,
  message
}) => {
  const router = useRouter()
  React.useEffect(() => {
    if (error && message) {
      toastify({
        type: 'error',
        message
      })
    }
  }, [error, message, toastify])

  const onSubmit = async (values) => {
    const { query } = router
    if (query.email) {
      await verification({
        account: query.email,
        typeCode: TYPE_CODE_FORGOT,
        typeAccount: TYPE_ACCOUNT_EMAIL,
        code: values.code
      })
    } else {
      toastify({
        type: 'error',
        message: 'Mohon request verifikasi kode ulang'
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
                Kode Verifikasi
              </div>
            </div>
            <div className="image with-text forgot">
              <img src={image} alt="" />
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
            <CountDown />
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
  const { verificationStore } = state
  return {
    values: getFormValues('FormVerificationCode')(state),
    loading: verificationStore.loading,
    error: verificationStore.error,
    message: verificationStore.message
  }
}

const mapDispatchToProps = dispatch => ({
  verification: data => dispatch(verification(data))
})

export default reduxForm({
  form: 'FormVerificationCode',
  validate
})(
  connect(mapStateToProps, mapDispatchToProps)(VerificationCode)
)
