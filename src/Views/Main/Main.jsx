import React from 'react';
import Aside from './Aside/Aside';
import Categories from "./Categories/Categories"
import './Main.scss';

export default function Main() {
  return (
    <div className='main'>
      <Categories />
      <Aside/>
    </div>
  )
}
