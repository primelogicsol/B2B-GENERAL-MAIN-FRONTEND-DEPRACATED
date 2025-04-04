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
  PriceServiceheading,
  PriceServicebuttonText,
  PriceServicesubheading,
  PriceServiceservicesData,
  costplatformData,
  costtableData,
  countersData,
  Counterheading,
  HowItworksphases,
  HowItWorksbuttons,
  faqContent,
  VendorContentData,
} from "../../Data/OurPartnerShip/Consignment";
const ConsignmentPage = () => {
  return (
    <>
      <HeroSection {...heroSectionData} />
      <AboutArea
        thumbImage={aboutThumb}
        shapeImage={aboutShape}
        thumbTitle="Partnership Designed For You"
        subHeading="DKC CONSIGNMENT PARTNERSHIP INITIATIVE"
        mainHeading="Expanding Retail Opportunities for   "
        mainHeadingHighlight="US Based Consignees & Businesses"
        description="Enhance your retail  business with De Koshur Crafts’ consignment platform, designed to connect consignee with high-quality Kashmiri handicrafts consigner. Through streamlined processes and a curated selection, benefit from the best in class pricing, product authenticity, and fast delivery.
"
        iconImage={aboutIcon}
        iconTitle="Smart Sourcing Solutions for High-End Craft Retail"
        textDetails="Stock premium handcrafted products without upfront investment. Offer verified, world-renowned Kashmiri handicrafts to customers. Elevate your store with exclusive artisan-made collections. Monitor performance with real-time analytics and reporting. Connect with a trusted supplier network for effortless consignment"
        buttonText="World’s First Consignment Platform for Kashmir Crafts"
        buttonSubText="Plugging Gaps in the Kashmir Handicraft Sector"
        buttonLink="#"
      />
      <CaseStudyArea {...caseStudyContent} />
      <AboutSection
        title="Innovative Tools for Modern Consignment "
        color_title="Operations"
        subtitle="TECHNOLOGY ADVANCEMENTS IN DKC CONSIGNMENT PARTNERSHIP"
        description="Our platform integrates cutting-edge technologies to enhance U.S.-based buyers' consignment operations, optimize inventory efficiency, and improve retail performance. Explore advanced solutions built for seamless sourcing and retail success."
        items={[
          "Optimized Consignment Inventory Control",
          "Augmented Reality (AR) for Product Visualization",
          "Virtual Store Planning & Merchandising",
          "Haptic Feedback for Stock Accuracy",
          "AI-Powered Demand Forecasting Tools",
          "Geo-Fencing for Consumer Targeting",
          "Automated Reconciliation for Sales & Inventory",
          "Blockchain-Based Product Authentication",
          "Omnichannel Buyer Support Systems",
          "Sustainable Packaging & Eco-Friendly Retail Solutions",
        ]}
        image={aboutImage}
      />
      <CompareToOther
        sectionTitle="Compare to Other Consignment Vendor Platforms"
        sectionSubtitle="De Koshur Crafts Consignment Vendor Partnership"
        platformData={platformData}
        tableData={tableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <ServiceArea servicesData={servicesData} main_title="Consignment  Partnership Advantage" description="The Consignment Business Partnership with De Koshur Crafts offers a low-risk, high-reward opportunity to place your products in premium retail spaces without upfront costs. This partnership allows you to retain ownership until products are sold, ensuring you maintain control over inventory. With strategic placement, tailored marketing, and inventory management support, your products reach a wide, discerning audience in key U.S. markets. Benefit from global exposure, sales tracking tools, and logistics support while minimizing financial risk, making it an ideal solution for expanding your Kashmiri craftsmanship into retail outlets across the USA." />
      <FaqArea
        faqItems={faqAreaItems}
        sectionTitle="Eligibility Criteria"
        mainTitle="De Koshur Crafts Consignmment Platform Eligibility"
        mainTitleHighlight="Criteria"
        faqAreaTitle="Check Your Buyer/Consignee"
        faqAreaTitleHighlight="Eligibilityyy."
        imageSrc={elib}
        imageHeight="773px"
      />
      
      <CompareToOther
        sectionTitle="Compare Cost Affordability"
        sectionSubtitle="De Koshur Crafts USA Consignment Buyer Partnership Platform"
        platformData={costplatformData}
        tableData={costtableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      
      <HowItWorks
        sectionSubtitle="How It Works"
        sectionTitle="Swift Partnership Activation"
        description="Expand your reach and minimize risk with De Koshur Crafts’ Consignment Partnership in the USA. This partnership allows you to display your products in premium retail spaces while retaining ownership until the products are sold. With our expert guidance, we handle everything from inventory management to logistics, ensuring your products reach the right audience in top U.S. locations. Our consignment model offers flexibility and reduces upfront costs, providing you with the opportunity to test the U.S. market and scale at your own pace while benefiting from our extensive network and industry expertise."
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

export default ConsignmentPage;
