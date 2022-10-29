import { createContext, useState, useContext, useEffect } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';

const OrderContext = createContext([])

export function useOrderContext() {
    return useContext(OrderContext)
}

export const OrderContextProvider = ({children}) => {
    const [data, setData] = useState([])
    const [order, setOrder] = useState([])
    const [loader, setLoader] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [categoryToFetch, setCategoryToFetch] = useState()

    const getProducts = async (categoryToFetch) => {
        setLoader(true)
        
        try {
            const dataBase = getFirestore()
            const queryCollection = query(collection(dataBase, 'products'), where('category', '==', `${categoryToFetch}`))
            
            const response = await getDocs(queryCollection)
              .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
              .catch(err => console.log(err))

        } catch (error) {
            console.log(error)
        }
          setLoader(false)
    }

    const addProductToOrder = (product, amount) => {
        let isInOrder = order.find(prod => prod.category === product.category)
        
        if(isInOrder){
            setOrder([...order.filter(x => x.category !== product.category),{...product, quantity: amount}])
        } else {
            setOrder([...order,{...product, quantity: amount}])
        }
    }

    const deleteProductFromOrder = product => setOrder([...order.filter(x => x.id !== product.id)])
    
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
        }}>
            {children}
        </OrderContext.Provider>
    )
}