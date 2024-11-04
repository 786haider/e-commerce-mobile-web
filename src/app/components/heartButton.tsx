import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const HeartButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // Toggle the like state
  };

  return (
    <div>
      <FaHeart
      className='text-2xl text-white md:text-black'
        onClick={handleLikeClick}
        style={{ color: isLiked ? 'red' : '', cursor: 'pointer' }}
      />
    </div>
  );
};

export default HeartButton;
