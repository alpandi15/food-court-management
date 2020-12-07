import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserData } from 'actions/auth/authAction'

function PublicRoute ({
  component: Component,
  title,
  redirect,
  getUserData,
  guard,
  ...rest
}) {
  React.useEffect(() => {
    const fetch = async () => {
      console.log('EFFECT PUBLIC')
      await getUserData(guard)
    }

    fetch()
  }, [guard, getUserData])

  return redirect ? (
    <Redirect from={rest.path}
      to={rest.redirectTo}
      render={(props) => (
        <>
          <Component {...props} />
        </>
      )}
    />
  ) : (
    <Route {...rest}
      render={(props) => (
        <>
          <Component {...props} />
        </>
      )}
    />
  )
}

const mapDispatchToProps = (dispatch) => ({
  getUserData: (guard) => dispatch(getUserData(guard))
})

export default connect(null, mapDispatchToProps)(PublicRoute)
