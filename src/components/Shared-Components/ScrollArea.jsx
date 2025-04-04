import React from "react";

const ScrollArea = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-area">
      <div className="top-wrap">
        <div className="go-top-btn-wraper">
          <div className="go-top go-top-button" onClick={handleScrollToTop}>
            <i className="fas fa-arrow-up"></i>
            <i className="fas fa-arrow-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollArea;
