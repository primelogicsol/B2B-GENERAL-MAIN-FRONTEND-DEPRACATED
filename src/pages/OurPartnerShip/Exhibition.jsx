/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "../../components/OurPartnerShip/HeroSection";

import AboutArea from "../../components/OurPartnerShip/AboutArea";
import aboutThumb from "../../assets/images/about-thumb.png";
import aboutShape from "../../assets/images/about1.png";
import aboutIcon from "../../assets/images/about4.png";
import CaseStudyArea from "../../components/OurPartnerShip/CaseStudy";
import AboutSection from "../../components/Shared-Components/AboutSection";
import aboutImage from "../../assets/images/about-thu3.png";
import CompareToOther from "../../components/OurPartnerShip/CompareToOther";
import ServiceArea from "../../components/OurPartnerShip/ServiceArea";

import FooterUpperwithoutLink from "../../components/Shared-Components/FooterUpperWithoutLink";
import elib from "../../assets/images/elib.png";
import CounterArea from "../../components/OurPartnerShip/CounterArea";
import HowItWorks from "../../components/OurPartnerShip/HowItWorks";

import aboutImg from "../../assets/images/about_img_1.png";
import rightArrow from "../../assets/images/right-arrow.png";
import booking from "../../assets/icon/booking.png";

import FooterUpper from "../../components/OurPartnerShip/FooterUpper";
import ecommerceImage from "../../assets/images/ecommercepage.png";
import parpro from "../../assets/images/parpro.png";
import indexfooterImage from "../../assets/images/index_footer.jpg";

import logo from "../../assets/images/your3.png";

import VendorPartnership from "../../components/OurPartnerShip/CardSection";

import ContactUs from "../../components/OurPartnerShip/ContactUs";
import FooterArea from "../../components/Shared-Components/FooterArea";

import PricingService from "../../components/OurPartnerShip/PricingService";

import heroImage from '../../assets/images/sm.png'
import FaqArea from "../../components/OurPartnerShip/FAQArea";
import FAQSectionDynamic from "../../components/OurPartnerShip/FaqSection";
import { heroSectionData,caseStudyContent,platformData,tableData,highlightedTexts,GreenHighlightedTexts,servicesData,faqAreaItems,HowItWorksbuttons,HowItworksphases,PriceServicebuttonText,PriceServiceheading,PriceServicesubheading,PriceServiceservicesData,costplatformData,costtableData,countersData,Counterheading,faqContent,VendorContentData } from "../../Data/OurPartnerShip/Exhibition";
const ExhibitionPage = () => {


  return (
    <>
      <HeroSection {...heroSectionData} />
      <AboutArea
        thumbImage={aboutThumb}
        shapeImage={aboutShape}
        thumbTitle="Partnership Designed For You"
        subHeading="De Koshur Crafts Exhibition Buyer & Event Planner Partnership Overview"
        mainHeading="Bringing Authentic Kashmiri Handicrafts to "
        mainHeadingHighlight="US Expo Centers"
        description="Unlock premium sourcing opportunities by partnering with De Koshur Crafts Exhibition Platform, designed to connect US buyers, exhibition organizers, and event planners with authentic Kashmiri artisans and heritage crafts. Through curated showcases, exclusive exhibition spaces, and direct vendor engagement, we enable buyers and event planners to bring Kashmir’s rich craftsmanship to a global audience."
        iconImage={aboutIcon}
        iconTitle="Global Sourcing Platform for Kashmiri Handicrafts"
        textDetails="A dedicated trade platform enabling US buyers, retailers, and event planners to access exclusive handcrafted collections, cultural exhibits, and premium trade opportunities at leading US Expo Centers. Source unique Kashmiri crafts directly from artisans.Curate exclusive Kashmiri craft showcases for premium exhibitions"
        buttonText="THE PREMIER EXHIBITION PLATFORM FOR KASHMIRI HANDICRAFTS"
        buttonSubText="Plugging Gaps in the Kashmir Handicraft Sector"
        buttonLink="#"
      />
      <CaseStudyArea {...caseStudyContent} />
      <AboutSection
        title="Smart Technology Solutions for US Buyers & Exhibition Organizers at "
        color_title="US Expos "
        subtitle="TECHNOLOGY ADVANCEMENTS IN THE PARTNERSHIP"
        description="At De Koshur Crafts, we empower buyers, retailers, and exhibition planners with cutting-edge technology to source, curate, and manage authentic Kashmiri handicrafts at US Expo Centers. Our platform is designed to streamline procurement, enhance sourcing efficiency, and optimize trade experiences, ensuring a seamless connection between buyers and artisan exhibitors."
        items={[
          "AI-Powered Sourcing & Trade Optimization (DTO)",
"Real-Time Market Insights & Buyer Demand Analytics",
"Predictive Inventory & Supply Chain Management",
"Smart Packaging & Retail Compliance for US Markets",
"Automated Trade Documentation & Customs Processing",
"AI-Driven Logistics & Freight Coordination",
"Blockchain-Based Product Authentication & Origin Verification",
"Virtual Expo Hubs for Interactive Buyer Engagement"
        ]}
        image={aboutImage}
      />
      <CompareToOther
        sectionTitle="Compare to Other Exhibition Vendor Platforms"
        sectionSubtitle="De Koshur Crafts USA Exhibition Platform"
        platformData={platformData}
        tableData={tableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <ServiceArea servicesData={servicesData} main_title="Exhibition Partnership Platform Advantage" description="The Exhibition Partnership with De Koshur Crafts in the USA provides a premier opportunity for buyers, retailers, and exhibition organizers to access and showcase authentic Kashmiri handicrafts at high-profile trade events. Gain access to a network of verified artisan vendors, heritage-rich craft collections, and luxury handmade products, ensuring that your exhibition stands out in the global market.With tailored sourcing, curated showcases, and direct vendor engagement, this partnership guarantees exclusive product access, customized exhibition solutions, and seamless procurement experiences. Elevate your business, expand your network of heritage craft suppliers, and bring Kashmiri craftsmanship to leading US trade shows." />
      <FaqArea
        faqItems={faqAreaItems}
        sectionTitle="Eligibility Criteria"
        mainTitle="De Koshur Crafts US Expo Platform Eligibility "
        mainTitleHighlight="Requirements"
        faqAreaTitle="Check Your Buyer"
        faqAreaTitleHighlight="Eligibility."
        imageSrc={elib}
        imageHeight="780px"
      />
     
      <CompareToOther
        sectionTitle="Compare Cost Affordability"
        sectionSubtitle="De Koshur Crafts USA Exhibition Platform"
        platformData={costplatformData}
        tableData={costtableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
     
      <HowItWorks
        sectionSubtitle="How It Works"
        sectionTitle="Swift Partnership Activation"
        description="Showcase your products to the world with De Koshur Crafts’ Exhibition Partnership in the USA. This partnership provides you with the unique opportunity to participate in high-profile trade exhibitions, connecting you directly with key industry players, buyers, and influencers. We support you with everything from booth design and setup to marketing strategies, ensuring maximum visibility at these global events. Take advantage of our comprehensive network and expertise to build relationships, expand your market presence, and grow your brand in the U.S. retail and trade ecosystem."
        phases={HowItworksphases}
        buttons={HowItWorksbuttons}
        imageSrc={aboutImg}
        iconSrc={rightArrow}
        bookingIconSrc={booking}
        consultationText="Partner Smarter: Pre-Registration Consultation"
        consultationLink="/book-appointment"
      />
      <FAQSectionDynamic
        faqContent={faqContent}
        sectionTitle="FAQ"
        mainTitle="Frequently Asked Questions
      (FAQs) for "
        mainTitleHighlight="Buyers."
        imageHeight="2100px"
      />
      {/* <FooterUpper imageSrc={indexfooterImage} altText="Ecommerce" /> */}
      <FooterUpperwithoutLink imageSrc={parpro} altText="Ecommerce" />
      <VendorPartnership
        bgImage="/assets/how_to_work_bg.svg"
        logo={logo}
        title="Partnership"
        subtitle="OUR SIX-YEAR COMMITMENT"
        description="Join an exclusive partnership tailored for established USA businesses seeking premium, authentic Kashmiri handicrafts sourced directly from Kashmir, India. Our commitment ensures seamless supply chain integration, certified quality, and heritage-rich craftsmanship, designed to elevate your brand and product offerings. Unlock the"
        content={VendorContentData}
        partnershipTierText=" Exclusive Partnership Tier & Strengthen Your Market Leadership."
      />
      <ContactUs
        title="Get In Touch with Us"
        subtitle="Have questions or want to start a partnership? We would love to hear from you!" 
        imageSrc="/assets/images/contact-image.png" 
        placeholders={{
          name: "Full Name *",
          email: "Your Email Address *",
          subject: "Partnership Inquiry *",
          phone: "Phone Number *",
          message: "Your Message",
        }} 
        buttonText="Send Message" 
      />
     
    </>
  );
};

export default ExhibitionPage;
