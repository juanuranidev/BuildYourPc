import React from 'react'
import { useOrderContext } from '../Context/OrderContext'
import './_SelectBrand.scss'

const SelectBrand = () => {
    const { handleSetBrand } = useOrderContext()
  return (
    <div className='selectBrand'>
      <button onClick={() => handleSetBrand("intel")} className='selectBrand_button_intel'>Intel</button>
      <button onClick={() => handleSetBrand("amd")} className='selectBrand_button_amd'>AMD</button>
    </div>
  )
}

export default SelectBrand