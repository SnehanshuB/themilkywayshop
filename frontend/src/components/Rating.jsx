import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text }) => {
  /* Function to determine the star type */
  const renderStar = (i) => {
    if (value >= i) {
      return <FaStar />;
    } else if (value >= i - 0.5) {
      return <FaStarHalfAlt />;
    } else {
      return <FaRegStar />;
    }
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i}>{renderStar(i)}</span>
      ))}
      {text && <span className="rating-text">{text}</span>}
    </div>
  );
}

export default Rating;
