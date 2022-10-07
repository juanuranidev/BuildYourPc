import React from 'react';
import { useOrderContext } from '../Context/OrderContext';
import OrderProduct from './OrderProduct/OrderProduct';

const OrderProducts = () => {
    const { order } = useOrderContext()

    return (
        <div className='orderProducts'>
            {order.map(product => <OrderProduct key={product.id} name={product.name} price={product.price} image={product.image} product={product} quantity={product.quantity} />)}
        </div>
  )
}

export default OrderProducts;