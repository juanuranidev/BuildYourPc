import React, { useState  } from 'react';
import OrderContent from '../../Main/OrderContent/OrderContent';
import Aside from '../../Aside/Aside';
// import DisplayProducts from '../../DisplayProducts/DisplayProducts';
import MainContent from '../../Main/MainContent/MainContent';
import ModalPdf from '../../Modals/ModalPdf/ModalPdf';
import OrderPdf from '../../Pdf/OrderPdf/OrderPdf';
import './Main.scss';
import Categories from "../../Components/Categories/Categories"
import ModalProducts from '../../Modals/ModalProducts/ModalProducts';

// const Main = () => {
//   // const [orderFinished, setOrderFinished] = useState(false)
//     // if(orderFinished){
//     //   return(
//     //     <div className='main'>
//     //       <OrderContent setOrderFinished={setOrderFinished} />
//     //     </div>
//     //   )
//     // } 
//     return (
//    <div className='main'>
//       <Aside />
//       <DisplayProducts />
//       <MainContent  />
//     </div>
//   )
// }
// export default Main;


export default function Main() {


  return (
    <div style={{display: "flex", justifyContent: "center", minHeight: "100vh", padding: "2rem 0rem"}}>
      <Categories />
      <Aside/>
      {/* <ModalProducts/> */}
    </div>
  )
}
