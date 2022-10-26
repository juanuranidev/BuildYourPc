import React, { useState } from 'react'
import Category from './Category/Category'
import ModalProducts from '../../../Components/Modals/ModalProducts/ModalProducts'
import ModalBackground from '../../../Components/Modals/ModalBackground/ModalBackground'
import './Categories.scss'

export default function Categories() {
  const [category, setCategory] = useState("")

  const handleCloseModalProducts = () => {
    setCategory(null)
  }

  return (
    <React.Fragment>
      <section className='categories'>
        <Category 
          title={"Procesador"}
          category={""}
          setCategory={setCategory} 
          image={"https://www.venex.com.ar/images/configurador_pc/micro.png"}
        />
       <Category 
          title={"Motherboard"}
          category={"motherboard"}
          setCategory={setCategory}
          image={"https://www.venex.com.ar/images/configurador_pc/motherboard.png"}
        />
        <Category 
          title={"Memoria Ram"}
          category={"memoriaram"}
          setCategory={setCategory}
          image={"https://www.venex.com.ar/images/configurador_pc/ram.png"}
        />
        <Category 
          title={"Disco Duro - HDD"}
          category={"discoduro"}
          setCategory={setCategory}
          image={"https://www.venex.com.ar/images/configurador_pc/hdd.png"}
        />
        <Category 
          title={"Disco Sólido - SSD"}
          category={"discossd"}
          setCategory={setCategory}
          image={"https://www.venex.com.ar/images/configurador_pc/ssd.png"}
        />
        <Category 
          title={"Placa de video"}
          category={"placadevideo"}
          setCategory={setCategory}
          image={"https://www.venex.com.ar/images/configurador_pc/gpu.png"}
        />
        <Category 
          title={"Fuente"}
          category={"fuente"}
          setCategory={setCategory}
          image={"https://www.venex.com.ar/images/configurador_pc/fuente.png"}
        />
        <Category 
          title={"Gabinete"}
          category={"gabinete"}
          setCategory={setCategory}
          image={"https://www.venex.com.ar/images/configurador_pc/gabinete.png"}
        />
        <Category 
          title={"Cooler"}
          category={"cooler"}
          setCategory={setCategory}
          image={"https://www.venex.com.ar/images/configurador_pc/cooler.png"}
        />
        <Category 
          title={"Monitor"}
          category={"monitor"}
          setCategory={setCategory}
          image={"https://www.venex.com.ar/images/configurador_pc/monitor.png"}
        />
        <Category 
          title={"Teclado"}
          category={"teclado"}
          setCategory={setCategory}
          image={"https://www.venex.com.ar/images/configurador_pc/keyboard.png"}
        />
        <Category 
          title={"Mouse"}
          category={"mouse"}
          setCategory={setCategory}
          image={"https://www.venex.com.ar/images/configurador_pc/mouse.png"}
        />
        <Category 
          title={"Auricular"}
          category={"auricular"}
          setCategory={setCategory}
          image={"https://www.venex.com.ar/images/configurador_pc/headset.png"}
        />
        {category && <ModalProducts category={category} close={handleCloseModalProducts} />}
      </section>
      <ModalBackground open={category} close={handleCloseModalProducts}/>
    </React.Fragment>
  )
}
