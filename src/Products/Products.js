import React from 'react';
import Product from './Product/Product';
import './_Products.scss';

const Products = ({data, close}) => {
  return data.map(product => <Product key={product.id} product={product} close={close} />)
}

export default Products;