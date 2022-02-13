import { createContext, useState, useContext, useEffect } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';

const OrderContext = createContext([])

export function useOrderContext() {
    return useContext(OrderContext)
}

export const OrderContextProvider = ({children}) => {
    const [data, setData] = useState([])
    const [order, setOrder] = useState([])
    const [categoryToFetch, setCategoryToFetch] = useState()
    

    const addProductToOrder = (product) => {
        setOrder([...order, product])
        console.log(order)
    }




    const getProducts = (categoryToFetch) => {
        console.log('getting products')
        console.log(categoryToFetch)
        const dataBase = getFirestore()
        const queryCollection = query(collection(dataBase, 'products'), where('category', '==', `${categoryToFetch}`))
        getDocs(queryCollection)
          .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
          .catch(err => console.log(err))
          .finally(console.log('productos obtenidos'))
      }


    return(
        <OrderContext.Provider value={{
           data,
           setData,
           order,
           setOrder,
           categoryToFetch,
           setCategoryToFetch,
           getProducts,
           addProductToOrder
        }}>
            {children}
        </OrderContext.Provider>
    )
}