import React from 'react';
import { getFirestoreApp } from './Firebase/DataBaseConfig';
import Main from './Pages/Main/Main';
import './_base.scss'

getFirestoreApp()

function App() {
  return (
    <div className='App'>
     <Main />
    </div>
  );
}

export default App;
