import { createContext, useState, useContext, useEffect } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';

const OrderContext = createContext([])

export function useOrderContext() {
    return useContext(OrderContext)
}

export const OrderContextProvider = ({children}) => {
    const [intelOrAmd, setIntelOrAmd] = useState(null)
    const [data, setData] = useState([])
    const [loader, setLoader] = useState()
    const [order, setOrder] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [categoryToFetch, setCategoryToFetch] = useState()

    const getProducts = (categoryToFetch) => {
        setLoader(true)
        const dataBase = getFirestore()
        const queryCollection = query(collection(dataBase, 'products'), where('category', '==', `${categoryToFetch}`))
        getDocs(queryCollection)
          .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
          .catch(err => console.log(err))
          .finally(() => setLoader(false))     
    }

    const addProductToOrder = (product, amount) => {
        let isInOrder = order.find(prod => prod.category === product.category)
        if(isInOrder){
            setOrder([...order.filter(x => x.category !== product.category),{...product, quantity: amount}])
        } else {
            setOrder([...order,{...product, quantity: amount}])
        }
    }

    const deleteProductFromOrder = (product) => {
        setOrder([...order.filter(x => x.id !== product.id)])
    }

    const handleSetBrand = (brand) => {
        setIntelOrAmd(brand)
        getProducts(`microprocesador${brand}`)
        setOrder([])
    }

    useEffect(() => {
        let totalPrice = 0
        let totalProduct = 0
        order.forEach(product => {
            totalProduct = product.quantity * product.price
            totalPrice += totalProduct
        })
        setTotalPrice(totalPrice)
    }, [order])

    return(
        <OrderContext.Provider value={{
            intelOrAmd,
            setIntelOrAmd,
            data,
            loader,
            setData,
            order,
            setOrder,
            totalPrice,
            setTotalPrice,
            categoryToFetch,
            setCategoryToFetch,
            getProducts,
            addProductToOrder,
            deleteProductFromOrder,
            handleSetBrand
        }}>
            {children}
        </OrderContext.Provider>
    )
}