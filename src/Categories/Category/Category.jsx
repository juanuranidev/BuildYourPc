import React from 'react'
import hdd from '../../Assets/Categories/hdd.png'
import './Category.scss'

export default function Category({image, title}) {
  return (
    <div className='category'>
        <img className='category_img' src={hdd}/>
        <p className='category_p'>{title}</p>
    </div>
  )
}
