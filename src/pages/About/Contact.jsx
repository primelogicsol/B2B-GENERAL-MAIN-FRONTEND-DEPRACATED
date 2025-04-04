import React from "react";
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
import ContactArea from "../../components/About/Contact/ContactArea";
import AddressArea from "../../components/About/Contact/AddressArea";
import FooterArea from "../../components/Shared-Components/FooterArea";
import HeroSection from "../../components/Shared-Components/HeroSection";
import heroImage from '../../assets/images/sm.png'
function Contact() {
  const breadcrumbLinks = [{ label: "Home", path: "/" }, { label: "Contact" }];

  return (
    <>
      {/* <Breadcrumb title="Contact" links={breadcrumbLinks} /> */}
      <HeroSection
      subtitle="De K0SHUR CRAFTS B2B CONNECT"
      heading1="Welcome to DKC Buyer"
      heading2="Partnership Portal Hub"
      description="Join the largest offshore startup network revolutionizing Kashmiri crafts..."
      buttonText="Contact"
      buttonLink=""
      videoLink="https://www.youtube.com/watch?v=Wx48y_fOfiY"
      heroImage={heroImage}
    />
      <ContactArea />
      <AddressArea />
    </>
  );
}

export default Contact;
