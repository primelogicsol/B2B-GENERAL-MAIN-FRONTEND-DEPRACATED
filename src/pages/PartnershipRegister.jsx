
// Component Imports
import Breadcrumb from "../components/Shared-Components/Breadcrumb";
import ProjectArea from "../components/Shared-Components/RegProjectArea";
import HeroSection from "../components/Shared-Components/HeroSection";
// Assets Imports
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import image7 from "../assets/images/6.png";
import image12 from "../assets/images/process icon/5.png";
import heroImage from '../assets/images/sm.png'
import VendorPartnershipSection from "../components/PartnershipRegistration/VendorPartnershipSection";
function PartnershipRegister() {
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "PartnerShip" },
  ];

  const VendorPartnershipSectionData = [
    {
      image: image1,
      title: 'E-Commerce',
      subtitle: 'Level 1 Partnership',
      description:
        'Launch your digital storefront with our advanced e-commerce platform, analytics, and marketing support',
      list: ['Digital storefront setup', 'Analytics dashboard', 'Marketing automation'],
      link: '/about',
    },
    {
      image: image4,
      title: 'Consignment',
      subtitle: 'Level 2 Partnership',
      description:
        'Maximize profits through our inventory management and flexible consignment solutions',
      list: ['Inventory tracking', 'Dynamic pricing', 'Supply chain optimization'],
      link: '/about',
    },
    {
      image: image5,
      title: 'Exhibition',
      subtitle: 'Level 3 Partnership',
      description:
        'Showcase your products at premier trade shows with full exhibition support and lead generation',
      list: ['Trade show booth', 'Lead capture system', 'Event marketing'],
      link: '/about',
    },
    {
      image: image3,
      title: 'Import Export',
      subtitle: 'Level 4 Partnership',
      description:
        'Access global markets with our comprehensive import-export logistics and customs expertise',
      list: ['Customs clearance', 'Global shipping', 'Trade compliance'],
      link: '/about',
    },
    {
      image: image6,
      title: 'Subsidary',
      subtitle: 'Level 5 Partnership',
      description:
        'Operate as an independent subsidiary with full access to our resources and brand ecosystem',
      list: ['Brand licensing', 'Operational support', 'Market exclusivity'],
      link: '/about',
    },
    {
      image: image2,
      title: 'Brick & Mortar',
      subtitle: 'Level 6 Partnership',
      description:
        'Establish physical retail presence with turnkey store solutions and integrated online-offline operations',
      list: ['Location selection', 'Store design', 'POS systems'],
      link: '/about',
    },
  
    {
      image: image7,
      title: 'Franchise',
      subtitle: 'Level 7 Partnership',
      description:
        'Own and operate your exclusive franchise with comprehensive training and operational support',
      list: ['Full ownership', 'Training program', 'Territory rights'],
      link: '/about',
    },
    {
      image: image12,
      title: 'Guiding You to Risk-Free Success & Independent Kashmir Handicraft Bussiness in the USA',
      subtitle:'Our Five-Year Promise',
      description:
        '',
      list: [],
      
    }
  ];
  return (
    <>
      {/* <Breadcrumb title="Vendor Partnership Registration Portal" links={breadcrumbLinks} /> */}
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
      <ProjectArea />
      <VendorPartnershipSection data={VendorPartnershipSectionData}/>
    </>
  );
}

export default PartnershipRegister;
