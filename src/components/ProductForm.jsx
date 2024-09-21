import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const ProductForm = () => {

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwtToken = Cookies.get("authToken");
    
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("categoryName", productCategory);
    formData.append("brand", productBrand);
    formData.append("price", parseFloat(productPrice)); 
    formData.append("stock", 100); 
    formData.append("file", productImage); 

    try {
      console.log("Token: " + jwtToken);
      const response = await axios.post(
        "http://localhost:8889/api/product/new",
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`, 
            "Content-Type": "multipart/form-data",
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
