import React from 'react';
import { getFirestoreApp } from './FIrebase/DataBaseConfig';
import Main from './Pages/Main/Main';

getFirestoreApp()

function App() {
  return (
    <div className='App'>
     <Main />
    </div>
  );
}

export default App;
