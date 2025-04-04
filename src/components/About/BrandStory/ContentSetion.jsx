import React from 'react';

const ContentSection = ({ title, subtitle, description, highlightColor = "#ff3c00" }) => {
  return (
    <div className="col-lg-12">
      <div className="mt-5">
        <h3 style={{ color: highlightColor, }}>{title}</h3>
      </div>
      <p className="services-details-desc">{description}</p>
    </div>
  );
};

export default ContentSection;
