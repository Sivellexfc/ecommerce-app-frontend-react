import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const NewStoreForm = () => {

  const [storeName, setStoreName] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwtToken = Cookies.get("authToken");
    
    const formData = new FormData();
    formData.append("storeName", storeName);
    

    try {
      console.log("Token: " + jwtToken);
      const response = await axios.post(
        "http://localhost:8889/api/store/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`, 
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Mağaza Başarıyla oluşturuldu:", response.data);
      } else {
        console.log("Mağaza oluşturma başarısız oldu.");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
    window.location.href = "/seller-dashboard";
    
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 mb-[100px] mt-[100px]">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Mağaza Oluştur</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Ürün Adı */}
        <div className="mb-4">
          <label className="block text-gray-700">Mağaza Adı</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border focus:outline-none  focus:border-gray-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 hover:bg-primary transition duration-200"
        >
          Oluştur
        </button>
      </form>
    </div>
  );
};

export default NewStoreForm;
