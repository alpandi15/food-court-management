import React from 'react'
import CustomHelmet from 'components/CustomHelmet'

const SideNav = React.lazy(() => import('./SideNav'))
const Container = React.lazy(() => import('./Container'))

const MemoSizeNav = React.memo(SideNav)
const MemoContainer = React.memo(Container)

const Layout = ({
  children
}) => {
  return (
    <>
      <CustomHelmet>
        <link async rel="preload" type="text/css" charset="UTF-8" href="/static/Css/owner/owner.css" />
        <link async rel="preload" type="text/css" charset="UTF-8" href="/mapbox-gl/dist/mapbox-gl.css" />
      </CustomHelmet>

      <div className="row admin-container">
        <MemoSizeNav />
        <MemoContainer>
          {children}
        </MemoContainer>
      </div>
    </>
  )
}

export default Layout
