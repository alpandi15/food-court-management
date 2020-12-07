import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import CustomHelmet from 'components/CustomHelmet'
import reducer from '../store'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

class MyApp extends App {
  constructor () {
    super()
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
      <>
        <Provider store={store}>
          <CustomHelmet />
          <Component {...pageProps} />
        </Provider>
      </>
    )
  }
}

const makeStore = () => {
  return store
}

export default withRedux(makeStore)(MyApp)
