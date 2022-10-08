import { Text, StyleSheet } from '@react-pdf/renderer';

export const DividerPDF = () => {
    return <Text style={divider_styles.divider}>____________________________________________________________</Text>
}

export const PagesPDF = () => {
    return <Text style={pages_styles.pages} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed/>
}

const divider_styles = StyleSheet.create({
    divider: {
        color: '#eeeeee',
        width: '100%',
        marginTop: -15,
    }
});

const pages_styles = StyleSheet.create({
    pages: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontSize: 10,
        textAlign: "center",
    }
})

export const table_styles = StyleSheet.create({
    table: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      border: "1px solid #000000",
      marginBottom: 5,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 15,
    },
    firstColumn: {
      width: 340,
      fontSize: 10,
      textAlign: "left",
    },
    column: {
      width: 80,
      fontSize: 10,
      textAlign: "center"
    }
});

export const product_styles = StyleSheet.create({
    product: {
        paddingLeft: 15,
        paddingBottom: 5,
        display: "flex",
        flexDirection: "row",
        heigth: 20,
    },
    productTextName: {
        fontSize: 8,
        width: 340,
        marginRight: 5,
        color: "#000000",
        textTransform: "lowercase"
    },
    productText: {
        fontSize: 8,
        width: 80,
        color: "#000000",
        textAlign: "center",
    }
});

// export const total_styles = StyleSheet.create({
//     total: {
//         // border: "1px solid #000000",
//         // padding: 10,
//         // marginTop: 10,
//         // width: 600,
//         // textAlign: "right"
//     },
//     totalText: {
//         fontSize: 8,
//         color: "red",
//     }
// })

export const total_styles = StyleSheet.create({
    total: {
        border: "1px solid #000000",
        paddingRight: 25,
        marginTop: 5,
        width: "100%",
        textAlign: "right",
    },
    totalText: {
        fontSize: 14,
    }
})