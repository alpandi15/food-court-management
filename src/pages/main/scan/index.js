import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'react-materialize'

import Header from 'components/Header'

const Modal = dynamic(() => import('components/Modal'), {
  ssr: false
})

const QrReader = dynamic(() => import('react-qr-reader'), {
  ssr: false
})

const image = '/static/Image/Camera.png'

const styles = {
  cameraLoading: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    top: '180px'
  },
  cameraLoadingText: {
    backgroundColor: '#f76c6c',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '50px'
  }
}
const ScanQr = () => {
  const [data, setData] = React.useState('No result')
  const [modal, setModal] = React.useState(false)
  const [loadCamera, setLoadCamera] = React.useState({
    loading: true,
    success: true
  })
  const [cameraMode, setCameraMode] = React.useState('environment')

  const handleModal = (status) => {
    setModal(status)
  }

  const handleCameraMode = () => {
    if (cameraMode === 'environment') {
      setCameraMode('user')
    } else {
      setCameraMode('environment')
    }
    console.log('Switch ', cameraMode)
  }

  const handleScan = (data) => {
    // alert(data)
    if (data) {
      setData(data)
      Router.push('/home')
    }
  }

  const handleError = (err) => {
    // alert('Error ', err)
    console.error('Ini Error', err)
    handleModal(true)
    setLoadCamera({
      success: false,
      ...loadCamera
    })
  }

  const onLoad = (status) => {
    console.log('Loaded ', status)
    setLoadCamera({
      loading: false,
      ...loadCamera
    })
  }

  return (
    <>
      <Header transparent />
      <div className="mobile-layout-content scan-qr">
        <div className="scanner-wrapper">
          <div className="camera-loading" style={styles.cameraLoading}>
            {
              loadCamera.loading ? (
                <div className="camera-loading-text" style={styles.cameraLoadingText}>
                  Sedang memuat kamera...
                  <br />
                  {!loadCamera.success ? 'Kamera Error' : ''}
                </div>
              ) : ''
            }
          </div>
          <QrReader
            legacyMode={false}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            onLoad={onLoad}
            facingMode={cameraMode}
            resolution={600}
            // style={{ width: '100%' }}
            className="qrcode-scanner"
          />
          <div className="switch-camera">
            <button className="btn-flat waves-effect" onClick={() => handleCameraMode()}>
              <i className="material-icons">camera_front</i>
            </button>
          </div>
        </div>
        <div className="content">
          <div className="fixed-button">
            <div className="result">{data}</div>
            <div className="button-login">
              <Link href="/main/manual">
                <a className="waves-effect waves-light btn btn-app bg-grey">Masukkan ID Manual</a>
              </Link>
              <div className="forgot-password">
                <span>Tidak bisa scan kode QR? Silahkan masukkan ID secara manual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modal}
        onCloseStart={handleModal}
        id="ModalInformasi"
        className="modal-app"
        footerContent={(
          <Button
            className="waves-effect waves-light btn btn-app"
            modal="close"
            node="button"
            style={{
              color: 'red !important'
            }}
          >
            Tutup Halaman
          </Button>
        )}
      >
        <div className="modal-center-custom">
          <div className="modal-header">
            <img src={image} alt="" />
          </div>
          <div className="modal-body">
            Device Kamera kamu tidak dapat di akses atau tidak terdeteksi,
            silahkan masukkan ID Manual
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ScanQr
