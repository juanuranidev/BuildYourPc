import React from 'react';
import { useOrderContext } from '../Context/OrderContext';
import './_CloseMenu.scss';

const CloseMenu = () => {
  const { setOpenMenu } = useOrderContext()

  return (
    <span className='fas fa-times fa-2x closeMenu' onClick={() => setOpenMenu(false)}/>
  )
}

export default CloseMenu;