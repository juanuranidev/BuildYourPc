import React from 'react'
import "./OrderProduct.scss"

export default function OrderProduct({product}) {
  return (
    <div className='orderProduct'>
      <img src={product.image} className='orderProduct_img' />
      <h3 className='orderProduct_h3'>{product.name}</h3>
      <div className='orderProduct_content'>
        <p className='orderProduct_content_p'>
          <b>Cantidad:</b> {product.quantity} * ${(product.price).toLocaleString("ES-ar")}
        </p>
        <p className='orderProduct_content_p'>
          <b>Total:</b> ${(product.quantity * product.price).toLocaleString("ES-ar")}
        </p>
      </div>
  </div>
  )
}
