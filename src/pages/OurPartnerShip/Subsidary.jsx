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
} from "../../Data/OurPartnerShip/Subsidary";
const SubsidaryPage = () => {
  return (
    <>
      <HeroSection {...heroSectionData} />
      <AboutArea
        thumbImage={aboutThumb}
        shapeImage={aboutShape}
        thumbTitle="Partnership Designed For You"
        subHeading="De Koshur Crafts Investment Partnership Overview"
        mainHeading="Empowering Investors to Scale Kashmiri "
        mainHeadingHighlight="Handicraft Subsidiaries"
        description="Join the De Koshur Crafts Investment Partnership, a strategic initiative designed to accommodate subsidiary vendors within a structured investment framework. By partnering with DKC, investors gain access to a high-growth industry, facilitating scalable infrastructure, premium branding, and global trade expansion for Kashmiri artisans and businesses.
"
        iconImage={aboutIcon}
        iconTitle="Investment Ecosystem for Kashmiri Handicrafts"
        textDetails="A specialized investment platform supporting Kashmiri handicraft businesses with infrastructure, financial backing, and trade partnerships.  Market-Driven Expansion,  Develop retail, manufacturing, logistics, and distribution hubs to enhance scalability. Technology & Innovation, drive digital transformation through e-commerce, AI-driven analytics, and blockchain-powered authenticity tracking. Trade Compliance & Certifications, ensuring GI certification, quality assurance, and international trade compliance."
        buttonText="THE LARGEST INVESTMENT PLATFORM FOR KASHMIR HANDICRAFT"
        buttonSubText="Plugging Gaps in the Kashmir Handicraft Sector"
        buttonLink="#"
      />
      <CaseStudyArea {...caseStudyContent} />
      <AboutSection
        title="DKC Investment Partnership Advantage in the Kashmiri Handicraft "
        color_title="Industry"
        subtitle="Technology Advancements in the Partnership"
        description="De Koshur Crafts (DKC) presents high-impact investment opportunities that drive growth, innovation, and sustainability within the Kashmiri handicraft sector. By strategically investing across various subsidiary sectors, investors can support scalable production, enhance product quality, expand global markets, and ensure long-term profitability. These investment partnerships provide cutting-edge tools, technology, and resources to elevate local artisans and businesses, preserving Kashmir’s heritage while ensuring sustainable expansion."
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
      
      
      <FaqArea
        faqItems={faqAreaItems}
        sectionTitle="Eligibility Criteria"
        mainTitle="De Koshur Crafts Investment Platform Eligibility"
        mainTitleHighlight="Criteria"
        faqAreaTitle="Check Your Investment "
        faqAreaTitleHighlight="Eligibility."
        imageSrc={elib}
        imageHeight="770px"
      />
      
     

      <HowItWorks
        sectionSubtitle="How It Works"
        sectionTitle=" Investment Partnership Activation"
        description="Lay the foundation for scalable success with the De Koshur Crafts Investment Partnership. This structured investment model is designed for investors seeking to fund and expand Kashmiri handicraft subsidiaries. By partnering with DKC, investors gain exclusive access to curated business opportunities, operational support, and strategic market entry solutions. Our expert team facilitates risk assessment, compliance management, and financial structuring to ensure seamless execution and high-return outcomes."
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
        mainTitle="Frequently Asked Questions (FAQs) for Investors"
        mainTitleHighlight="Vendors."
         imageHeight="1728px"
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

export default SubsidaryPage;
