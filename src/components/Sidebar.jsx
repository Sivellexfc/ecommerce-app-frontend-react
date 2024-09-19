import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";

import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, increaseAmount, total } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full flex py-5 flex-col justify-between bg-white fixed top-0 h-full shadow-2xl
     md:w-[35vw] lx:max-w[30vw] transition-all duration-300 z-20 x-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Sepet (0)</div>
        <div
          onClick={handleClose}
          className="cursor-pointer h-8 w-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl"></IoMdArrowForward>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[580px] lg:h-[640] owerflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id}></CartItem>;
        })}
      </div>
      <div className="flex justify-between flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">TOPLAM :</span>
            {parseFloat(total).toFixed(2)} ₺
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white 
        w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2></FiTrash2>
          </div>
        </div>
        <Link
          to={``}
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
        >
          GÖRÜNTÜLE
        </Link>
        <Link
          to={``}
          className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
        >
          SİPARİŞİ TAMAMLA
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
