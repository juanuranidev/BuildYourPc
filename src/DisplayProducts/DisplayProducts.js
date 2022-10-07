import React from 'react';
import { useOrderContext } from '../Context/OrderContext';
import './_DisplayProducts.scss';

const DisplayProducts = () => {
    const { setOpenMenu } = useOrderContext() 

    return (
        <div className='displayProducts'>
            <button className='divMenu_button' onClick={() => setOpenMenu(true)}>Ver productos</button>
        </div>
    )
}

export default DisplayProducts;