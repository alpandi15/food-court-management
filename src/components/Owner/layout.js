import React from 'react'
import CustomHelmet from 'components/CustomHelmet'
import SideNav from './SideNav'
import Container from './Container'

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
        <SideNav />
        <Container>
          {children}
        </Container>
      </div>
    </>
  )
}

export default Layout
