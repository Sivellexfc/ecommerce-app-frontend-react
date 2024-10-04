import React, { useContext, useEffect, useState } from "react";

import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../utils/logo.svg";

import Cookies from "js-cookie";

const Header = ({ userRole }) => {
  const [isActive, setIsActive] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const token = Cookies.get("authToken"); // Eğer token cookies'de saklanıyorsa
    if (token) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const handleLogout = () => {
    Cookies.remove("authToken");
    Cookies.remove("storeId");
    localStorage.clear(); // Çıkış yapınca token'ı sileriz
    setIsUserLoggedIn(false);
    window.location.href = "/"; // Anasayfaya yönlendir
  };

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all shadow-md`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={`/`}>
          <div>
            <img className="w-[40px]" src={Logo} alt=""></img>
          </div>
        </Link>

        <div className=" flex justify-between w-[320px] py-[20px]">
          {!isUserLoggedIn ? (
            <>
              {/* Kullanıcı giriş yapmamışsa */}
              <Link to={`/login-seller`}>
                <div className="hover:underline cursor-pointer">
                  Satıcı Girişi
                </div>
              </Link>

              <Link to={`/login-customer`}>
                <div className="hover:underline cursor-pointer">
                  Kullanıcı Girişi
                </div>
              </Link>
            </>
          ) : (
            <>
              {/* Kullanıcı giriş yapmışsa */}
              {userRole === "CUSTOMER" && (
                <Link to={`/profile`}>
                  <div className="hover:underline cursor-pointer">Profilim</div>
                </Link>
              )}

              {userRole === "SELLER" && (
                <Link to={`/seller-dashboard`}>
                  <div className="hover:underline cursor-pointer">Mağazam</div>
                </Link>
              )}

              <div
                onClick={handleLogout}
                className="hover:underline cursor-pointer"
              >
                Çıkış Yap
              </div>
            </>
          )}

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative "
          >
            <BsBag className="text-2xl"></BsBag>
            <div
              className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] 
        text-white rounded-full flex justify-center items-center"
            >
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
