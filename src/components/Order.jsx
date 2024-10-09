import React from "react";
import { Link } from "react-router-dom";
import OrderItem from "./OrderItem";

const Order = ({ item }) => {
  const orderItems = item.orderItems;
  console.log("orderItemssssss");
  console.log(orderItems);

  return (
    <div className="flex flex-col gap-x-4 py-8 lg:px-10 border border-gray-200 w-full font-light text-gray-500 ">
      {orderItems.map((orderItem) => {
        return <OrderItem orderItem={orderItem} key={orderItem.id}></OrderItem>;
      })}
      <div className="flex justify-end mt-5 text-primary font-semibold text-l">
        TOPLAM : <span>{item.totalPrice}</span> ₺{" "}
      </div>
      <div className="flex justify-end mt-10">
        
      </div>
    </div>
  );
};

export default Order;
