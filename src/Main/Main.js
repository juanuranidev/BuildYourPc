import React, { useState  } from 'react';
import OrderContent from './OrderContent/OrderContent';
import Aside from '../Aside/Aside';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import MainContent from './MainContent/MainContent';
import ModalPdf from '../Modals/ModalPdf/ModalPdf';
import OrderPdf from '../Pdf/OrderPdf/OrderPdf';
import './_Main.scss';

const productos = [
  {
      "id": "4UJp1gjulrMdvdQGz3Zf",
      "category": "microprocesadorintel",
      "name": "MICROPROCESADOR INTEL CORE I5 9400 4.1GHZ",
      "price": 27499,
      "image": "https://www.venex.com.ar/products_images/1617202662_1555515752_sda.png",
      "description": "Cantidad de núcleos 6 Cantidad de subprocesos 6 Frecuencia básica del procesador 2.90 GHz Frecuencia turbo máxima 4.10 GHz Caché 9 MB SmartCache Velocidad del bus 8 GT/s DMI3 TDP 65 W",
      "stock": 123,
      "quantity": 1
  },
  {
      "id": "9HYQ55q8VuzEY5IXDyud",
      "category": "motherboard",
      "image": "https://www.venex.com.ar/products_images/1626373110_1.png",
      "stock": 123,
      "name": "MOTHERBOARD GIGABYTE B560 AORUS PRO AX S1200",
      "price": 27299,
      "description": "La placa base B560 AORUS utiliza un diseño de alimentación de CPU digital de 12 + 1 fases que incluye tanto el controlador PWM digital como DrMOS. Este controlador 100% digital y conectores de alimentación de CPU de 8 clavijas sólidas adicionales ofrecen una precisión increíble en la entrega de energía a los componentes de la placa base que más consumen energía y son sensibles a la energía, lo que permite a los entusiastas obtener el máximo rendimiento absoluto de la nueva CPU Intel de 11a generación.  Especificaciones:  CPU Paquete LGA1200:  Procesadores Intel® Core ™ i9 de 11.a generación / Procesadores Intel® Core ™ i7 / Procesadores Intel® Core ™ i5 10ª generación Intel ® Core ™ i9 procesadores / Intel ® Core ™ i7 / Intel ® Core ™ i5 procesadores / Intel ® Core ™ i3 procesadores / Intel ® Pentium ® procesadores / Intel ® Celeron ® procesadores * * limitada a los transformadores con 4 MB de Intel ® Smart Cache, familia Intel ® Celeron ® G5xx5. La caché L3 varía con la CPU  Chipset Conjunto de chips Intel ® B560 Express  Memoria Procesadores Intel® Core ™ i9 / i7 / i5 de 11.a generación : compatibilidad con DDR4 5333 (OC) / DDR4 5133 (OC) / DDR4 5000 (OC) / 4933 (OC) / 4800 (OC) / 4700 (OC) / 4600 ( OC) / 4500 (OC) / 4400 (OC) / 4300 (OC) / 4266 (OC) / 4133 (OC) / 4000 (OC) / 3866 (OC) / 3800 (OC) / 3733 (OC) / 3666 ( OC) / 3600 (OC) / 3466 (OC) / 3400 (OC) / 3333 (OC) / 3300 (OC) / 3200/3000/2933/2800/2666/2400/2133 MHz módulos de memoria Procesadores Intel® Core ™ i9 / i7 de décima generación : compatibilidad con módulos de memoria DDR4 2933/2666/2400/2133 MHz Intel décima generación ® Core ™ i5 / i3 / Pentium ® / Celeron ® procesadores: Soporte para módulos de memoria DDR4 2666/2400/2133 MHz 4 x zócalos DDR4 DIMM que admiten hasta 128 GB (capacidad de un solo DIMM de 32 GB) de memoria del sistema Arquitectura de memoria de doble canal Compatibilidad con módulos de memoria DIMM 1Rx8 / 2Rx8 sin búfer ECC (funcionan en modo no ECC) Soporte para módulos de memoria DIMM 1Rx8 / 2Rx8 / 1Rx16 sin búfer no ECC Soporte para módulos de memoria Extreme Memory Profile (XMP)  (Consulte la \"Lista de soporte de memoria\" para obtener más información). Gráficos integrados Procesador de gráficos integrado: compatibilidad con gráficos HD Intel® :  1 x DisplayPort, que admite una resolución máxima de 4096x2304 a 60 Hz * Soporte para la versión DisplayPort 1.2 y HDCP 2.3 1 x puerto HDMI, que admite una resolución máxima de 4096x2160 @ 30 Hz * Soporte para la versión HDMI 1.4 y HDCP 2.3.  Audio Códec Realtek ® ALC4080 Audio de alta definición 2/4 / 5.1 / 7.1 canales Soporte para salida S / PDIF  LAN Intel ® de chip 2.5GbE LAN (2,5 Gbit / 1 Gbit / 100 Mbit)  Módulo de comunicación inalámbrica Intel ® Wi-Fi 6 AX200 Wi-Fi 802.11a / b / g / n / ac / ax, compatible con banda dual de 2,4 / 5 GHz BLUETOOTH 5.1 Compatibilidad con el estándar inalámbrico 11ax 160MHz y una velocidad de datos de hasta 2,4 Gbps * La velocidad de datos real puede variar según el entorno y el equipo.  Ranuras de expansión 1 x ranura PCI Express x16, funcionando a x16 (PCIEX16) * Para un rendimiento óptimo, si solo se va a instalar una tarjeta gráfica PCI Express, asegúrese de instalarla en la ranura PCIEX16. (La ranura PCIEX16 cumple con el estándar PCI Express 4.0.) * * Compatible únicamente con procesadores de 11.ª generación. 1 x ranura PCI Express x16, que se ejecuta en x4 (PCIEX4) 1 x ranura PCI Express x16, que se ejecuta en x1 (PCIEX1) (las ranuras PCIEX4 y PCIEX1 cumplen con el estándar PCI Express 3.0).  Tecnología Multi-Graphics Compatibilidad con las tecnologías AMD Quad-GPU CrossFire ™ y AMD CrossFire ™ de 2 vías  Interfaz de almacenamiento UPC: 1 x conector M.2 (Socket 3, clave M, tipo 2260/2280/22110 PCIe 4.0 x4 / x2 SSD compatible) (M2P_CPU) * * Solo compatible con procesadores de 11.a generación.  Conjunto de chips: 1 x conector M.2 (Socket 3, clave M, tipo 2260/2280/22110 SATA y compatibilidad con SSD PCIe 3.0 x4 / x2) (M2A_SB) 1 x conector M.2 (Socket 3, clave M, tipo 2260/2280/22110 PCIe 3.0 x4 / x2 SSD compatible) (M2B_SB) 6 x conectores SATA 6Gb / s * Consulte \"1-7 Conectores internos\" para conocer los avisos de instalación de los conectores PCIEX4, M.2 y SATA. Intel ® Memoria Ready ™ Optane  USB Conjunto de chips: 1 x puerto USB Type-C ® en el panel posterior, compatible con USB 3.2 Gen 2x2 1 x puerto USB Type-C ® con soporte USB 3.2 Gen 1, disponible a través del encabezado USB interno 1 x puerto USB 3.2 Gen 2 tipo A (rojo) en el panel posterior 2 x puertos USB 2.0 / 1.1 en el panel posterior  Conjunto de chips + 2 concentradores USB 3.2 Gen 1: 6 puertos USB 3.2 Gen 1 (4 puertos en el panel posterior, 2 puertos disponibles a través del encabezado USB interno)  Conjunto de chips + 1 concentrador USB 2.0: 4 puertos USB 2.0 / 1.1 disponibles a través de los encabezados USB internos  Conectores de E / S internos 1 conector de alimentación principal ATX de 24 pines 1 conector de alimentación ATX 12V de 8 pines 1 x cabezal de ventilador de CPU 1 x cabezal de ventilador de CPU de refrigeración por agua 3 x encabezados de ventilador del sistema 2 x encabezados de tira de LED direccionables 2 x encabezados de tira de LED RGB 3 x conectores M.2 Socket 3 6 x conectores SATA 6Gb / s 1 x encabezado del panel frontal 1 x encabezado de audio del panel frontal 1 x cabezal USB Type-C ® , compatible con USB 3.2 Gen 1 1 x encabezado USB 3.2 Gen 1 2 x encabezados USB 2.0 / 1.1 1 x encabezado de salida S / PDIF 2 x conectores de tarjeta adicional Thunderbolt ™ 1 x encabezado del módulo de plataforma confiable (solo para el módulo GC-TPM2.0 SPI / GC-TPM2.0 SPI 2.0) 1 x puente CMOS transparente 1 x botón Q-Flash Plus  Conectores del panel trasero 1 x puerto de teclado / mouse PS / 2 1 x DisplayPort 1 x puerto HDMI 2 x conectores de antena SMA (2T2R) 1 puerto USB Type-C ® , compatible con USB 3.2 Gen 2x2 1 x puerto USB 3.2 Gen 2 tipo A (rojo) 4 puertos USB 3.2 Gen 1 2 x puertos USB 2.0 / 1.1 1 x puerto RJ-45 6 x conectores de audio  Factor de forma ATX; 30,5 cm x 24,4 cm",
      "quantity": 1
  },
  {
      "id": "DArVixDysMBWFR0AWUWO",
      "description": "Especificaciones:  - Interfaz SATA III (6 GB/s) - Tamaño del búfer 64 MB - Velocidad de rotación 7200 RPM - Capacidad 1 TB - Tiempos de acceso 0,6 ms (lectura) / 0,8 ms (escritura) - Carga / descarga 300.000 veces - Consumo de energía 6,4W (lectura/escritura); 3,7W (detenido); 1W (stand-by/sleep) - Dimensiones (al. x prof. x an.) 2,61 x 14,7 x 10,16 cm - Peso 450 g - Temperatura operativa 0°C a 60°C - Temperatura no operativa -40°C a 70°C",
      "image": "https://www.venex.com.ar/products_images/1586464610_disc3.jpg",
      "stock": 123,
      "price": 4899,
      "category": "discoduro",
      "name": "DISCO DURO HDD 1 TB WESTERN DIGITAL WD BLUE",
      "quantity": 1
  },
  {
      "id": "0CgGoRQEroyoIQWps01Q",
      "image": "https://www.venex.com.ar/products_images/1628628785_sd36f1gds6f.jpg",
      "category": "memoriaram",
      "name": "MEMORIA RAM DDR4 4GB 2666MHZ KINGSTON",
      "stock": 123,
      "description": "Especificaciones.  CL(IDD) 16 cycles  Row Cycle Time (tRCmin) 45.75ns(min.)  Refresh to Active/Refresh Command Time (tRFCmin) 260ns(min.)  Row Active Time (tRASmin) 29.25ns(min.)  UL Rating 94 V - 0  Operating Temperature 0° C to +85° C Storage Temperature -55° C to +100° C Default (Plug N Play): DDR4-2666 CL16-18-18 @ 1.2V",
      "price": 3869,
      "quantity": 1
  },
  {
      "id": "4nPmOTYvOy8B1fBWnKV6",
      "image": "https://www.venex.com.ar/products_images/1604587888_imagen.jpg",
      "price": 17259,
      "stock": 123,
      "category": "discossd",
      "description": "Aumente su poder creativo con la unidad de estado sólido (SSD) ADATA FALCON. Utilizando la interfaz PCIe Gen3x4 y equipada con una memoria flash 3D NAND, la unidad FALCON ofrece una velocidad de lectura/escritura de hasta 31 000/1500 MB por segundo para una productividad y creatividad ininterrumpidas.  Especificaciones:  Capacidad  1TB Factor de forma M.2 2280 NAND Flash 3D NAND Dimensiones (L x An x Al) 80 x 22 x 2,9mm / 3,15 x 0,87 x 0,11\" Peso 9g / 0,32oz Interfaz PCIe Gen3x4 Lectura secuencial (máx*) Hasta 3100MB/s Escritura secuencial (máx*) Hasta 1500MB/s Temperatura de operación De 0°C a 70°C Temperatura de almacenamiento De -40°C a 85°C Resistencia a golpes 1500 G/0,5 ms MTBF 1 800 000 horas Terabytes escritos (TBW) (capacidad máxima*) 600TB",
      "name": "DISCO DE ESTADO SOLIDO SSD 1TB ADATA M.2 NVME",
      "quantity": 1
  },
  {
      "id": "ChTxtEn5b7IIjjbsHyk1",
      "name": "PLACA DE VIDEO MSI NVIDIA GEFORCE RTX 3060TI",
      "price": 171999,
      "category": "placadevideo",
      "description": "Especificaciones:  Nombre del modelo GeForce RTX ™ 3060 Ti GAMING X 8G LHR Unidad de procesamiento de gráficos NVIDIA®  GeForce RTX ™ 3060 Ti Interfaz PCI Express®  Gen 4 Núcleos 4864 Aumento de relojes de núcleo: 1770 MHz Velocidad de memoria 14 Gbps Memoria 8GB GDDR6 Bus de memoria de 256 bits Producción DisplayPort x 3 (v1.4a) HDMI x 1 (admite 4K a 120Hz como se especifica en HDMI 2.1) Soporte HDCP Y Consumo de energía 220W Conectores de alimentación de 8 pines x 1 + 6 pines x 1 PSU recomendada 600W Dimensión de la tarjeta (mm) 278 x 131 x 51 mm Peso (tarjeta / paquete) 1007g / 1596g Compatibilidad con la versión de DirectX 12 API Compatibilidad con la versión de OpenGL 4.6 Tecnología Multi-GPU Y Pantallas máximas 4 VR listo Y G-SYNC®  tecnología Y Sincronización vertical adaptable Y Resolución máxima digital 7680x4320",
      "stock": 123,
      "image": "https://www.venex.com.ar/products_images/1632938321_placa-de-video-msi-nvidia-geforce-rtx-3060ti-gaming-x-dual-lhr.jpg",
      "quantity": 1
  },
  {
      "id": "44Tyi2uRF9d0QYDtgS2a",
      "name": "FUENTE AEROCOOL 750W 80+ GOLD ARGB",
      "stock": 123,
      "category": "fuente",
      "price": 17990,
      "description": "■Con un diseño elegante con ventilador ARGB de 12 cm, el DORADO mejora la apariencia de su configuración de juego mientras alimenta su sistema de manera eficiente. ■Da vida a tu sistema con 13 efectos de iluminación preestablecidos que se pueden controlar mediante el botón de control LED. Compatible con tarjetas madre RGB direccionables mediante conector ARGB. ■Circuito de conversión de CC a CC para una mayor eficiencia y una regulación de voltaje estricta incluso en condiciones de carga cruzada pesada ■El ventilador de alta presión de 12 cm con velocidad optimizada permite un ruido del ventilador casi inaudible y un funcionamiento silencioso de la fuente de alimentación  Eficiencia de hasta 92% El DORADO tiene la certificación 80Plus Gold para una eficiencia de hasta 92% +, brindando un rendimiento de máxima eficiencia.  Potencia 750W",
      "image": "https://www.venex.com.ar/products_images/1638552320_fuente.png",
      "quantity": 1
  },
  {
      "id": "0SAQ4Us97430K5DbQ5Ze",
      "category": "gabinete",
      "name": "GABINETE MAGNUM TECH MT 435R RED LED ATX",
      "image": "https://www.venex.com.ar/products_images/1569249179_p.jpg",
      "stock": 123,
      "price": 5990,
      "description": "Chasis: Black steel 0.45mm, negro. Puertos: USB2.0 x2 + Audio + Mic Soporte Motherboard: ATX / Micro ATX / Mini ATX Bahías: 5.25” x1 Ext + 3.5” x4 Int + 2.5” x1 Int Slots de Expansión: 7 Coolers: 2x12cm 04 red LEDs (integrados)",
      "quantity": 1
  },
  {
      "id": "BIFTPFJxrq8ETxNqNN6C",
      "stock": 123,
      "category": "cooler",
      "description": "Disipador de calor de doble torre con un tubo uniforme de 6 Insignia de iluminación Sistema de montaje fácil El nuevo ventilador SF120R Controlador LED RGB direccionable  Una combinación de 2 juegos de disipador térmico permite un área de superficie más grande y más extendida. La pintura negra mejora el rendimiento de enfriamiento por radiación.  Especificaciones:  Socket Cpu Lga2066, Lga2011-V3, Lga2011, Lga1200, Lga1151, Lga1150, Lga1155, Lga1156, Am4, Am3 +, Am3, Am2 +, Am2, Fm2 +, Fm2, Fm1 Dimensiones (L X W X H) 135 X 125 X 165 Mm / 5.3 X 4.9 X 6.5 Pulgadas Material Del Disipador De Calor 6 Tubos De Calor, Aletas De Aluminio Dimensiones Del Ventilador (L X W X H) 120 X 120 X 25 Mm / 4.7 X 4.7 X 1 Pulgada Cantidad De Ventiladores Pc 1 Velocidad Del Ventilador 650-2000 Rpm (Pwm) ± 10% Flujo De Aire Del Ventilador 57,3 Cfm (MáX.) Presion De Aire Del Ventilador 2,0 Mmh2O (MáX.) Fan Mttf 160.000 Horas Nivel De Ruido Del Ventilador 8 - 30 Dba Conector De AlimentaciÓN Del Ventilador 4 Pines (Pwm) Voltaje Nominal Del Ventilador 12Vdc Corriente Clasificada Del Ventilador 0,16 A Corriente De Seguridad Del Ventilador 0.37A Consumo De EnergÍA Del Ventilador 1,92 W",
      "name": "FAN COOLER CPU COOLER MASTER MA620M ARGB",
      "image": "https://www.venex.com.ar/products_images/1608043811_ma620m1zoom.png",
      "price": 19990,
      "quantity": 1
  },
  {
      "id": "c3W7zT6d4DOgjMwPX5Nu",
      "description": "Todas las prestaciones que hacen la diferencia, en un teclado de membrana cómodo y silencioso a la hora de jugar o trabajar. Construido en plástico ABS resistente, sus switches de membrana están encapsulados y sus keycaps son de inyección de doble disparo lo que les da una durabilidad excelente, sin olvidarnos del cable mallado resistente con ficha bañada para mejorar la transmisión.  Especificaciones:  -Tipo Teclado: Membrana -Tipo Switch: Membrana -Teclas Multimedia: Si, dedicadas -Teclas Macro Dedicadas: Si -Bloqueo Tecla Windows: Si -Tamaño teclado: Full Size -Reposamuñecas: Si, magnético extraíble -Retroiluminado: Sí, RGB Full -Cable: Mallado, reforzado. Soporta 12 kg y 10000 flexiones. USB enchapado en oro -Matriz: 26 teclas Anti-Ghosting con Key Rollover -Construcción: Plástico ABS reforzado -Anti salpicaduras: Si -Distribución: Español Latinoamérica -Peso: 1.09 kg -Dimensiones: 44 x 15.3 x 3.2 cm. -Extras: Macros, botones multimedia -Software: Si",
      "price": 3699,
      "category": "teclado",
      "image": "https://www.venex.com.ar/products_images/1609856969_k512_shiva_rgb_pngweb_1.png",
      "name": "TECLADO REDRAGON SHIVA MEMBRANA",
      "stock": 123,
      "quantity": 1
  },
  {
      "id": "hrD4lKO8Yl7kaCvt3RMR",
      "price": 41990,
      "description": "CALIDAD DE IMAGEN SUPERIOR Y DISEÑO CLASICO ELEGANTE.  El monitor ASUS VA27EHE Eye Care presenta un panel IPS de 27 pulgadas con resolución Full HD (1920 x 1080), que proporciona un panel de ángulo de visión de 178 ° de ancho y una calidad de imagen vívida. Frecuencia de actualización de hasta 75Hz con la tecnología Adaptive-Sync / FreeSync ™ para eliminar el rastreo y garantizar una reproducción de video nítida y clara.   Tamaño del panel: pantalla ancha 27.0 \"(68.6cm) 16: 9 Tipo de panel: IPS Resolución verdadera: 1920x1080 Área de visualización de la pantalla: (HxV): 597.89 x 336.31 mm Superficie de la pantalla: no deslumbrante Distancia entre Brillo: (máx.): 250 cd / ㎡ Relación de contraste: (Máx.): 1000: 1 ASUS Smart Contrast Ratio: (ASCR): 100000000: 1 Ángulo de visión: (CR ≧ 10): 178 ° (H) / 178 ° (V) Colores de la pantalla: 16,7M (real 8 bit) Sin Parpadeo : Sí Frecuencia de actualización: (máx.): 75Hz Entrada de señal: HDMI, D-Sub Diseño sin marco: Sí  Nota: * Adaptive-Sync / FreeSync ™ solo se puede activar dentro de “48Hz ~ 75Hz” a través del puerto HDMI",
      "name": "MONITOR 27 ASUS VA27EHE IPS VGA/HDMI NEGRO",
      "image": "https://www.venex.com.ar/products_images/1588113364_imagen.jpg",
      "stock": 123,
      "category": "monitor",
      "quantity": 1
  },
  {
      "id": "o5wWLuDfHTHywwJSb9YA",
      "stock": 123,
      "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
      "price": 3599,
      "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
      "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
      "category": "mouse",
      "quantity": 1
  },
  {
    "id": "o5wWLuDfHTHywwJSb9YA",
    "stock": 123,
    "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
    "price": 3599,
    "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
    "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
    "category": "mouse",
    "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
{
  "id": "o5wWLuDfHTHywwJSb9YA",
  "stock": 123,
  "description": "El HyperX Pulsefire Surge™ les brinda a los gamers el mejor estilo y esencia, brindando máxima precisión gracias al sensor Pixart 3389 y espectaculares efectos de iluminación  RGB 360° con un exclusivo anillo de luz. Los ajustes DPI nativos de Pulsefire Surge pueden llegar hasta los 16.000 DPI para lograr una precisión suprema, y los interruptores Omron con alta capacidad de respuesta, preparados para 50 millones de clics, te aseguran que tus pulsaciones se registren con el primer clic. Personaliza la iluminación del Pulsefire Surge, los DPI y las funciones de los botones con el poderoso software Ngenuity.  Características Los anillos de luz brindan efectos dinámicos RGB 360° Sensor Pixart 3389 con DPI nativos de hasta 16.000 Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity Memoria interna para almacenar personalizaciones Skates de tamaño extra grande que ayuda a mantener un movimiento suave",
  "price": 3599,
  "name": "MOUSE GAMER HYPERX PULSEFIRE SURGE RGB",
  "image": "https://www.venex.com.ar/products_images/1522331701_crop565_pulsefiresurgelr2toppr.jpg",
  "category": "mouse",
  "quantity": 1
},
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
        <ModalPdf 
          children={<OrderPdf products={productos}/>}
          // close={() => setModalPdf(false)}
        />
    </div>
  )
}

export default Main;