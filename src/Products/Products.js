import React from 'react'
import './_Products.scss'
import { useOrderContext } from '../Context/OrderContext'
import Product from '../Product/Product'

const Products = () => {
  const { data } = useOrderContext()

  return (
    <div className='products'>
      {
        data.map(product => <Product key={product.id} name={product.name} />)
      }
    </div>
  )
}

export default Products