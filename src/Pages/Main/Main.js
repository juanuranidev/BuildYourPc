import React from 'react'
import Aside from '../../Aside/Aside'
import Products from '../../Products/Products'
import './_Main.scss'

const Main = () => {
  return (
    <div className='main'>
        <Aside />
        <Products />
    </div>
  )
}

export default Main