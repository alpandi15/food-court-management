import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-materialize'
import {
  Field, reduxForm, getFormValues, reset
} from 'redux-form'
import TextInput from 'components/Form/Input'
import ImageUploader from 'components/Form/ImageUploader'
import { updateProfile } from 'actions/account/accountAction'
import { toastify } from 'components/Toast/Toastify'
import { GUARD_OWNER } from '../../../constants'

const validate = ({ name, username, phone }) => {
  const error = {
    username: !username ? '*Required'
    : username.length < 3 ? 'Username Min 3 Character'
    : undefined,
    name: !name ? '*Required'
    : name.length < 3 ? 'Name Min 3 Character'
    : undefined,
    phone: !phone ? '*Required'
    : !(/^[+0-9]+[0-9]+$/.test(phone)) ? 'Use phone number format'
    : phone.length < 10 ? 'Min 10 Character'
    : phone.length > 15 ? 'Max 15 Character'
    : undefined
  }

  return error
}

const ModalEdit = ({
  invalid,
  submitting,
  handleSubmit,
  updateProfile,
  currentItem,
  resetForm,
  onCloseModal
}) => {
  const onSubmit = async (values) => {
    console.log(values)
    const {
      name,
      username,
      phone,
      ...other
    } = values

    if (other && currentItem && currentItem.image && other.image === currentItem.image.url) {
      other.imageRaw = currentItem.image.raw
      other.image = currentItem.image.raw
    }

    const result = await updateProfile({
      name,
      username: username !== currentItem.username ? username : undefined,
      phone,
      ...other
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
        <div className="modal-title">Ubah Profile</div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-modal">
          <div className="image-user">
            <Field
              type="file"
              contentClass=""
              className="team-logo"
              name="image"
              id="image"
              label="Cover Food Court"
              component={ImageUploader}
              contentStyle={{ width: '100%' }}
            />
          </div>
          <div>
            <Field
              id="name"
              name="name"
              label="Nama Food Court"
              type="text"
              active
              component={TextInput}
              contentStyle={{ width: '100%' }}
            />
          </div>
          <div>
            <Field
              id="username"
              name="username"
              label="Username"
              type="text"
              active
              component={TextInput}
              contentStyle={{ width: '100%' }}
            />
          </div>
          <div>
            <Field
              id="phone"
              name="phone"
              label="Nomor Telp"
              type="text"
              active
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
  const { accountStore: { currentItem } } = state
  return {
    values: getFormValues('FormEditProfilOwner')(state),
    currentItem,
    initialValues: ({
      image: currentItem && currentItem.image && currentItem.image.raw ? currentItem.image.url : undefined,
      name: currentItem && currentItem.name,
      username: currentItem && currentItem.username,
      phone: currentItem && currentItem.phone
    })
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (data, guard) => dispatch(updateProfile(data, guard)),
  resetForm: () => dispatch(reset('FormEditProfilOwner'))
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'FormEditProfilOwner',
  enableReinitialize: true,
  validate
})(ModalEdit))
