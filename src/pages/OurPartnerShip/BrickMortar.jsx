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
import AfterFAQ from "../../components/Shared-Components/AfterFAQ";
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
import FaqArea from "../../components/OurPartnerShip/FAQArea";
import FAQSectionDynamic from "../../components/OurPartnerShip/FaqSection";
import FooterUpperwithoutLink from "../../components/Shared-Components/FooterUpperWithoutLink";
import indexfooterImage from "../../assets/images/index_footer.jpg";
import {
  heroSectionData,
  tableData,
  caseStudyContent,
  costplatformData,
  costtableData,
  platformData,
  faqAreaItems,
  servicesData,
  countersData,
  VendorContentData,
  Counterheading,
  HowItWorksbuttons,
  HowItworksphases,
  faqContent,
  highlightedTexts,
  GreenHighlightedTexts,
} from "../../Data/OurPartnerShip/BrickMortar";
const BrickPage = () => {
  return (
    <>

      <HeroSection {...heroSectionData} />
      <AboutArea
        thumbImage={aboutThumb}
        shapeImage={aboutShape}
        thumbTitle="Partnership Designed For You"
        subHeading="DKC Brick and Mortar Buyer Partnership Overview"
        mainHeading="Connecting U.S. Retailers with Premium Kashmiri Handicrafts for Exclusive "
        mainHeadingHighlight=" Market Presence  "
        description="Transform your store with the De Koshur Crafts’ Brick and Mortar Buyer Partnership program, designed to integrate high-end, luxury Kashmiri artisans and vendors into premium retail spaces across the USA. By offering a curated selection of GI-certified, handmade Kashmiri crafts, advanced logistical support, and strategic in-store placement, we bring exclusive artisan craftsmanship directly to U.S. consumers."
        iconImage={aboutIcon}
        iconTitle="Strategic Retail Infrastructure for Luxury Kashmiri Handicrafts"
        textDetails="A dedicated network of physical retail spaces that provide seamless vendor integration, specialized product curation, and exclusive high-end craft selections for premium U.S. retailers. Our platform ensures that luxury Kashmiri products align with modern retail expectations, elevating store offerings and customer engagement."
        buttonText="The World’s Premier Retail Network for Luxury Kashmiri Handicrafts"
        buttonSubText="ELEVATING KASHMIRI HANDICRAFTS IN THE US RETAIL SECTOR"
        buttonLink="#"
      />
      <CaseStudyArea {...caseStudyContent} />
      <AboutSection
        title="Innovative Phygital Solutions Tailored for "
        color_title="Vendors' Success"
        subtitle="TECHNOLOGY ADVANCEMENTS IN THE PARTNERSHIP"
        description="Our platform integrates cutting-edge advancements in physical and digital retail to empower U.S. retail stores in showcasing premium Kashmiri craftsmanship. Explore how tradition meets innovation to elevate luxury shopping experiences and enhance customer engagement."
        items={[
          "Phygital Retail Optimization Tools",
          "Augmented Reality (AR) Displays",
          "In-Store Virtual Try-Ons",
          "Haptic Feedback Product Testing",
          "Predictive Inventory Analytics",
          "Geo-Fencing for Targeted Campaigns",
          "Dynamic Product Showcases",
          "Seamless Omnichannel Customer Journeys",
          "AI-Driven In-Store Assistance",
          "Integrated POS for Omni Sales",
          "Smart Shelf Management Systems",
          "Enhanced Customer Feedback Systems",
        ]}
        image={aboutImage}
      />
      <CompareToOther
        sectionTitle="Compare To Other Platforms"
        sectionSubtitle="De Koshur Crafts USA Brick & Mortar Vendor Partnership
"
        platformData={platformData}
        tableData={tableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <ServiceArea servicesData={servicesData} main_title="Brick-and-Mortar Partnership Platform Advantage" description="The Brick-and-Mortar Partnership with De Koshur Crafts offers a unique opportunity to establish a physical presence in the U.S. market. With our proven business model, exclusive access to high-quality Kashmiri craftsmanship, and comprehensive support, you can create a strong retail presence that attracts global buyers. Enjoy tailored marketing, supply chain optimization, and ongoing training to ensure success. This partnership gives you access to a trusted brand, offering a competitive edge in the retail landscape while promoting sustainable, ethical business practices" />
      <FaqArea
        faqItems={faqAreaItems}
        sectionTitle="Eligibility Criteria"
        mainTitle="De Koshur Crafts Brick and Mortar Platform Eligibility "
        mainTitleHighlight="Criteria"
        faqAreaTitle="Check Your Vendor"
        faqAreaTitleHighlight="Eligibility."
        imageSrc={elib}
        imageHeight="778px"
      />
      {/* <AfterFAQ
        title="Are You A Register Vendor At DKC Ecommerce Platform?"
        color_title="Do You Possess Required Rentention Time & KPI of Ecommerce Platform!"
        subtitle="Technology Advancements in the Platform"
        description="If No - We have Lateral Paid Multi-Path Eligibility, a fee-based alternative progression system within the partnership framework . This is an alternative path for vendors who want to progress but may not meet all standard criteria of E Commerce Vendor Partnership Minimum Retention Period  of Minimum 18 Months and 
        Key Performance Indicator Score Maintained at Minimum 7+ in order to qualify Brick & Mortar Vendor Partnership."
        under_description="Available Package"
        package_heading="Tailored Solutions for Retention and KPI Challenges"
        package_heading2="How Lateral Paid Multi-Path Eligibility Maintain DKC Platform Standards ?"
        itemss={[
          "<b><span style={{color:}}>One-Time Waiver Ensures Accountability</b></br> The program is built on a foundation of accountability and fairness. These paths are not recurring exemptions but one-time waivers that allow vendors to overcome specific barriers like retention periods or KPI scores",
          "<b>Core Partnership Fee Remains Unchanged</b></br>The integrity of DKC’s vendor ecosystem is maintained by keeping the core partnership fee for Brick-and-Mortar Vendor Partnerships unchanged. This commitment ensures a level playing field for all participants",
          "<b>Exclusively for Recognized Handicraft Businesses</b></br>The Lateral Paid Multi-Path Eligibility initiative is a specialized program crafted exclusively for businesses recognized under Kashmir handicraft framework.",
        ]}
        items={[
          "<b><span style={{color:}}>Retention Barrier Solution Package ($1,000).</span></b></br> <i>Immediate Eligibility for Progression</i> : Skip the required retention period and gain instant access to mid-tier Brick-and-Mortar opportunities.</br> Customized Support for Early Growth : Receive tailored resources to address foundational challenges, such as operational planning and market positioning.</br> Accelerate Time-to-Benefits : Begin reaping partnership advantages, like enhanced visibility and networking, without waiting for retention milestones.",
          "<b>KPI Score Solution Package ($1,000).</b></br> <i>Direct Access to Advanced Partnerships</i> : Overcome KPI score limitations to qualify for Brick-and-Mortar partnerships and other growth-level opportunities.</br> Performance Enhancement Resources : Gain access to tools and strategies to improve future KPI performance while advancing your current business goals.</br> Priority Growth Support : Receive guidance on branding, logistics, and customer engagement to align with long-term partnership requirements.",
        ]}
        description2=""
        third_heading="A Catalyst, Not a Shortcut"
      /> */}
      <CompareToOther
        sectionTitle="Compare Cost Affordability"
        sectionSubtitle="De Koshur Crafts USA Brick & Mortar Vendor Partnership Platform"
        platformData={costplatformData}
        tableData={costtableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
    
      <HowItWorks
        sectionSubtitle="How It Works"
        sectionTitle="Swift Partnership Activation"
        description="Take the next leap with De Koshur Crafts’ Brick-and-Mortar Partnership in the USA. This exclusive partnership opens doors to a physical presence in one of the world’s most lucrative markets. With our tailored support, you’ll have access to location scouting, market strategies, and ongoing business guidance to ensure your success. Whether you are stepping in as an established brand or transitioning from a subsidiary, we provide everything needed to secure your spot and thrive in the U.S. retail landscape."
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
        mainTitle="Frequently Asked Questions (FAQs) for "
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

export default BrickPage;
