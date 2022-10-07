import React from 'react'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

const pdf = () => {

    const  handleExportWithFunction  = (event) => {
        savePDF({ paperSize:  "A4" });
      }

    return (
    <PDFExport  paperSize="A4">
    <div>
      <h1>KendoReact PDF Processing</h1>
      <p>This is an example of text that may be <span  className="neat-style">styled</span>
      </p>
      <div  className="button-area">
        <button  primary={true}>Export with Component</button>
        <button primary={true} onClick={() => handleExportWithFunction()}>Export with Component</button>
      </div>
    </div>
  </PDFExport>
  )
}

export default pdf