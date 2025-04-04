import React from "react";
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
import LocationCard from "../../components/Shared-Elements/LocationCrd";
import projectIcon from "../../assets/images/home-two/project-icon.png";
import projectIcon2 from "../../assets/images/home-two/project-icon2.png";
import projectIco3 from "../../assets/images/home-two/project-icon3.png";
import projectIcon4 from "../../assets/images/home-two/project-icon4.png";
import projectrs from "../../assets/images/home-two/project-rs.png";
import projectws from "../../assets/images/home-two/project-ws.png";
import FooterArea from "../../components/Shared-Components/FooterArea";
import BusinessLocationHeader from "../../components/Shared-Elements/LocationHeader";
import LocationBullets from "../../components/About/Elements/LocationBullets";
import HeroSection from "../../components/Shared-Components/HeroSection";
import heroImage from '../../assets/images/sm.png'
import { Link } from "react-router-dom";
export default function BussinessLocation() {
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Bussines Location" },
  ];
  const locations = [
    {
      iconSrc: projectIcon,
      title: "Head Office",
      description: "USA, Virginia – Fairfax",
    },
    {
      iconSrc: projectIcon2,
      title: "Communications",
      description: "USA, Virginia Beach",
    },
    {
      iconSrc: projectIco3,
      title: "Regional USA",
      description: "USA, CA – Ridgecrest",
    },
    {
      iconSrc: projectIcon4,
      title: "Call Centre Office",
      description: "USA, Texas – Dallas",
    },
    {
      iconSrc: projectIcon4,
      title: "USA Warehouse",
      description: "Virginia – Front Royal",
    },
    {
      iconSrc: projectIcon4,
      title: "India Warehouse",
      description: "J & K – Srinagar",
    },
    {
      iconSrc: projectIcon4,
      title: "USA Logistics",
      description: "Illinois – Chicago",
    },
    {
      iconSrc: projectIcon4,
      title: "India Logistics",
      description: "Delhi – New Delhi",
    },
    {
      iconSrc: projectIcon4,
      title: "Design Studio",
      description: "J & K – Srinagar",
    },
    {
      iconSrc: projectIcon4,
      title: "Photo Studio",
      description: "J & K – Srinagar",
    },
  ];

  return (
    <>
    <HeroSection
      subtitle="De K0SHUR CRAFTS B2B CONNECT"
      heading1="Welcome to DKC Buyer"
      heading2="Partnership Portal Hub"
      description="Join the largest offshore startup network revolutionizing Kashmiri crafts..."
      buttonText="Bussiness Location"
      buttonLink=""
      videoLink="https://www.youtube.com/watch?v=Wx48y_fOfiY"
      heroImage={heroImage}
    />
      {/* <Breadcrumb title="Bussines Location" links={breadcrumbLinks} /> */}
      <div className="project-area mt-3 mb-3 style-three">
        <div className="container">
          <BusinessLocationHeader
            subTitle="OUR BUSINESS LOCATION"
            mainTitle="Operational Infrastructure"
            secondaryTitle="Seamless Connectivity, Strategic Reach, Global Excellence."
            description="DKC B2B Connect Infrastructure reflects a robust and strategic approach to operations, enabling efficient logistics, global connectivity, and strong support for bussiness, artisans, vendors, and customers worldwide. Our infrastructure is designed to scale globally and deliver exceptional results."
          />
          <div className="row project-bs">
            {locations.map((location, index) => (
              <Link className="col-xl-3 col-lg-4 col-md-6 "
              
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => addCardToHighlighted(id)} // Add the card to highlighted list when clicked
            >
              <LocationCard
                key={index}
                iconSrc={location.iconSrc}
                title={location.title}
                description={location.description}
                className={"about-location-card"}
                titleClass="text-black"
              />
              </Link>
            ))}
            <LocationBullets />
          </div>
        </div>
        <div className="project-bg-shape1 moveLeftBounce">
          <img src={projectrs} alt="shape" />
        </div>
        <div className="project-bg-shape2 bounce-animate3">
          <img src={projectws} alt="shape" />
        </div>
      </div>
    </>
  );
}
