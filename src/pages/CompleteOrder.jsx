import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";

const CompleteOrder = () => {
  const { cart, clearCart, increaseAmount, total } = useContext(CartContext);

  return (
    <section className="mr-[150px] ml-[150px] pt-32 pb-12 lg:py-32 h-max flex items-center justify-between pt-[20px]">
      <div className="bg-red-100">Information section</div>
      <div className="md:w-[35vw] lx:max-w[30vw] border border-gray-200">
        <div className="flex flex-col gap-y-4  h-[580px] lg:h-[640] owerflow-y-auto overflow-x-hidden border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id}></CartItem>;
          })}
        </div>
      </div>
    </section>
  );
};

export default CompleteOrder;
