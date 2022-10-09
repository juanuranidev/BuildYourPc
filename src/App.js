import React from 'react';
import { getFirestoreApp } from './Firebase/DataBaseConfig';
import { OrderContextProvider } from './Context/OrderContext';
import Main from './Views/Main/Main';
import Footer from './Footer/Footer';
import './_App.scss';

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
