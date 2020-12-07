import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

const toastify = ({
  type,
  message
}) => {
  if (type === 'success'
  || type === 'error'
  || type === 'warn'
  || type === 'info'
  || type === 'dark'
  ) {
    toast[`${type}`](message, {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  } else {
    toast.dark('Error Type, [success, error, warn]', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }
}

toastify.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export {
  toastify
}
