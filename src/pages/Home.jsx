import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products,fetchAllProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchAllProducts(); // Herhangi bir parametre gerekmeden tüm ürünleri çek
  }, []);

  return (
    <div>
      <section className="py-[180px]">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
          xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {products.map((product) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  seller={false}
                >
                  {product.title}
                </Product>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
