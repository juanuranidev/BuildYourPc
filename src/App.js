import React from 'react';
import Aside from './Aside/Aside';
import Main from './Main/Main'
import { getFirestoreApp } from './Firebase/DataBaseConfig';
import { OrderContextProvider } from './Context/OrderContext';
import Products from './Products/Products';
import './_App.scss'
import './Styles/_base.scss'
import Footer from './Footer/Footer';

getFirestoreApp()

function App() {
  return (
    <OrderContextProvider>
      <Main />
      <Footer />
    </OrderContextProvider>
  );
}

export default App;
