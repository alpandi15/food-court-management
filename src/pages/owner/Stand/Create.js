import React from 'react'
import { connect } from 'react-redux'
import {
  Field,
  reduxForm,
  getFormValues
  // reset
} from 'redux-form'
import { Link, useHistory } from 'react-router-dom'
import TextInput from 'components/Form/Input'
import ImageUploader from 'components/Form/ImageUploader'
import TextArea from 'components/Form/TextArea'
import { getAll } from 'actions/categoryStand/categoryStandAction'
import { add } from 'actions/stand/standAction'
import SelectionDefault from 'components/Form/Selection'
import Layout from 'components/Owner/layout'
import { get } from 'services/utils/storage'
import { toastify } from 'components/Toast/Toastify'
import { GUARD_OWNER, FOODCOURT_SELECTED } from '../../../constants'

const MemoLayout = React.memo(Layout)

const validate = ({
  name, username, phone, authname, categoryId, image,
  email, password, confirm_password
}) => {
  const error = {
    username: !username ? '*Required'
    : username.length < 3 ? 'Username Min 3 Character'
    : undefined,
    name: !name ? '*Required'
    : name.length < 3 ? 'Name Min 3 Character'
    : undefined,
    authname: !authname ? '*Required'
    : authname.length < 5 ? 'Username Min 5 Character'
    : undefined,
    categoryId: !categoryId ? '*Required'
    : undefined,
    image: !image ? '*Required'
    : undefined,
    phone: !phone ? '*Required'
    : !(/^[+0-9]+[0-9]+$/.test(phone)) ? 'Use phone number format'
    : phone.length < 10 ? 'Min 10 Character'
    : phone.length > 15 ? 'Max 15 Character'
    : undefined,
    email: !email ? '*Required'
    : !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) ? 'Use email format'
    : email.length > 50 ? 'Username Max 50 Character'
    : undefined,
    password: !password ? '*Required'
    : password.length < 6 ? 'Password Min 6 Character'
    : password.length > 50 ? 'Password Max 50 Character'
    : undefined,
    confirm_password: !confirm_password ? '*Required'
    : confirm_password !== password ? 'Password tidak sama'
    : confirm_password.length > 50 ? 'Password Max 50 Character'
    : undefined
  }

  return error
}

const generateOption = (datas) => {
  let options = [
    {
      value: '',
      label: '[PILIH FOOD COURT]'
    }
  ]
  datas.map((value) => {
    return options.push({
      value: String(value.id),
      id: String(value.id),
      label: value.name
    })
  })

  return options
}

const FormAdd = ({
  invalid,
  submitting,
  handleSubmit,
  listCategory,
  getAll,
  add
}) => {
  const history = useHistory()
  React.useEffect(() => {
    const fetch = async () => {
      const foodCourtId = await get(FOODCOURT_SELECTED)
      await getAll({
        foodCourtId,
        sort: '-createdAt',
        isAll: true
      }, GUARD_OWNER)
    }

    fetch()
  }, [getAll])

  const onSubmit = async (values) => {
    const foodCourtId = await get(FOODCOURT_SELECTED)
    const dataSend = {
      name: values.name,
      description: values.description,
      categoryId: values.categoryId,
      foodCourtId,
      owner: {
        image: values.image,
        name: values.authname,
        phone: values.phone,
        email: values.email,
        username: values.username,
        password: values.password
      }
    }

    console.log('SEND DATA ', dataSend)
    const result = await add(dataSend, GUARD_OWNER)
    if (result.success) {
      toastify({
        type: 'success',
        message: result.meta.message
      })
      history.goBack()
    } else {
      toastify({
        type: 'error',
        message: result.message
      })
    }
  }

  return (
    <MemoLayout>
      <div className="owner-content">
        <div className="header-title">
          <div className="header-content">
            <h5>Tambah Stand</h5>
          </div>
        </div>
        <div className="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-stand">
              <div className="row">
                <div className="col s12 m12 l6 stand">
                  <div className="title-info">Informasi Stand</div>
                  <Field
                    id="name"
                    name="name"
                    label="Nama Stand"
                    type="text"
                    component={TextInput}
                  />
                  <div className="input-field col">
                    <Field
                      id="categoryId"
                      name="categoryId"
                      label="Pilih Food Court"
                      options={listCategory}
                      component={SelectionDefault}
                      className="select-foodcourt"
                    />
                    <div className="text-category">
                      Belum ada kategori ?
                      <Link to="/owner/category-stand/create" className="waves-effect">Buat Kategori</Link>
                    </div>
                  </div>
                  <Field
                    id="phone"
                    name="phone"
                    label="Nomor Telepon"
                    type="text"
                    component={TextInput}
                  />
                  <Field
                    id="description"
                    name="description"
                    label="Deskripsi Stand"
                    type="text"
                    component={TextArea}
                    dataLength={200}
                    contentStyle={{ width: '100%' }}
                  />
                </div>
                <div className="col s12 m12 l6">
                  <div className="title-info">Cover Stand</div>
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
                </div>
              </div>
              <div className="row" style={{ marginTop: '90px' }}>
                <div className="col s12 m12 l12 user-stand">
                  <div className="title-info">Autentikasi User Stand</div>
                  <Field
                    id="authname"
                    name="authname"
                    label="Nama Pemilik Stand"
                    type="text"
                    component={TextInput}
                  />
                  <Field
                    id="username"
                    name="username"
                    label="Nama Pengguna Stand"
                    type="text"
                    component={TextInput}
                  />
                  <Field
                    id="email"
                    name="email"
                    label="Alamat Email"
                    type="email"
                    component={TextInput}
                  />
                  <Field
                    id="password"
                    name="password"
                    label="Kata Sandi"
                    type="password"
                    component={TextInput}
                  />
                  <Field
                    id="confirm_password"
                    name="confirm_password"
                    label="Konfirmasi Kata Sandi"
                    type="password"
                    component={TextInput}
                  />
                </div>
              </div>
            </div>

            <button disabled={invalid || submitting} className="waves-effect waves-light btn btn-app bg-pimary">Masuk</button>
          </form>
        </div>
      </div>
    </MemoLayout>
  )
}

const mapStateToProps = (state) => {
  const { categoryStandStore } = state
  return {
    values: getFormValues('FormAddStandOwner')(state),
    listCategory: generateOption(categoryStandStore.list)
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAll: (data, guard) => dispatch(getAll(data, guard)),
  add: (data, guard) => dispatch(add(data, guard))
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'FormAddStandOwner',
  validate
})(FormAdd))
