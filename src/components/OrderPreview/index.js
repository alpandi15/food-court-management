import React from 'react'
import Link from 'next/link'

const OrderPreview = () => {
  return (
    <div className="order-preview active">
      <div className="order-preview-wrapper">
        <div>
          <div className="item-count">4 Item</div>
          <div className="total-price">Rp 107.000</div>
        </div>
        <div>
          <Link href="/cart">
            <a className="btn btn-app-primary waves-effect" style={{ width: '100px' }}>
              Pesan
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderPreview
