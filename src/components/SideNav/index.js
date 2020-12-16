import React from 'react'
import { useDrag } from 'react-use-gesture'
// import { Link } from 'react-router-dom'
import Link from 'next/link'
import { useSpring, a, config } from 'react-spring'

const width = -270

const SideNav = () => {
  console.log('RERENDERING....')
  const [{ x }, set] = useSpring(() => ({ x: width }))
  const open = ({ canceled }) => {
    console.log('OPEN BRO')
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    set({ x: 0, immediate: false, config: canceled ? config.wobbly : config.stiff })
  }
  const close = (velocity = 0) => {
    console.log('On Closed ')
    set({ x: width, immediate: false, config: { ...config.stiff, velocity } })
  }

  const bind = useDrag(
    ({
      last,
      vxvy: [vx],
      movement: [mx],
      cancel,
      canceled
    }) => {
      console.log('MX ', mx)
      // console.log('VX ', vx)
      console.log('LAST ', last)
      // if the user drags up passed a threshold, then we cancel
      // the drag so that the sheet resets to its open position
      if (mx > 70) {
        console.log('CANCEL ', mx)
        cancel()
        // eslint-disable-next-line brace-style
      }

      // when the user releases the sheet, we check whether it passed
      // the threshold for it to close, or if we reset it to its open positino
      if (last) {
        console.log('IN LAST ', mx, width * 0.5)
        // if (mx > width * 0.5 || vx > 0.5) {
        if (mx < width * 0.5) {
          close(vx)
        } else {
          open({ canceled })
        }
        // eslint-disable-next-line brace-style
      }
      // when the user keeps dragging, we just move the sheet according to
      // the cursor position
      else set({ x: mx, immediate: false })
    },
    {
      initial: () => [x.get(), 0], filterTaps: true, bounds: { right: 0 }, rubberband: true
    }
  )

  const callBind = React.useCallback(bind, [])
  const callOpen = React.useCallback(open, [])
  const display = x.to(px => (px > width ? 'block' : 'none'))

  return (
    <>
      <div className="main-stand-header">
        <div className="menu-burger waves-effect" onClick={callOpen}>
          <img src="/static/Icon/Menu.svg" alt="" />
        </div>
        <div className="notification has-notif">
          <Link href="#">
            <a>
              <img src="static/Icon/Notif.svg" alt="" />
            </a>
          </Link>
        </div>
      </div>
      <a.div {...callBind()} style={{ display, x }} className="side-nav">
        Ini sidenav
      </a.div>
    </>
  )
}

export default SideNav
