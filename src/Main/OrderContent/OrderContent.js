import React from 'react'
import { useOrderContext } from '../../Context/OrderContext'

const OrderContent = ({setOrderFinished}) => {
  const { order, totalPrice, intelOrAmd } = useOrderContext()

  return (
    <div className=''>
        <div className=''>
          <h1 className=''>Presupuesto de tu pc</h1>   
          <div className=''>
          <img src={intelOrAmd==='intel' ?'https://www.venex.com.ar/images/configurador_pc/pc-intel.png' :'https://www.venex.com.ar/images/configurador_pc/pc-amd.png'} />
            {/* <p className='divOrderInfo_p'>Componentes: {order.length} de 13</p> */}
            <p className=''>Total: ${parseInt(totalPrice).toLocaleString("es")}</p>
          </div>
          <div className=''>
            <p className=''>Atención: Es necesario que elijas una opción en todos los productos para poder realizar el armado de la computadora</p>
          </div>
          <div className=''>
            <button className='' onClick={() => setOrderFinished(false)}>Regresar y editar</button>
            {/* <button className='divButtons_button' onClick={() => setOrderFinished(true)}>Finalizar armado</button>   */}
            {/* <button  className='divButtons_resetButton' onClick={() => setOrder([])} >Reiniciar Configuración</button> */}
          </div>
        </div> 
    </div>
  )
}

export default OrderContent