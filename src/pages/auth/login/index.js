import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import Router, { withRouter } from 'next/router'
import CustomHelmet from 'components/CustomHelmet'
import { logout } from 'components/Security/auth'
import { loginUser, getUserData } from 'actions/auth/authAction'
import Header from 'components/Header'
import TextInput from 'components/Form/Input'
import { toastify } from 'components/Toast/Toastify'

const Background = '/static/Image/bg.svg'
const image = '/static/Image/toy-face.png'

const validate = ({ email, password }) => {
  const error = {
    email: !email ? '*Required'
    : !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) ? 'Use email format'
    : email.length > 50 ? 'Username Max 50 Character'
    : undefined,
    password: !password ? '*Required'
    : password.length < 6 ? 'Password Min 6 Character'
    : password.length > 50 ? 'Password Max 50 Character'
    : undefined
  }

  return error
}

const GUARD = 'user'

const Auth = ({
  invalid,
  loading,
  submitting,
  handleSubmit,
  loginUser,
  getUserData,
  title,
  router
}) => {
  // const history = useHistory()

  const onSubmit = async (values) => {
    const { path } = router.query

    const result = await loginUser({
      username: values.email,
      password: values.password
    }, GUARD, router.query.path)

    console.log('RESPONSE USER ', result)
    if (result.success) {
      const resUser = await getUserData(GUARD)
      console.log('GET USER ', resUser)
      if (resUser.success) {
        if (resUser.data && resUser.data.roleId === 2) {
          toastify({
            type: 'success',
            message: result.meta.message
          })
          if (path) {
            Router.push(path)
          } else {
            Router.push('/main')
          }
        } else {
          // alert('Unauthenticated')
          logout(GUARD)
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
      // alert(result.message)
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
                Masuk ke
                <br />
                Akun Kamu
              </div>
              <div>Dapatkan kemudahana seperti, simpan stand favorit serta riwayat pemesanan</div>
            </div>
            <div className="image with-text login">
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
                label="Email"
                type="email"
                placeholder="Email atau Username"
                component={TextInput}
              />
              <Field
                id="password"
                name="password"
                label="Kata Sandi"
                placeholder="Kata Sandi"
                type="password"
                component={TextInput}
              />
            </div>
            <div className="fixed-button">
              <button type="submit" disabled={invalid || submitting || loading} className="waves-effect waves-light btn btn-app">Masuk</button>
              <div className="forgot-password">
                <Link href="/auth/forgot-password">
                  <a className="color-primary waves-effect">
                    Lupa Password
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
    values: getFormValues('FormLogin')(state),
    guard: 'user'
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (data, guard, path) => dispatch(loginUser(data, guard, path)),
  getUserData: guard => dispatch(getUserData(guard))
})

Auth.defaultProps = {
  title: 'Login',
  guard: GUARD
}

export default reduxForm({
  form: 'FormLogin',
  validate
})(connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth)))
