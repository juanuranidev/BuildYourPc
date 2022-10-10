import React from 'react';
import Product from './Product/Product';

const Products = ({data, close}) => {
  return data.map(product => <Product key={product.id} product={product} close={close} />)
}

export default Products;