import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import TextInput from 'components/Form/Input'
// import { Link } from 'react-router-dom'
// import { Icon } from 'react-materialize'

// import image from 'static/Image/food-court.jpg'\

import Header from 'components/Header'

const changePassword = () => {
  return (
    <>
      <Header
        textStyle={{
          color: '#000000'
        }}
      >
        <span className="header-title">Edit Password</span>
      </Header>
      <div className="mobile-layout-content margin-top margin-bottom">
        <div className="content">
          <form>
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
              <button className="waves-effect waves-light btn btn-app block">Simpan</button>
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

// const mapDispatchToProps = (dispatch) => ({
// })

export default reduxForm({
  form: 'FormEditProfile'
  // validate
})(connect(mapStateToProps, null)((changePassword)))
