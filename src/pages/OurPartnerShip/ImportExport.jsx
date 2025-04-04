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
  costplan,
  costtableData,
  countersData,
  Counterheading,
  faqContent,
  VendorContentData,
} from "../../Data/OurPartnerShip/ImportExport";
const ImportExportPage = () => {
  return (
    <>
      <HeroSection {...heroSectionData} />
      <AboutArea
        thumbImage={aboutThumb}
        shapeImage={aboutShape}
        thumbTitle="Partnership Designed For You"
        subHeading="De Koshur Crafts Import Export Buyer Partnership Overview"
        mainHeading="Unlocking Exclusive Access to Kashmiri Handicrafts for "
        mainHeadingHighlight="US Importers."
        description="Expand your sourcing capabilities with the De Koshur Crafts Import Export Partnership, a specialized platform designed to connect US importers with authentic Kashmiri artisans and businesses. With tailored sourcing strategies, trusted product verification, and advanced logistics, we provide seamless access to the rich craftsmanship of Kashmir to meet the growing demand in the US market."
        iconImage={aboutIcon}
        iconTitle="Global Trade Ecosystem for Kashmiri Handicrafts"
        textDetails="A dedicated trade platform facilitating the ethical and direct import of Kashmiri handicrafts, ensuring GI-certified products, anti-counterfeiting measures, luxury market positioning, transparent logistics, and strict compliance with US import regulations on labeling, sustainability, and packaging."
        buttonText="THE LARGEST IMPORT EXPORT PLATFORM FOR KASHMIRI HANDICRAFTS "
        buttonSubText="Plugging Gaps in the Kashmir Handicraft Sector"
        buttonLink="#"
      />
      <CaseStudyArea {...caseStudyContent} />
      <AboutSection
        title="Innovative Technology Solutions Tailored to Import "
        color_title="Needs"
        subtitle="echnology Advancements in the Partnership"
        description="At De Koshur Crafts, we empower USA importers and buyers with advanced technology to source authentic Kashmiri handicrafts efficiently. Our platform is designed to streamline procurement, enhance trade transparency, and ensure seamless import operations."
        items = {[
          "Dynamic Trade Optimization (DTO)",
"Smart Market Insights & Demand Forecasting",
"Predictive Inventory & Logistics Analytics",
"Adaptive Packaging & Labeling Compliance",
"Automated Import Documentation & Customs Clearance",
"AI-Driven Freight Coordination",
"Blockchain-Based Product Authentication",
"Virtual Trade Hubs for Global Sourcing"
        ]}
        
        image={aboutImage}
      />
      <CompareToOther
        sectionTitle="Compare to Other Import Export  Vendor Platforms"
        sectionSubtitle="De Koshur Crafts Import Export  Vendor Partnership"
        platformData={platformData}
        tableData={tableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <ServiceArea servicesData={servicesData} main_title="Import-Export Partnership Platform Advantage" description="The Import-Export Partnership with De Koshur Crafts offers unparalleled access to global markets. This partnership provides streamlined logistics, supply chain optimization, and customized solutions for efficient cross-border trade. Benefit from comprehensive market intelligence, exclusive buyer networks, and export branding to position your products globally. With ongoing support and training, you’ll ensure compliance with international standards while tapping into high-value opportunities. The partnership is designed to expand your reach and maximize profitability, all while promoting sustainable and ethical practices in the global marketplace." />
      <FaqArea
        faqItems={faqAreaItems}
        sectionTitle="Eligibility Criteria"
        mainTitle="De Koshur Crafts Import Export Platform Eligibility"
        mainTitleHighlight="Requirements"
        faqAreaTitle="Check Your Buyer"
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
        sectionSubtitle="De Koshur Crafts USA Import Export Vendor Partnership Platform"
        platformData={costplan}
        tableData={costtableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <CounterArea countersData={countersData} heading={Counterheading} />;
      <HowItWorks
        sectionSubtitle="How It Works"
        sectionTitle="Swift Partnership Activation"
        description="Unlock global trade opportunities with De Koshur Crafts’ Import-Export Partnership. This partnership is designed to help you seamlessly connect with international markets, offering tailored solutions for efficient sourcing, logistics, and market expansion. From handling documentation automation to offering dynamic trade optimization tools, we equip you with the resources needed to thrive in the global marketplace. With our expertise and ongoing support, you’ll gain access to a broader network of international buyers and suppliers, ensuring your business stays ahead in the competitive import-export sector."
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
        imageHeight="2450px"
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

export default ImportExportPage;
