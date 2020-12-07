import React, { Component } from 'react'

class Loading extends Component {
  render () {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          alignItems: 'center',
          position: 'absolute',
          width: '100%',
          zIndex: 1000,
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}
      >
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Loading
