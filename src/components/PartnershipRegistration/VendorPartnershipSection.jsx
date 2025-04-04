import React from "react";
import { Link } from "react-router-dom";
const VendorPartnershipSection = ({ data }) => {
  return (
    <section
      className="cs_bg_filed mb-5"
      data-background="assets/how_to_work_bg.svg"
      style={{ backgroundImage: "url('assets/how_to_work_bg.svg')" }}
    >
      <div className="cs_height_115 cs_height_lg_70"></div>
      <div className="container">
        <h3 className="text-center">Buyer Partnership Registration Process</h3>
        <div className="cs_section_heading_1_with_sub">
          <div className="cs_section_heading cs_style_1">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12">
                <h2
                  className="cs_section_title ikid cs_fs_48 cs_semibold mb-0"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  {/* Title will be passed dynamically */}
                </h2>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12"></div>
            </div>
          </div>
        </div>
        <div className="cs_height_45 cs_height_lg_45"></div>
        <div className="mt-5 animted-xet">
          <div className="row">
            {data.map((item, index) => (
              <div
                className="col-lg-3 col-md-12 col-sm-12 col-xs-12"
                key={index}
              >
                <div
                  className="cs_card_1_col"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="cs_card cs_style_1">
                    <div className="cs_card_in cs_white_bg">
                      <div className="cs_card_icon cs_center cs_mb_30">
                        <img src={item.image} alt="" />
                      </div>
                      <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-3">
                        {item.subtitle}
                      </h3>
                      <h3
                        className="cs_fs_24 cs_semibold cs_mb_6"
                        style={{ color: "#ff3b00" }}
                      >
                        {item.title}
                      </h3>
                      <ul>
                        {item.list.map((listItem, index) => (
                          <li
                            key={index}
                            style={{ textAlign: "left" }}
                            className="cs_fs_14 cs_mb_25"
                          >
                            {listItem}
                          </li>
                        ))}
                      </ul>
                      {item.link && (
                        <Link
                          to={item.link}
                          className="cs_text_btn cs_fs_14 text-uppercase cs_heading_color cs_bold"
                        >
                          READ MORE
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z"
                              fill="currentColor"
                            />
                          </svg>
                        </Link>
                      )}
                    </div>
                    <div className="cs_card_shape">
                      <svg
                        width="245"
                        height="145"
                        viewBox="0 0 305 145"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M274.465 30.698L35.5518 41.3918L0 6.19539V120.27C0 133.924 11.1913 145 24.9875 145H280.012C293.809 145 305 133.924 305 120.27V0.478516L274.465 30.698Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Optionally you can add another card */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorPartnershipSection;
