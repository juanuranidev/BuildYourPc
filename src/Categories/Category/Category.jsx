import React from 'react'
import hdd from '../../Assets/Categories/hdd.png'
import './Category.scss'

export default function Category({image, title, category, setCategory}) {
  return (
    <div className='category' onClick={() => setCategory(category)}>
      <img className='category_img' src={hdd}/>
      <p className='category_p'>{title}</p>
    </div>
  )
}
