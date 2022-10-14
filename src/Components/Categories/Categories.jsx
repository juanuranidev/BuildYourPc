import React, { useState } from 'react'
import Category from './Category/Category'
import ModalProducts from '../../Modals/ModalProducts/ModalProducts'
import ModalBackground from '../../Modals/ModalBackground/ModalBackground'
import './Categories.scss'

export default function Categories() {
  const [category, setCategory] = useState("")

  const handleCloseModalProducts = () => {
    setCategory(null)
  }

  return (
    <React.Fragment>
      <section className='categories'>
        <Category title={"Procesador"} category={""} setCategory={setCategory} />
        <Category title={"Motherboard"} category={"motherboard"} setCategory={setCategory} />
        <Category title={"Memoria Ram"} category={"memoriaram"} setCategory={setCategory} />
        <Category title={"Disco Duro - HDD"} category={"discoduro"} setCategory={setCategory} />
        <Category title={"Disco Sólido - SSD"} category={"discossd"} setCategory={setCategory} />
        <Category title={"Placa de video"} category={"placadevideo"} setCategory={setCategory} />
        <Category title={"Fuente"} category={"fuente"} setCategory={setCategory} />
        <Category title={"Gabinete"} category={"gabinete"} setCategory={setCategory} />
        <Category title={"Cooler"} category={"cooler"} setCategory={setCategory} />
        <Category title={"Monitor"} category={"monitor"} setCategory={setCategory} />
        <Category title={"Teclado"} category={"teclado"} setCategory={setCategory} />
        <Category title={"Mouse"} category={"mouse"} setCategory={setCategory} />
        <Category title={"Auricular"} category={"auricular"} setCategory={setCategory} />
        {category && <ModalProducts category={category} close={handleCloseModalProducts} />}
      </section>
      <ModalBackground open={category} close={handleCloseModalProducts}/>
    </React.Fragment>
  )
}
