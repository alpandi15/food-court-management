import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import color from '../../theme/color'
import { DESCRIPTION, APPNAME } from '../../constants'

const CustomHelmet = ({
  title,
  meta = [],
  children,
  ...props
}) => {
  console.log('Component Helment ', title)
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${title} | ${DESCRIPTION}`}
      meta={([
        { name: 'theme-color', content: color.darkPrimaryColor },
        { name: 'description', content: DESCRIPTION },
        { name: 'viewport', content: 'minimum-scale=1, initial-scale=1.0, maximum-scale=1.0, width=device-width' },
        { property: 'og:title', content: `${title} | ${DESCRIPTION}` }
      ]).concat(meta)}
      {...props}
    >
      {children}
    </Helmet>
  )
}

CustomHelmet.propTypes = {
  meta: PropTypes.array,
  title: PropTypes.string,
  children: PropTypes.array
}

CustomHelmet.defaultProps = {
  meta: [],
  title: APPNAME
}

export default CustomHelmet
