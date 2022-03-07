import React from 'react';
import { getFirestoreApp } from './Firebase/DataBaseConfig';
import { OrderContextProvider } from './Context/OrderContext';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './_App.scss';
import Pdf from './Pdf/Pdf'

getFirestoreApp()

function App() {
  return (
    <OrderContextProvider>
      <Main />
      <Footer />
      <Pdf/>
    </OrderContextProvider>
  );
}

export default App;
