import React, { useState } from 'react'
import { useOrderContext } from '../../Context/OrderContext'
import './_Product.scss'

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
      <div className='productCounter'>
        <span className='fas fa-minus productCounter_span' onClick={handleDecrement} />         
        <p className='productCounter_p'>{amount}</p>
        <span className='fas fa-plus productCounter_span' onClick={handleIncrement} />
        </div>
      <div className='product_div'>
        <p className='product_div_p'>${parseFloat(product.price).toLocaleString("es")}</p>
        <button onClick={() => handleAddProduct(product, amount)} className='product_div_button'>Agregar</button>
      </div>
    </div>
  )
}

export default Product;