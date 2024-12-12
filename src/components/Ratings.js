// src/components/Ratings.js
import React, { useState } from 'react';
import AIWidget from './AIWidget';

const Ratings = () => {
  const [currentRating, setCurrentRating] = useState(null);

  const handleRatingSubmit = (rating) => {
    setCurrentRating(rating);
  };

  return (
    <div>
      <h2>Ratings</h2>
      <AIWidget onSubmitRating={handleRatingSubmit} />
      {currentRating !== null && (
        <div>
          <p>Thank you for rating!</p>
          <p>Your rating: {currentRating} stars</p>
        </div>
      )}
    </div>
  );
};

export default Ratings;
