import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductServices";
import StarRating from "./StarRating";

const OrderItem = ({ orderItem }) => {
  const [orderItemProduct, setOrderItemProduct] = useState();
  const [content,setContent] = useState("");
  
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating); 
    console.log(rating);
  };

  const handleConfirm = () => {
    console.log("productId: " + orderItem.productId)
    console.log("rating : " + rating);
    console.log("content : " + content);
    addComment();
  }


  const addComment = async () => {
    try {
        const response = await ProductService.addComment(orderItem.productId,content,rating);
        console.log("Yorum gönderildi. ")
      } catch (error) {
        console.error("Siparişler getirilirken hata oluştu:", error);
      }
  }
  

  const openReviewModal = () => {
    setReview(true); // Butona tıklanınca modalı aç
  };
  const fetchProduct = async (id) => {
    try {
      const orderItemProduct = await ProductService.fetchProduct(id);
      setOrderItemProduct(orderItemProduct);
    } catch (error) {
      console.error("Ürün detayları alınamadı:", error);
    }
  };

  useEffect(() => {
    fetchProduct(orderItem.productId);
  }, []);

  

  if (!orderItemProduct) {
    return <div className="flex justify-center py-12">Ürün yükleniyor...</div>; // Ya da boş bir div gösterebilirsiniz
  }

  return (
    <div className="w-full min-h-[50px] flex items-center gap-x-4 py-5">
      <Link>
        <img
          className="max-w-[80px]"
          src={`data:image/png;base64,${orderItemProduct.image}`}
        ></img>
      </Link>
      <div className="w-full flex flex-col">
        <div className="flex justify-between mb-2">
          <Link className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
            {orderItemProduct.productName}
          </Link>
        </div>
        <div className="flex gap-x-2 h-[36px] text-sm">
          <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
            <div className=" h-full flex justify-center items-center px-2">
              Adet : {orderItem.amount}
            </div>
          </div>

          <div className="flex flex-1 items-center justify-around">
            {orderItem.price} ₺
          </div>
          <button
          onClick={openReviewModal}
            disabled={orderItemProduct.alreadyRated}
            className={`bg-yellow-300 text-primary px-8 py-1 hover:bg-yellow-400 font-medium ${
              orderItemProduct.alreadyRated
                ? "cursor-not-allowed hover:bg-yellow-100 bg-yellow-100"
                : "hover:bg-primary"
            }`}
          >
            DEĞERLENDİR
          </button>

          <div className="flex-1 text-[16px] flex justify-end items-center text-primary font-medium">
            {orderItem.price * orderItem.amount} ₺
          </div>
        </div>
      </div>
      {review && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-12  shadow-md text-center flex flex-col items-center">
            <h3 className="text-xl font-m">Siparişinizi Değerlendirin</h3>
            <textarea className="border w-[400px] h-[150px] py-4 px-4 my-10 resize-none"
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }></textarea>
            <StarRating onRatingChange={handleRatingChange}></StarRating>
            <button
              onClick={handleConfirm}
              className="bg-primary text-white py-2 px-4  hover:bg-primary-dark"
            >
              TAMAM
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
