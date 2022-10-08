import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { PagesPDF, product_styles, table_styles, total_styles, getTotal, setExpiredDate} from './Util';
import Logo from '../../Assets/Logo.png'

const page_styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  tableTitle: {
    fontSize: 10,
    paddingBottom: 4,
  },
  reminder: {
    fontSize: 8,
    paddingTop: 4,
  },
  firstContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  imageContainer: {
    width: 80,
    height: 50,
  }, 
  logoImage: {
    display: "flex",
    height: 5,
    width: 5,
    objectFit: 'fill',
  },
  textContainer: {
    border: "1px solid #000000",
    padding: 10,
  },
  textContent: {
    fontSize: 10,
    paddingBottom: 5,
  }
})

export default function OrderPdf({products}) {
  return (
    <Document>
      <Page size="A4" style={page_styles.page} wrap>
        <View>
          <View style={page_styles.firstContent}>
            <View style={page_styles.imageContainer}>
                <Image src={Logo} styles={page_styles.logoImage} />
            </View>
            <View style={page_styles.textContainer}>
              <View>
                <Text style={page_styles.textContent}>
                  Presupuesto número: #{(Math.random() * 1000000000).toFixed(0)}
                </Text>
              </View>
              <View>
                <Text style={page_styles.textContent}>
                  Fecha: {new Date().toLocaleDateString("ES-ar")}
                </Text>
              </View>
              <View>
                <Text style={page_styles.textContent}>
                  Fecha vencimiento: {setExpiredDate()}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={page_styles.tableTitle}>
              Detalles del presupuesto:
            </Text>
          </View>
          <View style={table_styles.table}> 
            <View>
              <Text style={table_styles.firstColumn}>
                Descripción
              </Text>
            </View>
             <View >
              <Text style={table_styles.column}>
                Precio
              </Text>
            </View>
            <View >
              <Text style={table_styles.column}>
                Cantidad
              </Text>
            </View>
            <View >
              <Text style={table_styles.column}>
                Subtotal
              </Text>
            </View>
          </View>
          <View>
            {products.map((product, index) => {
              return (
                <View key={index} style={product_styles.product}>
                  <View style={product_styles.productTextName}>
                  <Text>{product.name}</Text>
                </View>
                <View style={product_styles.productText}>
                  <Text>${(product.price).toLocaleString("ES-ar")}</Text>
                </View>
                <View style={product_styles.productText}>
                  <Text>{product.quantity}</Text>
                </View>
                <View style={product_styles.productText}>
                  <Text>${(product.price * product.quantity).toLocaleString("ES-ar")}</Text>
                </View>
              </View>
              )
            })}
            <View style={total_styles.total}>
              <Text style={total_styles.totalText}>
                Total: ${getTotal(products)}
              </Text>
            </View>
            <View>
              <Text style={page_styles.reminder}>
                Entregar este presupuesto antes de la fecha de vencimiento.
              </Text>
            </View>
            <View fixed>
              <PagesPDF/>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
