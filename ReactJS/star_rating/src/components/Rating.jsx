import React, { useState } from 'react';
import '../styles/Rating.css';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = Array(5).fill(0);

  return (
    <div className="container">
      {/* Star rating section */}
      <div className="stars">
        {stars.map((_, index) => (
          <span
            key={index}
            className={index < (hover || rating) ? 'colored' : 'unColor'}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(index + 1)}
          >
            &#9733;
          </span>
        ))}
      </div>

      {/* Rating display below the stars */}
      {rating > 0 && <div className="rating-text">Rating: {rating}</div>}
    </div>
  );
};

export default Rating;
