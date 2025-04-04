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
import indexfooterImage from "../assets/images/index_footer.jpg";
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
          "Kashmiri artisans face limited international reach due to inadequate logistics, and visibility, restricting global exposure for their craftsmanship.",
        benefit:
          "De Koshur Crafts empowers global visibility through e-commerce, exhibitions, and retail spaces, connecting artisans to American audiences.",
        icon: service_icon,
      },
      {
        title: "Infrastructure Challenges Solved",
        challenge:
          "Small businesses struggle with shipping, warehousing, and customs navigation, lacking resources and expertise to efficiently access international markets.",
        benefit:
          "De Koshur Crafts manages logistics, warehousing, and compliance, ensuring artisans seamlessly reach global customers while focusing on their craft.",
        icon: service_icon,
      },
      {
        title: "Ethical Standards Simplified",
        challenge:
          "Small vendors struggle to meet global compliance standards like fair trade and sustainability due to limited resources, knowledge, and capacity.",
        benefit:
          "De Koshur Crafts ensures products align with global standards, enhancing credibility and trust through expert guidance and managed compliance.",
        icon: service_icon,
      },
      {
        title: "Financial Risks Minimized",
        challenge:
          "High upfront costs for international marketing, storefronts, and large-scale operations create significant financial risks for artisans with minimal margins.",
        benefit:
          "De Koshur Crafts’ flexible models, like consignment and exhibitions, minimize risk while maximizing global exposure and opportunities.",
        icon: service_icon,
      },
      {
        title: "Branding and Marketing",
        challenge:
          "Small-scale vendors struggle to establish brand recognition and execute impactful marketing campaigns in foreign markets due to limited expertise and resources.",
        benefit:
          "De Koshur Crafts provides vendors access to an established brand, professional marketing platforms, and event promotions, ensuring visibility and trust.",
        icon: service_icon,
      },
      {
        title: "Quality Improvement Resources",
        challenge:
          "Small-scale artisans face difficulties meeting global quality standards, eco-friendly packaging requirements, and professional presentation due to resource constraints.",
        benefit:
          "De Koshur Crafts offers quality tools, expert photography, and eco-friendly packaging, empowering artisans to compete on a global scale.",
        icon: service_icon,
      },
      {
        title: "Industry Network Access",
        challenge:
          "Artisans struggle to access essential industry networks, limiting opportunities to connect with distributors, attend exhibitions, or reach high-value international buyers.",
        benefit:
          "De Koshur Crafts connects vendors to trade shows, exhibitions, and wholesale markets, unlocking access to critical industry contacts and opportunities.",
        icon: service_icon,
      },
      {
        title: "Sustainable Business Models",
        challenge:
          "Kashmiri artisans face unstable revenue due to seasonal demand, price pressures, and limited market diversification, hindering sustainable growth.",
        benefit:
          "De Koshur Crafts offers diverse models, from e-commerce to franchises, stabilizing revenue and fostering long-term business sustainability.",
        icon: service_icon,
      },
      {
        title: "Counterfeit Product Protection",
        challenge:
          "Counterfeit Kashmiri products devalue genuine craftsmanship, eroding artisan revenues and customer trust by misrepresenting authentic work as mass-produced replicas.",
        benefit:
          "De Koshur Crafts safeguards authenticity through strict verification, preserving artisans’ heritage and fostering trust with global customers.",
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
      description="Join the largest offshore startup network revolutionizing Kashmiri crafts..."
      buttonText="Register Now"
      buttonLink="/partnership-registration"
      videoLink="https://www.youtube.com/watch?v=Wx48y_fOfiY"
      heroImage={heroImage}
    />
      <FeatureArea />
      <AboutSection
        title="Empowering Kashmiri Artisans, Startups in Accessing American "
        color_title="Markets"
        subtitle="Welcome To B2B Connect - USA"
        description="A transformative and progressive platform with an investment of $3.7 million, connecting Kashmir's artisans, startups, and businesses to global markets, fostering fair trade, preserving heritage, and unlocking boundless opportunities for sustainable growth."
        items={[
          "Dream It: Envision your goals. We’ll provide the roadmap",
          "Define It: Select the partnership model tailored to your ambitions.",
          "Deliver It: Upload your credentials, verify your status, and join a league of visionary partners.",
          "Dominate It: Access our resources and watch your business flourish on the global stage.",
        ]}
        image={aboutImage}
        extraText={{
          title: "Handicraft Progressive Business Model for Every Vision",
          description:
            "Crafting Kashmir's Next Generations Future Together | Amir-e-Kabir's Legacy, Reimagined for Today's World",
        }}
      />
      <CounterArea />
      <CaseStudiesArea />
      <VendorPartnership />
      <HowItWorks
        sectionSubtitle="How It Works"
        sectionTitle="Swift Partnership Activation"
        description="Experience a seamless journey from registration to marketplace
                leadership through DKC’s transformative onboarding process,
                empowering vendors with tools, training, and support to thrive
                in a global marketplace"
        phases={HowItworksphases}
        buttons={HowItWorksbuttons}
        imageSrc={aboutImg}
        iconSrc={rightArrow}
        bookingIconSrc={booking}
        consultationText="Partner Smarter: Pre-Registration Consultation"
        consultationLink="/book-appointment"
      />
      <DesignProtection title={"Market Confidence Assurance"}  servicesData={servicesData} />
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
      <FooterUpper imageSrc={indexfooterImage} />
    </>
  );
};

export default Index;
