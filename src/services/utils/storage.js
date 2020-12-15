import Cookies from 'js-cookie'

const getSessionTable = () => {
  const session = Cookies.get('session_table')

  return session || null
}

const getAccessToken = (guard) => {
  // let data = localStorage.getItem(`access_token_${guard}`)
  const data = Cookies.get(`access_token_${guard}`)
  const parsed = data || null
  return parsed
}

const getRefreshToken = (guard) => {
  // let data = localStorage.getItem(`access_token_${guard}`)
  const data = Cookies.get(`refresh_token_${guard}`)
  const parsed = data || null
  return parsed
}

const get = async (key) => {
  let data = []
  try {
    data = localStorage.getItem(key)
    return data
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}

const set = async (key, data) => {
  try {
    localStorage.setItem(key, data)
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}

const remove = async (key) => {
  try {
    const removeProgress = localStorage.removeItem(key)
    return removeProgress
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}
export {
  getSessionTable,
  getAccessToken,
  getRefreshToken,
  get,
  set,
  remove
}
