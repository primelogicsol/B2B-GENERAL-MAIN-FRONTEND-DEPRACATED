import React from 'react'
const AboutSection = ({ title, subtitle, description, items, counterValue, counterText, imageSrc, iconSrc,index }) => {
  const isOdd = index % 2 !== 0;
    return (
      <div className="about-us-area">
        <div className="container">
        <div className={`row ${isOdd ? 'flex-row-reverse' : ''}`}>
            <div className="col-lg-6">
              <div className="section-title text-left">
                <h5 className="section-sub-title">{title}</h5>
                <h1 className="section-main-title" style={{ fontSize: "20px", lineHeight: "26px" }}>
                  {subtitle}
                </h1>
                <p className="section-title-descr">{description}</p>
              </div>
              <div className="about-us-content">
                <div className="about-us-list">
                  <ul>
                    {items.map((item, index) => (
                      <li key={index}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
  
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-counter-box" style={{right:'-25px'}}>
                    <div className="counter-icon">
                      {/* <img src={iconSrc} alt="icon" /> */}
                    </div>
                    <div className="counter-content">
                      <h4 className="counter">{counterValue}</h4>
                      <span>+</span>
                      <p>{counterText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-lg-6">
              <div className="about-us-thumb">
                <div className="about-us-img">
                  <img src={iconSrc} alt="thumb" style={{width:"100%"}}/>
                </div>
                <div className="about-us-shape">
                  {/* <img src="/assets/images/inner/us-shape.png" alt="shape" /> */}
                </div>
              </div>
            </div>
          </div>
  
          {/* <div className="about2-us-shape">
            <img src="/assets/images/inner/about-us-sh.png" alt="shape" />
          </div>
          <div className="about-us-shape2">
            <img src="/assets/images/inner/about-us-she.png" alt="shape" />
          </div> */}
        </div>
      </div>
    );
  };

  export default AboutSection