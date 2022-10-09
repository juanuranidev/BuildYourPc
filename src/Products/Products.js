import React from 'react';
import { useOrderContext } from '../Context/OrderContext';
import Product from './Product/Product';
import './_Products.scss';

const Products = ({data}) => {
  return (
    <div className='products'>
        {data.map(product => <Product key={product.id} name={product.name} price={product.price} image={product.image} product={product} stock={product.stock} />)}
    </div>
  )
}

export default Products;