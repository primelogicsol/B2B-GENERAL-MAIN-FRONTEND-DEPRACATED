/* eslint-disable no-unused-vars */
import React from 'react';
import feature1 from '../../assets/images/1.png'; // Import images
import feature2 from '../../assets/images/2.png';
import feature3 from '../../assets/images/3.png';
import feature4 from '../../assets/images/4.png';
import feature5 from '../../assets/images/5.png';
import feature6 from '../../assets/images/6.png';
import feature7 from '../../assets/images/7.png';
import main_logo from '../../assets/images/Black and White Vintage Retro Outdoor Adventure Badge Logo (11).png'
import { Link } from 'react-router-dom';

const features = [
  {
    img: feature1,
    title: 'Drop shipping',
    text: ' Explore authentic Kashmiri crafts for your thriving online marketplace.',
    link:'/ecommerce'
  },
  {
    img: feature4,
    title: 'Consignment',
    text: 'Establish lasting relationships with verified Kashmiri artisans for products.',
    link:'/consignment'
  },
  {
    img: feature5,
    title: 'Exhibition',
    text: 'Discover exclusive Kashmiri collections showcased at global events.',
    link:'/exhibition'
  },
  {
    img: feature3,
    title: 'Import Export',
    text: 'Effortlessly source high-quality, ethical Kashmiri crafts for business.',
    link:'/import-export'
  },  
  {
    img: feature6,
    title: 'Investor',
    text: 'Maximize returns by investing in Kashmiri craft businesses with global potential.',
    link:'/subsidary'
  },
  {
    img: feature2,
    title: 'Brick & Mortar',
    text: 'Partner with Kashmiri craft suppliers for physical retail spaces.',
    link:'/brick-mortar'
  },
  {
    img: feature7,
    title: 'Franchise',
    text: 'Expand your USA-based franchise with established Kashmiri craft brands.',
    link:'/franchise'
  }
];

const FeatureArea = () => {
  return (
    <div className="feature-area">
  <div className="container">
    <div className="row about d-flex justify-content-center align-items-center">
      {features.map((feature, index) => (
        <div key={index} className="col-12 col-sm-12  col-md-1-7">
          {/* Feature Box */}
        <Link to={feature.link} style={{textDecoration:"none"}}>

          <div className="feature-sinble-single-box">
            <div className="feature-icon">
              <img src={feature.img} alt={`feature-${index + 1}`} className="img-fluid" />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.text}</p>
            </div>
          </div>
          </Link>
        </div>
       
      ))}
    </div>
  </div>
</div>

  );
};

export default FeatureArea;
