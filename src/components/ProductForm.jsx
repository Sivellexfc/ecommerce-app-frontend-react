import React, { useState } from "react";

import axios from "axios";
import Cookies from "js-cookie";

const ProductForm = () => {
  Cookies.set("authToken", "eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50SWQiOiIxIiwicm9sZXMiOlsiU0VMTEVSIl0sInN1YiI6InNlbGxlciIsImlhdCI6MTcyNjcwMDM3NSwiZXhwIjoxNzI2NzE4Mzc1fQ.6eIHWbBKFZxtnKWjAlxTQ2QNPjTItz2YonphuqYaBNQ", { expires: 1 }); // 1 gün geçerli

  const jwtToken = Cookies.get("authToken");

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productBrand, setProductBrand] = useState("");
  //const [jwtToken, setjwtToken] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form verilerini ve dosyayı topluyoruz
    const formData = new FormData();

    // Text alanlarını formData'ya ekle
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("categoryName", productCategory);
    formData.append("brand", productBrand);
    formData.append("price", parseFloat(productPrice)); // sayıya çevirmek gerekebilir
    formData.append("stock", 100); // Örneğin, stock verisini sabit olarak ekliyoruz

    // Dosya verisini formData'ya ekle
    formData.append("file", productImage); // selectedFile kullanıcı tarafından seçilen dosya

    try {
      // Axios ile formData'yı sunucuya gönderiyoruz
      const response = await axios.post(
        "http://localhost:8889/api/product/new",
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`, // JWT token gerekiyorsa eklenir
            //"Content-Type": "multipart/form-data", // FormData ile gönderim yapıldığı için bu gerekli
          },
        }
      );

      if (response.status === 200) {
        console.log("Ürün başarıyla eklendi:", response.data);
      } else {
        console.log("Ürün ekleme başarısız oldu.");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 mb-[100px] mt-[100px]">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">YENİ ÜRÜN EKLE</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Ürün Adı */}
        <div className="mb-4">
          <label className="block text-gray-700">Ürün Adı</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border focus:outline-none  focus:border-gray-300"
          />
        </div>
        {/* Ürün Fiyatı */}
        <div className="mb-4">
          <label className="block text-gray-700">Ürün Fiyatı</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border focus:outline-none  focus:border-gray-300"
          />
        </div>
        {/* Ürün Açıklaması */}
        <div className="mb-4">
          <label className="block text-gray-700">Ürün Açıklaması</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border focus:outline-none  focus:border-gray-300"
          ></textarea>
        </div>
        {/* Ürün Kategorisi */}
        <div className="mb-4">
          <label className="block text-gray-700">Ürün Kategorisi</label>
          <input
            type="text"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border  focus:outline-none focus:border-gray-300"
          />
        </div>
        {/* Ürün Markası */}
        <div className="mb-4">
          <label className="block text-gray-700">Ürün Markası</label>
          <input
            type="text"
            value={productBrand}
            onChange={(e) => setProductBrand(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border focus:outline-none focus:border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ürün Fotoğrafı</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="w-full px-4 py-2 mt-1 border  focus:outline-none focus:border-gray-300"
          />
        </div>{" "}
        
        
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 hover:bg-primary transition duration-200"
        >
          Ürünü Kaydet
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
