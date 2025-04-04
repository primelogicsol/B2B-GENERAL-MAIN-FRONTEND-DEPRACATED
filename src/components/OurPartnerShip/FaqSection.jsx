/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import faqImage from "../../assets/images/faq-big.png"; // Importing images
import faqShape1 from "../../assets/images/faq2.png";
import faqShape2 from "../../assets/images/faq3.png";

const FAQSection = ({
  faqContent,
  sectionTitle,
  mainTitle,
  mainTitleHighlight,
   imageHeight
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (tabIndex, questionIndex) => {
    setActiveIndex((prevState) =>
      prevState === `${tabIndex}-${questionIndex}`
        ? null
        : `${tabIndex}-${questionIndex}`
    );
  };

  return (
    <div className="faq-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-title text-left">
              <h5 className="section-sub-title">{sectionTitle}</h5>
              <h1 className="section-main-title" style={{ fontSize: "30px" }}>
                {mainTitle} <span>{mainTitleHighlight}</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="faq-thumb">
              <img src={faqImage} width="100%" alt="faq" height={ imageHeight} />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-4">
            <div className="tab_container">
              {faqContent.map((tab, index) => (
                <div id={`tab${index + 1}`} className="tab_content" key={index}>
                  <h3>
                    {index + 1}. {tab.title}
                  </h3>
                  <ul className="accordion">
                    {tab.questions.map((question, qIndex) => (
                      <li key={qIndex}>
                        <a
                          onClick={() => handleToggle(index, qIndex)}
                          className={
                            activeIndex === `${index}-${qIndex}` ? "active" : ""
                          }
                        >
                          <span>{question.question}</span>
                        </a>
                        <p
                          style={{
                            display:
                              activeIndex === `${index}-${qIndex}`
                                ? "block"
                                : "none",
                          }}
                          dangerouslySetInnerHTML={{ __html: question.answer }}
                        ></p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="faq-shape">
          <img src={faqShape1} alt="faq2" />
        </div>
        <div className="faq-shape2">
          <img src={faqShape2} alt="faq3" />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
