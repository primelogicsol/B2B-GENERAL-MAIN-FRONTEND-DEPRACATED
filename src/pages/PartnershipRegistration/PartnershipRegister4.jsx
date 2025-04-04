import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ContactArea from "../../components/About/Contact/ContactArea";
import AddressArea from "../../components/About/Contact/AddressArea";
import FooterArea from "../../components/FooterArea";
import image from "../../assets/images/your3.png";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import image5 from "../../assets/images/5.png";
import image6 from "../../assets/images/6.png";
import image7 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import image12 from "../../assets/images/process icon/5.png";
import ProjectArea from "../../components/RegProjectArea";
import imgprogress from "../../assets/images/progress_bar_graph.jpg"
// import MultistepForm from "../components/ProgressRegistration/MultiStepForm";
function PartnershipRegister() {
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "PartnerShip Register" },
  ];

  return (
    <div>
      <Breadcrumb title="Partnership Register" links={breadcrumbLinks} />
      
      <ProjectArea />
      
      <section
        className="cs_bg_filed"
        data-background="assets/how_to_work_bg.svg"
        style={{ backgroundImage: "url('assets/how_to_work_bg.svg')" }}
      >
        <div className="cs_height_115 cs_height_lg_70"></div>
        <div className="container">
          <h3 className="text-center">
            Vendor Partnership Registration Process
          </h3>
          <div className="cs_section_heading_1_with_sub">
            <div className="cs_section_heading cs_style_1">
              <div className="row">
                p{" "}
                <div className="col-lg-7 col-md-12 col-sm-12">
                  <h2
                    className="cs_section_title ikid cs_fs_48 cs_semibold mb-0"
                    data-aos="zoom-in-right"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    {/* <img src={image} alt="Your image description" /> */}
                  </h2>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                  {/* 
                <p className="mb-0 mb-tx mt-2-2-3">
                  Meet retention time and KPI benchmarks to advance seamlessly
                  through higher
                  <span style={{ color: "#ff3d00" }}>
                    <b>Progressive Partnership Tier</b>
                  </span>
                </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="cs_height_45 cs_height_lg_45"></div>
          <div className="mt-5 animted-xet">
            <div className="row">
              {[
                {
                  image: image1,
                  title: "E-Commerce",
                  subtitle: "Level 1 Partnership",
                  description:
                    "Launch your digital storefront with our advanced e-commerce platform, analytics, and marketing support",
                  list: [
                    "Digital storefront setup",
                    "Analytics dashboard",
                    "Marketing automation",
                  ],
                  link: "/about",
                },
                {
                  image: image4,
                  title: "Consignment",
                  subtitle: "Level 2 Partnership",
                  description:
                    "Maximize profits through our inventory management and flexible consignment solutions",
                  list: [
                    "Inventory tracking",
                    "Dynamic pricing",
                    "Supply chain optimization",
                  ],
                  link: "/about",
                },
                {
                  image: image5,
                  title: "Exhibition",
                  subtitle: "Level 3 Partnership",
                  description:
                    "Showcase your products at premier trade shows with full exhibition support and lead generation",
                  list: [
                    "Trade show booth",
                    "Lead capture system",
                    "Event marketing",
                  ],
                  link: "/about",
                },
                {
                  image: image3,
                  title: "Import Export",
                  subtitle: "Level 4 Partnership",
                  description:
                    "Access global markets with our comprehensive import-export logistics and customs expertise",
                  list: [
                    "Customs clearance",
                    "Global shipping",
                    "Trade compliance",
                  ],
                  link: "/about",
                },
                {
                  image: image2,
                  title: "Brick & Mortar",
                  subtitle: "Level 5 Partnership",
                  description:
                    "Establish physical retail presence with turnkey store solutions and integrated online-offline operations",
                  list: ["Location selection", "Store design", "POS systems"],
                  link: "/about",
                },

                {
                  image: image6,
                  title: "Subsidary",
                  subtitle: "Level 6 Partnership",
                  description:
                    "Operate as an independent subsidiary with full access to our resources and brand ecosystem",
                  list: [
                    "Brand licensing",
                    "Operational support",
                    "Market exclusivity",
                  ],
                  link: "/about",
                },
                {
                  image: image7,
                  title: "Franchise",
                  subtitle: "Level 7 Partnership",
                  description:
                    "Own and operate your exclusive franchise with comprehensive training and operational support",
                  list: [
                    "Full ownership",
                    "Training program",
                    "Territory rights",
                  ],
                  link: "/about",
                },
              ].map((item, index) => (
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
                          <img src={item.image} alt={item.title} />
                        </div>
                        <h3
                          className="cs_fs_24 cs_semibold cs_mb_6 mt-3"
                          style={{ lineHeight: "0.417em" }}
                        >
                          {item.subtitle}
                        </h3>
                        <h3
                          className="cs_fs_24 cs_semibold cs_mb_6"
                          style={{ color: "#ff3b00" }}
                        >
                          {item.title}
                        </h3>
                        {/* <p className="cs_fs_14 cs_mb_25">{item.description}</p> */}
                        <ul>
                          {item.list.map((item, index) => (
                            <li
                              key={index}
                              style={{ textAlign: "left" }}
                              className="cs_fs_14 cs_mb_25"
                            >
                              {item}.
                            </li>
                          ))}
                        </ul>
                        <a
                          className="cs_text_btn cs_fs_14 text-uppercase cs_heading_color cs_bold"
                          href={item.link}
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
                        </a>
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
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div
                  className="cs_card_1_col"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="cs_card cs_style_1">
                    <div className="cs_card_in cs_white_bg">
                      <div className="cs_card_icon cs_center cs_mb_30">
                        <img src={image12} alt="" />
                      </div>
                      <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-5 ">
                        Our Five-Year Promise
                      </h3>{" "}
                      <h3
                        className="cs_fs_24 cs_semibold cs_mb_6 mt-3 "
                        style={{ color: "#ff3d00" }}
                      >
                        Guiding You to Risk-Free Success & Independent Kashmir
                        Handicraft Bussiness in the USA
                      </h3>
                      {/* <p className='mt-4 mb-0'>Let’s build your path to independence and success today. Empower yourself, inspire others, and lead the way as a true global artisan entrepreneur.</p> */}
                      {/* <h3 className="cs_fs_24 cs_semibold cs_mb_6 mb-5">{item.subtitle}</h3>  */}
                      {/* <img src={item.icon1} alt="" style={{width:"40px",height:'40px'}}/>
                        <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.description}}></p>
                        </div>
                        <div className='d-flex'> 
                        <img src={item.icon2} alt="" style={{width:"40px",height:'40px'}}/>
                         <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.desc2}}></p></div>
                         <div className='d-flex'> 
                        <img src={item.icon3} alt="" style={{width:"40px",height:'40px'}}/>
                        <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.desc3}}></p></div> */}
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
            </div>
          </div>
        </div>
      </section>
      {/* <MultistepForm/> */}
      
      
    </div>
  );
}

export default PartnershipRegister;
