import React, {createContext,useState,useEffect,useCallback} from 'react';
import Cookies from 'js-cookie';

export const  ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [products,setProducts] = useState([]);
    const [productsByStore,setproductsByStore] = useState([]);
    
  
    const fetchAllProducts = async () => {
        const token = Cookies.get("authToken");
        const response = await fetch("http://localhost:8889/api/product/get/all", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log(data)
        setProducts(data);
    };

    

    const fetchProductsByStore = useCallback(async ({ storeId }) => {
        const token = Cookies.get("authToken");
        const response = await fetch(`http://localhost:8889/api/product/get/seller/${storeId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setproductsByStore(data);
      }, []);

  return <ProductContext.Provider value={{products,productsByStore,fetchAllProducts,fetchProductsByStore}}>{children}</ProductContext.Provider>
};

export default ProductProvider;