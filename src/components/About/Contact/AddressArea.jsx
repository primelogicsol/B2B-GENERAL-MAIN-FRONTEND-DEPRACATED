import React from 'react';
import mailIcon from '../../../assets/logos/3.png';
import phoneIcon from '../../../assets/logos/4.png'


const AddressArea = () => {
  return (
    <div className="address-area mt-3 md:mx-10">
      <div className="container">
        <div className="row">
          {/* Email Section */}
          <div className="col-lg-4 col-md-12">
            <div className="address-box">
              <div className="address-icon">
                <img
                  style={{ filter: 'brightness(0) invert(1)',marginLeft:"14px" }}
                  src={mailIcon}
                  alt="email"
                />
              </div>
              <div className="address-title">
                <h3>b2b@dekoshurcrafts.com</h3>
              </div>
            </div>
          </div>

          {/* Phone Numbers Section */}
          <div className="col-lg-8 col-md-12">
            <div className="address-box2">
            <div className="address-icon">
							<img style={{ filter: 'brightness(0) invert(1)' }} src={phoneIcon} alt="address1"/>
			</div>
              <div className="solutek-btn me-2">
                <a href="contact.html">
                  <span>US: </span>+1 (916) 699-0091
                  <div className="solutek-hover-btn hover-bx"></div>
                  <div className="solutek-hover-btn hover-bx2"></div>
                  <div className="solutek-hover-btn hover-bx3"></div>
                  <div className="solutek-hover-btn hover-bx4"></div>
                </a>
              </div>

              <div className="solutek-btn">
                <a href="contact.html">
                  <span>India: </span>+91 194 313 1113
                  <div className="solutek-hover-btn hover-bx"></div>
                  <div className="solutek-hover-btn hover-bx2"></div>
                  <div className="solutek-hover-btn hover-bx3"></div>
                  <div className="solutek-hover-btn hover-bx4"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressArea;
