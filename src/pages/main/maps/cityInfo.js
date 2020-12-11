import * as React from 'react'
import { PureComponent } from 'react'

export default class CityInfo extends PureComponent {
  render () {
    const { info } = this.props
    const displayName = `${info.name}`
    const location = `${info.city}, ${info.state}`

    return (
      <div>
        <div>
          {`${displayName} | ${location}`}
        </div>
        <img width={240} src={info.image} alt="" />
      </div>
    )
  }
}
