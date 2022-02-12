import React from 'react';
import Aside from './Aside/Aside';
import { getFirestoreApp } from './Firebase/DataBaseConfig';
import Products from './Products/Products';
import './_App.scss'
import './Styles/_base.scss'

getFirestoreApp()

function App() {
  return (
    <div className='app'>
      <Aside />
      <Products />
    </div>
  );
}

export default App;
