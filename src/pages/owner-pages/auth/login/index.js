import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { logout } from 'components/Security/auth'
import { loginUser, getUserData } from 'actions/auth/authAction'
import { toastify } from 'components/Toast/Toastify'
import TextInput from 'components/Form/Input'
import { getMy } from 'actions/foodcourt/foodCourtAction'
import { GUARD_OWNER } from 'constants'

const cover = '/static/Image/fcm-cover.jpg'

const styles = {
  formContent: {
    marginTop: '50px'
  },
  content: {
    paddingTop: '40px'
  }
}
const Register = ({
  invalid,
  submitting,
  handleSubmit,
  loginUser,
  getUserData,
  getMyFoodcourt
}) => {
  const history = useRouter()
  const onSubmit = async (values) => {
    const result = await loginUser({
      username: values.email,
      password: values.password
    }, GUARD_OWNER)

    if (result.success) {
      const resUser = await getUserData(GUARD_OWNER)
      if (resUser.success) {
        if (resUser.data && resUser.data.roleId === 3) {
          toastify({
            type: 'success',
            message: result.meta.message
          })

          const resFood = await getMyFoodcourt({
            isAll: 1
          })

          if (resFood.success && resFood.data && resFood.data.length > 0) {
            history.push('/owner/home/selection')
          } else {
            history.push('/owner/auth/register')
          }
        } else {
          logout(GUARD_OWNER)
          toastify({
            type: 'error',
            message: 'Unauthenticated'
          })
        }
      } else {
        toastify({
          type: 'error',
          message: 'Login Error'
        })
      }
    } else {
      toastify({
        type: 'error',
        message: result.message
      })
    }
  }

  return (
    <>
      <div className="row owner-container">
        <div className="col s12 m7 l7 cover-image">
          <img className="image" src={cover} alt="" />
        </div>
        <div className="col s12 m5 l5 content" style={styles.content}>
          <h4>Masuk ke Akun Kamu</h4>
          <p>
            Segera daftarkan foodcourt kamu, dan segera
            bergabung bersama kami dalam meningkatkan
            pelayanan foodcourt kamu
          </p>

          <div className="form-content" style={styles.formContent}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field
                id="email"
                name="email"
                label="Email"
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
              <div className="button-login">
                <button disabled={invalid || submitting} className="waves-effect waves-light btn btn-app bg-pimary">Masuk</button>
                <div className="forgot-password">
                  <span>Belum punya akun ? </span>
                  <Link href="/owner/auth/register">
                    <a className="color-primary waves-effect">
                      Daftar Sekarang
                    </a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    values: getFormValues('FormRegisterOwner')(state)
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (data, guard) => dispatch(loginUser(data, guard)),
  getUserData: guard => dispatch(getUserData(guard)),
  getMyFoodcourt: data => dispatch(getMy(data))
})

export default reduxForm({
  form: 'FormRegisterOwner'
  // validate
})(
  connect(mapStateToProps, mapDispatchToProps)(Register)
)
