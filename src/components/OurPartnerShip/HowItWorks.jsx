/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const HowItWorks = ({
  sectionSubtitle,
  sectionTitle,
  description,
  phases,
  buttons,
  imageSrc,
  iconSrc,
  bookingIconSrc,
  consultationText,
  consultationLink,
}) => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="cs_about_thumb">
              <img width="100%" src={imageSrc} alt="About" />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="cs_about_content">
              {/* Section Heading */}
              <div className="cs_section_heading cs_style_1 cs_mb_22">
                <h3 className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10">
                  <img
                    src={iconSrc}
                    alt=""
                    className="cs_section_subheading_icon"
                  />
                  {sectionSubtitle}
                </h3>
                <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0">
                  {sectionTitle}
                </h2>
              </div>
              <p className="cs_mb_30">{description}</p>

              {/* Tabs Section */}
              <div className="cs_tabs">
                <div className="cs_tab_body">
                  <div className="cs_tab active" id="tab_1">
                    <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
                      {phases.map((phase, index) => (
                        <li key={index} className="d-flex align-items-start">
                          <img
                            src={buttons.arrowIcon}
                            alt="arrow"
                            style={{ marginRight: "5px",marginTop:"10px" }}
                          />
                          {phase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="cs_height_33 cs_height_lg_30"></div>

              {/* Buttons Section */}
              <div className="cs_about_btns">
                <Link  className="cs_btn cs_style_1 md:mr-5" to={buttons.readMoreLink}>
                  <span>{buttons.readMoreText}</span>
                  <img
                    style={{ filter: "brightness(0) invert(1)" }}
                    src={buttons.icon}
                    alt="arrow"
                  />
                </Link>
                <br/>
                <div className="cs_about_phone_number">
                  <div className="cs_about_phone_number_icon cs_accent_bg cs_center">
                    <img
                      style={{ filter: "brightness(0) invert(1)" }}
                      src={bookingIconSrc}
                      alt="arrow"
                    />
                  </div>
                  <div className="cs_about_phone_number_right">
                    <p style={{ fontSize: "13px" }} className="mb-0">
                      {consultationText}
                    </p>
                    <h3 className="cs_heading_color cs_fs_18 cs_medium mb-0">
                      <Link to={consultationLink}>Book Appointment</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default HowItWorks;








