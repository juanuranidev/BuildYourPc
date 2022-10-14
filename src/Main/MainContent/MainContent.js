import React from 'react';
import { useOrderContext } from '../../Context/OrderContext';
import SelectBrand from '../../SelectBrand/SelectBrand';
import Loader from '../../Loader/PageLoader';
import Products from "../../Components/Products/Products.jsx"
import './_MainContent.scss';

const MainContent = ({setOrderFinished}) => {
    const { order, setOrder, totalPrice, loader, intelOrAmd } = useOrderContext()

    return (
    <div className='mainContent'>
        <div className='mainContent_div'>
          <h1 className='mainContent_div_h1'>Crea la pc que tanto querés a tu medida</h1>   
          <div className='divOrderInfo'>
            <p className='divOrderInfo_p'>Total: ${parseInt(totalPrice).toLocaleString("es")}</p>
            {intelOrAmd===null && <img className='divOrderInfo_img' src={'https://www.venex.com.ar/images/configurador_pc/pc-venex.png'} />}
            {intelOrAmd==='intel' && <img className='divOrderInfo_img' src={'https://www.venex.com.ar/images/configurador_pc/pc-intel.png'} />}
            {intelOrAmd==='amd' && <img className='divOrderInfo_img' src={'https://www.venex.com.ar/images/configurador_pc/pc-amd.png'} />}
            <p className='divOrderInfo_p'>Componentes: {order.length} de 13</p>
          </div>
          <div className='divWarning'>
            <h3 className='divWarning_h3'>Atención</h3>
            <p className='divWarning_p'>Es necesario que elijas una opción en todos los productos</p>
          </div>
          <div className='divButtons'>
            {order.length < 1
            ? <button className='divButtons_button opacity' onClick={() => console.log("Toastify React for error")}>Finalizar Compra</button>
            : <button className='divButtons_button' onClick={() => setOrderFinished(true)}>Finalizar armado</button>}    
            <button  className='divButtons_resetButton' onClick={() => setOrder([])} >Reiniciar Configuración</button>
          </div>
        </div>
        {intelOrAmd===null
        ? <div className='divBrand'>
            <h2 className='divBrand_h2'>Primero selecciona una marca</h2>
            <SelectBrand />
          </div>
        : <>
            {loader ? <Loader /> : <Products />}
          </>}       
    </div>
  )
}

export default MainContent;