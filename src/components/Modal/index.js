import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-materialize'

const ModalForm = ({
  id,
  modalBottom = false,
  fixedFooter = false,
  onCloseStart,
  children,
  open,
  footerContent,
  endingTop = '25%',
  className
}) => {
  console.log('Modal ', open)
  return (
    <Modal
      actions={footerContent || [
        <Button flat modal="close" node="button" waves="green">Tutup</Button>
      ]}
      bottomSheet={modalBottom}
      fixedFooter={fixedFooter}
      className={className}
      id={id}
      open={open}
      options={{
        dismissible: false,
        endingTop,
        inDuration: 250,
        onCloseEnd: () => onCloseStart(open),
        // onCloseStart: () => onCloseStart(open),
        // onOpenEnd: () => console.log('On Open End'),
        // onOpenStart: () => console.log('On Open Start'),
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: '4%'
      }}
    >
      {children}
    </Modal>
  )
}

ModalForm.propTypes = {
  modalBottom: PropTypes.bool,
  fixedFooter: PropTypes.bool,
  onCloseStart: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
}

export default ModalForm
