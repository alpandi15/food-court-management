import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import TextInput from 'components/Form/Input'
// import { Link } from 'react-router-dom'
// import { Icon } from 'react-materialize'

// import image from 'static/Image/food-court.jpg'\

import Header from 'components/Header'

const editProfile = () => {
  return (
    <>
      <Header
        textStyle={{
          color: '#000000'
        }}
      >
        <span className="header-title">Edit Profil</span>
      </Header>
      <div className="mobile-layout-content margin-top margin-bottom">
        <div className="content">
          <form>
            <div>
              <Field
                id="name"
                name="name"
                label="Nama"
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
                type="number"
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

export default connect(mapStateToProps, null)(reduxForm({
  form: 'FormEditProfile'
  // validate
})(editProfile))
