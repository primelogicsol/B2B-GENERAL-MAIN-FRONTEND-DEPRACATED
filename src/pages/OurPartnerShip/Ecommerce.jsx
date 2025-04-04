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

import parpro from "../../assets/images/parpro.png";
import logo from "../../assets/images/your3.png";
import VendorPartnership from "../../components/OurPartnerShip/CardSection";
import ContactUs from "../../components/OurPartnerShip/ContactUs";
import FooterArea from "../../components/Shared-Components/FooterArea";
import PricingService from "../../components/OurPartnerShip/PricingService";
import FaqArea from "../../components/OurPartnerShip/FAQArea";
import FAQSectionDynamic from "../../components/OurPartnerShip/FaqSection";

import {
  heroSectionData,
  caseStudyContent,
  platformData,
  tableData,
  costplatformData,
  highlightedTexts,
  GreenHighlightedTexts,
  servicesData,
  faqAreaItems,
  costtableData,
  Counterheading,
  countersData,
  PricingServicesData,
  HowItWorksbuttons,
  HowItworksphases,
  faqContent,
  VendorContentData,
} from "../../Data/OurPartnerShip/Ecommerce";
import indexfooterImage from "../../assets/images/buyer_footer.png";

const EcommercePage = () => {
  return (
    <>
      <HeroSection {...heroSectionData} />
      <AboutArea
        thumbImage={aboutThumb}
        shapeImage={aboutShape}
        thumbTitle="Partnership Designed For You"
        subHeading="DKC Drop Shipping platform Partnership Overview"
        mainHeading="Powering US-Based Businesses with Authentic "
        mainHeadingHighlight="Kashmiri Handicrafts."
        description="Elevate your sourcing experience with De Koshur Crafts' B2B Drop Shipping Platform, connecting US businesses with a premium selection of handcrafted Kashmiri products. Through cutting-edge tools, seamless logistics, and reliable fulfillment, we bridge the gap between heritage craftsmanship and modern trade demands."
        iconImage={aboutIcon}
        iconTitle="Cloud-Powered Digital Handicraft Marketplace"
        textDetails="Access certified Kashmiri products with GI tagging, ensuring authenticity and quality. Our advanced digital ecosystem streamlines sourcing, offering transparency, secure payment options, and tailored collections to meet your business needs.
"
        buttonText="THE LARGEST Drop Shipping PLATFORM FOR KASHMIRI CRAFTS IN THE USA"
        buttonSubText="ELEVATING KASHMIRI HANDICRAFTS IN THE US RETAIL SECTOR"
        buttonLink="#"
      />
      <CaseStudyArea {...caseStudyContent} />
      <AboutSection
        title="Cutting-Edge Technology Solutions for Enhanced Client "
        color_title="Experience "
        subtitle="TECHNOLOGY ADVANCEMENTS IN THE PLATFORM"
        description="Our platform leverages next-generation innovations to maximize value and optimize client interactions. Discover how our advanced technologies drive seamless integration and superior engagement."
        items={[
          "Dynamic Creative Optimization (DCO)",
          "Augmented Reality (AR)",
          "Fully Immersive VR Showrooms",
          "Haptic Feedback Technology",
          "Predictive Logistics",
          "Geo-Fencing in Marketing",
          "Automated Product Packaging Studios",
          "Omnichannel AI-Driven Customer Support",
        ]}
        image={aboutImage}
      />
      <CompareToOther
        sectionTitle="Compare To Other Platforms"
        sectionSubtitle="De Koshur Crafts USA Drop Shipping Platform"
        platformData={platformData}
        tableData={tableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <ServiceArea servicesData={servicesData} main_title="Drop Shipping Partnership Platform Advantage" description="The Drop Shiping Partnership with De Koshur Crafts focuses on expanding your brand's reach within the North American market. Showcase your products to a wide network of discerning buyers with a tailored online storefront that emphasizes your unique Kashmiri craftsmanship. Benefit from targeted marketing strategies, sales optimization tools, and inventory management support to drive sales and visibility. This partnership ensures seamless logistics, payment processing, and customer support, enabling you to focus on growing your business while tapping into a high-demand market. Maximize your North American presence with a low-risk, high-reward Drop Shiping solution." />
      <FaqArea
        faqItems={faqAreaItems}
        sectionTitle="Eligibility Criteria"
        mainTitle="De Koshur Crafts Drop Shiping Platform Eligibility "
        mainTitleHighlight="Criteria"
        faqAreaTitle="Check Your Buyer"
        faqAreaTitleHighlight="Eligibility."
        imageSrc={elib}
        imageHeight="710px"
      />
      <CompareToOther
        sectionTitle="Compare Cost Affordability"
        sectionSubtitle="De Koshur Crafts USA Drop Shipping Platform"
        platformData={costplatformData}
        tableData={costtableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <CounterArea countersData={countersData} heading={Counterheading} />;
      <PricingService servicesData={PricingServicesData} />
      <HowItWorks
        sectionSubtitle="How It Works"
        sectionTitle="Swift Partnership Activation"
        description="Take your online business to the next level with De Koshur Crafts’ Advanced Technology Drop Shiping Partnership. This partnership offers cutting-edge tools and solutions to optimize your digital sales platform. From AI-driven marketing campaigns and predictive analytics to advanced logistics and inventory management systems, we provide the technology you need to streamline operations and maximize efficiency. Leverage our seamless integrations with top Drop Shiping platforms and gain real-time insights into your business performance, ensuring you stay competitive in a fast-evolving global marketplace. With our advanced tech support, scaling your online presence has never been easier."
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
        imageHeight="1724px"
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

export default EcommercePage;
