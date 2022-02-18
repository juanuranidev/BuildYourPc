import React from 'react';
import { useOrderContext } from '../../Context/OrderContext';
import AsideProduct from './AsideProduct/AsideProduct';
import AsideMessage from './AsideMessage/AsideMessage';

const AsideItem = (props) => {
 const { order } = useOrderContext()

  return (
    <div className='asideItem'>
    {order.find(e => e.category === props.category)
    ? <AsideProduct fetch={props.category} />
    : <AsideMessage img={props.img} h3={props.h3} p={props.p} category={props.category} />}    
    </div>
  )
}

export default AsideItem;