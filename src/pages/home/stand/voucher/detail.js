import React from 'react'
import dynamic from 'next/dynamic'
import Header from 'components/Header'
import { Icon } from 'react-materialize'
import color from 'theme/color'

const image = '/static/Image/food-court.jpg'

const Modal = dynamic(() => import('components/Modal'), {
  ssr: false
})

const VoucherDetail = () => {
  const [headerActive, setHeaderActive] = React.useState(false)
  const [modal, setModal] = React.useState(false)
  const [modalUse, setModalUse] = React.useState(false)

  const handleModal = (status) => {
    setModal(status)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 250) {
        setHeaderActive(true)
      } else {
        setHeaderActive(false)
      }
    })
  }, [])

  return (
    <>
      <Header
        transparent={!headerActive}
        textStyle={{
          color: color.primaryColor,
          backgroundColor: color.white,
          borderRadius: '10px',
          width: '45px',
          height: '45px',
          marginRight: '.5rem'
        }}
      />

      <div className="mobile-layout-content">
        <div className="food-court-image voucher-image">
          <img src={image} alt="" />
        </div>

        <div className="content padding-bottom voucher-detail">
          <div className="content-header">
            <div>
              <div className="title-wrapper">
                <div className="voucher-title">MKNENAKBGT25</div>
                <div className="voucher-strip">Potongan 25%</div>
              </div>
              <div className="voucher-exp">Berlaku sampai 10 Nov 2020</div>
            </div>
          </div>
          <div className="content-body">
            <div onClick={() => handleModal(true)}>
              <div className="info-wrapper waves-effect">
                <div className="info-icon">
                  <Icon>info</Icon>
                </div>
                <div className="text-wrapper">
                  <div>
                    <div className="title">
                      <span>Syarat dan Ketentuan</span>
                    </div>
                    <div className="subtitle">
                      <span>Silahkan baca syarat dan ketentan yang berlaku untuk voucher ini</span>
                    </div>
                  </div>
                  <div>
                    <Icon>chevron_right</Icon>
                  </div>
                </div>
              </div>
            </div>

            <div onClick={() => setModalUse(true)} className="info-wrapper waves-effect">
              <div className="info-icon">
                <Icon>local_activity</Icon>
              </div>
              <div className="text-wrapper">
                <div>
                  <div className="title">
                    <span>Cara Menggunakan Voucher</span>
                  </div>
                  <div className="subtitle">
                    <span>Baca cara menggunakan voucher ini</span>
                  </div>
                </div>
                <div>
                  <Icon>chevron_right</Icon>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed-button">
            <button className="btn btn-app waves-effect waves-light block">
              <span>Pakai Voucher</span>
            </button>
          </div>
        </div>
      </div>

      <Modal
        open={modal}
        onCloseStart={handleModal}
        id="ModalInformasi"
        endingTop="10%"
        modalBottom
        footerContent={[]}
      >
        <div className="modal-content-custom">
          <button
            className="btn modal-close close waves-effect btn-close"
            node="button"
          >
            <Icon>close</Icon>
          </button>
          <div>
            <div className="modal-title">Syarat dan Ketentuan</div>
            <div className="modal-list">
              <ol>
                <li>Voucher tidak dapat digunakan dengan voucher lainnya</li>
                <li>Minimal Pembelian Rp 100.000</li>
                <li>Maksimal Potongan Rp 15.000</li>
                <li>Voucher hanya berlaku untuk stand zeribowl</li>
              </ol>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        open={modalUse}
        onCloseStart={setModalUse}
        id="ModalUse"
        endingTop="10%"
        modalBottom
        footerContent={[]}
      >
        <div className="modal-content-custom">
          <button
            className="btn modal-close close waves-effect btn-close"
            node="button"
          >
            <Icon>close</Icon>
          </button>
          <div>
            <div className="modal-title">Cara Menggunakan Voucher</div>
            <div className="modal-list">
              <ol>
                <li>Pada halaman voucher atau detail voucher, klik tombol pakai voucher</li>
                <li>Voucher akan otomatis digunakan untuk pesanan kamu pada stand ini</li>
                <li>Harga pesanan kamu pada stand ini akan terpotong otomatis</li>
              </ol>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default VoucherDetail
