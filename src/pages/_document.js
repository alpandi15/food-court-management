import React from 'react'
import PropTypes from 'prop-types'
import Document, {
  Html, Head, Main, NextScript
} from 'next/document'
import Helmet from 'react-helmet'
import CustomHelmet from 'components/CustomHelmet'
import { ServerStyleSheet } from 'styled-components'
// import theme from 'theme/color'

class MyDocument extends Document {
  static async getInitialProps (...args) {
    console.log('GET INITIAL PROPS ', args)
    const documentProps = await super.getInitialProps(...args)
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  static contextTypes = {
    helmet: PropTypes.object
  }

  // should render on <html>
  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map((el) => this.props.helmet[el].toComponent())
  }

  static helmetJsx () {
    return (
      <CustomHelmet />
    )
  }

  render () {
    return (
      <Html lang="en">
        <Head>
          {this.helmetJsx}

          <link async rel="preload" type="text/css" rel="stylesheet" href="/static/assets/css/materialize.min.css" />
          <link async rel="preload" type="text/css" rel="stylesheet" href="/static/Css/_app.css" />

          <link async rel="preload" type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link async rel="preload" type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link async rel="preload" type="text/css" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&display=swap" rel="stylesheet" />

          <link
            async rel="preload" type="text/css"
            href="/static/assets/css/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collectStyles(<App {...props} />)
  })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
      </React.Fragment>
    ]
  }
}

export default MyDocument
