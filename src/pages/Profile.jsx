import React, { useContext, useEffect,useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Order from "../components/Order";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";
import OrderServices from "../services/OrderServices";
import { jwtDecode } from "jwt-decode";
import StarRating from "../components/StarRating";


const Profile = () => {

  const [orders,setOrders] = useState([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(false);
  const user = jwtDecode(Cookies.get("authToken"));

  const handleRatingChange = (newRating) => {
    setRating(newRating); 
    console.log(rating);
  };

  const handleConfirm = () => {
    console.log("rate "+rating);
  }

  const fetchOrders = async () => {
    try {
      const token = Cookies.get("authToken");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.accountId;

      const orders = await OrderServices.fetchAllOrderByUserId(userId);
      setOrders(orders);
      console.log(orders)

    } catch (error) {
      console.error("Siparişler getirilirken hata oluştu:", error);
    }
  };
  useEffect(() => {
    fetchOrders();
    console.log("profile "+orders)
  }, []);
  

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
                Siparişlerim
              </p>
              <p className="text-gray-600 font-light">Kullanıcı adı : {user.sub}</p>
              <p className="text-gray-400 font-light">user-id : {user.accountId}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Siparişler */}
      <div className="w-full max-w-[1200px] flex flex-col items-center mt-10  gap-6 justify-items-center">
        {/* Order bileşenleri */}
        {
          orders.map((order) => {
            return <Order item={order} key={order.id}></Order>
          })
        }
        
      </div>
      
    </section>
  );
};

export default Profile;
