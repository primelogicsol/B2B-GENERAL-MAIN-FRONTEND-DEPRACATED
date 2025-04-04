/* eslint-disable no-unused-vars */
import image11 from "../../assets/images/process icon/4.png";
import React from "react";
import { useLocation } from "react-router-dom";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import image5 from "../../assets/images/5.png";
import image6 from "../../assets/images/6.png";
import image8 from "../../assets/images/process icon/1.png";
import image9 from "../../assets/images/process icon/2.png";
import image10 from "../../assets/images/process icon/3.png";
import { Link } from "react-router-dom";
const VendorPartnership = () => {
  const location = useLocation();

  const retentionPeriod = 0;
  const kpiScore = 10;
  const userPackage = "";

  const cardData = [
    {
      image: image1,
      title: "DKC E-Commerce",
      eligibleDesc:
        userPackage === "Starter" || userPackage === "Growth"
          ? "Well done & Congratulations! As you are already registered for this essential initial-level partnership, by purchasing the Starter Package, you’ve unlocked access to DKC Consignment and DKC Exhibition Partnerships, accelerating your growth. To advance to the next level free of cost, stay in this partnership for the next 18 months and maintain a 7+ KPI score."
          : userPackage === "Premium"
            ? "Amazing! As a Premium Package holder, you’re part of our elite partnership tier with maximum access to all DKC services, including global marketing, VIP exhibitions, and tailored growth plans. Stay with us for the next 18 months, maintain a 7+ KPI score, and continue to thrive with exclusive opportunities!"
            : "Congratulations! You are eligible for this essential initial-level partnership, completely free for early adopters. There’s no retention period or KPI score required at registration. However, to advance to the next level free of cost, you must remain in the partnership for 18 months and maintain a 7+ KPI score. Exciting opportunities await as you grow with us!",
      ineligibleDesc: "Uneligible",

      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 0,
      requiredKpi: 0,
      requiredPackage: null,
    },
    {
      image: image4,
      title: "DKC Consignment",
      eligibleDesc:
        userPackage === "Starter"
          ? "Congratulations! With the purchase of the Starter Package, you’ve gained paid access to the DKC Consignment partnership. In this business model, you’ll have the opportunity to showcase your products without the upfront costs of purchasing inventory, allowing you to expand your reach while sharing the risk. Stay here for the next 6 months and retain KPI score of 7+ "
          : userPackage === "Growth"
            ? "Great job! You’ve already secured your spot in this vital partnership, and by choosing the Starter Package, you’ve now gained access to the DKC Exhibition Partnership. This step amplifies your growth potential and opens doors to broader opportunities. To progress to the next level without extra costs, stay in this partnership for 6 more months and maintain an 8+ KPI score"
            : userPackage === "Premium"
              ? "Amazing! As a Premium Package holder, you’re part of our elite partnership tier with maximum access to all DKC services, including global marketing, VIP exhibitions, and tailored growth plans. Stay with us for the next 18 months, maintain a 7+ KPI score, and continue to thrive with exclusive opportunities!"
              : "Congratulations! You are eligible for this essential initial-level partnership, completely free for early adopters. There’s no retention period or KPI score required at registration. However, to advance to the next level free of cost, you must remain in the partnership for 18 months and maintain a 7+ KPI score. Exciting opportunities await as you grow with us!",

      ineligibleDesc: `You are currently ineligible for free access to Consignment Partnership due to the 18-month retention and KPI score of 7+ at the E-Commerce Partnership level. However, you can fast-track your progress with our Lateral Paid Multi-Path Eligibility, a fee-based solution for vendors looking to advance without waiting or meeting the KPI criteria. <b style="color:red"> Unlock growth now! </b> `,

      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 18,
      requiredKpi: 7,
      requiredPackage: "Starter",
    },
    {
      image: image5,
      title: "DKC Exhibition",
      eligibleDesc:
        "With the purchase of the Starter Package, you’ve gained paid access to the DKC Exhibition partnership. In this model, you’ll have the opportunity to display your products at prestigious exhibitions, gaining exposure to international markets without the hassle of managing physical storefronts. Stay here for the next 6 months and retain a KPI score of 7+ to continue advancing.",
      ineligibleDesc: `Currently, you don’t meet free access to this Partnership due to the 6-month retention and 7+ KPI score requirement at Consignment Partnership. You can accelerate your progress through our Lateral Paid Multi-Path Eligibility, a fee-based solution for vendors with international exhibition exposure, without waiting or meeting KPI criteria. <b style="color:red"> Click for the possibility! </b>`,

      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 24,
      requiredKpi: 8,
      requiredPackage: "Starter",
    },
    {
      image: image3,
      title: "DKC Import Export",
      eligibleDesc:
        "Congratulations! With the purchase of the Growth Package, you’ve unlocked immediate access to the DKC Import Export partnership. This partnership helps you expand your business globally, facilitating cross-border trade and access to international markets. Leverage our global trade tools and streamline logistics to unlock new growth opportunities worldwide!",
      ineligibleDesc: `Currently, you don’t meet free access to this Partnership due to the 6-month retention and 7+ KPI score requirement at Exhibition Partnership. However, you can accelerate your progress through our Lateral Paid Multi-Path Eligibility, a fee-based solution for vendors with international trade exposure, without waiting or meeting KPI criteria. <b style="color:red"> Click to new path </b>`,

      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 30,
      requiredKpi: 8,
      requiredPackage: "Growth",
    },
    {
      image: image6,
      title: "DKC Subsidiary",
      eligibleDesc: "Subsidiary",
      ineligibleDesc:
        "At the moment, you don’t qualify for free access to this Partnership due to the 36-month retention and 7+ KPI score requirement across all previous Partnerships. While there's no shortcut at this level, stay committed here for 12 months ! Retain your retention period and KPI score across all partnerships, and get ready to enjoy your incredible, rewarding path to a Green Card!",

      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 54,
      requiredKpi: 8,
      requiredPackage: "Premium",
    },
    {
      image: image2,
      title: "DKC Brick & Mortar",
      eligibleDesc: "Subsidiary",
      ineligibleDesc:
        "Setting up your company as a DKC Subsidiary is mandatory to qualify this Partnership. At the moment, you don’t qualify, also you don't meet the 36-month retention and 7+ KPI score requirements across previous Partnerships. Stay focused, maintain your KPI score. We’re determined to bring you to the USA as a successful business entrepreneur!",

      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 78,
      requiredKpi: 8,
      requiredPackage: "NoPackage",
    },

    {
      image: image11,
      title: "DKC Brand Franchise",
      subtitle: "Vendor Partnership",
      eligibleDesc: "Subsidiary",
      ineligibleDesc: `This paid partnership opens once you stay in the Brick and Mortar Partnership for 24 months, maintaining an 8+ KPI score. After next 6 months, you’ll be empowered as an independent business entrepreneur! With our expert mentorship, we’ll guide you every step of the way to unlock your full success, growth, and potential as a thriving business in the USA!`,

      desc2: ``,
      desc3: ``,
      icon1: "",
      icon2: "",
      icon3: "",
      link: "/about",
      requiredRetention: 84,
      requiredKpi: 8,
      requiredPackage: "Nopackage",
    },
  ];

  return (
    <section
      className="cs_bg_filed"
      data-background="assets/how_to_work_bg.svg"
      style={{
        backgroundImage: "url('assets/how_to_work_bg.svg')",
        width: "100%",
      }}
    >
      <div className="container mb-5">
        <div className="mt-5 animted-xet">
          <div className="row">
            {cardData.map((item, index) => {
              const isEligible =
                (userPackage === "Premium" &&
                  (item.requiredPackage === "Starter" ||
                    item.requiredPackage === "Growth" ||
                    item.requiredPackage === "Premium")) ||
                (userPackage === "Growth" &&
                  (item.requiredPackage === "Starter" ||
                    item.requiredPackage === "Growth")) ||
                (userPackage === "Starter" &&
                  item.requiredPackage === "Starter");

              const meetsRetentionAndKpi =
                retentionPeriod >= item.requiredRetention &&
                kpiScore >= item.requiredKpi;

              const isFinalEligibility = isEligible || meetsRetentionAndKpi;

              return (
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
                    <div className={`cs_card cs_style_1`}>
                      {isFinalEligibility ? (
                        <>
                          <div
                            className={`cs_card_in cs_white_bg  `}
                            style={{
                              backgroundColor: "green",
                              color: "white",
                            }}
                          >
                            <Link
                              to="/partnership-registration"
                              state={{ highlightCard: 3 }} // Pass the index of the card to highlight
                              className=""
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <div className="cs_card_icon cs_center cs_mb_30 ">
                                <img src={item.image} alt={item.title} />
                              </div>
                              <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-5 ">
                                {item.title}
                              </h3>

                              <div className="bg-green-white-icon">
                                {item.icon1 ? (
                                  <>
                                    <div className="d-flex">
                                      <img
                                        src={item.icon1}
                                        alt=""
                                        style={{
                                          width: "40px",
                                          height: "40px",
                                        }}
                                      />{" "}
                                    </div>{" "}
                                  </>
                                ) : (
                                  ""
                                )}
                                <p
                                  style={{ textAlign: "left" }}
                                  className="cs_fs_14 cs_mb_25"
                                  dangerouslySetInnerHTML={{
                                    __html: item.eligibleDesc,
                                  }}
                                ></p>

                                {item.icon2 ? (
                                  <>
                                    <div className="d-flex">
                                      {" "}
                                      <img
                                        src={item.icon2}
                                        alt=""
                                        style={{
                                          width: "40px",
                                          height: "40px",
                                        }}
                                      />
                                      <p
                                        style={{ textAlign: "left" }}
                                        className="cs_fs_14 cs_mb_25"
                                        dangerouslySetInnerHTML={{
                                          __html: item.desc2,
                                        }}
                                      ></p>{" "}
                                    </div>
                                  </>
                                ) : (
                                  ""
                                )}

                                {item.icon3 ? (
                                  <>
                                    <div className="d-flex">
                                      {" "}
                                      <img
                                        src={item.icon3}
                                        alt=""
                                        style={{
                                          width: "40px",
                                          height: "40px",
                                        }}
                                      />
                                      <p
                                        style={{ textAlign: "left" }}
                                        className="cs_fs_14 cs_mb_25"
                                        dangerouslySetInnerHTML={{
                                          __html: item.desc3,
                                        }}
                                      ></p>{" "}
                                    </div>
                                  </>
                                ) : (
                                  ""
                                )}
                              </div>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className={`cs_card_in cs_white_bg  `}
                            style={{
                              backgroundColor:
                                index === 0
                                  ? "green"
                                  : [1, 2, 3].includes(index)
                                    ? "white"
                                    : [4, 5, 6].includes(index)
                                      ? "#ff3b00"
                                      : "",
                              color: [0, 4, 5, 6].includes(index)
                                ? "white"
                                : "",
                              border: [1, 2, 3].includes(index)
                                ? "2px solid green"
                                : "",
                            }}
                          >
                            <div className="cs_card_icon cs_center cs_mb_30 ">
                              <img src={item.image} alt={item.title} />
                            </div>
                            <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-5 ">
                              {item.title}
                            </h3>

                            <div className="bg-green-white-icon">
                              {item.icon1 ? (
                                <>
                                  <div className="d-flex">
                                    <img
                                      src={item.icon1}
                                      alt=""
                                      style={{ width: "40px", height: "40px" }}
                                    />{" "}
                                  </div>{" "}
                                </>
                              ) : (
                                ""
                              )}
                              <p
                                style={{ textAlign: "left" }}
                                className="cs_fs_14 cs_mb_25"
                                dangerouslySetInnerHTML={{
                                  __html: item.ineligibleDesc,
                                }}
                              ></p>

                              {item.icon2 ? (
                                <>
                                  <div className="d-flex">
                                    {" "}
                                    <img
                                      src={item.icon2}
                                      alt=""
                                      style={{ width: "40px", height: "40px" }}
                                    />
                                    <p
                                      style={{ textAlign: "left" }}
                                      className="cs_fs_14 cs_mb_25"
                                      dangerouslySetInnerHTML={{
                                        __html: item.desc2,
                                      }}
                                    ></p>{" "}
                                  </div>
                                </>
                              ) : (
                                ""
                              )}

                              {item.icon3 ? (
                                <>
                                  <div className="d-flex">
                                    {" "}
                                    <img
                                      src={item.icon3}
                                      alt=""
                                      style={{ width: "40px", height: "40px" }}
                                    />
                                    <p
                                      style={{ textAlign: "left" }}
                                      className="cs_fs_14 cs_mb_25"
                                      dangerouslySetInnerHTML={{
                                        __html: item.desc3,
                                      }}
                                    ></p>{" "}
                                  </div>
                                </>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorPartnership;
