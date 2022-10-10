import React, { useState } from 'react'
import { useOrderContext } from '../../Context/OrderContext'
import './Product.scss'

const Product = ({product, key, close}) => {
  const { addProductToOrder, setOpenMenu } = useOrderContext()
  const [amount, setAmount] = useState(1)   

  const handleDecrement = () => amount > 1 ? setAmount(prev => prev - 1) : console.log("error")
  const handleIncrement = () => product.stock > amount ? setAmount(prev => prev + 1) : console.log("error")

  const handleAddProduct = (product, amount) => {
    addProductToOrder(product, amount)
    close();
  }

  return (
    <div className='product'>
      <img src={product.image} className='product_img' />
      <h3 className='product_h3'>{product.name}</h3>
      <div className='productActions'>
        <p className='productActions_p'>${parseFloat(product.price).toLocaleString("ES-ar")}</p>
        <div className='productActions_amount'>
          <span className='fas fa-minus productActions_amount_span' onClick={handleDecrement} />         
          <input className='productActions_amount_input' value={amount} disabled={true} />
          <span className='fas fa-plus productActions_amount_span' onClick={handleIncrement} />
        </div>
      </div>
      <div className='product_button'>
        <button onClick={() => handleAddProduct(product, amount)} className='product_button_button'>Agregar</button>
      </div>
    </div>
  )
}

export default Product;