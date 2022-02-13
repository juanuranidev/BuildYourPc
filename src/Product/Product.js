import React from 'react'
import { useOrderContext } from '../Context/OrderContext'

const Product = ({image, name, price, product}) => {

  const { addProductToOrder, order } = useOrderContext()

  // console.log(order)

  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={() => addProductToOrder(product)} >Agregar</button>
    </div>
  )
}

export default Product