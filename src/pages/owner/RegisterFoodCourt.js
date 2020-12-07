import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Field, reduxForm, getFormValues } from 'redux-form'
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl'
import TextInput from 'components/Form/Input'
import TextArea from 'components/Form/TextArea'
import ImageUploader from 'components/Form/ImageUploader'
import { config } from 'config'
import { toastify } from 'components/Toast/Toastify'
import { formatTimes } from '../../services/utils/masking'
import Pin from '../../static/Icon/Pin'
import ControlPanel from './control-panel'
import { add as createFoodcourt } from '../../actions/foodcourt/foodCourtAction'

const Register = ({
  invalid,
  loading,
  submitting,
  handleSubmit,
  createFoodcourt
}) => {
  const history = useHistory()
  const [viewport, setViewport] = React.useState({
    width: 400,
    height: 400,
    latitude: 3.581399,
    longitude: 98.685758,
    zoom: 14
  })

  const [marker, setMarker] = React.useState({
    latitude: 3.581399,
    longitude: 98.685758
  })

  const [events, setEvent] = React.useState({})

  const onSubmit = async (values) => {
    console.log('Values ', {
      ...values,
      location: {
        lat: viewport.latitude,
        lng: viewport.longitude
      }
    })

    const result = await createFoodcourt({
      name: values.name || '',
      address: values.address || '',
      image: values.image || '',
      description: values.description || '',
      timeOpen: values.timeOpen || '',
      timeClose: values.timeClose || '',
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
      history.push('/owner')
    } else {
      toastify({
        type: 'error',
        message: result.message
      })
    }
  }

  React.useEffect(() => {
    setMarker({
      latitude: 3.581399,
      longitude: 98.685758
    })
  }, [])

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
      <div className="row owner-container">
        <div className="col s12 m12 l7 image-content">
          <div className="information">
            <img className="logo" src="static/Image/fcm-cover.jpg" alt="" />
            <div className="title">
              Terima Kasih Sudah
              Bergabung Dengan Kami
            </div>
            <p>
              Tim kami akan segera menghubungi kamu
              dalam waktu 1x24 Jam untuk mengkonfirmasi
              pendaftaran kamu
            </p>
          </div>
        </div>
        <div className="col s12 m12 l5 content">
          <div className="form-content">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Field
                  id="name"
                  name="name"
                  label="Nama Food Court"
                  type="text"
                  component={TextInput}
                  contentStyle={{ width: '100%' }}
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
              <div className="button-login">
                <button disabled={invalid || submitting || loading} className="waves-effect waves-light btn btn-app bg-pimary">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    values: getFormValues('FormRegisterOwner')(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  createFoodcourt: (data) => dispatch(createFoodcourt(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'FormRegisterOwner'
  // validate
})(Register))
