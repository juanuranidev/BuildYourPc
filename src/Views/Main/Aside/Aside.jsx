import React, { useState, useEffect } from 'react';
import { useOrderContext } from '../../../Context/OrderContext';
import CloseMenu from '../../../CloseMenu/CloseMenu';
import BrandSelect from '../../../SelectBrand/SelectBrand';
// import AsideItem from './AsideItem/AsideItem';
import './Aside.scss';

const Aside = () => {
  const { openMenu, order } = useOrderContext()
  const [totalOrder, setTotalOrder] = useState(null)

  const handleGetTotalOrder = () => {
    let totalPriceOrder = 0
    
    order.forEach((product) => {
      totalPriceOrder = totalPriceOrder + product.price
    })
    setTotalOrder(totalPriceOrder.toFixed(2))
  }

  useEffect(() => {
    handleGetTotalOrder();
  }, [order])

  console.log(order)
  return (
    <aside className='aside'>
      <div className='aside_title'>
        <h2 className='aside_title_h2'>Tu Pedido</h2>
      </div>
      <div className='aside_products'>
        <table className='aside_products_table'>
          <tr className='aside_products_tr'>
            <th className='aside_products_tr_th'>Producto</th>
            <th className='aside_products_tr_th'></th>
            <th className='aside_products_tr_th'>Precio</th>
          </tr>
          {order.map((product) => {
            return (
              <tr className='aside_products_tr'>
                <td className='aside_products_tr_td'><img className='aside_products_tr_td_img' src={product.image}/></td>
                <td className='aside_products_tr_td'>{product.name}</td>
                <td className='aside_products_tr_td'>${(product.price).toLocaleString("ES-ar")}</td>
              </tr>
            )
          })}
        </table>
      </div>
      <div className='aside_total'>
        <p className='aside_total_p'>Total: ${totalOrder && Number(totalOrder).toLocaleString("ES-ar")}</p>
      </div>
      <div className='aside_buttons'>
        <button className='aside_buttons_button' onClick={() => console.log("test")}>Finalizar Pedido</button>
        <p className='aside_buttons_p'>Reiniciar Pedido</p>
      </div>
    </aside>
  )
}

export default Aside;