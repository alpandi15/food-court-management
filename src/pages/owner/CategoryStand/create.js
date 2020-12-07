import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Field,
  reduxForm
  // reset
} from 'redux-form'
import TextInput from 'components/Form/Input'
// import ImageUploader from 'components/Form/ImageUploader'
import Layout from 'components/Owner/layout'
import CustomeHelmet from 'components/CustomHelmet'
import { add } from 'actions/categoryStand/categoryStandAction'
import { get } from 'services/utils/storage'
import { toastify } from 'components/Toast/Toastify'
import { GUARD_OWNER, FOODCOURT_SELECTED } from '../../../constants'

const MemoLayout = React.memo(Layout)

const validate = ({ name }) => {
  const error = {
    name: !name ? '*Required'
    : name.length < 3 ? 'Name Min 3 Character'
    : undefined
  }

  return error
}

const FormAdd = ({
  invalid,
  submitting,
  handleSubmit,
  add
}) => {
  const history = useHistory()
  const onSubmit = async (values) => {
    const foodCourtId = await get(FOODCOURT_SELECTED)

    const result = await add({
      ...values,
      foodCourtId
    }, GUARD_OWNER)

    if (result.success) {
      toastify({
        type: 'success',
        message: result.meta.message
      })
      history.push('/owner/category-stand')
    } else {
      toastify({
        type: 'error',
        message: result.message
      })
    }
    console.log(values, foodCourtId)
  }

  return (
    <MemoLayout>
      <CustomeHelmet title="Create Category Stand" />
      <div className="owner-content">
        <div className="header-title">
          <div className="header-content">
            <h5>Tambah Kategori Stand</h5>
          </div>
        </div>
        <div className="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-stand">
              <div className="row">
                <div className="col s12 m12 l6 stand">
                  <div className="title-info">Informasi Kategori</div>
                  <Field
                    id="name"
                    name="name"
                    label="Nama Kategori"
                    type="text"
                    component={TextInput}
                  />
                  {/* <div className="image-user">
                    <Field
                      type="file"
                      contentClass=""
                      className="team-logo"
                      name="image"
                      id="image"
                      label="Image Kategori"
                      component={ImageUploader}
                    />
                  </div> */}
                </div>
              </div>
            </div>

            <button disabled={invalid || submitting} className="waves-effect waves-light btn btn-app bg-pimary">Simpan</button>
          </form>
        </div>
      </div>
    </MemoLayout>
  )
}

const mapDispatchToProps = (dispatch) => ({
  add: (data, guard) => dispatch(add(data, guard))
})

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'FormAddCategoryStandOwner',
  validate
})(FormAdd))
