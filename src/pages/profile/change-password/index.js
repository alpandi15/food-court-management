import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { Field, reduxForm, getFormValues } from 'redux-form'
import TextInput from 'components/Form/Input'
import { changePassword as changePasswordAction } from 'actions/account/accountAction'
import { withAuthSync } from 'components/Security/auth'
import CustomHelmet from 'components/CustomHelmet'
import Header from 'components/Header'
import { toastify } from 'components/Toast/Toastify'
import validate from './validate'

const changePassword = ({
  changePasswordAction,
  title,
  handleSubmit,
  invalid,
  submitting
}) => {
  const onSubmit = async (values) => {
    const resChange = await changePasswordAction({
      new_password: values.new_password,
      old_password: values.old_password
    })
    console.log('Valideate ', values)

    if (resChange.success) {
      toastify({
        type: 'success',
        message: resChange.meta.message || resChange.detail
      })
      Router.back()
    } else {
      toastify({
        type: 'error',
        message: resChange.message
      })
    }
  }

  return (
    <>
      <CustomHelmet title={title} />
      <Header
        textStyle={{
          color: '#000000'
        }}
      >
        <span className="header-title">Edit Password</span>
      </Header>
      <div className="mobile-layout-content margin-top margin-bottom">
        <div className="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Field
                id="old_password"
                name="old_password"
                label="Password Lama"
                type="password"
                component={TextInput}
              />
              <Field
                id="new_password"
                name="new_password"
                label="Password Baru"
                type="password"
                component={TextInput}
              />
              <Field
                id="confirm_password"
                name="confirm_password"
                label="Konfirmasi Password Baru"
                type="password"
                component={TextInput}
              />
            </div>
            <div className="fixed-button">
              <button type="submit" disabled={invalid || submitting} className="waves-effect waves-light btn btn-app block">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    values: getFormValues('FormEditProfile')(state)
  }
}

const mapDispatchToProps = dispatch => ({
  changePasswordAction: (data, guard) => dispatch(changePasswordAction(data, guard))
})

changePassword.defaultProps = {
  title: 'Ubah Password'
}

// initial props authenticated using guard users
changePassword.getInitialProps = () => {
  return {
    guard: 'user'
  }
}

export default withAuthSync(reduxForm({
  form: 'FormChangePassword',
  validate
})(connect(mapStateToProps, mapDispatchToProps)((changePassword))))
