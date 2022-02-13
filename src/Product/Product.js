import React from 'react'
import { useOrderContext } from '../Context/OrderContext'
import './_Product.scss'

const Product = (props) => {
  const { addProductToOrder } = useOrderContext()

  return (
    <div className='product'>
      <img src={props.image} className='product_img' />
      <h3 className='product_h3'>{props.name}</h3>
      <div className='product_div'>
        <p className='product_div_p'>${parseFloat(props.price).toLocaleString("es")}</p>
        <button onClick={() => addProductToOrder(props.product)} className='product_div_button' >Agregar</button>
      </div>
    </div>
  )
}

export default Product;