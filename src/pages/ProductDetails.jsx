import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Yükleniyor...
      </section>
    );
  }

  const { price, title, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt=""></img>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              {price} ₺
            </div>
            <p className="mb-8">{description}</p>
            <button onClick={()=>addToCart(product,product.id)} className="bg-primary py-4 px-8 text-white">Sepete Ekle</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
