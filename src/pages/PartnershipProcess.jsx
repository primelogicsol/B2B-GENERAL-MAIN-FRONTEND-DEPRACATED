/* eslint-disable no-unused-vars */

// Component Imports
import Breadcrumb from "../components/Shared-Components/Breadcrumb";
import VendorPartnership from "../components/OurPartnerShip/VendorManual";
import AboutSection from "../components/Shared-Components/AboutSection";
import CounterAreaManual from "../components/OurPartnerShip/CounterAreaManual";
import HowItWorks from "../components/OurPartnerShip/HowItWorks";
import PPTestimonial from "../components/Shared-Components/PPTestimonial";
import ServicesArea from "../components/index/ServicesArea";
import HeroSection from "../components/Shared-Components/HeroSection";
// Assets Imports
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import aboutImage from "../assets/images/about-thu3.png";
import service_icon from "../assets/images/lstboc.png";
import aboutImg from "../assets/images/about_img_1.png";
import rightArrow from "../assets/images/right-arrow.png";
import icon22 from "../assets/icon/22.png";
import booking from "../assets/icon/booking.png";
import heroImage from '../assets/images/sm.png'
import hcrf_logo from '../assets/images/hcrf_logo.png'
import craftlorfe_logo from '../assets/images/craftlorfe_logo.png'
import badge_logo from '../assets/images/badge_logo.png'
import { Link } from "react-router-dom";

export default function PartnershipProcess() {
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Process Framework" },
  ];
  const VendorContentData = [
    {
      title: "Drop Shipping",
      description: "Vendor Partnership",
      heading1: "Minimum Rentention Period",
      desc1: "Minimum 18 Months",
      heading2: "Key Performance Indicator Score",
      desc2: "Maintain Minimum 7+",
      heading3: "Next Level of Partnership ",
      desc3: " Brick & Mortar",
      image: img1,
      link: "/ecommerce",
    },
    {
      title: "Brick & Mortar",
      description: "Shared physical stores with omni-channel synergy",
      link: "/brick-mortar",
      image: img2,
    },
    {
      title: "Import Export",
      description: "Optimize inventory through dynamic consignment innovation",
      link: "/importexport",
      image: img3,
    },
    {
      title: "Consignment",
      description: "Showcase products at transformative global exhibitions",
      link: "/consignment",
      image: img4,
    },
    {
      title: "Exhibition",
      description: "Scale globally with streamlined trade network solutions",
      link: "/exhibition",
      image: img5,
    },
    {
      title: "Subsidary",
      description: "Lead markets through exclusive franchise ownership",
      link: "/subsidary",
      image: img6,
    },
    {
      title: "Franchise",
      description: "Unlock exclusive privileges with subsidiary status",
      link: "/franchise",
      image: img7,
    },
  ];
  const countersData = [
    { target: 20, range: "(1-5)", planName: "Starter Plan" },
    { target: 99, range: "(5-10)", planName: "Basic Plan" },
    { target: 150, range: "(10-15)", planName: "Growth Plan" },
    { target: 499, range: "(15+)", planName: "Premium Plan" },
  ];
  const Counterheading = "Buyer Partnership Framework and Pathway";
  const ServicesAreaData = {
    title: "Services",
    subtitle: "Seamless Transitions with One Time Paid Multi-Path Eligibility",
    mainTitle:
      "Redefine Your Journey with KPI-Driven Excellence Without being Locked-In ",
    highlight: "Retention Periods.",
    services: [
      {
        title: "Starter Package",

        icon: service_icon,
        DesignFor: "Small vendors establishing presence in ecosystem.",
        access: "Mid-tier partnerships such as Consignment and Exhibition.",
        compulsory: "E-Commerce Partnership Registration & Approval.",
        KPIscore: " Minimum 7 across performance metrics",
        fee: "$1,250",
      },
      {
        title: "Growth Package",

        icon: service_icon,
        DesignFor: "Scaling vendors transitioning to growth strategies.",
        access: "Mid-tier partnership - Import Export.",
        compulsory: "E-Commerce Partnership Registration & Approval.",
        KPIscore: "Minimum 7 across performance metrics",
        fee: "$2,500",
      },
      {
        title: "Premium Package",

        icon: service_icon,
        DesignFor: "Established vendors aiming for global expansion.",
        access: "Full-spectrum partnership of Subsidary",
        compulsory: "E-Commerce Partnership Registration & Approval.",
        KPIscore: "Minimum 7 across performance metrics",
        fee: "$5,000",
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
  return (
    <>
      {/* <Breadcrumb title="Process Framework" links={breadcrumbLinks} /> */}
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
      <AboutSection
        title="Buyer Partnership Process Overview"
        color_title=""
        subtitle="B2B Connect - USA"
        description="At De Koshur Crafts, our Buyer Partnership Process is designed to provide seamless access to exclusive Kashmiri products. We focus on delivering high-quality, sustainable, and ethically sourced items to help your business grow."
        items={[
          " <b>Empowering Growth:</b> Helping scale with authentic Kashmiri crafts.",
          "<b>Aligned Standards:</b> Products meet high-quality and sustainability standards.",
          "<b>Access to Opportunities:</b> Connect with top Kashmiri artisans and vendors.",
          "<b>Simplified Pathway:</b> Streamlined, transparent process for seamless sourcing experience.",
        ]}
        image={aboutImage}
        extraText={{
          title: "Handicraft Progressive Business Model for Every Vision",
          description:
            "Crafting US Next Generations with 700+ Old Legacy of Kashmir Handicraft Together",
        }}
      />
      <CounterAreaManual heading={Counterheading} />
      <VendorPartnership />
      <AboutSection
        title="What happens if a buyer is not eligible for the next level of partnership?"
        color_title=""
        subtitle="B2B Connect - USA"
        description="At De Koshur Crafts, we believe in empowering ambitious buyer to achieve their goals without compromising the principles that define our platform. For experienced business houses, we offer a unique opportunity to bypass the retention period while maintaining an unwavering commitment to the highest KPI standards."
        items={[
          "<b>Accelerated Growth:</b> Bypass retention and advance your journey with ease.",
          "<b>Ethical Excellence:</b> Uphold KPI standards ensuring quality and lasting impact.",
          "<b>Global Opportunities:</b> Access partnerships, expand into key global markets.",
          "<b>Platform Integrity:</b> Join a network committed to ethical craftsmanship",
        ]}
        image={aboutImage}
        extraText={{
          title: "Handicraft Progressive Business Model for Every Vision",
          description:
            "Crafting US Next Generations with 700+ Old Legacy of Kashmir Handicraft Together",
        }}
      />
      <ServicesArea {...ServicesAreaData} />
      <div className="p-5 mb-5" style={{border:"3px solid black",borderRadius:"20px",margin:""}}>
        <h4 className="mb-4">Empowering Experienced Business Houses Without Compromising Platform Integrity</h4>
        <p>The Lateral Entry pathway at De Koshur Crafts is a powerful opportunity, reserved for buyers with significant business experience who have proven their commitment to ethical craftsmanship and sustainable growth. It’s not a shortcut, but a privilege earned through years of dedication and hard work. This pathway allows experienced buyers to bypass the retention period, advancing quickly while maintaining the integrity of our platform. We prioritize those who uphold the highest standards of professionalism, quality, and social responsibility, ensuring they are well-equipped to lead and thrive in global markets. Lateral Entry is a testament to your legacy, a chance to shape the future of Kashmiri craftsmanship while honoring the core values that define De Koshur Crafts.</p>
        <p className="mb-5">You should be vetted by the <span><b>Hamadan Craft Revival Foundation</b></span>, our partner in Kashmir - India  , which will thoroughly evaluate your business against industry standards to ensure it aligns with our ethical and operational values. Only upon successful evaluation will you be granted access to this accelerated growth path, ensuring that every buyer maintains the highest standards of integrity and quality within the De Koshur Crafts platform. This applies even if you pay for the Lateral Pathway Package, as the evaluation process ensures that all buyers meet the required benchmarks before proceeding with any advanced partnership level.</p>
        <div className="row">
        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 mt-5" >
                <div className="cs_card_1_col" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">
                  <div className="cs_card cs_style_1" >
                    <div className="cs_card_in cs_white_bg" style={{backgroundColor:"#a2633a",color:"white"}}>
                      <Link to="https://khcrf.org/index.html">
                      <div className="cs_card_icon cs_center cs_mb_30">
                        <img src={hcrf_logo} />
                      </div>
                      </Link>
                      <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-3">Get Evaluated</h3>
                      <p className="cs_fs_14 cs_mb_25">HCRF, a pioneering Section 8 entity, is the first Craft Policy Think - Tank devoted to preserving, promoting, and sustainably advancing Kashmir’s unique handicraft heritage and artisan empowerment</p>
                      <Link
                        className="text-white cs_text_btn cs_fs_14 text-uppercase cs_heading_color cs_bold"
                        to="https://khcrf.org/networking.html"
                      >
                        NOW
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="cs_card_shape">
                      <svg width="245" height="145" viewBox="0 0 305 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M274.465 30.698L35.5518 41.3918L0 6.19539V120.27C0 133.924 11.1913 145 24.9875 145H280.012C293.809 145 305 133.924 305 120.27V0.478516L274.465 30.698Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 mt-5" >
              <div className="cs_card_1_col" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">
              <div className="cs_card cs_style_1" >
              <div className="cs_card_in cs_white_bg p-1" style={{border:"2px solid #a2633a",color:"black"}}>
<h5 className="mt-2" style={{fontSize:"16px"}}>Unlock CraftLore & ArtStay for Free (2025)</h5>
    <p>Receive exclusive access to CraftLore & ArtStay, premium packages, at no cost, upon successful evaluation by the HCRF. This is your gateway to accelerated growth & global visibility, designed for businesses that uphold the highest standards of integrity.</p>
    </div> 
    </div></div>        
</div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 mt-5" >
                <div className="cs_card_1_col" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">
                  <div className="cs_card cs_style_1" >
                    <div className="cs_card_in cs_white_bg" style={{backgroundColor:"#a2633a",color:"white"}}>
                      <Link to="https://craftlore.org">
                      <div className="cs_card_icon cs_center cs_mb_30">
                        <img src={craftlorfe_logo} />
                      </div>
                      </Link>
                      <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-3">Get Listed</h3>
                      <p className="cs_fs_14 cs_mb_25">The CraftLore Trade Registry records, verifies, listing, ranks - Kashmir handicrafts businesses, artisans, and institutions. Undergoing HCRF's Business Evaluation can help you gain listing, ranking, and global exposure.</p>
                    
                    </div>
                    <div className="cs_card_shape">
                      <svg width="245" height="145" viewBox="0 0 305 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M274.465 30.698L35.5518 41.3918L0 6.19539V120.27C0 133.924 11.1913 145 24.9875 145H280.012C293.809 145 305 133.924 305 120.27V0.478516L274.465 30.698Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 mt-5" >
                <div className="cs_card_1_col" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">
                  <div className="cs_card cs_style_1" >
                    <div className="cs_card_in cs_white_bg" style={{backgroundColor:"#a2633a",color:"white"}}>
                      <Link to="https://www.kashmirartstay.com">
                      <div className="cs_card_icon cs_center cs_mb_30">
                        <img src={badge_logo} />
                      </div>
                      </Link>
                      <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-3">Get ofline Business</h3>
                      <p className="cs_fs_14 cs_mb_25">ArtStay aims to create synergy between Kashmir's tourism and handicraft sectors, fostering a sustainable, mutually beneficial relationship between these two vital industries, driving business opportunities directly to your doorstep.</p>
                    
                    </div>
                    <div className="cs_card_shape">
                      <svg width="245" height="145" viewBox="0 0 305 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M274.465 30.698L35.5518 41.3918L0 6.19539V120.27C0 133.924 11.1913 145 24.9875 145H280.012C293.809 145 305 133.924 305 120.27V0.478516L274.465 30.698Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              

              </div>
      </div>
      <CounterAreaManual
        heading="KPI Evaluation Metrics Framework For Buyers"
        para="How You Can Retain Progressive Partnerships Path?"
      />
      <PPTestimonial />
      <HowItWorks
        sectionSubtitle="How It Works"
        sectionTitle="Swift Partnership Activation"
        description="Experience a seamless journey from registration to marketplace
                leadership through DKC’s transformative onboarding process,
                empowering buyers with tools, training, and support to thrive
                in a global marketplace"
        phases={HowItworksphases}
        buttons={HowItWorksbuttons}
        imageSrc={aboutImg}
        iconSrc={rightArrow}
        bookingIconSrc={booking}
        consultationText="Partner Smarter: Pre-Registration Consultation"
        consultationLink="/book-appointment"
      />
    </>
  );
}
