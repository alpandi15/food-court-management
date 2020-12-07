import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { toastify } from 'components/Toast/Toastify'
import TextInput from 'components/Form/Input'
import { registerUser } from 'actions/auth/authAction'

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
  invalid,
  loading,
  submitting,
  handleSubmit,
  registerUser
}) => {
  const history = useHistory()
  const onSubmit = async (values) => {
    console.log('Values ', values)

    const result = await registerUser({
      name: values.name,
      phone: values.phone,
      email: values.email,
      username: values.username,
      password: values.password,
      roleId: 3 // owner
    })

    if (result.success) {
      toastify({
        type: 'success',
        message: 'Register success, silahkan masuk untuk melanjutkan proses'
      })
      history.push('/owner/login')
    } else {
      toastify({
        type: 'error',
        message: result.message
      })
    }
  }

  return (
    <>
      <div className="row owner-container">
        <div className="col s12 m7 l7 cover-image">
          <img className="image" src="static/Image/fcm-cover.jpg" alt="" />
        </div>
        <div className="col s12 m5 l5 content">
          {/* <div className="content"> */}
          <h4>Bergabung Sekarang</h4>
          <p>
            Segera daftarkan foodcourt kamu, dan segera
            bergabung bersama kami dalam meningkatkan
            pelayanan foodcourt kamu
          </p>

          <div className="form-content">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field
                id="name"
                name="name"
                label="Nama Lengkap"
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
                id="username"
                name="username"
                label="Username"
                type="text"
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
              <div className="button-login">
                <button disabled={invalid || submitting || loading} className="waves-effect waves-light btn btn-app bg-pimary">Daftar</button>
                <div className="forgot-password">
                  <span>Sudah punya akun ? </span>
                  <Link to="/owner/login" className="color-primary waves-effect">
                    Silahkan Masuk
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    values: getFormValues('FormRegisterOwner')(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerUser: (data) => dispatch(registerUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'FormRegisterOwner',
  validate
})(Register))
