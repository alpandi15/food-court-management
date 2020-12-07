import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserData } from 'actions/auth/authAction'

function PrivateRoute ({
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
      console.log('EFFECT PRIVATE ROUTE ', res, guard)
      if (res.success) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }

      if (guard === 'owner') {
        setLocations('/owner/login')
      } else if (guard === 'stand') {
        setLocations('/stand/login')
      } else {
        setLocations('/login')
      }
    }

    fetch()
  }, [guard, getUserData])

  console.log('LOCATION ', locations)
  return (locations) && (
    <Route
      {...rest}
      render={(props) => (login ? (
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

export default connect(null, mapDispatchToProps)(PrivateRoute)
