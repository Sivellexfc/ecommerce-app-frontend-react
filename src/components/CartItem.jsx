import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext);
  const { id, amount, price, title, image } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ">
      <div className="w-full min-h-[50px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px] " src={image} alt=""></img>
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transititon" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              
              <div onClick={()=>{decreaseAmount(id)}} className="flex-1 flex justify-center items-center cursor-pointer h-full">
                <IoMdRemove />
              </div>

              <div className="h-full flex justify-center items-center px-2">{amount}</div>

              <div onClick={()=>{increaseAmount(id)}} className="flex-1 h-full flex justify-center items-center cursor-pointer h-full">
                <IoMdAdd />
              </div>

            </div>


            <div className="flex flex-1 items-center justify-around">₺ {price}</div>

            <div className="flex-1 flex justify-end items-center text-primary font-medium">₺ {price * amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
