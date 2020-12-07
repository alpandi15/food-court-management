import React from 'react'
import { Link } from 'react-router-dom'

const OrderPreview = () => {
  return (
    <div className="order-preview active">
      <div className="order-preview-wrapper">
        <div>
          <div className="item-count">4 Item</div>
          <div className="total-price">Rp 107.000</div>
        </div>
        <div>
          <Link to="/cart" className="btn btn-app-primary waves-effect" style={{ width: '100px' }}>Pesan</Link>
        </div>
      </div>
    </div>
  )
}

export default OrderPreview
