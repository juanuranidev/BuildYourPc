import React from 'react';
import { useOrderContext } from '../Context/OrderContext';
import CloseMenu from '../CloseMenu/CloseMenu';
import BrandSelect from '../SelectBrand/SelectBrand';
import AsideItem from './AsideItem/AsideItem';
import './_Aside.scss';

const Aside = () => {
  const { openMenu, intelOrAmd } = useOrderContext()

  return (
    <div className={openMenu===true ? 'aside active' : 'aside'}>
      <CloseMenu />
      {intelOrAmd && <BrandSelect />}
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/micro.png'} h3={'Microprocesador'} p={'No seleccionaste un microprocesador'} category={intelOrAmd==='intel' ?'microprocesadorintel' : 'microprocesadoramd'} /> 
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/motherboard.png'} h3={'Motherboard'} p={'No seleccionaste una motherboard'} category={'motherboard'} /> 
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/ram.png'} h3={'Memoria Ram'} p={'No seleccionaste una memoria ram'} category={'memoriaram'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/hdd.png'} h3={'Disco Duro'} p={'No seleccionaste un disco duro'} category={'discoduro'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/ssd.png'} h3={'Disco SSD'} p={'No seleccionaste un disco SSD'} category={'discossd'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/gpu.png'} h3={'Placa de Video'} p={'No seleccionaste una placa de video'} category={'placadevideo'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/fuente.png'} h3={'Fuente'} p={'No seleccionaste una fuente'} category={'fuente'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/gabinete.png'} h3={'Gabinete'} p={'No seleccionaste un gabinete'} category={'gabinete'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/cooler.png'} h3={'Cooler'} p={'No seleccionaste un cooler'} category={'cooler'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/monitor.png'} h3={'Monitor'} p={'No seleccionaste un monitor'} category={'monitor'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/keyboard.png'} h3={'Teclado'} p={'No seleccionaste un teclado'} category={'teclado'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/mouse.png'} h3={'Mouse'} p={'No seleccionaste un mouse'} category={'mouse'} />
      <AsideItem img={'https://www.venex.com.ar/images/configurador_pc/headset.png'} h3={'Auricular'} p={'No seleccionaste un auricular'} category={'auricular'} />
    </div>
  )
}

export default Aside;