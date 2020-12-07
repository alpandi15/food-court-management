import React from 'react'
import Layout from 'components/Owner/layout'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'react-materialize'

const MemoLayout = React.memo(Layout)

const ProfileSetting = React.lazy(() => import('./ProfileSetting'))
const FoodCourtSetting = React.lazy(() => import('./FoodCourtSetting'))

const Settings = () => {
  return (
    <MemoLayout>
      <div className="owner-content">
        <div className="header-title">
          <h4>Pengaturan</h4>
        </div>
        <Tabs className="tabs-fixed-width tab-demo tabs-setting">
          <Tab
            active
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title="Profil Akun"
          >
            <ProfileSetting />
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title="Food Court Setting"
          >
            <FoodCourtSetting />
          </Tab>
        </Tabs>
      </div>
    </MemoLayout>
  )
}

const mapStateToProps = (state) => {
  const { accountStore } = state
  return {
    loadingUser: accountStore.loading,
    userData: accountStore.currentItem
  }
}

export default connect(mapStateToProps, null)(Settings)
