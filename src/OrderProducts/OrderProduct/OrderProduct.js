import React from 'react';
import './_OrderProduct.scss';

const OrderProduct = (props) => {
    const totalPriceOfAProduct = (quantity, price) => {
        let totalPrice = 0
        return (totalPrice = quantity * price).toLocaleString("es")
    }

    return (
    <div className='orderProduct'>
        <img src={props.image} className='orderProduct_image'/>
        <div className='orderProduct_info'>
          <h3 className='orderProduct_info_h3'>{props.name}</h3>
          <p className='orderProduct_info_p'>({props.quantity}) x ${(props.price).toLocaleString("es")} = ${totalPriceOfAProduct(props.quantity, props.price)}</p>
        </div>
    </div>
  )
}

export default OrderProduct;