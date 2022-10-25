import React from 'react'
import Products from '../../Products/Products'
import "./ModalOrderContent.scss"
import OrderProduct from './OrderProduct/OrderProduct'

export default function ModalOrderContent({order, close, openPdf}) {
  return (
    <div className='modalOrderConten'>
        <div className='modalOrderConten_header'>
            <h2 className='modalOrderConten_header_h2'>Resumen de tu Pedido</h2>
            <div className='modalOrderConten_header_div'>
                <button className='modalOrderConten_header_div_button' onClick={openPdf}>Descargar PDF</button>
                <p className='modalOrderConten_header_div_p' onClick={close}>Regresar y Editar</p>
            </div>
        </div>
        <div className='modalOrderConten_content'>
          {order.map((product) => <OrderProduct product={product} key={product.id} /> )}
        </div>
    </div>
  )
}
