import React from 'react'
import AsideItem from '../AsideItem/AsideItem'

const Aside = () => {
  return (
    <div className='aside'>
      <h1>Aside</h1>
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/micro.png'} h3={'Microprocesador'} p={'Todavia no seleccionaste un microprocesador'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/motherboard.png'} h3={'Motherboard'} p={'Todavia no seleccionaste una motherboard'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/ram.png'} h3={'Memoria Ram'} p={'Todavia no seleccionaste una memoria ram'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/hdd.png'} h3={'Disco Duro'} p={'Todavia no seleccionaste un disco duro'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/ssd.png'} h3={'Disco SSD'} p={'Todavia no seleccionaste un disco SSD'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/gpu.png'} h3={'Placa de Video'} p={'Todavia no seleccionaste una placa de video'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/fuente.png'} h3={'Fuente'} p={'Todavia no seleccionaste una fuente'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/gabinete.png'} h3={'Gabinete'} p={'Todavia no seleccionaste un gabinete'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/cooler.png'} h3={'Cooler'} p={'Todavia no seleccionaste un cooler'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/cooler.png'} h3={'Fan Cooler'} p={'Todavia no seleccionaste un fan cooler'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/monitor.png'} h3={'Monitor'} p={'Todavia no seleccionaste un monitor'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/keyboard.png'} h3={'Teclado'} p={'Todavia no seleccionaste un teclado'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/mouse.png'} h3={'Mouse'} p={'Todavia no seleccionaste un mouse'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/headset.png'} h3={'Auricular'} p={'Todavia no seleccionaste un auricular'} />
    </div>
  )
}

export default Aside