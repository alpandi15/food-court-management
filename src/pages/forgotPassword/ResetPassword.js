import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import Header from '../../components/Header'
import TextInput from '../../components/Form/Input'

const validate = ({ password, confirmPassword }) => {
  const error = {
    password: !password ? '*Required'
      : password.length < 10 ? 'Min 10 Character'
        : password.length > 50 ? 'Password Max 50 Character'
          : undefined,
    confirmPassword: !confirmPassword ? '*Required'
      : confirmPassword === '0' ? 'Not be 0 Min 1'
        : confirmPassword.length < 1 ? 'confirmPassword Min 1 Character'
          : confirmPassword.length > 3 ? 'confirmPassword Max 3 Character'
            : undefined
  }

  return error
}

const ResetPassword = ({
  invalid,
  loading,
  submitting,
  handleSubmit
}) => {
  const onSubmit = async (values) => {
    console.log('VALUE ', values)
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
                Atur Ulang
                <br />
                Kata Sandi Kamu
              </div>
            </div>
            <div className="image with-text forgot">
              <img src="static/Image/reset_password.png" alt="" />
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
                name="confirmPassword"
                id="confirmPassword"
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
  return {
    values: getFormValues('FormResetPassword')(state)
  }
}

// const mapDispatchToProps = (dispatch) => ({
// })

export default connect(mapStateToProps, null)(reduxForm({
  form: 'FormResetPassword',
  validate
})(ResetPassword))
