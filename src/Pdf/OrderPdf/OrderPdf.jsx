import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PagesPDF, product_styles, table_styles, total_styles, getTotal} from './Util';

const page_styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  tableTitle: {
    fontSize: 10,
    paddingBottom: 4,
  }
})

export default function OrderPdf({products}) {
  console.log(products)
  return (
    <Document>
    <Page size="A4" style={page_styles.page} wrap>
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
        <View fixed>
          <PagesPDF/>
        </View>
      </View>
    </Page>
  </Document>
  )
}
