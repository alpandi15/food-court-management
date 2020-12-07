import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getAccessToken } from '../services/utils/storage'

function PrivateRoute ({
  component: Component, title, redirect, guard = 'user', ...rest
}) {
  let locations
  if (guard === 'owner') {
    locations = '/owner/login'
  } else {
    locations = '/login'
  }

  let login = getAccessToken(guard)
  console.log('Guard ', login, guard)
  return (
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

function AuthRoute ({
  component: Component, title, redirect, guard = 'user', ...rest
}) {
  let locations
  if (guard === 'owner') {
    locations = '/owner'
  } else {
    locations = '/'
  }
  let login = getAccessToken(guard)
  console.log('Guard INI ', login, guard)
  return (
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

function PublicRoute ({
  component: Component, title, redirect, ...rest
}) {
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
export { PrivateRoute, AuthRoute, PublicRoute }
