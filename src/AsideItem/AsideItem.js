import React from 'react'
import './_AsideItem.scss'

const AsideItem = (props) => {

  const getProducts = () => {
    console.log('getting products')
  }

  return (
    <div className='asideItem' onClick={getProducts}>
        <img src={props.img} className='asideItem_img'/>
        <div className='asideItem_div'>
            <h3 className='asideItem_h3'>{props.h3}</h3>
            <p className='asideItem_p'>{props.p}</p>
        </div>
    </div>
  )
}

export default AsideItem