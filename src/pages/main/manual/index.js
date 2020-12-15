import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { Field, reduxForm, getFormValues } from 'redux-form'
import Header from 'components/Header'
import TextInput from 'components/Form/Input'
import { loginGuest } from 'actions/auth/authAction'
import { getSessionTable } from 'actions/tableSession/tableSessionAction'
import { toastify } from 'components/Toast/Toastify'

const Background = '/static/Image/bg.svg'
const image = '/static/Image/table.png'

const validate = ({ email }) => {
  const error = {
    email: !email ? '*Required'
    : !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) ? 'Use email format'
    : email.length > 50 ? 'Username Max 50 Character'
    : undefined
  }

  return error
}

const GUARD = 'user'

const Manual = ({
  invalid,
  loading,
  submitting,
  handleSubmit,
  loginGuest,
  getSessionTable
}) => {
  const onSubmit = async (values) => {
    const { table_id } = values
    const resLogin = await loginGuest()
    if (resLogin.success) {
      const sessionTable = await getSessionTable({ number: table_id }, GUARD)

      if (sessionTable.success) {
        toastify({
          type: 'success',
          message: sessionTable.meta.message
        })
        Router.push('/home')
      } else {
        toastify({
          type: 'error',
          message: sessionTable.message
        })
      }
    } else {
      toastify({
        type: 'error',
        message: resLogin.message
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
                Masukkan
                <br />
                ID Meja
              </div>
            </div>
            <div className="image with-text table-id">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="content">
          <p>
            Masukkan ID yang terdapat di bawah Kode QR pada meja kamu
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-login">
              <Field
                id="table_id"
                name="table_id"
                label="Masukkan ID"
                type="text"
                component={TextInput}
              />
            </div>
            <div className="fixed-button">
              <button disabled={invalid || submitting || loading} className="waves-effect waves-light btn btn-app bg-grey">Terapkan ID</button>
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
  loginGuest: () => dispatch(loginGuest()),
  getSessionTable: (data, guard) => dispatch(getSessionTable(data, guard))
})

export default reduxForm({
  form: 'FormManualScan',
  validate
})(connect(mapStateToProps, mapDispatchToProps)(Manual))
