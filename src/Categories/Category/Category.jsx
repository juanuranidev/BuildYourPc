import React, { useEffect, useState } from 'react'
import { useOrderContext } from '../../Context/OrderContext'
import hdd from '../../Assets/Categories/hdd.png'
import './Category.scss'

export default function Category({image, title, category, setCategory}) {
  const [orderProduct, setOrderProduct] = useState(null)
  const { order } = useOrderContext()

  const isInOrder = () => {
    const exist = order.find(item => item.category === category)
    console.log(exist)
    if(exist) {
      return setOrderProduct(exist)
    }
  }
  console.log("test")
  useEffect(() => {
    isInOrder()
  }, [order])

  return (
    <div className='category' onClick={() => setCategory(category)}>
      <img className='category_img' src={orderProduct ? orderProduct.image : hdd}/>
      <p className='category_p'>{orderProduct ? orderProduct.name : title}</p>
      {/* <button>Elimnar</button> */}
    </div>
  )
}
