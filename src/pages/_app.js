import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import CustomHelmet from 'components/CustomHelmet'
// import Toaster from 'components/Toast'
import getPageContext from 'utils/getPageContext'
import store from '../store'

// const theme = {
//   colors: {
//     primary: '#0070f3'
//   }
// }

class MyApp extends App {
  constructor () {
    super()
    this.pageContext = getPageContext()
  }

  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Provider store={store}>
          <div className="next-root">
            <CustomHelmet />
            <Component pageContext={this.pageContext} {...pageProps} />
          </div>
        </Provider>
      </React.Fragment>
    )
  }
}

const makeStore = () => {
  return store
}

export default withRedux(makeStore)(MyApp)
