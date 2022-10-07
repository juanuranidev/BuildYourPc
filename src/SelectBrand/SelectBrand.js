import React from 'react';
import { useOrderContext } from '../Context/OrderContext';
import './_SelectBrand.scss';

const SelectBrand = () => {
  const { handleSetBrand, intelOrAmd } = useOrderContext()

  return (
    <div className='selectBrand'>
      {intelOrAmd===null &&
      <>
        <button onClick={() => handleSetBrand("intel")} className={'selectBrand_button_intel'}>Intel</button>
        <button onClick={() => handleSetBrand("amd")} className={'selectBrand_button_amd'}>AMD</button>
      </>}
      {intelOrAmd &&
      <>
        <button onClick={() => handleSetBrand("intel")} className={intelOrAmd==='intel' ? 'selectBrand_button_intel' : 'selectBrand_button_intel opacity'}>Intel</button>
        <button onClick={() => handleSetBrand("amd")} className={intelOrAmd==='amd' ? 'selectBrand_button_amd' : 'selectBrand_button_amd opacity'}>AMD</button>
      </>}
    </div>
)
}

export default SelectBrand;