import React from 'react'
// import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { getUserData } from 'actions/auth/authAction'
import CustomHelmet from 'components/CustomHelmet'
import TextInput from 'components/Form/Input'
import Header from 'components/Header'
import { withAuthSync } from 'components/Security/auth'

// const TextInput = dynamic(() => import('components/Form/Input'), { ssr: false })

const GUARD = 'user'

const editProfile = ({
  title,
  userData,
  initialize,
  getUserData,
  handleSubmit
}) => {
  React.useEffect(() => {
    const fetch = async () => {
      await getUserData(GUARD)
    }

    fetch()
  }, [GUARD, getUserData])

  React.useEffect(() => {
    if (userData && userData.id) {
      initialize({
        name: userData.name,
        email: userData.email,
        phone: userData.phone
      })
    }
  }, [userData, initialize])

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <>
      <CustomHelmet title={title} />
      <Header
        textStyle={{
          color: '#000000'
        }}
      >
        <span className="header-title">Edit Profil</span>
      </Header>
      <div className="mobile-layout-content margin-top margin-bottom">
        <div className="content">
          <form onSubmit={handleSubmit(onSubmit)}>
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
  const { accountStore } = state
  return {
    values: getFormValues('FormEditProfile')(state),
    loadingUser: accountStore.loading,
    userData: accountStore.currentItem
  }
}

const mapDispatchToProps = dispatch => ({
  getUserData: guard => dispatch(getUserData(guard))
})

editProfile.defaultProps = {
  title: 'Edit Profile'
}

// initial props authenticated using guard users
editProfile.getInitialProps = () => {
  return {
    guard: 'user'
  }
}

export default withAuthSync(reduxForm({
  form: 'FormEditProfile'
  // validate
})(connect(mapStateToProps, mapDispatchToProps)(editProfile)))
