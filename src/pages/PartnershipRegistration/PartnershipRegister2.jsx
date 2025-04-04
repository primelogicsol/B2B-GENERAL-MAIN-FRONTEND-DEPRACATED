import React from "react";
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
import ContactArea from "../../components/About/Contact/ContactArea";
import AddressArea from "../../components/About/Contact/AddressArea";
import FooterArea from "../../components/Shared-Components/FooterArea";
import image from "../../assets/images/your3.png";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import image5 from "../../assets/images/5.png";
import image6 from "../../assets/images/6.png";
import image7 from "../../assets/images/6.png";
// import img7 from "../../assets/images/7.png";
import ServicesArea from "../../components/index/ServicesArea";
import service_icon from "../../assets/images/lstboc.png";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import image12 from "../../assets/images/process icon/5.png";
import ProjectArea from "../../components/Shared-Components/RegProjectArea1";
import imgprogress from "../../assets/images/progress_bar_graph.jpg";

import VendorPartnership from "../../components/OurPartnerShip/VendorManual2";
import { useLocation } from "react-router-dom";

// import MultistepForm from "../components/ProgressRegistration/MultiStepForm";
function PartnershipRegister() {
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "PartnerShip Register" },
  ];

  const ServicesAreaData = {
    title: "Services",
    subtitle: "Seamless Transitions with One Time Paid Multi-Path Eligibility",
    mainTitle:
      "Redefine Your Journey with KPI-Driven Excellence Without being Locked-In ",
    highlight: "Retention Periods.",
    services: [
      {
        title: "Starter Package",

        icon: service_icon,
        DesignFor: "Small vendors establishing presence in ecosystem.",
        access: "Basic partnerships such as Consignment and Exhibition.",
        compulsory: "E-Commerce Retention Period.",
        KPIscore: " Minimum 7 across performance metrics",
        fee: "$2,500",
      },
      {
        title: "Growth Package",

        icon: service_icon,
        DesignFor: "Scaling vendors transitioning to growth strategies.",
        access: "Mid-tier partnership such as Import Export.",
        compulsory: "E-Commerce Retention Period.",
        KPIscore: "Minimum 7 across performance metrics",
        fee: "$5,000",
      },
      {
        title: "Premium Package",

        icon: service_icon,
        DesignFor: "Established vendors aiming for global expansion.",
        access: "Full-spectrum partnership of Brick and Mortar",
        compulsory: "E-Commerce Retention Period.",
        KPIscore: "Minimum 7 across performance metrics",
        fee: "$10,000",
      },
    ],
  };

  const VendorContentData = [
    {
      title: "E-commerce",
      description: "Vendor Partnership",
      heading1: "Minimum Rentention Period",
      desc1: "Minimum 18 Months",
      heading2: "Key Performance Indicator Score",
      desc2: "Maintain Minimum 7+",
      heading3: "Next Level of Partnership ",
      desc3: " Brick & Mortar",
      image: img1,
      link: "/ecommerce",
    },
    {
      title: "Brick & Mortar",
      description: "Shared physical stores with omni-channel synergy",
      link: "/brick-mortar",
      image: img2,
    },
    {
      title: "Import Export",
      description: "Optimize inventory through dynamic consignment innovation",
      link: "/importexport",
      image: img3,
    },
    {
      title: "Consignment",
      description: "Showcase products at transformative global exhibitions",
      link: "/consignment",
      image: img4,
    },
    {
      title: "Exhibition",
      description: "Scale globally with streamlined trade network solutions",
      link: "/exhibition",
      image: img5,
    },
    {
      title: "Subsidary",
      description: "Lead markets through exclusive franchise ownership",
      link: "/subsidary",
      image: img6,
    },
    {
      title: "Franchise",
      description: "Unlock exclusive privileges with subsidiary status",
      link: "/franchise",
      image: img7,
    },
  ];
  const location = useLocation();
  const { retentionPeriod, kpiScore } = location.state || {};
  return (
    <div>
      <Breadcrumb title="Partnership Register" links={breadcrumbLinks} />
      <p>
        <strong>Retention Period:</strong> {retentionPeriod}
      </p>
      <p>
        <strong>KPI Score:</strong> {kpiScore}
      </p>
      <ProjectArea retentionPeriod={retentionPeriod} kpiScore={kpiScore} />

      {/* <MultistepForm/> */}
      <VendorPartnership />
      {/* <ServicesArea {...ServicesAreaData}/> */}
    </div>
  );
}

export default PartnershipRegister;
