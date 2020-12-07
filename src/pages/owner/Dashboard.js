import React from 'react'
import Layout from 'components/Owner/layout'

const MemoLayout = React.memo(Layout)

const Dashboard = () => {
  return (
    <MemoLayout>
      Dashboard
    </MemoLayout>
  )
}

export default Dashboard
