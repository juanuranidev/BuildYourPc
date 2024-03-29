import React, { useEffect, useState } from 'react'
import { useOrderContext } from '../../../../Context/OrderContext'
import './Category.scss'

export default function Category({image, title, category, setCategory}) {
  const [isInOrder, setIsInOrder] = useState(null)
  const { order, deleteProductFromOrder } = useOrderContext()

  const handleIsInOrder = () => {
    const exist = order.find(item => item.category === category)

    if(exist) {
      return setIsInOrder(exist)
    } else {
      return setIsInOrder(null)
    }
  }

  useEffect(() => {
    handleIsInOrder();
  }, [order])

  return (
    <div className={`${isInOrder ? "category" : "categoryInOrder"}`} onClick={() => !isInOrder && setCategory(category)}>
      {isInOrder && (
        <div className='categoryClose'>
          <span class="material-symbols-outlined categoryClose_span" onClick={() => deleteProductFromOrder(isInOrder)}>
            close
          </span>
        </div>
      )}
      <div className='mainContent' onClick={() => setCategory(category)}>
        <img className={`${isInOrder ? "mainContent_img_order" : "mainContent_img"}`} alt="" src={isInOrder ? isInOrder.image : image}/>
        <p className={isInOrder ? 'mainContent_p' : 'mainContent_p_title'}>{isInOrder ? isInOrder.name : title}</p>
      </div>
    </div>
  )
}
