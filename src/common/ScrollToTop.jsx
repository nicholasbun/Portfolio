import toplight from "../assets/TOP-DARK.png";
import { useTheme } from "../common/Themecontext";
import topdark from "../assets/TOP-LIGHT.png";
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const { theme, toggleTheme } = useTheme();
    const icons = theme === "light" ? toplight : topdark;
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <button
        onClick={handleClick}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          padding: '10px',
          borderRadius: '50%',
          display: showButton ? 'block' : 'none',
          transition: 'opacity 0.3s, transform 0.3s',
          opacity: showButton ? 1 : 0,
          transform: showButton ? 'scale(1)' : 'scale(0.5)', 
        }}
      >
        <img
          src={icons}
          alt="Back to Top"
          style={{
            width: '50px',
            height: '50px',
            margin: 0,
            padding: 0,
            transition : 0.3
          }}
        />
      </button>
    );
  };

export default ScrollToTop;
