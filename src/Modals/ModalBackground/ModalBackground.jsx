import React from 'react'
import './ModalBackground.scss'

function ModalBackground({open, close}) {
  return (
    <div className={`modalBackground ${open && 'modalBackground_visible'}`} onClick={close} />
  )
}

export default ModalBackground