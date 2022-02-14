import { createContext, useState, useContext, useEffect } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';

const OrderContext = createContext([])

export function useOrderContext() {
    return useContext(OrderContext)
}

export const OrderContextProvider = ({children}) => {
    const [data, setData] = useState([])
    const [order, setOrder] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [categoryToFetch, setCategoryToFetch] = useState()

    const getProducts = (categoryToFetch) => {
        const dataBase = getFirestore()
        const queryCollection = query(collection(dataBase, 'products'), where('category', '==', `${categoryToFetch}`))
        getDocs(queryCollection)
          .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
          .catch(err => console.log(err))
        //   .finally(() => )
        
    }

    const addProductToOrder = (product) => {
        let isInOrder = order.find(prod => prod.category === product.category)
        if(isInOrder){
            setOrder([...order.filter(x => x.category !== product.category), product])
        } else {
            setOrder([...order, product])
        }
    }

    const deleteProductFromOrder = (product) => {
        setOrder([...order.filter(x => x.id !== product.id)])
    }

    useEffect(() => {
        const totalPrice = order.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
        setTotalPrice(totalPrice)
    }, [order])

    return(
        <OrderContext.Provider value={{
           data,
           setData,
           order,
           setOrder,
           totalPrice,
           setTotalPrice,
           categoryToFetch,
           setCategoryToFetch,
           getProducts,
           addProductToOrder,
           deleteProductFromOrder
        }}>
            {children}
        </OrderContext.Provider>
    )
}