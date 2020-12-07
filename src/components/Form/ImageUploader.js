import React, { useState } from 'react'
// import AvatarDefault from 'static/Image/default_image.png'

const style = {
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover'
  }
}

const ImageUploader = ({
  imageDefault,
  contentClass,
  className,
  input,
  label,
  id,
  meta: {
    touched,
    error
  }
}) => {
  const [image, setImage] = useState(input.value)
  const onHandleFile = (e) => {
    if (e && e.target && e.target.files && e.target.files[0]) {
      input.onChange(e.target.files[0])
      const file = e.target.files[0]
      setImage(URL.createObjectURL(file))
    }
  }

  return (
    <div className={contentClass ? `image-uploader input-field col ${contentClass}` : 'image-uploader input-field col'}>
      {label && (
        <label className="active">{label}</label>
      )}
      {((error || touched) && <span style={style.error} className="error-input">{error}</span>)}
      {image || (input && input.value) ? (
        <img src={image || (input.value || '')} className={`image ${className}`} alt="profile" />
      ) : (
          <img src={imageDefault || "static/Image/default_image.png"} className={`image ${className}`} alt="profile" />
        )}
      <input
        type="file"
        className="d-none"
        id={id}
        accept="image/jpeg, image/jpg, image/gif, image/png, image/JPG, image/JPEG"
        onChange={onHandleFile}
      />
      <label className="btn-openfile waves-effect waves-light btn" htmlFor={id} style={{ cursor: 'pointer' }}>
        <span className="d-flex">
          <i className="material-icons">add_a_photo</i>
        </span>
      </label>
    </div>
  )
}

export default ImageUploader
