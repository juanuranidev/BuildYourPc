import React from 'react'
import { useOrderContext } from '../Context/OrderContext'

const AsideProduct = ({product}) => {
    const { order, getProducts } = useOrderContext()

  let productToFind = order.find(e => e.category === product)
  
  console.log(productToFind)

  return (
    <div className='asideItem' onClick={() => getProducts(product)}>
        <img src={productToFind.image}  className='asideItem_img'/>
        <div className='asideItem_div'>
            <h3 className='asideItem_h3'>{productToFind.name}</h3>
            <p className='asideItem_p'>{productToFind.price}</p>
        </div>
    </div>
    )
}

export default AsideProduct