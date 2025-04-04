/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import heroImage from '../../assets/videos/Team_and_Employee.mp4'  
const HeroSection = ({
  subtitle,
  heading1,
  heading2,
  description,
  buttonText,
  buttonLink,
  videoLink,
}) => {
  return (
    <div className="hero-area d-flex align-items-center ">
      <div className="container py-5">
        <div className="row hero align-items-center md:[padding:3rem]">
          <div className="col-lg-6 hero-content-col mb-5 pb-0 mb-0 md:pb-12 md:mb-12 w-full max-w-[500px] h-auto">
            <div className="hero-contant" >
              <h5>{subtitle}</h5>
              <h1>{heading1}</h1>
              <h1>{heading2}</h1>
              <p>{description}</p>
              <div className='d-flex'>
              <div className="solutek-btn">
                <Link to={buttonLink}>
                  {buttonText}
                  <div className="solutek-hover-btn hover-bx"></div>
                  <div className="solutek-hover-btn hover-bx2"></div>
                  <div className="solutek-hover-btn hover-bx3"></div>
                  <div className="solutek-hover-btn hover-bx4"></div>
                </Link>
                
              </div>
              {videoLink && (
                <div className="hero-video-icon">
                  <Link to={videoLink} className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true">
                    <i className="bi bi-play"></i><span></span>
                  </Link>
                </div>
              )}
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center mb-5 pb-5">
            <div className="">
              {/* <img className="hero-thumb-img" src={heroImage} alt="hero-thumb" /> */}
              <video className="hero-thumb-video" src={heroImage} autoPlay loop muted />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

