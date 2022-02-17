import React from 'react'
import './_CloseMenu.scss'
import { useOrderContext } from '../Context/OrderContext'

const CloseMenu = () => {
  const { setOpenMenu } = useOrderContext()
  return (
    <span className='fas fa-times fa-2x closeMenu' onClick={() => setOpenMenu(false)}/>
  )
}

export default CloseMenu