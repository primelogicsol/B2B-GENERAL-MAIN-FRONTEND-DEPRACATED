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
import logo from "../../assets/images/your3.png";
import VendorPartnership from "../../components/OurPartnerShip/CardSection";
import ContactUs from "../../components/OurPartnerShip/ContactUs";
import FooterArea from "../../components/Shared-Components/FooterArea";
import PricingService from "../../components/OurPartnerShip/PricingService";
import FaqArea from "../../components/OurPartnerShip/FAQArea";
import FAQSectionDynamic from "../../components/OurPartnerShip/FaqSection";
import indexfooterImage from "../../assets/images/index_footer.jpg";
import {
  heroSectionData,
  caseStudyContent,
  platformData,
  tableData,
  highlightedTexts,
  GreenHighlightedTexts,
  servicesData,
  faqAreaItems,
  HowItWorksbuttons,
  HowItworksphases,
  PriceServicebuttonText,
  PriceServiceheading,
  PriceServicesubheading,
  PriceServiceservicesData,
  costplatformData,
  costtableData,
  countersData,
  Counterheading,
  faqContent,
  VendorContentData,
} from "../../Data/OurPartnerShip/Franchise";

const FranchisePage = () => {
  return (
    <>
      <HeroSection {...heroSectionData} />
      <AboutArea
        thumbImage={aboutThumb}
        shapeImage={aboutShape}
        thumbTitle="Partnership Designed For You"
        subHeading="De Koshur Crafts Franchise Partnership Overview"
        mainHeading="Empowering Kashmiri Handicraft Entrepreneurs to Lead Global "
        mainHeadingHighlight="Markets"
        description="Expand your business reach with the De Koshur Crafts Franchise Program, specifically designed to establish premium retail franchises in thriving international markets. With a proven business model, brand authority, and operational support, we connect the heritage of Kashmiri craftsmanship with high-demand consumer bases worldwide."
        iconImage={aboutIcon}
        iconTitle="Franchise Ecosystem for Kashmiri Handicrafts"
        textDetails="Global Franchise Ecosystem for Kashmiri Handicrafts
        A specialized franchise model enabling the global retail expansion of Kashmiri handicrafts through Exclusive GI-certified product access, Luxury brand positioning & curated marketing strategies, End-to-end operational & logistics support, Sustainability, fair trade, and eco-conscious business ethics."
        buttonText="THE LARGEST HANDICRAFT FRANCHISE PLATFORM FOR GLOBAL BUSINESS EXPANSION"
        buttonSubText="Plugging Gaps in the Kashmir Handicraft Sector"
        buttonLink="#"
      />
      <CaseStudyArea {...caseStudyContent} />
      <AboutSection
        title="Innovative Technology Solutions Tailored to Export "
        color_title="Needs"
        subtitle="Technology Advancements in the Partnership"
        description="At De Koshur Crafts, we empower export-focused businesses with advanced technology to elevate Kashmiri handicrafts in the global market. Our platform is designed to streamline operations, enhance buyer engagement, and ensure exceptional delivery experiences."
        items={[
          "Dynamic Trade Optimization (DTO)",
          "Smart Market Insights & Trade Analytics",
          "Predictive Supply Chain Analytics",
          "Adaptive Export Packaging & Labeling Solutions",
          "Customs Documentation Automation",
          "AI-Driven Freight Management",
          "Blockchain-Based Trade Verification",
          "Virtual Export Hubs",
        ]}
        image={aboutImage}
      />
      <CompareToOther
        sectionTitle="Compare to Other Franchise Vendor Platforms"
        sectionSubtitle="De Koshur Crafts Franchise Vendor Partnership"
        platformData={platformData}
        tableData={tableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <ServiceArea servicesData={servicesData} main_title="Franchise Partnership Platform Advantage" description="The Franchise Partnership with De Koshur Crafts in the USA provides a proven business model, exclusive territories, and ongoing support. Leverage brand recognition and turnkey solutions to easily establish your business while accessing a global market. Benefit from continuous training, drive high profitability, and promote sustainable practices in the U.S. retail landscape. Join a legacy of Kashmiri craftsmanship and enjoy a high growth potential with a trusted, eco-conscious brand." />
      <FaqArea
        faqItems={faqAreaItems}
        sectionTitle="Eligibility Criteria"
        mainTitle="De Koshur Crafts Import Export Platform Eligibility"
        mainTitleHighlight="Criteria"
        faqAreaTitle="Check Your Vendor"
        faqAreaTitleHighlight="Eligibility."
        imageSrc={elib}
        imageHeight="770px"
      />
      <PricingService
        heading={PriceServiceheading} 
        subheading={PriceServicesubheading} 
        servicesData={PriceServiceservicesData} 
        buttonText={PriceServicebuttonText} 
      />
      <CompareToOther
        sectionTitle="Compare Cost Affordability"
        sectionSubtitle="De Koshur Crafts USA Franchise Vendor Partnership Platform"
        platformData={costplatformData}
        tableData={costtableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <CounterArea countersData={countersData} heading={Counterheading} />;
      <HowItWorks
        sectionSubtitle="How It Works"
        sectionTitle="Swift Partnership Activation"
        description="Step into global success with De Koshur Crafts’ Franchise Partnership. As a DKC franchisee, you gain the opportunity to run your own store under an established, trusted brand. We provide you with a proven business model, extensive training, and all the support you need to thrive. From inventory management to marketing strategies, you’ll have the tools to drive growth in US locations. The franchise partnership is designed for those ready to build a lasting legacy, offering scalability, brand recognition, and access to a loyal customer base in a rapidly growing market."
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
        mainTitleHighlight="Vendors."
        imageHeight="2028px"
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

export default FranchisePage;
