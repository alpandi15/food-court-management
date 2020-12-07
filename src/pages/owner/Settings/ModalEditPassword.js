import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-materialize'
import {
  Field, reduxForm, getFormValues, reset
} from 'redux-form'
import TextInput from 'components/Form/Input'
import { changePassword } from 'actions/account/accountAction'
import { toastify } from 'components/Toast/Toastify'
import { GUARD_OWNER } from '../../../constants'

const validate = ({ password_old, password, password_confirm }) => {
  const error = {
    password_old: !password_old ? '*Required'
    : password_old.length < 6 ? 'Password Min 6 Character'
    : password_old.length > 50 ? 'Password Max 50 Character'
    : undefined,
    password: !password ? '*Required'
    : password.length < 6 ? 'Password Min 6 Character'
    : password.length > 50 ? 'Password Max 50 Character'
    : undefined,
    password_confirm: !password_confirm ? '*Required'
    : password_confirm !== password ? 'Cannot Match'
    : password_confirm.length > 50 ? 'Password Max 50 Character'
    : undefined
  }

  return error
}

const ModalEdit = ({
  invalid,
  submitting,
  handleSubmit,
  changePassword,
  resetForm,
  onCloseModal
}) => {
  const onSubmit = async (values) => {
    const result = await changePassword({
      new_password: values.password,
      old_password: values.password_old
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
        <div className="modal-title">Ganti Kata Sandi</div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-modal">
          <div>
            <Field
              id="password_old"
              name="password_old"
              label="Kata Sandi Lama"
              type="password"
              component={TextInput}
              contentStyle={{ width: '100%' }}
            />
          </div>
          <div>
            <Field
              id="password"
              name="password"
              label="Kata Sandi Baru"
              type="password"
              component={TextInput}
              contentStyle={{ width: '100%' }}
            />
          </div>
          <div>
            <Field
              id="password_confirm"
              name="password_confirm"
              label="Konfirmasi Kata Sandi Baru"
              type="password"
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
    values: getFormValues('FormEditProfil')(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  changePassword: (data, guard) => dispatch(changePassword(data, guard)),
  resetForm: () => dispatch(reset('FormEditProfil'))
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'FormEditProfil',
  enableReinitialize: true,
  validate
})(ModalEdit))
