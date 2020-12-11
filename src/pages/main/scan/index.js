import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
// import QrReader from 'react-qr-reader'
// import { Link } from 'react-router-dom'
import { Button } from 'react-materialize'

import Header from 'components/Header'
import Modal from 'components/Modal'

const QrReader = dynamic(() => import('react-qr-reader'), {
  ssr: false
})

const image = 'static/Image/Camera.png'

const ScanQr = () => {
  const [data, setData] = React.useState('No result')
  const [modal, setModal] = React.useState(false)
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
    }
  }

  const handleError = (err) => {
    // alert('Error ', err)
    console.error('Ini Error', err)
    alert('Camera Error')
    handleModal(true)
  }

  const onLoad = (status) => {
    console.log('Loaded ', status)
  }

  return (
    <>
      <Header transparent />
      <div className="mobile-layout-content scan-qr">
        <div className="scanner-wrapper">
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
              <Link href="/manual" className="waves-effect waves-light btn btn-app bg-grey">Masukkan ID Manual</Link>
              <div className="forgot-password">
                <span>Tidak bisa scan kode QR? Silahkan masukkan ID secara manual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal
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
      </Modal> */}
    </>
  )
}

export default ScanQr
