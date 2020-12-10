import { Component } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'

export const loggedin = async ({ access_token, path, ...data }) => {
  console.log('TOKEN ', access_token, data)
  const token = access_token || 'asdasdasdyuaya sduastd'
  cookie.set('token', token, { expires: 7 })
  if (path) {
    Router.push(path)
  } else {
    Router.push('/')
  }
}

export const logout = () => {
  cookie.remove('token')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  Router.push('/auth/login')
}

const getDisplayName = Component => Component.displayName || Component.name || 'Component'

export const auth = (ctx) => {
  const { token } = nextCookie(ctx)

  /*
   * This happens on server only, ctx.req is available means it's being
   * rendered on server. If we are on server and token is not available,
   * means user is not logged in.
   */
  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: ctx
        && ctx.pathname
        && ctx.pathname !== '/auth/login'
        ? `/auth/login?path=${ctx.pathname}`
        : '/auth/login'
    })
    ctx.res.end()
    return
  }

  // We already checked for server. This should only happen on client.
  if (!token) {
    if (ctx && ctx.pathname && ctx.pathname !== '/auth/login') {
      Router.push(`/auth/login?path=${ctx.pathname}`)
    } else {
      Router.push('/auth/login')
    }
  }

  return token
}

export const withAuthSync = WrappedComponent => class extends Component {
  static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`

  static async getInitialProps (ctx) {
    const token = auth(ctx)

    const componentProps = WrappedComponent.getInitialProps
      && (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, token }
  }

  constructor (props) {
    super(props)

    this.syncLogout = this.syncLogout.bind(this)
  }

  componentDidMount () {
    window.addEventListener('storage', this.syncLogout)
  }

  componentWillUnmount () {
    window.removeEventListener('storage', this.syncLogout)
    window.localStorage.removeItem('logout')
  }

  syncLogout = (event) => {
    if (event.key === 'logout') {
      Router.push('/auth/login')
    }
  }

  render () {
    return <WrappedComponent {...this.props} />
  }
}
