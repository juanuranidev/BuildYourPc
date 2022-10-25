import React from 'react'
import Products from '../../Products/Products'
import "./ModalOrderContent.scss"
import OrderProduct from './OrderProduct/OrderProduct'

export default function ModalOrderContent({order, close, openPdf, totalPrice}) {
  return (
    <div className='modalOrderContent'>
      <div className="modalOrderContent_close">
        <span class="material-symbols-outlined modalOrderContent_close_p" onClick={close}>close</span>
      </div>
      <div className='modalOrderContent_header'>
        <div className='modalOrderContent_header_main'>
          <h2 className='modalOrderContent_header_main_h2'>Resumen de tu Pedido</h2>
          <h4>Total del pedido: ${(totalPrice).toLocaleString("ES-ar")}</h4>
        </div>
        <div className='modalOrderContent_header_div'>
          <button className='modalOrderContent_header_div_button' onClick={openPdf}>Descargar PDF</button>
          <p className='modalOrderContent_header_div_p' onClick={close}>Regresar y Editar</p>
        </div>
      </div>
      <div className='modalOrderContent_content'>
        {order.map((product) => <OrderProduct product={product} key={product.id} /> )}
      </div>
    </div>
  )
}
