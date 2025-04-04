/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScrollToTopButton = () => {
  const [isActive, setIsActive] = useState(false);

  const location = useLocation(); // Hook to get current location

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollDuration = 1500;
    const scrollStep = 20;
    let currentPosition = window.scrollY;
    let startTime = null;

    const easeOutQuad = (t, b, c, d) => {
      const p = t / d - 1;
      return c * (p * p * p + 1) + b;
    };

    const scroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const newPosition = easeOutQuad(
        progress,
        currentPosition,
        -currentPosition,
        scrollDuration
      );

      window.scrollTo(0, newPosition);

      if (progress < scrollDuration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <div className="scroll-area">
      <div className="top-wrap">
        <div className="go-top-btn-wraper">
          <div
            className={`go-top go-top-button ${isActive ? "active" : ""}`}
            onClick={scrollToTop}
          >
            <i className="fas fa-arrow-up"></i>
            <i className="fas fa-arrow-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
