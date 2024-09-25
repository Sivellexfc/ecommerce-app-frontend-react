import React, { useState } from "react";

import AuthServices from "../services/AuthServices";

const RegisterCustomer = () => {
  const [username, setUserName] = useState("");
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    const registerData = {
      username: username,
      password: password,
      email: email,
    };

    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Parolalar eşleşmiyor.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Parola en az 8 karakter olmalıdır.");
      return;
    }

    try {
      const token = await AuthServices.registerCustomer({ username, password });
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

    setErrorMessage("");
    setSuccessMessage("Kayıt başarılı!");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 mb-[100px] mt-[100px]">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">
        KAYIT OL
      </h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-gray-700">Kullanıcı Adı</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border focus:outline-none  focus:border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEMail(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border focus:outline-none  focus:border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Parola</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border focus:outline-none  focus:border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Parola Tekrar</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border focus:outline-none  focus:border-gray-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 mt-[20px] px-4 hover:bg-primary transition duration-200"
        >
          ONAYLA
        </button>
        <div className="flex justify-center text-[#9f2222] py-2.5">
          {errorMessage}
        </div>
      </form>
    </div>
  );
};

export default RegisterCustomer;
