/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import contact_blkm from '../../assets/images/contact-blkm.png'
const ContactUs = ({
  title, 
  subtitle, 
  imageSrc, 
  placeholders, 
  buttonText
}) => {
  return (
    <div className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="section-title text-left">
              <div>
                <h5 className="section-sub-title">{title}</h5>
                <h5 className="" style={{ lineHeight: '30px' }}>
                  {subtitle}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form_box">
                  <input type="text" name="name" placeholder={placeholders.name} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form_box">
                  <input type="email" name="email" placeholder={placeholders.email} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form_box">
                  <input type="text" name="subject" placeholder={placeholders.subject} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form_box">
                  <input type="text" name="phone" placeholder={placeholders.phone} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form_box">
                  <textarea name="message" id="message" cols="30" rows="10" placeholder={placeholders.message}></textarea>
                </div>
                <div className="quote_button">
                  <button className="btn" type="submit">
                    {buttonText} <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-1">
            <img width="100%" src={contact_blkm} alt="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
