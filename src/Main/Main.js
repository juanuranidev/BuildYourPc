import React, { useState  } from 'react';
import OrderContent from './OrderContent/OrderContent';
import Aside from '../Aside/Aside';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import MainContent from './MainContent/MainContent';
import ModalPdf from '../Modals/ModalPdf/ModalPdf';
import OrderPdf from '../Pdf/OrderPdf/OrderPdf';
import './_Main.scss';

const test = [
  {
      "id": "4UJp1gjulrMdvdQGz3Zf",
      "image": "https://www.venex.com.ar/products_images/1617202662_1555515752_sda.png",
      "price": 27499,
      "stock": 123,
      "description": "Cantidad de núcleos 6 Cantidad de subprocesos 6 Frecuencia básica del procesador 2.90 GHz Frecuencia turbo máxima 4.10 GHz Caché 9 MB SmartCache Velocidad del bus 8 GT/s DMI3 TDP 65 W",
      "name": "MICROPROCESADOR INTEL CORE I5 9400 4.1GHZ",
      "category": "microprocesadorintel",
      "quantity": 1
  },
  {
      "id": "9HYQ55q8VuzEY5IXDyud",
      "price": 27299,
      "description": "La placa base B560 AORUS utiliza un diseño de alimentación de CPU digital de 12 + 1 fases que incluye tanto el controlador PWM digital como DrMOS. Este controlador 100% digital y conectores de alimentación de CPU de 8 clavijas sólidas adicionales ofrecen una precisión increíble en la entrega de energía a los componentes de la placa base que más consumen energía y son sensibles a la energía, lo que permite a los entusiastas obtener el máximo rendimiento absoluto de la nueva CPU Intel de 11a generación.  Especificaciones:  CPU Paquete LGA1200:  Procesadores Intel® Core ™ i9 de 11.a generación / Procesadores Intel® Core ™ i7 / Procesadores Intel® Core ™ i5 10ª generación Intel ® Core ™ i9 procesadores / Intel ® Core ™ i7 / Intel ® Core ™ i5 procesadores / Intel ® Core ™ i3 procesadores / Intel ® Pentium ® procesadores / Intel ® Celeron ® procesadores * * limitada a los transformadores con 4 MB de Intel ® Smart Cache, familia Intel ® Celeron ® G5xx5. La caché L3 varía con la CPU  Chipset Conjunto de chips Intel ® B560 Express  Memoria Procesadores Intel® Core ™ i9 / i7 / i5 de 11.a generación : compatibilidad con DDR4 5333 (OC) / DDR4 5133 (OC) / DDR4 5000 (OC) / 4933 (OC) / 4800 (OC) / 4700 (OC) / 4600 ( OC) / 4500 (OC) / 4400 (OC) / 4300 (OC) / 4266 (OC) / 4133 (OC) / 4000 (OC) / 3866 (OC) / 3800 (OC) / 3733 (OC) / 3666 ( OC) / 3600 (OC) / 3466 (OC) / 3400 (OC) / 3333 (OC) / 3300 (OC) / 3200/3000/2933/2800/2666/2400/2133 MHz módulos de memoria Procesadores Intel® Core ™ i9 / i7 de décima generación : compatibilidad con módulos de memoria DDR4 2933/2666/2400/2133 MHz Intel décima generación ® Core ™ i5 / i3 / Pentium ® / Celeron ® procesadores: Soporte para módulos de memoria DDR4 2666/2400/2133 MHz 4 x zócalos DDR4 DIMM que admiten hasta 128 GB (capacidad de un solo DIMM de 32 GB) de memoria del sistema Arquitectura de memoria de doble canal Compatibilidad con módulos de memoria DIMM 1Rx8 / 2Rx8 sin búfer ECC (funcionan en modo no ECC) Soporte para módulos de memoria DIMM 1Rx8 / 2Rx8 / 1Rx16 sin búfer no ECC Soporte para módulos de memoria Extreme Memory Profile (XMP)  (Consulte la \"Lista de soporte de memoria\" para obtener más información). Gráficos integrados Procesador de gráficos integrado: compatibilidad con gráficos HD Intel® :  1 x DisplayPort, que admite una resolución máxima de 4096x2304 a 60 Hz * Soporte para la versión DisplayPort 1.2 y HDCP 2.3 1 x puerto HDMI, que admite una resolución máxima de 4096x2160 @ 30 Hz * Soporte para la versión HDMI 1.4 y HDCP 2.3.  Audio Códec Realtek ® ALC4080 Audio de alta definición 2/4 / 5.1 / 7.1 canales Soporte para salida S / PDIF  LAN Intel ® de chip 2.5GbE LAN (2,5 Gbit / 1 Gbit / 100 Mbit)  Módulo de comunicación inalámbrica Intel ® Wi-Fi 6 AX200 Wi-Fi 802.11a / b / g / n / ac / ax, compatible con banda dual de 2,4 / 5 GHz BLUETOOTH 5.1 Compatibilidad con el estándar inalámbrico 11ax 160MHz y una velocidad de datos de hasta 2,4 Gbps * La velocidad de datos real puede variar según el entorno y el equipo.  Ranuras de expansión 1 x ranura PCI Express x16, funcionando a x16 (PCIEX16) * Para un rendimiento óptimo, si solo se va a instalar una tarjeta gráfica PCI Express, asegúrese de instalarla en la ranura PCIEX16. (La ranura PCIEX16 cumple con el estándar PCI Express 4.0.) * * Compatible únicamente con procesadores de 11.ª generación. 1 x ranura PCI Express x16, que se ejecuta en x4 (PCIEX4) 1 x ranura PCI Express x16, que se ejecuta en x1 (PCIEX1) (las ranuras PCIEX4 y PCIEX1 cumplen con el estándar PCI Express 3.0).  Tecnología Multi-Graphics Compatibilidad con las tecnologías AMD Quad-GPU CrossFire ™ y AMD CrossFire ™ de 2 vías  Interfaz de almacenamiento UPC: 1 x conector M.2 (Socket 3, clave M, tipo 2260/2280/22110 PCIe 4.0 x4 / x2 SSD compatible) (M2P_CPU) * * Solo compatible con procesadores de 11.a generación.  Conjunto de chips: 1 x conector M.2 (Socket 3, clave M, tipo 2260/2280/22110 SATA y compatibilidad con SSD PCIe 3.0 x4 / x2) (M2A_SB) 1 x conector M.2 (Socket 3, clave M, tipo 2260/2280/22110 PCIe 3.0 x4 / x2 SSD compatible) (M2B_SB) 6 x conectores SATA 6Gb / s * Consulte \"1-7 Conectores internos\" para conocer los avisos de instalación de los conectores PCIEX4, M.2 y SATA. Intel ® Memoria Ready ™ Optane  USB Conjunto de chips: 1 x puerto USB Type-C ® en el panel posterior, compatible con USB 3.2 Gen 2x2 1 x puerto USB Type-C ® con soporte USB 3.2 Gen 1, disponible a través del encabezado USB interno 1 x puerto USB 3.2 Gen 2 tipo A (rojo) en el panel posterior 2 x puertos USB 2.0 / 1.1 en el panel posterior  Conjunto de chips + 2 concentradores USB 3.2 Gen 1: 6 puertos USB 3.2 Gen 1 (4 puertos en el panel posterior, 2 puertos disponibles a través del encabezado USB interno)  Conjunto de chips + 1 concentrador USB 2.0: 4 puertos USB 2.0 / 1.1 disponibles a través de los encabezados USB internos  Conectores de E / S internos 1 conector de alimentación principal ATX de 24 pines 1 conector de alimentación ATX 12V de 8 pines 1 x cabezal de ventilador de CPU 1 x cabezal de ventilador de CPU de refrigeración por agua 3 x encabezados de ventilador del sistema 2 x encabezados de tira de LED direccionables 2 x encabezados de tira de LED RGB 3 x conectores M.2 Socket 3 6 x conectores SATA 6Gb / s 1 x encabezado del panel frontal 1 x encabezado de audio del panel frontal 1 x cabezal USB Type-C ® , compatible con USB 3.2 Gen 1 1 x encabezado USB 3.2 Gen 1 2 x encabezados USB 2.0 / 1.1 1 x encabezado de salida S / PDIF 2 x conectores de tarjeta adicional Thunderbolt ™ 1 x encabezado del módulo de plataforma confiable (solo para el módulo GC-TPM2.0 SPI / GC-TPM2.0 SPI 2.0) 1 x puente CMOS transparente 1 x botón Q-Flash Plus  Conectores del panel trasero 1 x puerto de teclado / mouse PS / 2 1 x DisplayPort 1 x puerto HDMI 2 x conectores de antena SMA (2T2R) 1 puerto USB Type-C ® , compatible con USB 3.2 Gen 2x2 1 x puerto USB 3.2 Gen 2 tipo A (rojo) 4 puertos USB 3.2 Gen 1 2 x puertos USB 2.0 / 1.1 1 x puerto RJ-45 6 x conectores de audio  Factor de forma ATX; 30,5 cm x 24,4 cm",
      "category": "motherboard",
      "name": "MOTHERBOARD GIGABYTE B560 AORUS PRO AX S1200",
      "image": "https://www.venex.com.ar/products_images/1626373110_1.png",
      "stock": 123,
      "quantity": 1
  },
  {
      "id": "0CgGoRQEroyoIQWps01Q",
      "name": "MEMORIA RAM DDR4 4GB 2666MHZ KINGSTON",
      "price": 3869,
      "category": "memoriaram",
      "image": "https://www.venex.com.ar/products_images/1628628785_sd36f1gds6f.jpg",
      "description": "Especificaciones.  CL(IDD) 16 cycles  Row Cycle Time (tRCmin) 45.75ns(min.)  Refresh to Active/Refresh Command Time (tRFCmin) 260ns(min.)  Row Active Time (tRASmin) 29.25ns(min.)  UL Rating 94 V - 0  Operating Temperature 0° C to +85° C Storage Temperature -55° C to +100° C Default (Plug N Play): DDR4-2666 CL16-18-18 @ 1.2V",
      "stock": 123,
      "quantity": 1
  },
  {
      "id": "DArVixDysMBWFR0AWUWO",
      "stock": 123,
      "name": "DISCO DURO HDD 1 TB WESTERN DIGITAL WD BLUE",
      "category": "discoduro",
      "image": "https://www.venex.com.ar/products_images/1586464610_disc3.jpg",
      "description": "Especificaciones:  - Interfaz SATA III (6 GB/s) - Tamaño del búfer 64 MB - Velocidad de rotación 7200 RPM - Capacidad 1 TB - Tiempos de acceso 0,6 ms (lectura) / 0,8 ms (escritura) - Carga / descarga 300.000 veces - Consumo de energía 6,4W (lectura/escritura); 3,7W (detenido); 1W (stand-by/sleep) - Dimensiones (al. x prof. x an.) 2,61 x 14,7 x 10,16 cm - Peso 450 g - Temperatura operativa 0°C a 60°C - Temperatura no operativa -40°C a 70°C",
      "price": 4899,
      "quantity": 1
  },
  {
      "id": "Ekj9iTh6kckwnH9gWAW3",
      "category": "discossd",
      "price": 10549,
      "stock": 123,
      "image": "https://www.venex.com.ar/products_images/1641847886_d5s61fgsdgf.png",
      "description": "Especificaciones:  Capacidad 500 GB Interfaz PCIe Gen4 Conector M.2 Rendimiento de lectura secuencial 3600MB/s Rendimiento de escritura secuencial 2000MB/s Dimensiones (largo, ancho y alto) 3.16\" x 0.87\" x 0.09\"  Nota: La compatibilidad puede variar según la configuración del hardware y del sistema operativo del usuario.",
      "name": "DISCO SOLIDO SSD 500GB WD M2 NVME",
      "quantity": 1
  }
]

const Main = () => {
  const [orderFinished, setOrderFinished] = useState(false)

    if(orderFinished){
      return(
        <div className='main'>
          <OrderContent setOrderFinished={setOrderFinished} />
        </div>
      )
    } 

    return (
    <div className='main'>
      <Aside />
      <DisplayProducts />
      <MainContent setOrderFinished={setOrderFinished} />
      <ModalPdf children={<OrderPdf products={test}/>}/>
    </div>
  )
}

export default Main;