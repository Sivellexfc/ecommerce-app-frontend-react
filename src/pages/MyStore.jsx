import React from "react";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const MyStore = () => {
  const [hasStore, setHasStore] = useState(null);
  const [storeInfo, setStoreInfo] = useState();

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
        }
      } catch (error) {
        console.error("Mağaza bilgisi alınamadı:", error);
        setHasStore(false);
      }
    };

    fetchStoreInfo();
  }, []);

  if (hasStore === null) {
    return <div>Loading...</div>;
  }

  return hasStore ? (
    <div className="h-screen flex justify-center items-center items-baseline mt-[150px] ">
      <div className="w-full px-[200px]">
        {storeInfo ? (
          <div className="">
            <h2 className="text-primary text-[20px] font-light border-b pb-[20px]">Mağaza Bilgileri</h2>
            <p className="text-primary text-[35px] font-semibold pt-[20px]">{storeInfo.storeName}</p>
            <p></p>
            <p className="text-gray-400 font-light">{storeInfo.id}</p>
            {/* Add other store information as needed */}
          </div>
        ) : (
          <p>No store information available.</p>
        )}
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
