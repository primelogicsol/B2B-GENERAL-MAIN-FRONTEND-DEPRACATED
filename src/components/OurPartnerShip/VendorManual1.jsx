/* eslint-disable react/prop-types */
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
import lockImg from "../../assets/icon/red-bg-lock.png";
import unlockImg from "../../assets/icon/green-bg-lock.png";
import partialLockImg from "../../assets/images/partiallock.png";

import { Link } from "react-router-dom";
const VendorPartnership = ({retentionPeriod,kpiScore}) => {
  const location = useLocation();
  
  // const retentionPeriod =retentionPeriod;
  // const kpiScore = kpiScore;
  const userPackage = "";

  const cardData = [
    {
      image: image1,
      title: "DKC Drop Shipping",
      eligibleDesc:
      userPackage === "Starter" 
      ? "Well done & Congratulations! By purchasing the Starter Package, you’ve unlocked access to the DKC Consignment Partnership, accelerating your growth. As you’re already registered for this essential initial-level partnership, maintain your 7+ KPI score for the next 18 months to advance to the next level at no additional cost, ensuring continued growth and success for your business."
      : userPackage ==='Growth'
      ? "Well done & Congratulations! By purchasing the Starter & Growth Packages, you’ve unlocked access to the DKC Consignment & Exhibition Partnerships, accelerating your growth. As you’re already registered for these essential initial-level partnerships, maintain your 7+ KPI score for the next 18 months to advance to the next level at no additional cost, driving continued success."
      : userPackage === "Premium"
      ? "Well done & Congratulations! By purchasing the Starter, Growth & Premium Packages, you’ve unlocked access to the DKC Consignment & Exhibition Partnerships, accelerating your growth. As you’re already registered for these essential initial-level partnerships, maintain your 7+ KPI score for the next 18 months to advance to the next level at no additional cost."
      : "You are now officially registered for the DKC Drop Shipping Partnership. This partnership opens the door for you to expand your online presence and showcase your products to USA markets. With access to our platform, you can grow your business without the need for physical storefronts. We look forward to seeing your business thrive here!",
      ineligibleDesc: "Uneligible",
      lockIcon:unlockImg,
      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 0,
      requiredKpi: 0,
      requiredPackage: null,
      link:'/ecommerce'
    },
    {
      image: image4,
      title: "DKC Consignment",
      eligibleDesc:
      userPackage === "Starter"
      ? "Congratulations! With the purchase of the Starter Package, you’ve gained paid access to the DKC Consignment partnership. In this business model, you’ll have the opportunity to showcase your products without the upfront costs of purchasing inventory, allowing you to expand your reach while sharing the risk. Stay here for the next 6 months and retain KPI score of 7+ " : 
       userPackage === "Growth"
      ? "Great job! You’ve already secured your spot in this vital partnership, and by choosing the Starter Package, you’ve now gained access to the DKC Exhibition Partnership. This step amplifies your growth potential and opens doors to broader opportunities. To progress to the next level without extra costs, stay in this partnership for 6 more months and maintain an 8+ KPI score"
      : userPackage === "abc"
      ? "Amazing! As a Premium Package holder, you’re part of our elite partnership tier with maximum access to all DKC services, including global marketing, VIP exhibitions, and tailored growth plans. Stay with us for the next 18 months, maintain a 7+ KPI score, and continue to thrive with exclusive opportunities!"
      : "Based on your dedication and performance on the Drop Shipping Platform for 18 months with a KPI score of 7+, you’ve successfully unlocked the DKC Consignment Partnership. In this model, you’ll have the opportunity to showcase your products physically in USA from Kashmir, Stay here for the next 6 months and continue maintaining your KPI score to keep advancing.",
      

      ineligibleDesc:  `You are currently ineligible for free access to Consignment Partnership due to the 18-month retention and KPI score of 7+ at the Drop Shiping Partnership level. However, you can fast-track your progress with our Lateral Paid Multi-Path Eligibility, a fee-based solution for vendors looking to advance without waiting or meeting the KPI criteria. `,
      
      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 18,
      requiredKpi: 7,
      requiredPackage: "Starter",
      linkTo:'/package-multipath',
      link: "Unlock growth now!"
    },
    {
      image: image5,
      title: "DKC Exhibition",
      eligibleDesc:
      userPackage === "Starter"
      ? "Congratulations! With the purchase of the Starter Package, you’ve gained paid access to the DKC Consignment partnership. In this business model, you’ll have the opportunity to showcase your products without the upfront costs of purchasing inventory, allowing you to expand your reach while sharing the risk. Stay here for the next 6 months and retain KPI score of 7+ " : 
        "Based on your dedication and performance on the Drop Shipping & Consignment Platform for 24 months with a KPI score of 7+, you’ve successfully unlocked the DKC Exhibition Partnership. In this model, you’ll have the opportunity to display your products at prestigious exhibitions in USA, Stay here for the next 6 months and continue maintaining your KPI score to keep advancing.",
      ineligibleDesc: `Currently, you don’t meet free access to this Partnership due to the 6-month retention and 7+ KPI score requirement at Consignment Partnership. You can accelerate your progress through our Lateral Paid Multi-Path Eligibility, a fee-based solution for vendors with international exhibition exposure, without waiting or meeting KPI criteria.`,
      
      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 24,
      requiredKpi: 8,
      requiredPackage: "Growth",
      linkTo:'/package-multipath',
      link:"Click for the possibility!"
    },
    {
      image: image3,
      title: "DKC Import Export",
      eligibleDesc:
      userPackage === "Growth"
      ? "Congratulations! With the purchase of the Growth Package, you’ve unlocked immediate access to the DKC Import Export partnership. This partnership helps you expand your business globally, facilitating cross-border trade and access to international markets. Leverage our global trade tools and streamline logistics to unlock new growth opportunities worldwide!" : 
      "Based on your dedication and performance on the Drop Shipping, Consignment & Exhibition Platform for 30 months with a KPI score of 7+, you’ve unlocked the DKC Import & Export Partnership. This partnership allows you to expand Export avenues in USA, while DKC will help you in handling logistics and compliance seamlessly. Stay here for the next 6 months and maintain your KPI.",
      ineligibleDesc:  `Currently, you don’t meet free access to this Partnership due to the 6-month retention and 7+ KPI score requirement at Exhibition Partnership. However, you can accelerate your progress through our Lateral Paid Multi-Path Eligibility, a fee-based solution for vendors with international trade exposure, without waiting or meeting KPI criteria.`,
     
      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 30,
      requiredKpi: 8,
      requiredPackage: "Premium",
      linkTo:'/package-multipath',
      link:"Click to new path"
    },
    {
      image: image6,
      title: "DKC Investor",
      eligibleDesc:
       "Based on your dedication and performance on the Drop Shipping, Consignment, Exhibition, Import Export, DKC Subsidiary Platform for the past 48 months with a KPI score of 7+. This remarkable achievement reflects your exceptional journey and positions you for further growth and expansion.Your continued focus and effort have truly paid off, and you are now well-prepared.",
      ineligibleDesc:"At the moment, you don’t qualify for free access to this Partnership due to the 36-month retention and 7+ KPI score requirement across all previous Partnerships. While there's no shortcut at this level, stay committed here for 12 months ! Retain your retention period & KPI score across all partnerships, and get ready to enjoy your incredible, rewarding path to a Green Card!",
      
      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 36,
      requiredKpi: 8,
      requiredPackage: 'noPackage',
       linkTo:'/package-multipath',
      // link: "Unlock growth now!"
    },
    {
      image: image2,
      title: "DKC Brick & Mortar",
      eligibleDesc:
      // userPackage === "Premium"
      // ? "With the purchase of the DKC Subsidiary package, you’ve gained paid access to the DKC Subsidiary Partnership. You’ll have now the opportunity to establish a foundation as a subsidiary, expanding your business in the USA without the complexities of managing operations. Stay committed for 12 months, maintain a KPI score of 7+, and continue advancing." : 
      "Based on your dedication and performance across the Drop Shipping, Consignment, Exhibition, Import Export, DKC Subsidiary, and Brick & Mortar Partnerships for the past 72 months with a KPI score of 7+, this achievement marks your transition into an independent business entrepreneur in the USA. We’ll continue mentoring you for the next six months.",
      ineligibleDesc:"Setting up your company as a DKC Subsidiary is mandatory to qualify this Partnership. As of now, you don’t qualify the 12-month retention, 7+ KPI score, and the necessary completion of Subsidiary Partnership Legal Work both in the USA and India. Stay focused and maintain your KPI score. We’re determined to bring you to the USA as a successful, thriving business entrepreneur!",
      
      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 48,
      requiredKpi: 8,
      requiredPackage: "NoPackage",
      link:''
    },

    {
      image: image11,
      title: "DKC Franchise",
      subtitle: "Vendor Partnership",
      eligibleDesc:"Congratulations! The DKC Franchise Partnership is now open for you. After completing your 24-month commitment in the Brick and Mortar Partnership and maintaining an 8+ KPI score, you’re ready to advance. With expert mentorship, we will guide you as you transition into an independent business entrepreneur in the USA, unlocking your full growth.",
      ineligibleDesc: `This paid partnership opens once you stay in the Brick and Mortar Partnership for 24 months, maintaining an 8+ KPI score. After next 6 months, you’ll be empowered as an independent business entrepreneur! With our expert mentorship, we’ll guide you every step of the way to unlock your full success, growth, and potential as a thriving business in the USA!`,
     
      desc2: ``,
      desc3: ``,
      icon1: "",
      icon2: "",
      icon3: "",
      
      requiredRetention: 72,
      requiredKpi: 8,
      requiredPackage: 'Nopackage',
      link: "",
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
        <div className="mt-0 animted-xet">
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
                              backgroundColor:"green",
                              color:"white"
                              
                            }}
                          >
                            <Link 
  to="/partnership-registration" 
  state={{ highlightCard: 2 }} // Pass the index of the card to highlight
  className="" style={{textDecoration:"none", color:"white"}}
>

                            <div className="cs_card_icon cs_center cs_mb_30 ">
                              <img src={item.image} alt={item.title} />
                            </div>
                            <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-5 ">
                            <img
                                      src={unlockImg}
                                      alt=""
                                      style={{ width: "40px", height: "40px" }}
                                    />{item.title}
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
                                
                              >{item.eligibleDesc}</p>

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
                              {[1,2,3].includes(index) ?  <img
                                      className="me-1"
                                      src={partialLockImg}
                                      alt=""
                                      style={{ width: "35px", height: "35px" }}
                                    />:
                            <img
                                      className="me-1"
                                      src={lockImg}
                                      alt=""
                                      style={{ width: "35px", height: "35px" }}
                                    />}{item.title}
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
                                
                              >{item.ineligibleDesc}<Link style={{textDecoration:"None",color:"red"}}  to={{
                                pathname: item.linkTo, 
                                search: `?id=${item.requiredPackage}`  
                              }}
                              ><b 
                              // style={ item.title =='DKC Subsidiary' ? {textDecoration:"None",color:"white"} : {}}
                              >{item.link}</b></Link></p>

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
