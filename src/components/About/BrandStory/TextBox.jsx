import React from 'react';

const TextBoxComponent = ({ heading, highlightedText, description, highlightColor = "#ff3c00" }) => {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="service-detalis-text-box">
        <div className="service-details-content">
          <h5 className="set-edrf">
            {heading}
            <span style={{ color: highlightColor }}> {highlightedText}</span>
          </h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TextBoxComponent;
