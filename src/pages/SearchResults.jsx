import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  console.log(products);

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
          xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {products.map((product) => {
              return (
                <Product key={product.id} product={product}>
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

export default SearchResults;
