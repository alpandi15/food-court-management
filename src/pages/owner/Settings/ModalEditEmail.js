import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-materialize'
import {
  Field, reduxForm, getFormValues, reset
} from 'redux-form'
import TextInput from 'components/Form/Input'
import { changeEmail } from 'actions/account/accountAction'
import { toastify } from 'components/Toast/Toastify'
import { GUARD_OWNER } from '../../../constants'

const validate = ({ email }) => {
  const error = {
    email: !email ? '*Required'
    : !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) ? 'Use email format'
    : email.length > 50 ? 'Username Max 50 Character'
    : undefined
  }

  return error
}

const ModalEdit = ({
  invalid,
  submitting,
  handleSubmit,
  changeEmail,
  resetForm,
  onCloseModal
}) => {
  const onSubmit = async (values) => {
    const result = await changeEmail({
      email: values.email
    }, GUARD_OWNER)

    if (result.success) {
      onCloseModal(false)
      toastify({
        type: 'success',
        message: result.data
      })
      resetForm()
    } else {
      toastify({
        type: 'error',
        message: result.message
      })
    }
    console.log('Response Update ', result)
  }

  return (
    <>
      <div className="modal-content-owner">
        <div className="modal-title">Ganti E-Mail</div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-modal">
          <div>
            <Field
              id="email"
              name="email"
              label="Email Baru"
              type="email"
              component={TextInput}
              contentStyle={{ width: '100%' }}
            />
          </div>
          <div className="modal-footer-owner">
            <Button
              className="waves-effect waves-light red"
              modal="close"
              type="button"
              node="button"
              style={{
                color: 'red !important'
              }}
              disabled={submitting}
            >
              Batal
            </Button>
            <button
              type="submit"
              disabled={invalid || submitting}
              className="waves-effect waves-light btn"
              node="button"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    values: getFormValues('FormEditEmailOwner')(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (data, guard) => dispatch(changeEmail(data, guard)),
  resetForm: () => dispatch(reset('FormEditEmailOwner'))
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'FormEditEmailOwner',
  enableReinitialize: true,
  validate
})(ModalEdit))
