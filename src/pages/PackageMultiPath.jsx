/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import ServicesArea from "../components/index/ServicesArea";
import Breadcrumb from "../components/Shared-Components/Breadcrumb";
import service_icon from "../assets/images/design22.png";
import active_icon from "../assets/images/lstboc.png";
import heroImage from '../assets/images/sm.png'
import { useLocation } from "react-router-dom";
import HeroSection from "../components/Shared-Components/HeroSection";
export default function PackageMultiPath() {
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Package Multi Path" },
  ];
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [activeServiceId, setActiveServiceId] = useState(null);

  const ServicesAreaData = {
    title: "Services",
    subtitle: `Seamless Transitions with <b style="color:black">One Time</b>  Paid Multi-Path Eligibility`,
    mainTitle:
      "Redefine Your Journey with KPI-Driven Excellence Without being Locked-In ",
    highlight: "Retention Periods.",
    services: [
      {
        title: "Starter Package",
        package: "Starter",
        icon: service_icon,
        active_icon:active_icon,
        DesignFor: "Small buyers establishing presence in ecosystem.",
        access: "Mid-tier partnership - Consignment.",
        compulsory: "Drop Shipping Partnership Registration & Approval.",
        KPIscore: " Minimum 7 across performance metrics",
        fee: "$550",
      },
      {
        title: "Growth Package",
        package: "Growth",
        icon: service_icon,
        active_icon:active_icon,
        DesignFor: "Scaling buyers transitioning to growth strategies.",
        access: "Mid-tier partnership - Exhibition.",
        compulsory: "Drop Shipping Partnership Registration & Approval.",
        KPIscore: "Minimum 7 across performance metrics",
        fee: "$999",
      },
      {
        title: "Premium Package",
        package: "Premium",
        icon: service_icon,
        active_icon:active_icon,
        DesignFor: "Established buyers aiming for global expansion.",
        access: "Full-spectrum partnership of Import Export",
        compulsory: "Drop Shipping Partnership Registration & Approval.",
        KPIscore: "Minimum 7 across performance metrics",
        fee: "$1499",
      },
      
    ],
  };

  const getServiceCardStyle = (serviceTitle) => {
    if (id === serviceTitle) {
      return "active-package";
    } else {
      return {};
    }
  };
  return (
    <>
    <HeroSection
      subtitle="De K0SHUR CRAFTS B2B CONNECT"
      heading1="Welcome to DKC Buyer"
      heading2="Partnership Portal Hub"
      description="Join the largest offshore startup network revolutionizing Kashmiri crafts..."
      buttonText="Register Now"
      buttonLink="/partnership-registration"
      videoLink="https://www.youtube.com/watch?v=Wx48y_fOfiY"
      heroImage={heroImage}
    />
      
      <ServicesArea
        {...ServicesAreaData}
        getServiceCardStyle={getServiceCardStyle}
      />
    </>
  );
}
