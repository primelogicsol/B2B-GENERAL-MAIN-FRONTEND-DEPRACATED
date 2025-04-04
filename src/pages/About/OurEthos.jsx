import React from "react";
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
import AboutSection from "../../components/About/OurEthos/AboutSection";
import FooterArea from "../../components/Shared-Components/FooterArea";
import missionImage from "../../../src/assets/images/about-us-thu.png"
import visionImage from "../../../src/assets/images/about-thu2.png";
import coreValueImage from "../../../src/assets/images/about-thu3.png"
import HeroSection from "../../components/Shared-Components/HeroSection";
import heroImage from '../../assets/images/sm.png'
const MissionVisionPage = () => {
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Our Ethos" },
  ];
  const mission = {
    title: "MISSION",
    subtitle:
      "Empowering US Bussiness, revolutionizing Kashmir crafts, preserving heritage.",
    description:
      "Connecting Kashmiri craftsmanship to American Craft markets with transparency, innovation, and cultural integrity.",
    items: [
      "Scalability for craft businesses",
      "Empower Bussiness Communities",
      "Omni-commerce integration",
      "Promote Ethical Commerce",
      "Redefine Business Standards",
    ],
    counterValue: 712,
    counterText: "BUSSINESS INTEGRATED",
    imageSrc: "/assets/images/about-us-thu.png",
    iconSrc: missionImage,
  };

  const vision = {
    title: "VISION",
    subtitle: "Redefining craftsmanship through innovation and sustainability.",
    description:
      "Leading Kashmir craft evolution with cultural authenticity, ethical practices, and technological excellence.",
    items: [
      "Expand Kashmir Craft Partnerships",
      "Eliminate Trade Exploitation",
      "Simplify Trade Logistics",
      "Support Sustainable Trade",
      "Elevate Bussiness Branding",
    ],
    counterValue: 21,
    counterText: "BRAND INTEGRATED",
    imageSrc: "/assets/images/about-us-thu.png",
    iconSrc: visionImage,
  };

  const coreValue = {
    title: "CORE VALUE",
    subtitle:
      "Integrity, innovation, sustainability, transparency, cultural excellence.",
    description:
      "Uplifting business by blending tradition, innovation, ethical trade, and environmental responsibility.",
    items: [
      "Commit to Transparency",
      "Build Consumer Confidence",
      "Empowerment through Equity",
      "Operational Integrity",
      "Scalable Business Growth",
    ],
    counterValue: "06",
    counterText: "TRADERS INTEGRATED",
    imageSrc: "/assets/images/about-us-thu.png",
    iconSrc: missionImage,
  };

  return (
    <>
      {/* <Breadcrumb title="Our Ethos" links={breadcrumbLinks} /> */}
      <HeroSection
      subtitle="De K0SHUR CRAFTS B2B CONNECT"
      heading1="Welcome to DKC Buyer"
      heading2="Partnership Portal Hub"
      description="Join the largest offshore startup network revolutionizing Kashmiri crafts..."
      buttonText="Our Ethos"
      buttonLink=""
      videoLink="https://www.youtube.com/watch?v=Wx48y_fOfiY"
      heroImage={heroImage}
    />
      <AboutSection {...mission} index={0}/>
      <AboutSection {...vision} index={1}/>
      <AboutSection {...coreValue} index={2}/>
    </>
  );
};

export default MissionVisionPage;
