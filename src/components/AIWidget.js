// src/components/AIWidget.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import bujji from '../bujji.png';

// Define the floating animation
const floating = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const WidgetContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 1000;
`;

const BujjiImage = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  animation: ${floating} 3s ease-in-out infinite; // Apply the floating animation
`;

const FloatingMessage = styled.div`
  position: absolute;
  bottom: 120px;
  right: 0;
  background-color: #212121;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: ${({ show }) => (show ? 'block' : 'none')};
  max-width: 250px;
`;

const RatingContainer = styled.div`
  .rating {
    display: flex;
    flex-direction: row-reverse;
    gap: 0.3rem;
    --stroke: #666;
    --fill: #ffc73a;
  }

  .rating input {
    appearance: none;
  }

  .rating label {
    cursor: pointer;
  }

  .rating svg {
    width: 2rem;
    height: 2rem;
    overflow: visible;
    fill: transparent;
    stroke: var(--stroke);
    stroke-linejoin: bevel;
    stroke-dasharray: 12;
    animation: idle 4s linear infinite;
    transition: stroke 0.2s, fill 0.5s;
  }

  @keyframes idle {
    from {
      stroke-dashoffset: 24;
    }
  }

  .rating label:hover svg {
    stroke: var(--fill);
  }

  .rating input:checked ~ label svg {
    transition: 0s;
    animation: idle 4s linear infinite, yippee 0.75s backwards;
    fill: var(--fill);
    stroke: var(--fill);
    stroke-opacity: 0;
    stroke-dasharray: 0;
    stroke-linejoin: miter;
    stroke-width: 8px;
  }

  @keyframes yippee {
    0% {
      transform: scale(1);
      fill: var(--fill);
      fill-opacity: 0;
      stroke-opacity: 1;
      stroke: var(--stroke);
      stroke-dasharray: 10;
      stroke-width: 1px;
      stroke-linejoin: bevel;
    }

    30% {
      transform: scale(0);
      fill: var(--fill);
      fill-opacity: 0;
      stroke-opacity: 1;
      stroke: var(--stroke);
      stroke-dasharray: 10;
      stroke-width: 1px;
      stroke-linejoin: bevel;
    }

    30.1% {
      stroke: var(--fill);
      stroke-dasharray: 0;
      stroke-linejoin: miter;
      stroke-width: 8px;
    }

    60% {
      transform: scale(1.2);
      fill: var(--fill);
    }
  }
`;

const AIWidget = ({ onSubmitRating }) => {
  const [showWidget] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [userRating, setUserRating] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000); // Show message after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleRatingSubmit = (rating) => {
    onSubmitRating(rating);
    setUserRating(rating);
    setShowMessage(false);
  };

  return (
    <WidgetContainer show={showWidget}>
      <BujjiImage src={bujji} alt="Bujji" onClick={() => setShowMessage(!showMessage)} />
      <FloatingMessage show={showMessage}>
        {userRating === null ? (
          <>
            <p>Hello, I am Bujji!</p>
            <h3>Rate this site!</h3>
            <RatingContainer>
              <div className="rating">
                {[5, 4, 3, 2, 1].map((value) => (
                  <React.Fragment key={value}>
                    <input
                      type="radio"
                      id={`star-${value}`}
                      name="star-radio"
                      value={`star-${value}`}
                      onClick={() => handleRatingSubmit(value)}
                    />
                    <label htmlFor={`star-${value}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                      </svg>
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </RatingContainer>
          </>
        ) : (
          <p>Thank you for rating! You rated this site {userRating} stars.</p>
        )}
      </FloatingMessage>
    </WidgetContainer>
  );
};

export default AIWidget;
