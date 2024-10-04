import React, { useContext, useState, useEffect, useRef } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const CompleteOrder = () => {
  const { cart, total, clearCart } = useContext(CartContext); // Sepet ve toplam tutarı almak
  const [isChecked, setIsChecked] = useState(false); // Checkbox durumu
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Butonun aktiflik durumu
  const [errorMessage, setErrorMessage] = useState(""); // Hata mesajı
  const [successMessage, setSuccessMessage] = useState(""); // Başarı mesajı
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerAddress: "",
    customerCity: "",
    customerCountry: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    orderItems: [],
  });

  // Checkbox işaretlendiğinde butonu aktif hale getirme
  useEffect(() => {
    
      setIsButtonDisabled(!isChecked);
    
    // Eğer checkbox işaretli değilse buton devre dışı
  }, [isChecked]);

  

  // Sipariş gönderme
  const handleSubmit = async (e) => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
    if (!formData.customerName || !formData.customerEmail || !formData.customerPhone || 
      !formData.customerAddress || !formData.customerCity || !formData.customerCountry) {
    alert('Lütfen tüm zorunlu alanları doldurun.');
    return; // İşlemi durdur
  }

    const jwtToken = Cookies.get("authToken");
    if (!jwtToken) {
      // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
      window.location.href = "/login-customer";
      return;
    }

    const orderItems = cart.map((item) => ({
      productId: item.id,
      amount: item.amount,
    }));

    const data = {
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      customerPhone: formData.customerPhone,
      customerAddress: formData.customerAddress,
      customerCity: formData.customerCity,
      customerCountry: formData.customerCountry,
      cardNumber: formData.cardNumber,
      expiryDate: formData.expiryDate,
      cvc: formData.cvc,
      orderItems: orderItems,
    };

    try {
      const response = await axios.post(
        "http://localhost:8889/api/order/create",
        data,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Sipariş başarıyla oluşturuldu!");
        clearCart();
        setErrorMessage(""); // Hata mesajını temizle
      } else {
        setErrorMessage("Sipariş oluşturma başarısız oldu.");
      }
    } catch (error) {
      setErrorMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  const handleConfirm = () => {
    navigate("/"); // Ana sayfaya yönlendir
  };

  return (
    <section className="mr-[150px] ml-[150px] pt-32 pb-12 lg:py-32 h-max flex items-center justify-center pt-[20px]">
      <div className="mt-10 bg-white p-6 w-[600px] mr-[20px]">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">
          SİPARİŞİ TAMAMLA
        </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700">İsim Soyisim <span className="text-[#9f2222]">*</span> </label>
            <input
              type="text"
              value={formData.customerName}
              onChange={(e) =>
                setFormData({ ...formData, customerName: e.target.value })
              }
              required
              className="w-full px-4 py-2 mt-1 border focus:outline-none  focus:border-gray-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">E-Posta <span className="text-[#9f2222]">*</span></label>
            <input
              value={formData.customerEmail}
              onChange={(e) =>
                setFormData({ ...formData, customerEmail: e.target.value })
              }
              type="email"
              required
              className="w-full px-4 py-2 mt-1 border focus:outline-none focus:border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Telefon Numarası <span className="text-[#9f2222]">*</span></label>
            <input
              type="tel"
              value={formData.customerPhone}
              onChange={(e) =>
                setFormData({ ...formData, customerPhone: e.target.value })
              }
              required
              className="w-full px-4 py-2 mt-1 border  focus:outline-none focus:border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Adres <span className="text-[#9f2222]">*</span></label>
            <textarea
              value={formData.customerAddress}
              onChange={(e) =>
                setFormData({ ...formData, customerAddress: e.target.value })
              }
              required
              className="w-full px-4 py-2 mt-1 border focus:outline-none focus:border-gray-300"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Şehir <span className="text-[#9f2222]">*</span></label>
            <input
              type="text"
              value={formData.customerCity}
              onChange={(e) =>
                setFormData({ ...formData, customerCity: e.target.value })
              }
              required
              className="w-full px-4 py-2 mt-1 border focus:outline-none focus:border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Ülke <span className="text-[#9f2222]">*</span></label>
            <input
              value={formData.customerCountry}
              onChange={(e) =>
                setFormData({ ...formData, customerCountry: e.target.value })
              }
              type="text"
              required
              className="w-full px-4 py-2 mt-1 border focus:outline-none focus:border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Kart Numarası <span className="text-[#9f2222]">*</span></label>
            <input
              type="number"
              placeholder="1234 5678 9012 3456"
              required
              className="w-full px-4 py-2 mt-1 border focus:outline-none focus:border-gray-300"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Son Kullanma Tarihi <span className="text-[#9f2222]">*</span></label>
              <input
                type="number"
                placeholder="MM/YY"
                required
                className="w-full px-4 py-2 mt-1 border focus:outline-none focus:border-gray-300"
              />
            </div>
            <div className="w-1/2 mb-8">
              <label className="block text-gray-700">Güvenlik Kodu <span className="text-[#9f2222]">*</span></label>
              <input
                type="number"
                placeholder="CVC"
                required
                className="w-full px-4 py-2 mt-1 border focus:outline-none focus:border-gray-300"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="md:w-[30vw] lx:max-w[50vw] border border-gray-200">
        <div className="flex flex-col gap-y-4 h-[580px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className="p-4">
          {/* Toplam Tutar */}
          <div className="flex justify-between">
            <div className="text-lg font-bold mb-4">TOPLAM: </div>
            <span>{total.toFixed(2)} ₺</span>
          </div>

          {/* Checkbox */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-primary"
                onChange={(e) => setIsChecked(e.target.checked)} // Checkbox'ı kontrol et
              />
              <span className="ml-2 text-gray-700">
                Hüküm ve koşulları kabul ediyorum
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit} // Butona tıklandığında formu gönder
            disabled={isButtonDisabled} // Checkbox'a göre aktiflik
            className={`w-full bg-primary text-white py-2 px-4 transition duration-200 ${
              isButtonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary"
            }`}
          >
            SİPARİŞİ TAMAMLA
          </button>
        </div>
      </div>
      {successMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-12  shadow-md text-center">
            <h3 className="text-xl font-m mb-4">Siparişiniz Onaylandı</h3>
            <button
              onClick={handleConfirm}
              className="bg-primary text-white py-2 px-4  hover:bg-primary-dark"
            >
              TAMAM
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CompleteOrder;
