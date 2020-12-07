import React from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import {
  Field,
  reduxForm
  // reset
} from 'redux-form'
import TextInput from 'components/Form/Input'
// import ImageUploader from 'components/Form/ImageUploader'
import Layout from 'components/Owner/layout'
import CustomeHelmet from 'components/CustomHelmet'
import { getOne, edit } from 'actions/categoryStand/categoryStandAction'
// import { get } from 'services/utils/storage'
import { toastify } from 'components/Toast/Toastify'
import { GUARD_OWNER } from '../../../constants'

const MemoLayout = React.memo(Layout)

const validate = ({ name }) => {
  const error = {
    name: !name ? '*Required'
    : name.length < 3 ? 'Name Min 3 Character'
    : undefined
  }

  return error
}

const FormEdit = ({
  invalid,
  submitting,
  handleSubmit,
  edit,
  getOne,
  currentItem
}) => {
  const history = useHistory()
  const params = useParams()

  React.useEffect(() => {
    const fetch = async () => {
      await getOne(params.id, GUARD_OWNER)
    }
    fetch()
  }, [getOne])

  // Submit Edit
  const onSubmit = async (values) => {
    if (currentItem && currentItem.id) {
      const result = await edit(
        currentItem.id,
        {
          name: values.name
        },
        GUARD_OWNER
      )

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
    } else {
      toastify({
        type: 'error',
        message: 'Id tidak ditemukan'
      })
    }
  }

  return (
    <MemoLayout>
      <CustomeHelmet title="Edit Category Stand" />
      <div className="owner-content">
        <div className="header-title">
          <div className="header-content">
            <h5>Edit Kategori Stand</h5>
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
                    active
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
            <div className="button-submit-control">
              <button disabled={invalid || submitting} className="waves-effect waves-light btn btn-app bg-pimary">Simpan</button>
              <button type="button" onClick={() => history.goBack()} className="btn btn-app-outline waves-effect">Batal</button>
            </div>
          </form>
        </div>
      </div>
    </MemoLayout>
  )
}

const mapStateToProps = (state) => {
  const { categoryStandStore } = state
  return {
    loadingData: categoryStandStore.loading,
    currentItem: categoryStandStore.currentItem,
    initialValues: ({
      name: categoryStandStore && categoryStandStore.currentItem.name
    })
  }
}

const mapDispatchToProps = (dispatch) => ({
  edit: (id, data, guard) => dispatch(edit(id, data, guard)),
  getOne: (id, guard) => dispatch(getOne(id, guard))
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'FormEditCategoryStandOwner',
  enableReinitialize: true,
  validate
})(FormEdit))
