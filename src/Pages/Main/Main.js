import React from 'react'
import Aside from '../../Aside/Aside'
import { useOrderContext } from '../../Context/OrderContext'
import Products from '../../Products/Products'
import './_Main.scss'


const Main = () => {
  const { order, setOrder, totalPrice } = useOrderContext()

  return (
    <div className='main'>
        <Aside />
        <div className='mainContent'>
          <div className='mainContent_div'>
            <h1 className='mainContent_div_h1'>Crea la pc que tanto querés, a tu medida.</h1>   
            <div className='divOrderInfo'>
              <p className='divOrderInfo_p'>Componentes: {order.length} de 12</p>
              <p className='divOrderInfo_p'>Total: ${parseInt(totalPrice).toLocaleString("es")}</p>
            </div>
            <div className='divWarning'>
              <p className='divWarning_p'>Atención: Es necesario que elijas una opción en todos los productos para poder realizar el armado de la computadora</p>
            </div>
            <div className='divButtons'>
              <button  className='divButtons_resetButton' onClick={() => setOrder([])} >Reiniciar Configuración</button>
              {order.length!==12
              ? <button className='divButtons_button'>No podés finalizar la compra</button>
              : <button className='divButtons_button' onClick={() => console.log("finalizando armado...")}>Finalizar armado</button>}    
            </div>
          </div>
          <Products />
        </div>
    </div>
  )
}

export default Main