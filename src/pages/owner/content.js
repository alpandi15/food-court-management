import React from 'react'
import Layout from 'components/Owner/layout'

const MemoLayout = React.memo(Layout)

const Content = ({
  title,
  children
}) => {
  return (
    <MemoLayout>
      <div className="owner-content">
        <div className="header-title">
          <h4>{title}</h4>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </MemoLayout>
  )
}

export default Content
