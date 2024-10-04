import React, { useContext, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Order from "../components/Order";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";

const Profile = () => {

    const { cart, clearCart, increaseAmount, total } = useContext(CartContext);

  return (
    <section className="min-h-screen flex flex-col items-center  pt-[150px] px-4 md:px-20">
      {/* Hesap Bilgileri */}
      <div className="w-full max-w-[1200px]">
        <div className="flex flex-col items-start">
          <h2 className="text-primary text-[20px] font-light border-b pb-[20px] w-full">
            Hesap Bilgileri
          </h2>
          <div className="flex items-center justify-between w-full pt-[20px]">
            <div className="flex flex-col">
              <p className="text-primary text-[35px] font-semibold">
                kullanıcı adı
              </p>
              <p className="text-gray-400 font-light">id</p>
            </div>
          </div>
        </div>
      </div>

      {/* Siparişler */}
      <div className="w-full max-w-[1200px] flex flex-col items-center mt-10  gap-6 justify-items-center">
        {/* Order bileşenleri */}
        <Order></Order>
      </div>
    </section>
  );
};

export default Profile;
