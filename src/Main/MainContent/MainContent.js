import React from 'react';
import { useOrderContext } from '../../Context/OrderContext';
import SelectBrand from '../../SelectBrand/SelectBrand';
import PageLoader from '../../PageLoader/PageLoader';
import Products from '../../Products/Products';

const MainContent = ({setOrderFinished}) => {
    const { order, setOrder, totalPrice, loader, intelOrAmd } = useOrderContext()

    return (
    <div className='mainContent'>
        <div className='mainContent_div'>
          <h1 className='mainContent_div_h1'>Crea la pc que tanto querés, a tu medida.</h1>   
          <div className='divOrderInfo'>
            <p className='divOrderInfo_p'>Componentes: {order.length} de 13</p>
            <p className='divOrderInfo_p'>Total: ${parseInt(totalPrice).toLocaleString("es")}</p>
          </div>
          <div className='divWarning'>
            <p className='divWarning_p'>Atención: Es necesario que elijas una opción en todos los productos para poder realizar el armado de la computadora</p>
          </div>
          <div className='divButtons'>
            {order.length!==3
            ? <button className='divButtons_button opacity' onClick={() => console.log("no podes finalizar la compra")}>Finalizar Compra</button>
            : <button className='divButtons_button' onClick={() => setOrderFinished(true)}>Finalizar armado</button>}    
            <button  className='divButtons_resetButton' onClick={() => setOrder([])} >Reiniciar Configuración</button>
          </div>
        </div>
        {intelOrAmd===null
        ? <div className='divBrand'>
              <h2 className='divBrand_h2'>Primero selecciona una marca</h2>
              <SelectBrand />
          </div>
        : <>{loader ? <PageLoader /> : <Products />}</>}       
    </div>
  )
}

export default MainContent;