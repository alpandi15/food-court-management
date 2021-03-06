import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { loginUser, logoutUser, getUserData } from 'actions/auth/authAction'
import Header from 'components/Header'
import TextInput from 'components/Form/Input'
import { toastify } from 'components/Toast/Toastify'
import validate from './validate'

const Background = '/static/Image/bg.svg'
const image = '/static/Image/login_stand.png'
const GUARD = 'stand'

const standAuth = ({
  invalid,
  loading,
  submitting,
  handleSubmit,
  loginUser,
  getUserData,
  logoutUser
}) => {
  const onSubmit = async (values) => {
    console.log('submit ', submitting, loading, invalid)
    const result = await loginUser({
      username: values.email,
      password: values.password
    }, GUARD)

    console.log('RESPONSE USER ', result)
    if (result.success) {
      const resUser = await getUserData(GUARD)
      console.log('GET USER ', resUser)
      if (resUser.success) {
        if (resUser.data && resUser.data.roleId === 4) {
          toastify({
            type: 'success',
            message: result.meta.message
          })
          Router.push('/stand/home')
        } else {
          logoutUser(GUARD)
          toastify({
            type: 'error',
            message: 'Unauthenticated'
          })
        }
      } else {
        toastify({
          type: 'error',
          message: 'Login Error'
        })
      }
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
                Masuk ke
                <br />
                Akun Stand Kamu
              </div>
              <div>Gunakan akun stand yang telah didaftarkan oleh admin food court.</div>
            </div>
            <div className="image with-text login-stand">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-login">
              <Field
                id="email"
                name="email"
                label="Email / Username"
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
            </div>
            <div className="fixed-button">
              <button disabled={invalid || submitting || loading} className="waves-effect waves-light btn btn-app">Masuk</button>
              <div className="forgot-password">
                <Link to="/forgot-password" className="color-primary waves-effect">
                  Lupa Password
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
    values: getFormValues('FormLogin')(state)
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (data, guard) => dispatch(loginUser(data, guard)),
  getUserData: guard => dispatch(getUserData(guard)),
  logoutUser: guard => dispatch(logoutUser(guard))
})

export default reduxForm({
  form: 'FormStandLogin',
  validate
})(connect(mapStateToProps, mapDispatchToProps)(standAuth))
