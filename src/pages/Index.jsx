// Component Imports
import HeroSection from "../components/Shared-Components/HeroSection";
import FeatureArea from "../components/Shared-Components/FeatureArea";
import AboutSection from "../components/Shared-Components/AboutSection";
import CounterArea from "../components/Shared-Components/CountArea";
import CaseStudiesArea from "../components/Shared-Components/CaseStudyArea";
import VendorPartnership from "../components/Shared-Components/VenderPartnerShip";
import HowItWorks from "../components/OurPartnerShip/HowItWorks";
import FAQSection from "../components/index/FAQSection";
import TestimonialSection from "../components/index/TestimonialSection";
import ProgressSection from "../components/index/ProgressSection";
import SellerNetworkSection from "../components/index/ProgressSectionSeller";
import FlagSection from "../components/index/FlagSection";
import FooterUpper from "../components/OurPartnerShip/FooterUpper";
import CarouselSlider from "../components/Shared-Components/Slider";
import Service from "../components/Shared-Components/Service_Component";
import ServicesArea from "../components/index/ServicesArea";
import DesignProtection from "../components/OurPartnerShip/ServiceArea"

// Assets Imports
import projectthu from "../assets/images/project-thu.png";
import service_icon from "../assets/images/home-two/service-icon2.png";
import aboutImg from "../assets/images/about_img_1.png";
import rightArrow from "../assets/images/right-arrow.png";
import icon22 from "../assets/icon/22.png";
import booking from "../assets/icon/booking.png";
import projectthu2 from "../assets/images/project-thu2.png";
import aboutImage from "../assets/images/about-thu3.png";
import indexfooterImage from "../assets/images/buyer_footer.png";
import desginProt1 from "../assets/images/designProt1.png";
import desginProt2 from "../assets/images/designProt2.png"
import desginProt3 from "../assets/images/designProt3.png"
import desginProt4 from "../assets/images/designProt4.png"
import heroImage from '../assets/images/sm.png'

const Index = () => {
  const exampleData = {
    title: "Featured Craft Categories",
    subtitle: ["Technology's Evolution", "Towards Brilliance"],
    slides: [
      {
        image: projectthu,
        title: "PASHMINA",
        description: "WEAVING CRAFTS",
        link: "project-details.html",
      },
      {
        image: projectthu2,
        title: "KANI",
        description: "WEAVING CRAFTS",
        link: "project-details.html",
      },
      {
        image: projectthu,
        title: "CARPET",
        description: "WEAVING CRAFTS",
        link: "project-details.html",
      },
      {
        image: projectthu,
        title: "SILK",
        description: "WEAVING CRAFTS",
        link: "project-details.html",
      },
    ],
  };
  const ServicesAreaData = {
    title: "Services",
    subtitle:
      "Kashmir Handicrafts Bussiness Opportunities: Exclusively for the U.S. Market",
    mainTitle: "Why you need De Koshur Crafts ",
    highlight: "Partnerships ?",
    services: [
      {
        title: "US Handicraft Market Access",
        challenge:
          "Limited international access for Kashmiri artisans, restricting visibility.",
        benefit:
          "De Koshur Crafts empowers global visibility through e-commerce, exhibitions, and retail spaces, connecting artisans to U.S. buyers.",
        icon: service_icon,
      },
      {
        title: "Infrastructure Challenges Solved",
        challenge:
          "Small businesses struggle with logistics, warehousing, and customs navigation.",
        benefit:
          "De Koshur Crafts handles logistics, ensuring seamless global access for U.S. buyers while artisans focus on craftsmanship.",
        icon: service_icon,
      },
      {
        title: "Ethical Standards Simplified",
        challenge:
          "Difficulty in meeting global compliance standards for fair trade and sustainability.",
        benefit:
          " De Koshur Crafts ensures products align with global standards, ensuring ethical sourcing and credibility.",
        icon: service_icon,
      },
      {
        title: "Financial Risks Minimized",
        challenge:
          "High upfront costs for international marketing and distribution.",
        benefit:
          " De Koshur Crafts offers flexible models like consignment, reducing risks and maximizing global exposure for buyers.",
        icon: service_icon,
      },
      {
        title: "Branding and Marketing",
        challenge:
          "Difficulty in establishing brand recognition in global markets.",
        benefit:
          "De Koshur Crafts provides professional branding, marketing platforms, and event promotions to boost product visibility.",
        icon: service_icon,
      },
      {
        title: "Quality Improvement Resources",
        challenge:
          "Difficulty in meeting global quality standards and packaging requirements.",
        benefit:
          "De Koshur Crafts offers quality tools, expert photography, and eco-friendly packaging, empowering buyers to compete globally.",
        icon: service_icon,
      },
      {
        title: "Industry Network Access",
        challenge:
          "Limited access to essential industry networks and high-value international buyers.",
        benefit:
          "De Koshur Crafts connects buyers to industry networks, opening doors to critical markets and new opportunities.",
        icon: service_icon,
      },
      {
        title: "Sustainable Business Models",
        challenge:
          "Seasonal demand and limited market diversification.",
        benefit:
          "De Koshur Crafts offers diverse business models, from e-commerce to franchises, ensuring long-term sustainability for buyers.",
        icon: service_icon,
      },
      {
        title: "Counterfeit Product Protection",
        challenge:
          "Risk of counterfeit goods and misrepresentation.",
        benefit:
          "De Koshur Crafts safeguards authenticity with blockchain verification, ensuring only genuine products reach global customers.",
        icon: service_icon,
      },
    ],
  };
  const HowItworksphases = [
    "Registration Phase",
    "Document Submission Phase",
    "Eligibility Review Phase",
    "Agreement and Certification Phase",

    "Profile Setup Phase Installation",
    "Partnership-Specific Onboarding Phase",
    "Training and Resource Checkup Phase",

    "Portal Access Activation Phase",
    "Partnership Launch and Support Phase",
    "KPI and Marketplace Engagement Phase",
  ];
  const HowItWorksbuttons = {
    readMoreText: "Register Now",
    readMoreLink: "/partnership-registration",
    icon: icon22,
    arrowIcon: rightArrow,
  };

   const servicesData = [
    {
      title: "Design Authentication",
      description: "DKC B2B Connect implements a blockchain-based authentication platform that creates unique digital signatures for each design, providing craftsmen with immutable proof of creation and ownership while maintaining a secure, transparent record of design origins and modifications across the network.",
      // image: desginProt1,
      category: "Market Confidence Assurance",
    },
    {
      title: "Global Monitoring Network",
      description: "Through artificial intelligence and machine learning algorithms, our system continuously analyzes millions of online product listings across global marketplaces, detecting potential design infringements and automatically alerting craftsmen when unauthorized copies of their work appear digitally.",
      // image: desginProt2,
      category: "Market Confidence Assurance",
    },
    {
      title: "Digital Rights Management (DRM)",
      description:"We utilize Digital Rights Management technologies to protect designs from unauthorized copying and distribution. Through encryption and access control, DRM ensures creators retain control over their work. This system allows artisans to define usage rights, preventing misuse.",
      category:"Market Confidence Assurance"
    },
    {
      title: "Reverse Image Search",
      description: "Our platform integrates image recognition and reverse image search technologies. These tools scan the web to detect unauthorized copies of designs. With advanced algorithms, the system provides real-time alerts when designs are found on third-party sites, ensuring swift actions to protect intellectual property.",
      category: "Market Confidence Assurance",
    },
    {
      "title": "Secure Design Hosting Platforms",
      description: "We ensure that all designs are hosted on our secure, encrypted platforms, preventing unauthorized access or theft. Our platforms offer multi-layered security, access control systems to protect sensitive design files. This secure hosting infrastructure guarantees that artisans’ creations are stored safely.",
      "category": "Market Confidence Assurance"
    },
    {
      "title": "Geographical Restrictions",
      "description": "Through integrated licensing and geographical restrictions, we enable artisans to control where and how their designs are sold. By setting boundaries, creators can restrict sales to specific regions or platforms, ensuring only authorized vendors distribute their designs and protecting against counterfeiting.",
      "category": "Market Confidence Assurance"
    },
    {
      "title": "Copyright Registration Systems",
      "description": "Our platform supports a seamless copyright registration process, helping artisans register designs with intellectual property authorities. We ensure creators have legal protection and the right to take action against infringements. Registration provides proof of ownership, reinforcing the value of designs.",
      "category": "Market Confidence Assurance"
    },
    {
      title: "Legal Action Framework",
      description: "The platform maintains partnerships with international intellectual property law firms, offering craftsmen immediate access to legal consultation, documentation support, and representation services, enabling swift and effective action against identified cases of design infringement.",
      // image: desginProt3,
      category: "Market Confidence Assurance",
    },
    
    
    
  ];

  return (
    <>
      <HeroSection
      subtitle="De K0SHUR CRAFTS B2B CONNECT"
      heading1="Welcome to DKC Buyer"
      heading2="Partnership Portal Hub"
      description="Join the largest offshore startup network revolutionizing Kashmiri crafts in USA."
      buttonText="Register Now"
      buttonLink="/partnership-registration"
      videoLink="https://www.youtube.com/watch?v=Wx48y_fOfiY"
      heroImage={heroImage}
    />
      <FeatureArea />
      <AboutSection
        title="Empowering USA-Based Buyers in Accessing Kashmiri Craft "
        color_title="Markets"
        subtitle="Welcome To B2B Connect - USA"
        description="A Transformative Platform Connecting USA Buyers with Kashmiri Artisans and Authentic Products. The De Koshur Crafts platform opens a direct line to premium Kashmiri handicrafts for buyers across the USA, supporting ethical trade, preserving cultural heritage, and offering businesses competitive pricing and unmatched craftsmanship."
        items={[
          "Dream It: Envision your store or product lineup. We’ll provide the roadmap for sourcing products that meet your unique business needs.",
          "Define It: Browse our curated collections and select from a wide range of products that best fit your market & Order directly from artisans or suppliers, and manage your purchases with easy shipping options and tracking systems.",
          "Dominate It: Stand out in the marketplace by offering authentic Kashmiri products that tell a rich cultural story.",
        ]}
        image={aboutImage}
        extraText={{
          title: "Handicraft Progressive Business Model for Every Vision",
          description:
            "Crafting US Next Generations with 700+ Old Legacy of Kashmir Handicraft Together",
        }}
      />
      <CounterArea />
      <CaseStudiesArea title="Handicraft Progressive Business Model for Every Vision
Seamless Sourcing, Certified Authenticity, and Scalable Partnerships, Connecting You to the Finest Kashmiri Handicrafts for a Competitive Edge in Luxury "
        color_title="Markets"
        subtitle="Welcome To B2B Connect - USA"
        description="A Transformative Platform Connecting USA Buyers with Kashmiri Artisans and Authentic Products. The De Koshur Crafts platform opens a direct line to premium Kashmiri handicrafts for buyers across the USA, supporting ethical trade, preserving cultural heritage, and offering businesses competitive pricing and unmatched craftsmanship."
        items={[
          "Dream It: Envision your store or product lineup. We’ll provide the roadmap for sourcing products that meet your unique business needs ethically made Kashmiri handicrafts",
          "Define It: Seamless shipping, tracking, and logistics. Certified authenticity ensures GI-tagged crafts, fair trade, and empowerment with advance blockchain verification and market trends.",
          "Dominate It: We operate across United States of America with major facilitation hubs at New York, D.C., Los Angeles, San Francisco, Chicago, Houston, and Miami.",
        ]}
        image={aboutImage}
        extraText={{
          title: "Handicraft Progressive Business Model for Every Vision",
          description:
            "Crafting US Next Generations with 700+ Old Legacy of Kashmir Handicraft Together",
        }}/>
      <VendorPartnership />
      <HowItWorks
        sectionSubtitle="How It Works"
        sectionTitle="Swift Partnership Activation"
        description="Experience a seamless journey from registration to partnership, empowering USA-based buyers with tools, training, and support to thrive in a global marketplace."
        phases={HowItworksphases}
        buttons={HowItWorksbuttons}
        imageSrc={aboutImg}
        iconSrc={rightArrow}
        bookingIconSrc={booking}
        consultationText="Partner Smarter: Pre-Registration Consultation"
        consultationLink="/book-appointment"
      />
      <Service />
      {/* <DesignProtection title={"Market Confidence Assurance"}  servicesData={servicesData} /> */}
      <FAQSection />
      <div>
        <hr />
      </div>
      <TestimonialSection />
      <CarouselSlider {...exampleData} />
      <ServicesArea {...ServicesAreaData} />
      <ProgressSection />
      <SellerNetworkSection />
      <FlagSection />
      {/* <FooterUpper imageSrc={indexfooterImage} /> */}
    </>
  );
};

export default Index;
