import React from 'react';
import { Link,useLocation } from 'react-router-dom';

const LocationCard = ({ iconSrc, title, description, className, link, iconClass='',titleClass }) => {



  return (
    <div className={``}>
      
        <div className={`project-single-box down box-4  ${className}`}>
          <div className={`project-icon ${iconClass}`}>
            <img src={iconSrc} alt="icon" />
          </div>
          <div className="projects-content">
            <h4 className={`project-title ${titleClass}`}>{title}</h4>
            <p className="project-des">{description}</p>
          </div>
        </div>
      
    </div>
  );
};

export default LocationCard;
