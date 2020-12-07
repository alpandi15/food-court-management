import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Image extends Component {
  constructor (props) {
    super(props)

    this.state = {
      src: props.src,
      errored: false
    }
  }

  onError = () => {
    const { errored } = this.state
    const { defaultsrc } = this.props
    if (!errored) {
      this.setState({
        src: defaultsrc,
        errored: true
      })
    }
  }

  render () {
    const { src } = this.state
    const {
      src: _1,
      defaultsrc,
      alt,
      ...props
    } = this.props

    return (
      <img
        src={src || defaultsrc}
        onError={this.onError}
        {...props}
        alt={alt || 'image'}
      />
    )
  }
}

Image.propTypes = {
  src: PropTypes.string,
  defaultsrc: PropTypes.string
}

export default Image
