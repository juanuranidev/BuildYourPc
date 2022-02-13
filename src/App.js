import React from 'react';
import Aside from './Aside/Aside';
import { getFirestoreApp } from './Firebase/DataBaseConfig';
import { OrderContextProvider } from './Context/OrderContext';
import Products from './Products/Products';
import './_App.scss'
import './Styles/_base.scss'

getFirestoreApp()

function App() {
  return (
    <div className='app'>
      <OrderContextProvider>
        <Aside />
        <Products />
      </OrderContextProvider>
    </div>
  );
}

export default App;
