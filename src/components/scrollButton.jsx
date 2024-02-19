import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ScrollButton = ({refScrollUp}) => {

  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const handleScroll = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <div>
      {showScrollTopButton && <FaArrowUp  className="scrollButton scroll-button-style" 
      onClick={handleScroll} />}
    </div>
  );
};

export default ScrollButton;

