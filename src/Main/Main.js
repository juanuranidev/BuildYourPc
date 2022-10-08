import React, { useState  } from 'react';
import OrderContent from './OrderContent/OrderContent';
import Aside from '../Aside/Aside';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import MainContent from './MainContent/MainContent';
import ModalPdf from '../Modals/ModalPdf/ModalPdf';
import OrderPdf from '../Pdf/OrderPdf/OrderPdf';
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