import React from 'react';
import { useOrderContext } from '../../../Context/OrderContext';
import './_AsideProduct.scss';

const AsideProduct = (props) => {
  const { order, getProducts, setOpenMenu, deleteProductFromOrder } = useOrderContext()
  let productToFind = order.find(e => e.category === props.fetch)

  const handleGetProducts = () => {
    getProducts(props.fetch);
    setOpenMenu(false);
  }

  return (
    <div className='asideProduct'>
        <div onClick={() => handleGetProducts()} className='asideProduct_div'>   
          <img src={productToFind.image} className='asideProduct_div_img'/>
          <div className='asideProduct_div_div'>
            <h3 className='asideProduct_div_div_h3'>{props.fetch}</h3>
            <p className='asideProduct_div_div_p'>{productToFind.name} - ({productToFind.quantity}x) ${(productToFind.price).toLocaleString("es")}</p>
          </div>
        </div>
        <span className='fas fa-times asideProduct_button' onClick={() => deleteProductFromOrder(productToFind)} />
    </div>
  )
}

export default AsideProduct;