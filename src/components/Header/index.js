/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import Router from 'next/router'
import { Icon } from 'react-materialize'
import color from '../../theme/color'

const styles = {
  contentHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonBack: {
    margin: '0 5px',
    cursor: 'pointer',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: color.secondaryColor
  },
  title: {
    fontSize: '18px'
  },
  textColor: {
    color: color.white
  }
}

const Header = ({
  transparent,
  // backgroundColor = color.white,
  textStyle = styles.textColor,
  title,
  children
}) => {
  const goBack = () => {
    Router.back()
  }

  return (
    <div className="navbar-fixed">
      <nav className={transparent ? 'transparent' : 'scroll'}>
        <div className="nav-wrapper">
          <div className="mobile-layout-header" style={styles.contentHeader}>
            <div
              className="nav-prev-button waves-effect"
              style={textStyle}
              onClick={goBack}
            >
              <Icon>arrow_back</Icon>
            </div>
            {
              children || (title ? (
                <span style={textStyle}>{title}</span>
              ) : null)
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
