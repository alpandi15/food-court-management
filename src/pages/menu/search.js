import React from 'react'

import SearchInput from '../../components/Form/SearchInput'

const Search = ({
  open,
  onHide
}) => {
  return (
    <div className={`modal-search ${open ? 'open' : ''}`}>
      <div className="top-modal">
        <div className="close-button waves-effect" onClick={() => onHide(false)}>
          <i className="material-icons">close</i>
        </div>
        <SearchInput placeholder="Cari Menu" autoFocus />
      </div>
      <div className="body-modal">
        <div className="body-modal-title">
          <span>Hasil Pencarian</span>
        </div>
        <div className="menu">
          <div className="menu-item">
            <div className="menu-wrapper waves-effect">
              <div className="menu-image">
                <img src="static/Image/food-court.jpg" alt="" />
              </div>
              <div className="menu-desc">
                <div className="menu-name">Ini makanan</div>
                <div className="menu-short-desc">Ini deskripsi</div>
                <div className="menu-price">Rp 1.000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
