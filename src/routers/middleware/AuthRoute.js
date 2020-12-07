import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserData } from 'actions/auth/authAction'

// import { getAccessToken } from 'services/utils/storage'

function AuthRoute ({
  component: Component,
  title,
  redirect,
  guard = 'user',
  getUserData,
  ...rest
}) {
  const [login, setIsLogin] = React.useState(false)
  const [locations, setLocations] = React.useState(null)

  React.useEffect(() => {
    const fetch = async () => {
      const res = await getUserData(guard)
      console.log('EFFECT AUTH ROUTE ', res)
      if (res.success) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }

      if (guard === 'owner') {
        setLocations('/owner')
      } else if (guard === 'stand') {
        setLocations('/stand')
      } else {
        setLocations('/')
      }
    }

    fetch()
  }, [guard, getUserData])

  return locations && (
    <Route
      {...rest}
      render={(props) => (!login ? (
        <>
          <Component {...props} />
        </>
      ) : (
        <Redirect
          to={{
            pathname: locations,
            state: { from: props.location }
          }}
        />
      ))}
    />
  )
}

const mapDispatchToProps = (dispatch) => ({
  getUserData: (guard) => dispatch(getUserData(guard))
})

export default connect(null, mapDispatchToProps)(AuthRoute)
