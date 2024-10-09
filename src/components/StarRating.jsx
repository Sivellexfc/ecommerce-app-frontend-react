import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0); // Başlangıç puanı 0
  const [hover, setHover] = useState(0); // Hover durumu için state


  const handleRating = (currentRating) => {
    setRating(currentRating); // Rating'i güncelle
    onRatingChange(currentRating); // Üst bileşene rating'i geçir
  };


  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1; // 1'den başlasın
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleRating(currentRating)} // Tıklandığında rating'i güncelle
            onMouseEnter={() => setHover(currentRating)} // Hover ile yıldız değişimi
            onMouseLeave={() => setHover(0)} // Hover çıkınca geri dön
            className="focus:outline-none"
          >
            {/* Yıldız seçimine göre uygun iconu göster */}
            {currentRating <= (hover || rating) ? (
              <FaStar className="text-yellow-500 w-6 h-6 mb-10" />
            ) : (
              <FaRegStar className="text-gray-400 w-6 h-6 mb-10" />
            )}
          </button>
        );
      })}
      
    </div>
  );
};

export default StarRating;
