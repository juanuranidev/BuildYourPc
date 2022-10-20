import React from 'react'
import "./ModalOrderContent.scss"

export default function ModalOrderContent({order, openPdf}) {
  return (
    <div className='modalOrderConten'>
        <div className='modalOrderConten_header'>
            <h2 className='modalOrderConten_header_h2'>Resumen de tu Pedido</h2>
            <div className='modalOrderConten_header_div'>
                <button className='modalOrderConten_header_div_button' onClick={openPdf}>Descargar PDF</button>
                <p className='modalOrderConten_header_div_p'>Regresar y Editar</p>
            </div>
        </div>
    </div>
  )
}
