import authRoute from './auth'
import homeRoute from './home'
import foodCourt from './foodCourt'
import menu from './menu'
import cart from './cart'
import process from './process'
import voucher from './voucher'
import orderHistory from './orderHistory'
import profile from './profile'
import favourite from './favourite'

// Owner Stand
import authStand from './stand/auth'
import standHome from './stand/home'

// Owner Routes
import authOwner from './owner/auth'
import ownerRoute from './owner'
import ownerSettings from './owner/settings'
import ownerStand from './owner/stand'
import ownerCategoryStand from './owner/category-stand'

const auth = [
  ...authRoute,
  ...authStand,
  ...authOwner
]
const routes = [
  ...homeRoute,
  ...foodCourt,
  ...menu,
  ...ownerRoute,
  ...cart,
  ...voucher,
  ...orderHistory,
  ...profile,
  ...favourite,
  ...process,
  ...standHome,
  ...ownerSettings,
  ...ownerStand,
  ...ownerCategoryStand
]

export {
  auth,
  routes
}
