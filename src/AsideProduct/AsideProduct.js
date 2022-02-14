import React from 'react';
import { useOrderContext } from '../Context/OrderContext';
import './_AsideProduct.scss';

const AsideProduct = (props) => {
  const { order, getProducts, deleteProductFromOrder } = useOrderContext()
  let productToFind = order.find(e => e.category === props.fetch)

  return (
    <div className='asideProduct'>
        <button className='asideProduct_button' onClick={() => deleteProductFromOrder(productToFind)}>Eliminar</button>
        <div onClick={() => getProducts(props.fetch)} className='asideProduct_div'>   
          <img src={productToFind.image} className='asideProduct_div_img'/>
          <div className='asideProduct_div_div'>
            <h3 className='asideProduct_div_div_h3'>{props.fetch}</h3>
            <p className='asideProduct_div_div_p'>{productToFind.name}</p>
            <p className='asideProduct_div_div_p'>${(productToFind.price).toLocaleString("es")}</p>
          </div>
        </div>
    </div>
  )
}

export default AsideProduct;