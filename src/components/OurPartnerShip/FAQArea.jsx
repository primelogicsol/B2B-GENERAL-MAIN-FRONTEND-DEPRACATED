/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import faq2 from "../../assets/images/faq2.png";
import faq3 from "../../assets/images/faq3.png";
import elib from "../../assets/images/elib.png";

const FaqArea = ({
  faqItems,
  sectionTitle,
  mainTitle,
  mainTitleHighlight,
  imageSrc,
  imageHeight,
  faqAreaTitle
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sectionStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  };

  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const faqThumbStyle = {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const tabContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  return (
    <div className="faq-area f0dsd" >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12" >
            <div className="section-title text-left">
              <h5 className="section-sub-title">{sectionTitle}</h5>
              <h1 className="section-main-title" style={{ fontSize: "30px" }}>
                {mainTitle} <span>{mainTitleHighlight}</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-lg-6 col-md-12">
            <div className="faq-thumb">
              <img width="100%" src={imageSrc} alt="faq" height={imageHeight}/>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="tab_container" >
              <div className="feq-content mb-3">
                <h3 className="faq-title">
                  {faqAreaTitle} <span>Eligibility.</span>
                </h3>
              </div>

              <div id="tab1" className="tab_content">
                <ul className="accordion ccordion">
                  {faqItems &&
                    faqItems.map((item, index) => (
                      <li key={index}>
                        <a
                          onClick={() => handleToggle(index)}
                          className={activeIndex === index ? "active" : ""}
                        >
                          <span>{item.title}</span>
                        </a>
                        <p
                          style={{
                            display: activeIndex === index ? "block" : "none",
                          }}
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-shape">
          <img src={faq2} alt="faq2" />
        </div>

        <div className="faq-shape2">
          <img src={faq3} alt="faq3" />
        </div>
      </div>
    </div>
  );
};

export default FaqArea;
