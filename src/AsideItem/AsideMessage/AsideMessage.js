import React from 'react';
import { useOrderContext } from '../../../Context/OrderContext';
import './_AsideMessage.scss';

const AsideMessage = (props) => {
  const { getProducts, intelOrAmd, setOpenMenu } = useOrderContext()

  const handleGetProducts = () => {
    getProducts(props.category)
    setOpenMenu(false)
  }

  return (
    <div className='asideMessage' onClick={intelOrAmd===null ?() => console.log("Toastify React for Error") :() => handleGetProducts() }>
        <img src={props.img} className='asideMessage_img'/>
        <div className='asideMessage_div'>
            <h3 className='asideMessage_h3'>{props.h3}</h3>
            <p className='asideMessage_p'>{props.p}</p>
        </div>
    </div>
  )
}

export default AsideMessage;