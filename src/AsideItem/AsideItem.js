import React, { useState } from 'react'
import './_AsideItem.scss'
import { useOrderContext } from '../Context/OrderContext'

const AsideItem = (props) => {
  const { getProducts } = useOrderContext()

  

  return (
    <div className='asideItem' onClick={() => getProducts(props.fetch)}>
        <img src={props.img} className='asideItem_img'/>
        <div className='asideItem_div'>
            <h3 className='asideItem_h3'>{props.h3}</h3>
            <p className='asideItem_p'>{props.p}</p>
        </div>
    </div>
  )
}

export default AsideItem