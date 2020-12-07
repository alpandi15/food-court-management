import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import ScrollToTop from '../utils/ScrollToTop'
// import { PublicRoute } from './middleware'
import { auth, routes } from './web'
import PrivateRoute from './middleware/PrivateRoute'
import AuthRoute from './middleware/AuthRoute'
import PublicRoute from './middleware/PublicRoute'

const MemoPrivateRoute = React.memo(PrivateRoute)
const MemoAuthRoute = React.memo(AuthRoute)
const MemoPublicRoute = React.memo(PublicRoute)

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        {auth.map((props, index) => (
          <MemoAuthRoute key={index} {...props} />
        ))}

        {routes.map((props, index) => {
          const { auth, ...other } = props
          return auth ? <MemoPrivateRoute key={index} {...other} /> : (
            <MemoPublicRoute key={index} {...other} />
          )
        })}

        {/* <PublicRoute path="/unauthorized" component={Unauthorized} title="Unauthorized" />
        <PublicRoute component={NotFound} title="Page Not Found" /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Router
