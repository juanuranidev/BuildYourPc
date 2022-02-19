import React from 'react'
import { useOrderContext } from '../../Context/OrderContext'
import OrderProducts from '../../OrderProducts/OrderProducts'
import './_OrderContent.scss'

const OrderContent = ({setOrderFinished}) => {
  const { order, totalPrice, intelOrAmd } = useOrderContext()

  let product = order.find(product => product.category=== `microprocesador${intelOrAmd}`)

  return (
    <div className='orderContent'>
        <div className='orderContent_div'>
          <h1 className='orderContent_div_h1'>Resumen de tu pc</h1>   
          <div className='separateContent'>
            <div className='divOrderInfo'>
              <img src={intelOrAmd==='intel' ?'https://www.venex.com.ar/images/configurador_pc/pc-intel.png' :'https://www.venex.com.ar/images/configurador_pc/pc-amd.png'} className='divOrderInfo_img' />
              <div className='divOrderInfo_div'>
                <h3 className='divOrderInfo_h3'>{product.name}</h3>
                <p className='divOrderInfo_p'>Total: ${parseInt(totalPrice).toLocaleString("es")}</p>
              </div>
            </div>

            <div className='divOrderButtons'>
              <button className='divOrderButtons_button'>Ver PDF</button>
              <button className='divOrderButtons_backButton' onClick={() => setOrderFinished(false)}>Regresar y editar</button>
            </div>
          </div>
        </div> 
        <OrderProducts />
    </div>
  )
}

export default OrderContent