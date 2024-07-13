import React, { useState } from 'react';


const StarRating = () => {
  const [rating, setRating] = useState(0); // Initial state for rating

  const handleStarClick = (starNumber) => {
    setRating(starNumber);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <span
            key={starNumber}
            style={{ fontSize: '24px', cursor: 'pointer' }}
            onClick={() => handleStarClick(starNumber)}
          >
            {starNumber <= rating ? '\u2605' : '\u2606'} {/* Unicode characters for star and star outline */}
          </span>
        );
      })}
      <p>You rated this product {rating} {rating !== 1 ? 'stars' : 'star'}.</p>
    </div>
  );
};

export default StarRating;
