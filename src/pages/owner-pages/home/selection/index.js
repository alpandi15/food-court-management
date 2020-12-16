import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import SelectionDefault from 'components/Form/Selection'
import { set } from 'services/utils/storage'
import { toastify } from 'components/Toast/Toastify'
import { getMy } from 'actions/foodcourt/foodCourtAction'
import { FOODCOURT_SELECTED } from 'constants'

const cover = '/static/Image/fcm-cover.jpg'
// import generateOption from '../../actions/utils/generateOption'

const generateOption = (datas) => {
  let options = []
  datas.map((value) => {
    return options.push({
      value: String(value.id),
      id: String(value.id),
      label: value.name
    })
  })

  return options
}

const SelectFoodCourt = ({
  invalid,
  loading,
  submitting,
  handleSubmit,
  getMy,
  list
  // initialize
}) => {
  const history = useHistory()
  const [listFoodcourt, setList] = React.useState(null)

  React.useEffect(() => {
    const fetch = async () => {
      await getMy()
      console.log('MY API ')
    }

    fetch()
  }, [])

  React.useEffect(() => {
    if (list && list.length > 0) {
      setList([
        {
          value: '',
          label: '[PILIH FOOD COURT]'
        },
        ...list
      ])
    }
  }, [list])

  const onSubmit = (values) => {
    console.log(values)
    if (values && values.id) {
      set(FOODCOURT_SELECTED, values.id)
      history.push('/owner')
    } else {
      toastify({
        type: 'error',
        message: 'Mohon Pilih Food Court'
      })
    }
  }
  return (
    <>
      <div className="row owner-container">
        <div className="col s12 m12 l12 content-select-foodcourt">
          <div className="select-food-court">
            <img src={cover} alt="" className="image" />
            <div className="text">
              Terima Kasih Sudah
              Bergabung Dengan Kami
            </div>
            <div className="form-selection">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                  <Field
                    id="id"
                    name="id"
                    label="Pilih Food Court"
                    options={listFoodcourt}
                    component={SelectionDefault}
                    className="select-foodcourt"
                  />
                </div>
                <div className="button">
                  <button disabled={invalid || submitting || loading} className="waves-effect waves-light btn btn-app bg-pimary">Lanjut ke Halaman Dashboard</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const { foodCourt } = state
  return {
    values: getFormValues('FormSelectionFoodcourt')(state),
    list: generateOption(foodCourt.list)
  }
}

const mapDispatchToProps = dispatch => ({
  getMy: data => dispatch(getMy(data))
})

export default reduxForm({
  form: 'FormSelectionFoodcourt'
})(connect(mapStateToProps, mapDispatchToProps)(SelectFoodCourt))
