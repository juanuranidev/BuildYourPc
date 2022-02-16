import React, { useState  } from 'react';
import { useOrderContext } from '../Context/OrderContext';
import Aside from '../Aside/Aside';
import MainContent from './MainContent/MainContent';
import './_Main.scss';
import AsideProduct from '../Aside/AsideItem/AsideProduct/AsideProduct';


const Main = () => {
  const [orderFinished, setOrderFinished] = useState(false)
  const { order } = useOrderContext()

    if(orderFinished){
      return(
        <>
        <h1>Presupuesto Realizado</h1>
        {order.map(product => <AsideProduct fetch={product.category} />)}
        </>
      )
    } 

    return (
    <div className='main'>
      <Aside />
      <MainContent setOrderFinished={setOrderFinished} />
    </div>
  )
}

export default Main;