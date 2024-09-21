import React from "react";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Product from "../components/Product";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const MyStore = () => {
  const [hasStore, setHasStore] = useState(null);
  const [storeInfo, setStoreInfo] = useState([]);
  const { fetchProductsByStore, productsByStore } = useContext(ProductContext);

  useEffect(() => {
    const fetchStoreInfo = async () => {
      try {
        const token = Cookies.get("authToken");
        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.accountId;

          const response = await axios.get(
            `http://localhost:8889/api/store/owner/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response.data);
          setStoreInfo(response.data);
          setHasStore(true);
          // Fetch products by store after getting store information
          if (response.data.id) {
            fetchProductsByStore({ storeId: response.data.id });
          }
        }
      } catch (error) {
        console.error("Mağaza bilgisi alınamadı:", error);
        setHasStore(false);
      }
    };
    fetchStoreInfo();
  }, [fetchProductsByStore]);

  if (hasStore === null) {
    return <div>Loading...</div>;
  }

  return hasStore ? (
    <div className="h-screen flex flex-col items-center items-baseline mt-[150px] ">
      <div className="w-full px-[200px]">
        {storeInfo ? (
          <div className="flex flex-col items-start">
          <h2 className="text-primary text-[20px] font-light border-b pb-[20px] w-full">
            Mağaza Bilgileri
          </h2>
  
          <div className="flex items-center justify-between w-full pt-[20px]">
            <div className="flex flex-col">
              <p className="text-primary text-[35px] font-semibold">
                {storeInfo.storeName}
              </p>
              <p className="text-gray-400 font-light">{storeInfo.id}</p>
            </div>
            <div>
              <Link to={`/newProduct`} >
              <button className="bg-primary text-white py-2 px-4 hover:bg-primary-dark transition duration-200">
                Ürün Ekle
              </button></Link>
            </div>
          </div>
        </div>
        ) : (
          <p>No store information available.</p>
        )}
      </div>

      <div className="container mx-auto py-[100px]">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
          xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
        >
          {productsByStore.map((product) => {
            return (
              <Product key={product.id} product={product}>
                {product.title}
              </Product>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="mb-4 text-lg text-gray-700">Henüz mağazanız yok.</p>
      <button className="bg-primary text-white py-2 px-4 hover:bg-primary-dark transition duration-200">
        Hemen Oluştur
      </button>
    </div>
  );
};

export default MyStore;
