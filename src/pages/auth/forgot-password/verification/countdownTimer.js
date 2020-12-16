import React from 'react'
import Link from 'next/link'
import { get } from 'services/utils/storage'
import { GUARD_USER } from 'constants'

class Example extends React.Component {
  constructor () {
    super()
    this.state = { time: {}, seconds: 5 }
    this.timer = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
  }

  async componentDidMount () {
    const expired = await get(`varification_expired_${GUARD_USER}`)
    console.log((new Date(expired).getTime() - Date.now()) / 1000)
    const seconds = Number((new Date(expired).getTime() - Date.now()) / 1000)
    let timeLeftVar = this.secondsToTime(seconds)
    this.setState({ time: timeLeftVar, seconds })

    this.startTimer()
  }

  secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60))

    let divisor_for_minutes = secs % (60 * 60)
    let minutes = Math.floor(divisor_for_minutes / 60)

    let divisor_for_seconds = divisor_for_minutes % 60
    let seconds = Math.ceil(divisor_for_seconds)

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    }
    return obj
  }

  startTimer () {
    const { seconds } = this.state
    if (this.timer === 0 && seconds > 0) {
      this.timer = setInterval(this.countDown, 1000)
    }
  }

  countDown () {
    // Remove one second, set state so a re-render happens.
    const { seconds } = this.state
    let second = seconds - 1
    this.setState({
      time: this.secondsToTime(second),
      seconds: second
    })

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer)
    }
  }

  render () {
    const { time } = this.state
    if (time.m < 0 || time.s < 0) {
      return (
        <div>
          <span>Kirim ulang kode verifikasi</span>
          <Link href="/auth/forgot-password">
            <a style={{ color: 'rgb(251 119 13)', margin: '0 5px' }}>Resend Code</a>
          </Link>
        </div>
      )
    }
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px'
      }}
      >
        <div style={{ padding: '0 5px' }}>
          {time.m}
        </div>
        <div>
          :
        </div>
        <div style={{ padding: '0 5px' }}>
          {time.s}
        </div>
      </div>
    )
  }
}

export default Example
