import React from 'react';
import { Link } from 'react-router-dom';
const AboutSection = ({
  thumbImage,
  shapeImage,
  thumbTitle,
  subHeading,
  mainHeading,
  mainHeadingHighlight,
  description,
  iconImage,
  iconTitle,
  textDetails,
  buttonText,
  buttonSubText,
  buttonLink
}) => {
  return (
    <div className="about-area mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-thumb">
              <img src={thumbImage} alt="about-thumb" style={{width:"100%"}}/>
              <div className="about-shape">
                <img src={shapeImage} alt="about-shape" />
              </div>
              <h4 className="about-title">{thumbTitle}</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title text-left">
              <h5 className="section-sub-title">{subHeading}</h5>
              <h1 className="section-main-title" style={{ fontSize: '30px' }}>
                {mainHeading} <span>{mainHeadingHighlight}</span>
              </h1>
              <p className="section-title-descr">{description}</p>
            </div>
            <div className="about-box d-flex align-items-center">
              <div className="about-icon">
                <img src={iconImage} alt="about-icon" />
              </div>
              <div className="about-tiltle">
                <h3>{iconTitle}</h3>
              </div>
            </div>
            <div className="about-text">
              <p>{textDetails}</p>
            </div>
            <div className="solutek-btn">
              <Link style={{ fontSize: '13px' }} href={buttonLink}>
                {buttonText}
                
                <div className="solutek-hover-btn hover-bx"></div>
                <div className="solutek-hover-btn hover-bx2"></div>
                <div className="solutek-hover-btn hover-bx3"></div>
                <div className="solutek-hover-btn hover-bx4"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

