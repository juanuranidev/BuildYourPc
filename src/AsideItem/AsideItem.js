import React from 'react';
import { useOrderContext } from '../Context/OrderContext';
import AsideMessage from './AsideMessage/AsideMessage';
import AsideProduct from './AsideProduct/AsideProduct';
import './_AsideItem.scss';

const AsideItem = (props) => {
 const { order } = useOrderContext()

  return (
    <>
    {
      order.find(e => e.category === props.category)
      ? <AsideProduct fetch={props.category} />
      : <AsideMessage img={props.img} h3={props.h3} p={props.p} category={props.category} />
    }    
    </>
  )
}

export default AsideItem;