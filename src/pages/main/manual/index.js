import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Field, reduxForm, getFormValues } from 'redux-form'
import Header from 'components/Header'
import TextInput from 'components/Form/Input'

const Background = 'static/Image/bg.svg'
const image = 'static/Image/table.png'

const validate = ({ email }) => {
  const error = {
    email: !email ? '*Required'
    : !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) ? 'Use email format'
    : email.length > 50 ? 'Username Max 50 Character'
    : undefined
  }

  return error
}

const Manual = ({
  invalid,
  loading,
  submitting,
  handleSubmit
}) => {
  const history = useHistory()

  const onSubmit = async (values) => {
    console.log(values)
    history.push('/home')
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

// const mapDispatchToProps = (dispatch) => ({
// })

export default reduxForm({
  form: 'FormForgotPassword',
  validate
})(connect(mapStateToProps, null)(Manual))
