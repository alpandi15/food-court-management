import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import CustomHelmet from 'components/CustomHelmet'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { loggedChecked } from 'components/Security/auth'
import { toastify } from '../../../components/Toast/Toastify'
import Header from '../../../components/Header'
import TextInput from '../../../components/Form/Input'

import { registerUser } from '../../../actions/auth/authAction'

const Background = '/static/Image/bg.svg'

const validate = ({
  name,
  username,
  phone,
  email,
  password,
  confirm_password
}) => {
  const error = {
    email: !email ? '*Required'
    : !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) ? 'Use email format'
    : email.length > 50 ? 'Username Max 50 Character'
    : undefined,
    phone: !phone ? '*Required'
    : !(/^[+0-9]+[0-9]+$/.test(phone)) ? 'Use phone number format'
    : phone.length < 10 ? 'Min 10 Character'
    : phone.length > 15 ? 'Max 15 Character'
    : undefined,
    password: !password ? '*Required'
    : password.length < 6 ? 'Password Min 6 Character'
    : password.length > 50 ? 'Password Max 50 Character'
    : undefined,
    confirm_password: !confirm_password ? '*Required'
    : confirm_password !== password ? 'Password tidak sama'
    : confirm_password.length > 50 ? 'Password Max 50 Character'
    : undefined,
    username: !username ? '*Required'
    : username.length < 3 ? 'Username Min 3 Character'
    : undefined,
    name: !name ? '*Required'
    : name.length < 3 ? 'Name Min 3 Character'
    : undefined
  }

  return error
}

const Register = ({
  title,
  invalid,
  loading,
  submitting,
  handleSubmit,
  registerUser
}) => {
  const onSubmit = async (values) => {
    console.log(values)
    const result = await registerUser({
      name: values.name,
      phone: values.phone,
      email: values.email,
      username: values.username,
      password: values.password,
      roleId: 2
    })

    if (result.success) {
      toastify({
        type: 'success',
        message: result.meta.message
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
      <CustomHelmet title={title} />
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
                Daftar Sekarang
              </div>
            </div>
          </div>
        </div>
        <div className="content register">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-login">
              <Field
                id="name"
                name="name"
                label="Nama"
                type="text"
                component={TextInput}
              />
              <Field
                id="username"
                name="username"
                label="Nama Pengguna"
                type="text"
                component={TextInput}
              />
              <Field
                id="email"
                name="email"
                label="Email"
                type="email"
                component={TextInput}
              />
              <Field
                id="phone"
                name="phone"
                label="Nomor Telepon (Opsional)"
                type="text"
                component={TextInput}
              />
              <Field
                id="password"
                name="password"
                label="Kata Sandi"
                type="password"
                component={TextInput}
              />
              <Field
                id="confirm_password"
                name="confirm_password"
                label="Konfirmasi Kata Sandi"
                type="password"
                component={TextInput}
              />
            </div>
            <div className="fixed-button">
              <button type="submit" disabled={invalid || submitting || loading} className="waves-effect waves-light btn btn-app bg-grey">Daftar</button>
              <div className="forgot-password">
                <span>Sudah punya akun ? </span>
                <Link href="/auth/login">
                  <a className="color-primary waves-effect">
                    Silahkan Masuk
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    values: getFormValues('FormRegisterUser')(state)
  }
}

const mapDispatchToProps = dispatch => ({
  registerUser: data => dispatch(registerUser(data))
})

Register.defaultProps = {
  title: 'Register'
}

// initial props authenticated using guard users
Register.getInitialProps = () => {
  return {
    guard: 'user'
  }
}

export default loggedChecked(reduxForm({
  form: 'FormRegisterUser',
  validate
})(connect(mapStateToProps, mapDispatchToProps)(Register)))
