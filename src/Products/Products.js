import React from 'react'
import './_Products.scss'
import { useOrderContext } from '../Context/OrderContext'
import Product from '../Product/Product'

const Products = () => {
  const { data } = useOrderContext()

  return (
    <div className='products'>
        {data.map(product => <Product key={product.id} name={product.name} price={product.price} image={product.image} product={product} stock={product.stock} />)}
    </div>
  )
}

export default Products