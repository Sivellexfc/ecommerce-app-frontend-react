import React, {createContext,useState,useEffect} from 'react';

export const  ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [products,setProducts] = useState([]);
    const [productsByStore,setproductsByStore] = useState([]);

    const fetchAllProducts = async ()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    }

    const fetchProductsByStore = async ({id})=>{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    }

    

  return <ProductContext.Provider value={{products,fetchAllProducts}}>{children}</ProductContext.Provider>
};

export default ProductProvider;