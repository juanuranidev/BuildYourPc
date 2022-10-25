import React from 'react'
import "./OrderProduct.scss"

export default function OrderProduct({product}) {
  return (
    <div className='orderProduct'>
      <img src={product.image} className='orderProduct_img' />
      <h3 className='orderProduct_h3'>{product.name}</h3>
      <div className='orderProduct_content'>
        <p className='orderProduct_content_p'>Cantidad: {product.quantity}</p>
        <p className='orderProduct_content_p'>Precio por unidad: {product.price}</p>
        <p className='orderProduct_content_p'>Total: {(product.quantity * product.price)}</p>
      </div>
  </div>
  )
}
