import React from 'react';
import { useOrderContext } from '../../Context/OrderContext';
import './_AsideProduct.scss';

const AsideProduct = (props) => {
    const { order, getProducts } = useOrderContext()
    let productToFind = order.find(e => e.category === props.fetch)

    return (
      <div className='asideProduct' onClick={() => getProducts(props.fetch)}>
          <img src={productToFind.image} className='asideProduct_img'/>
          <div className='asideProduct_div'>
              <h3 className='asideProduct_h3'>{props.fetch}</h3>
              <p className='asideProduct_p'>{productToFind.name}</p>
              <p className='asideProduct_p'>${(productToFind.price).toLocaleString("es")}</p>
          </div>
      </div>
    )
}

export default AsideProduct;