import React from 'react';
import { useOrderContext } from '../../../Context/OrderContext';
import './_AsideMessage.scss';

const AsideMessage = (props) => {
  const { getProducts, intelOrAmd, setOpenMenu } = useOrderContext()

  return (
    <div className='asideMessage' onClick={intelOrAmd===null ?() => console.log("error") :() => {getProducts(props.category); setOpenMenu(false)} }>
        <img src={props.img} className='asideMessage_img'/>
        <div className='asideMessage_div'>
            <h3 className='asideMessage_h3'>{props.h3}</h3>
            <p className='asideMessage_p'>{props.p}</p>
        </div>
    </div>
  )
}

export default AsideMessage