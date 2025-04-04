import React, { useState } from "react";
import { Link } from "react-router-dom";
import faq_thumb from '../../assets/images/faq-thumb.png'
const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      title: "Craftsmanship and Authenticity?",
      content: `Demonstrates your interest to gain access to premium Kashmiri products that meet the highest authenticity standards. All items are certified (e.g., GI) and ethically sourced, preserving cultural heritage while offering genuine quality.
`,
    },
    {
      title: "Business and Operational Readiness?",
      content: `Ensure your business is fully prepared for global operations. From inventory management to logistics and marketing, we help streamline your processes for seamless product sourcing.
`,
    },
    {
      title: "Platform Alignment and Values?",
      content: `Partner with a platform that shares your commitment to fair trade, sustainability, and transparency. We work with buyers who align with these values, fostering strong, long-term relationships.`,
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <div className="faq-area style-two">
      <div className="container">
        <div className="row pb-5 pt-5">
          <div className="col-lg-6 col-md-12">
            <div className="section-title text-left">
              <h6 className="section-sub-title">
                Ensuring Excellence, Authenticity, and Global Readiness for
                Every Partner
              </h6>
              <h1 className="section-main-title">
                Buyer Eligibility Checklist: <span>Elevating Standards</span>
              </h1>
            </div>
            <div className="tab_container">
              <ul className="accordion">
                {faqItems.map((item, index) => (
                  <li
                    key={index}
                    className={`accordion ${activeIndex === index ? "open" : ""}`}
                  >
                    <a
  href="#"
  onClick={(e) => {
    e.preventDefault(); // Prevents jumping to the top
    handleToggle(index);
  }}
  className={`accordion-link ${activeIndex === index ? "active" : ""}`}
>
                      <span>{item.title}</span>
                    </a>
                    <p style={{ display: activeIndex === index ? "block" : "none" }}>
                      {item.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="faq-thumb">
              <img src={faq_thumb} alt="thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
