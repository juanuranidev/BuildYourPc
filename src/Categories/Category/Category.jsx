import React, { useEffect, useState } from 'react'
import { useOrderContext } from '../../Context/OrderContext'
import hdd from '../../Assets/Categories/hdd.png'
import './Category.scss'

export default function Category({image, title, category, setCategory}) {
  const [orderProduct, setOrderProduct] = useState(null)
  const { order, deleteProductFromOrder } = useOrderContext()

  const isInOrder = () => {
    const exist = order.find(item => item.category === category)
    console.log(exist)
    if(exist) {
      return setOrderProduct(exist)
    } else {
      return setOrderProduct(null)
    }
  }

  useEffect(() => {
    isInOrder()
  }, [order])

  return (
    <div className={`${orderProduct ? 'openActions' : 'category'}`} onClick={() => !orderProduct && setCategory(category)}>
      <div className='category_actions'>
        <div className='category_actions_delete' onClick={() => deleteProductFromOrder(orderProduct)}>
          <p className='category_actions_delete_p'>Eliminar</p>
        </div>
        <div className='category_actions_change' onClick={() => setCategory(category)}>
          <p className='category_actions_change_p'>Cambiar</p>
        </div>
      </div>
      <div className='mainContent'>
        <img className='mainContent_img' src={orderProduct ? orderProduct.image : hdd}/>
        <p className={orderProduct ? 'mainContent_p' : 'mainContent_p_title'}>{orderProduct ? orderProduct.name : title}</p>
      </div>
    </div>
  )
}
