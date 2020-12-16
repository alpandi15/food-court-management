import React from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { Field, reduxForm, getFormValues } from 'redux-form'
import Header from 'components/Header'
import TextInput from 'components/Form/Input'
import { toastify } from 'components/Toast/Toastify'
import { resetPassword } from 'actions/auth/resetPasswordAction'

const Background = '/static/Image/bg.svg'
const image = '/static/Image/reset_password.png'

const validate = ({ password, confirm_password }) => {
  const error = {
    password: !password ? '*Required'
    : password.length < 6 ? 'Password Min 6 Character'
    : password.length > 50 ? 'Password Max 50 Character'
    : undefined,
    confirm_password: !confirm_password ? '*Required'
    : confirm_password !== password ? 'Password tidak sama'
    : confirm_password.length > 50 ? 'Password Max 50 Character'
    : undefined
  }

  return error
}

const ResetPassword = ({
  invalid,
  loading,
  submitting,
  handleSubmit,
  resetPassword,
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
    if (!error && message) {
      toastify({
        type: 'success',
        message
      })
    }
  }, [error, message, toastify])

  const onSubmit = async (values) => {
    const { query } = router
    if (query.email) {
      await resetPassword({
        account: query.email,
        password: values.password
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
                Atur Ulang
                <br />
                Kata Sandi Kamu
              </div>
            </div>
            <div className="image with-text forgot">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-login">
              <Field
                name="password"
                id="password"
                label="Kata Sandi Baru"
                type="password"
                component={TextInput}
              />
              <Field
                name="confirm_password"
                id="confirm_password"
                label="Konfirmasi Kata Sandi Baru"
                type="password"
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
  const { resetPasswordStore } = state
  return {
    values: getFormValues('FormResetPassword')(state),
    loading: resetPasswordStore.loading,
    error: resetPasswordStore.error,
    message: resetPasswordStore.message
  }
}

const mapDispatchToProps = dispatch => ({
  resetPassword: (type, data) => dispatch(resetPassword(type, data))
})

export default reduxForm({
  form: 'FormResetPassword',
  validate
})(
  connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
)
