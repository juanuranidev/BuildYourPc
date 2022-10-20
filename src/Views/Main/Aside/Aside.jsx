import React from 'react';
import { useOrderContext } from '../../../Context/OrderContext';
import BrandSelect from '../../../SelectBrand/SelectBrand';
import './Aside.scss';

const Aside = () => {
  const { order, setOrder, totalPrice} = useOrderContext()

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
                <td className='aside_products_tr_td'>{product.name} x{product.quantity}</td>
                <td className='aside_products_tr_td'>${((product.quantity * product.price)).toLocaleString("ES-ar")}</td>
              </tr>
            )
          })}
        </table>
      </div>
      <div className='aside_total'>
        <p className='aside_total_p'>Total: ${Number(totalPrice).toLocaleString("ES-ar")}</p>
      </div>
      <div className='aside_buttons'>
        <button className='aside_buttons_button' onClick={() => setOrder([])}>Finalizar Pedido</button>
        <p className='aside_buttons_p' onClick={() => setOrder([])}>Reiniciar Pedido</p>
      </div>
    </aside>
  )
}

export default Aside;