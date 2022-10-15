import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import './ModalPdf.scss';

function ModalPdf({children, close}) {
  return (
    <div className="modalPdf">
        <div className='modalPdf_title'>
            <h2 className="modalPdf_title_h2"> Orden de compra</h2>
            <p  className="modalPdf_title_p"onClick={close}>Cerrar</p>
        </div>
        <PDFViewer className="modalPdf_viewer">
            {children}
        </PDFViewer>
    </div>
  )
}

export default ModalPdf;