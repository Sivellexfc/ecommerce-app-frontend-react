import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import AuthServices from "../services/AuthServices";
import { Link } from "react-router-dom";

const LoginSeller = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    try {
      const token = await AuthServices.loginSeller({ username, password });
      if (token) {
        const isValid = await AuthServices.validateToken(token);
        if (isValid.status === 200) {
          window.location.href = "/";
          console.log("Giriş başarılı, token:", token);
        }
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 mb-[100px] mt-[100px]">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">SATICI GİRİŞİ</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Kullanıcı Adı */}
        <div className="mb-4">
          <label className="block text-gray-700">Kullanıcı Adı</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border focus:outline-none focus:border-gray-300"
          />
        </div>
        {/* Şifre */}
        <div className="mb-4">
          <label className="block text-gray-700">Şifre</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border focus:outline-none focus:border-gray-300"
          />
        </div>

        {/* Giriş Butonu */}
        <button
          type="submit"
          className="mt-[20px] w-full bg-primary text-white py-3 px-4 hover:bg-primary-dark transition duration-200"
        >
          GİRİŞ YAP
        </button>

        <div className="flex justify-between px-[80px] py-[10px] text-primary">
          <Link to={`/register-seller`}>
            <div className="hover:underline cursor-pointer">
              Yeni Hesap Oluştur
            </div>
          </Link>
          <div className="border-r  "></div>
          <div className="hover:underline cursor-pointer">Şifremi Unuttum</div>
        </div>
      </form>
    </div>
  );
};

export default LoginSeller;
