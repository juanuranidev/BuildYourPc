import React, { useState  } from 'react';
import Aside from '../Aside/Aside';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import MainContent from './MainContent/MainContent';
import OrderContent from './OrderContent/OrderContent';
import './_Main.scss';

const Main = () => {
  const [orderFinished, setOrderFinished] = useState(false)

    if(orderFinished){
      return(
        <div className='main'>
        <OrderContent setOrderFinished={setOrderFinished} />
        </div>
      )
    } 

    return (
    <div className='main'>
      <Aside />
      <DisplayProducts />
      <MainContent setOrderFinished={setOrderFinished} />
    </div>
  )
}

export default Main;