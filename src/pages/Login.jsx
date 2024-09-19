import React from "react";

const Login = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 mb-[100px] mt-[100px]">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">GİRİŞ YAP</h2>
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

export default Login;
