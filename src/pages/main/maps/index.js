import React from 'react'
import Link from 'next/link'
import CustomHelmet from 'components/CustomHelmet'
// import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL, {
  GeolocateControl, Popup, NavigationControl, ScaleControl
} from 'react-map-gl'
import { config } from 'config'

import Header from 'components/Header'
import CityInfo from './cityInfo'
import Pins from './Pins'

const imageFC = '/static/Image/food-court.jpg'
// import CITIES from './cities.json'

const geolocateStyle = {
  position: 'fixed',
  top: 160,
  left: 0,
  padding: '10px'
}

// const fullscreenControlStyle = {
//   position: 'fixed',
//   top: 60,
//   left: 0,
//   padding: '10px'
// }

const navStyle = {
  position: 'fixed',
  top: 60,
  left: 0,
  padding: '10px'
}

const scaleControlStyle = {
  position: 'fixed',
  bottom: '13rem',
  left: 0,
  padding: '10px'
}

const listFood = [
  {
    id: 1, name: 'Medan Night Market', city: 'Medan', population: '8,175,133', image: 'https://cdn-2.tstatic.net/medan/foto/bank/images/night-view-podomoro-city-deli-medan-tampak-sangat-megah-dan-modern.jpg', state: 'Petisah', latitude: 3.58148, longitude: 98.68658
  },
  {
    id: 2, name: 'The best stree food', city: 'Medan', population: '8,175,133', image: 'https://www.agungpodomoro.com/storage/app/uploads/public/5e2/816/7f8/thumb_316_1000_590_0_0_crop.jpg', state: 'Tembung', latitude: 3.57684, longitude: 98.68017
  },
  {
    id: 3, name: 'Jakarta Food', city: 'Medan', population: '8,175,133', image: 'https://images.bisnis-cdn.com/posts/2019/11/15/1170733/podomoro-city-medan.jpg', state: 'Deli Tua', latitude: 3.56723, longitude: 98.70660
  },
  {
    id: 4, name: 'Tembung Food Cafe', city: 'Medan', population: '8,175,133', image: 'https://cdn-2.tstatic.net/medan/foto/bank/images/hari-libur-kondisi-jalanan-di-kota-medan-sepi-banyak-warga-berlibur-ke-daerah-puncak.jpg', state: 'Asrama Haji', latitude: 3.58382, longitude: 98.70393
  }
]

const LocationFoodCourt = ({
  title
}) => {
  const [viewport, setViewport] = React.useState({
    width: 400,
    height: 400,
    latitude: 3.581399,
    longitude: 98.685758,
    zoom: 12
  })

  const [popupInfo, setPopupInfo] = React.useState(null)

  const _updateViewport = (viewport) => {
    setViewport(viewport)
  }

  const _onClickMarker = (city) => {
    setPopupInfo(city)
  }

  const _renderPopup = () => {
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    )
  }
  return (
    <>
      <CustomHelmet title={title}>
        <link async rel="preload" type="text/css" charset="UTF-8" href="mapbox-gl/dist/mapbox-gl.css" />
      </CustomHelmet>
      <Header
        textStyle={{
          color: '#000000'
        }}
      >
        <span className="header-title">Lokasi Food Court</span>
      </Header>
      <div className="mobile-layout-content">
        <ReactMapGL
          {...viewport}
          onViewportChange={nextViewport => _updateViewport(nextViewport)}
          mapboxApiAccessToken={config.mapToken}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          width="100%"
          height="80%"
          captureClick
        >
          <Pins data={listFood} onClick={_onClickMarker} />
          {_renderPopup()}
          <div style={geolocateStyle}>
            <GeolocateControl
              positionOptions={{ enableHighAccuracy: true, maxZoom: 15 }}
              trackUserLocation
            />
          </div>
          {/* <div style={fullscreenControlStyle}>
            <FullscreenControl />
          </div> */}
          <div style={navStyle}>
            <NavigationControl />
          </div>
          <div style={scaleControlStyle}>
            <ScaleControl />
          </div>
        </ReactMapGL>
        <div className="content">
          <div className="foodcourt-list-wrapper">
            <div className="title-list">Semua Lokasi</div>
            <div className="food-court-list">
              {
                listFood && listFood.map((val, index) => (
                  <div className="food-court-item" key={index}>
                    <Link href="#">
                      <a>
                        <div>
                          <img src={imageFC} alt="" />
                        </div>
                        <div className="title">
                          {val.name}
                        </div>
                      </a>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

LocationFoodCourt.defaultProps = {
  title: 'List Food Court'
}


export default LocationFoodCourt
