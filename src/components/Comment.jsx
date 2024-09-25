import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaStar,FaStarHalfAlt,FaRegStar } from "react-icons/fa";

import { BsPlus, BsEyeFill } from "react-icons/bs";

const Comment = ({ comment }) => {
    const { userId, content, rate, commentDate } = comment;
  
    // Puanı yıldızlar şeklinde göstermek için bir fonksiyon
    const renderStars = (rate) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= rate) {
          stars.push(<FaStar key={i} className="text-yellow-500" />); // Tam yıldız
        } else if (i - rate < 1) {
          stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />); // Yarım yıldız
        } else {
          stars.push(<FaRegStar key={i} className="text-yellow-500" />); // Boş yıldız
        }
      }
      return stars;
    };
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Kullanıcı ID: {userId}</span>
          <span className="text-sm text-gray-500">{new Date(commentDate).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-700 mt-2 mb-4">{content}</p>
        <div className="flex items-center">
          {/* Yıldızları göster */}
          {renderStars(rate)}
        </div>
      </div>
    );
  };

export default Comment;
