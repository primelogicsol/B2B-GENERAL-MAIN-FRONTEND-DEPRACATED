import React from "react";

const AfterFAQ = ({
  title,
  color_title,
  subtitle,
  description,
  description2,
  items,
  image,
  extraText,
  under_description,
  package_heading,
  package_heading2,
  third_heading,
  itemss,
}) => {
  return (
    <div className="about-section mt-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-1">
            <div className="about-thumb">
              <img src={image} />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-11 align-items-center mx-auto">
            <div className="about-contact">
              <div className="section-title text-left">
                <h6 className="section-sub-title" style={{ fontSize: "15px" }}>
                  {subtitle}
                </h6>
                <h1 className="section-main-title" style={{ fontSize: "20px" }}>
                  {title} <span>{color_title}</span>
                </h1>
                <p className="section-title-descr">{description}</p>
                <h4 className="mt-2 section-main-title">{package_heading}</h4>
                <h1 className="section-main-title" style={{ fontSize: "20px" }}>
                  <span>{under_description} </span>
                </h1>
              </div>

              {/* List Section */}
              <div className="about-item-list">
                <ul>
                  {items.map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: item,
                      }}
                    ></li>
                  ))}
                </ul>
              </div>
              <h4 className="mt-2 section-main-title">{package_heading2}</h4>
              <h1 className="section-main-title" style={{ fontSize: "20px" }}>
                <span>{third_heading} </span>
              </h1>
              <p className="section-title-descr">{description2}</p>
              <div className="about-item-list">
                <div className="about-item-list">
                  <ul>
                    {itemss &&
                      itemss.map((item, index) => (
                        <li
                          key={index}
                          dangerouslySetInnerHTML={{ __html: item }}
                        ></li>
                      ))}
                  </ul>
                </div>
              </div>
              {/* Extra Text */}
              {extraText && (
                <div className="ec-text">
                  <h6 style={{ color: "#ff3d00" }}>{extraText.title}</h6>
                  <p>{extraText.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterFAQ;
