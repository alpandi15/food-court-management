import React from 'react'
import { connect } from 'react-redux'
import {
  Field,
  reduxForm,
  getFormValues
} from 'redux-form'

import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl'
import TextInput from 'components/Form/Input'
import TextArea from 'components/Form/TextArea'
import ImageUploader from 'components/Form/ImageUploader'
import { config } from 'config'
import { toastify } from 'components/Toast/Toastify'
import { formatTimes } from 'services/utils/masking'
import Pin from 'static/Icon/Pin'
import { getOne, edit } from 'actions/foodcourt/foodCourtAction'
import { get } from 'services/utils/storage'
import { FOODCOURT_SELECTED } from 'constants/index'
import ControlPanel from '../control-panel'

const StandSetting = ({
  invalid,
  loading,
  submitting,
  currentItem,
  handleSubmit,
  edit,
  getOne
}) => {
  const [viewport, setViewport] = React.useState({
    width: 400,
    height: 400,
    latitude: 3.581399,
    longitude: 98.685758,
    zoom: 14
  })

  const [marker, setMarker] = React.useState({})

  const [events, setEvent] = React.useState({})

  const onSubmit = async (values) => {
    if (values && currentItem && currentItem.image && values.image === currentItem.image.url) {
      values.imageRaw = currentItem.image.raw
      values.image = currentItem.image.raw
    }

    if (currentItem && currentItem.id) {
      const result = await edit(currentItem.id, {
        ...values,
        location: {
          lat: viewport.latitude,
          lng: viewport.longitude
        }
      })

      if (result.success) {
        toastify({
          type: 'success',
          message: result.meta.message
        })
      } else {
        toastify({
          type: 'error',
          message: result.message
        })
      }
      console.log('Result ', result)
    }
  }

  React.useEffect(() => {
    const fetch = async () => {
      const storageId = await get(FOODCOURT_SELECTED)
      if (storageId) {
        await getOne(storageId)
      }
    }

    fetch()
  }, [])

  React.useEffect(() => {
    if (currentItem && currentItem.location) {
      setMarker({
        latitude: currentItem.location.lat,
        longitude: currentItem.location.lng
      })
      setViewport({
        ...viewport,
        latitude: currentItem.location.lat,
        longitude: currentItem.location.lng
      })
    }
  }, [currentItem])

  const _logDragEvent = (name, event) => {
    setEvent({
      ...events,
      [name]: event.lngLat
    })
  }

  const _onMarkerDragStart = (event) => {
    _logDragEvent('onDragStart', event)
  }
  const _onMarkerDrag = (event) => {
    _logDragEvent('onDrag', event)
  }
  const _onMarkerDragEnd = (event) => {
    _logDragEvent('onDragEnd', event)
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    })
  }

  return (
    <>
      <div className="content">
        <div className="foodcourt-setting">
          <div className="section">
            <span>Food Court Setting</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="form-stand">
            <div>
              <Field
                id="name"
                name="name"
                label="Nama Food Court"
                type="text"
                component={TextInput}
                contentStyle={{ width: '100%' }}
                active
              />
            </div>
            <div>
              <Field
                id="address"
                name="address"
                label="Alamat"
                type="text"
                component={TextArea}
                dataLength={200}
                contentStyle={{ width: '100%' }}
                active
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Field
                id="timeOpen"
                name="timeOpen"
                label="Jam Buka (Format {MM:DD})"
                type="text"
                component={TextInput}
                format={formatTimes}
                active
              // placeholder="12:30"
              // normalize={normalizeAmount}
              />
              <Field
                id="timeClose"
                name="timeClose"
                label="Jam Tutup (Format {MM:DD})"
                type="text"
                component={TextInput}
                format={formatTimes}
                // placeholder="22:00"
                active
              />
            </div>
            <div>
              <Field
                type="file"
                contentClass=""
                className="team-logo"
                name="image"
                id="image"
                label="Cover Food Court"
                component={ImageUploader}
                contentStyle={{ width: '100%' }}
                active
              />
            </div>
            <div>
              <div className="input-field col" style={{ height: '300px', float: 'none' }}>
                <ReactMapGL
                  {...viewport}
                  onViewportChange={(nextViewport) => setViewport(nextViewport)}
                  mapboxApiAccessToken={config.mapToken}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                  width="100%"
                  height="300px"
                  captureClick
                >
                  <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation
                  />
                  <Marker
                    longitude={marker.longitude}
                    latitude={marker.latitude}
                    offsetTop={-20}
                    offsetLeft={-10}
                    draggable
                    onDragStart={_onMarkerDragStart}
                    onDrag={_onMarkerDrag}
                    onDragEnd={_onMarkerDragEnd}
                  >
                    <Pin size={20} />
                  </Marker>
                  <ControlPanel
                    events={events}
                  />
                </ReactMapGL>
              </div>
            </div>
            <div>
              <Field
                id="description"
                name="description"
                label="Deskripsi Food Coourt"
                type="text"
                component={TextArea}
                dataLength={500}
                contentStyle={{ width: '100%' }}
                active
              />
            </div>
            <div className="button-login">
              <button disabled={invalid || submitting || loading} className="waves-effect waves-light btn btn-app bg-pimary">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const { foodCourt: { currentItem } } = state
  return {
    values: getFormValues('EditFormStand')(state),
    currentItem,
    initialValues: ({
      image: currentItem && currentItem.image && currentItem.image.raw ? currentItem.image.url : undefined,
      name: currentItem && currentItem.name,
      address: currentItem && currentItem.address,
      timeOpen: currentItem && currentItem.timeOpen,
      timeClose: currentItem && currentItem.timeClose,
      description: currentItem && currentItem.description
    })
  }
}

const mapDispatchToProps = (dispatch) => ({
  getOne: (uuid) => dispatch(getOne(uuid)),
  edit: (id, data, guard) => dispatch(edit(id, data, guard))
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'EditFormStand',
  enableReinitialize: true
  // validate
})(StandSetting))
