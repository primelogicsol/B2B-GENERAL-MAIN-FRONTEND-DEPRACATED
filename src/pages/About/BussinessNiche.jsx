import React from "react";
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
import HeroSection from "../../components/Shared-Components/HeroSection";
import heroImage from '../../assets/images/sm.png'
import DesignProtection from "../../components/OurPartnerShip/ServiceArea"
import desginProt1 from "../../assets/images/designProt1.png";
import desginProt2 from "../../assets/images/designProt2.png"
import desginProt3 from "../../assets/images/designProt3.png"
import desginProt4 from "../../assets/images/designProt4.png"
export default function BussinessNiche() {

  const servicesData = [
    {
      title: "E-Commerce Market Share",
      category: "US Online Handicraft Market Insight",
      list: [
        "Online imported crafts $28B",
        "Digital platforms lead sales",
        "Cross-border payments",
        "Returns logistics standardized",
      ],
    },
    {
      title: "Performance Analytics",
      category: "US Online Handicraft Market Insight",
      list: [
        "Marketplace share: $16.8B (60%)",
        "Direct website: $8.4B (30%)",
        "Social commerce: $2.8B (10%)",
        "Mobile sales growth: 45%",
      ],
    },
    {
      title: "Operational Metrics",
      category: "US Online Handicraft Market Insight",
      list: [
        "Cart conversion: 53.2%",
        "Average order: $180",
        "Return rate: 12%",
        "Customer retention: 68%",
      ],
    },
    {
      title: "Customer Acquisition Cost",
      category: "US Online Handicraft Market Insight",
      list: [
        "Paid search: $322/customer",
        "Social media: $218/customer",
        "Email marketing: $108/customer",
        "Referral program: $72/customer",
      ],
    },
    {
      title: "Market Share By Store Type",
      category: "US Brick and Mortar Handicraft Market Insight",
      list: [
        "Luxury boutiques reach $12.8B",
        "Design studios achieve $9.6B",
        "Artisan galleries make $6.4B",
        "Heritage shops earn $3.2B"
      ]
    },
    {
      title: "Location Performance",
      category: "US Brick and Mortar Handicraft Market Insight",
      list: [
        "Mall locations: 45% revenue",
        "Downtown stores: 25% sales",
        "Cultural districts: 20% share",
        "Suburban outlets: 10%"
      ]
    },
    {
      title: "Operational Metrics",
      category: "US Brick and Mortar Handicraft Market Insight",
      list: [
        "Sales per sqft: $850",
        "Stock turnover: 4x yearly",
        "Customer conversion: 4.2%",
        "Average basket: $280"
      ]
    },
    {
      title: "Performance Indicators",
      category: "US Brick and Mortar Handicraft Market Insight",
      list: [
        "Footfall conversion: 35%",
        "Display effectiveness: 42%",
        "Staff productivity: $1,200/day",
        "Space utilization: 85%"
      ]
    },
    {
      title: "Consignment Market Share",
      category: "US Consignment Handicraft Market Insight",
      list: [
        "Premium crafts: $12.8B (40%)",
        "Mid-range products: $9B (30%)",
        "Artisanal pieces: $6.4B (20%)",
        "Heritage items: $3.2B (10%)",
      ],
    },
    {
      title: "Platform Performance",
      category: "US Consignment Handicraft Market Insight",
      list: [
        "High-end boutiques: 45% ",
        "Design galleries: 25% ",
        "Museum stores: 20% ",
        "Specialty shops: 10% ",
      ],
    },
    {
      title: "Operational Metrics",
      category: "US Consignment Handicraft Market Insight",
      list: [
        "Sell-through rate: 75%",
        "Average markup: 2.8x cost",
        "Return rate: 5% only",
        "Inventory turns: 4x annually",
      ],
    },
    {
      title: "Success Rate By Category",
      category: "US Consignment Handicraft Market Insight",
      list: [
        "Textile products: 82%",
        "Decorative items: 78%",
        "Home furnishings: 72%",
        "Personal accessories: 68%",
      ],
    },
    {
      title: "Exhibition Market Share",
      category: "US Exhibition Handicraft Market Insight",
      list: [
        "Trade shows: $180M (40%)",
        "Craft fairs: $135M (30%)",
        "Gallery events: $90M (20%)",
        "Pop-up exhibitions: $45M (10%)",
      ],
    },
    {
      title: "Platform Performance",
      category: "US Exhibition Handicraft Market Insight",
      list: [
        "Marketplaces: $4.8B (40%)",
        "Craft platforms: $3.6B (30%)",
        "Direct websites: $2.4B (20%)",
        "Social commerce: $1.2B (10%)",
      ],
    },
    {
      title: "Operational Metrics",
      category: "US Exhibition Handicraft Market Insight",
      list: [
        "Conversion rate: 4.2%",
        "Average order: $280",
        "Return rate: 8%",
        "Repeat purchase: 65%",
      ],
    },
    {
      title: "Success Metrics",
      category: "US Exhibition Handicraft Market Insight",
      list: [
        "Customer retention: 72%",
        "Brand loyalty: 68%",
        "Satisfaction rate: 4.6/5",
        "Review rating: 4.8/5",
      ],
    },
    {
      title: "Import-Export Market Share",
      category: "US Import-Export Handicraft Market Insight",
      list: [
        "US imports total: $42B",
        "Handmade segment: $18.2B",
        "Premium crafts: $8.4B",
        "Growth rate: 15% annually",
      ],
    },
    {
      title: "Platform Performance",
      category: "US Import-Export Handicraft Market Insight",
      list: [
        "Marketplace conversion: 4.2%",
        "Average session: 8.5 minutes",
        "Basket completion: 65%",
        "Mobile traffic: 72%",
      ],
    },
    {
      title: "Operational Metrics",
      category: "US Import-Export Handicraft Market Insight",
      list: [
        "Order fulfillment: 96%",
        "Shipping time: 12 days",
        "Return rate: 8%",
        "Inventory turnover: 4x",
      ],
    },
    {
      title: "Conversion Metrics",
      category: "US Import-Export Handicraft Market Insight",
      list: [
        "First-time buyers: 2.8%",
        "Repeat customers: 4.5%",
        "Cart abandonment: 68%",
        "Recovery rate: 25%",
      ],
    },

    {
      title: "Market Share Metrics",
      category: "US Handicraft Franchise Market Insight",
      list: [
        "Premium malls: 45% ($5.4B)",
        "Downtown locations: 30% ($3B)",
        "Design districts: 15% ($1.8B)",
        "Cultural centers: 10% ($1.2B)"
      ]
    },
    {
      title: "Platform Performance Analytics",
      category: "US Handicraft Franchise Market Insight",
      list: [
        "Sales per sqft: $850-1200",
        "Conversion rate: 4.8%",
        "Average basket: $280-450",
        "Customer dwell time: 28min"
      ]
    },
    {
      title: "Operational Metrics",
      category: "US Handicraft Franchise Market Insight",
      list: [
        "Inventory turnover: 6x/year",
        "Gross margin: 65-70%",
        "Operating costs: 35%",
        "Staff productivity: $1200/day"
      ]
    },
    {
      title: "Location Performance",
      category: "US Handicraft Franchise Market Insight",
      list: [
        "High street stores: $1.8M/year",
        "Mall locations: $2.2M/year",
        "Design district: $1.5M/year",
        "Cultural zones: $1.2M/year"
      ]
    },

    {
      title: "Auction Platform",
      category: "US Handicraft B2B Marketplace (Bidding and Auctions)",
      list: [
        "Live auctions generate $18B",
        "Online bidding reaches $12B",
        "Hybrid events achieve $8B",
        "Private sales earn $4B"
      ]
    },
    {
      title: "Bidding Performance",
      category: "US Handicraft B2B Marketplace (Bidding and Auctions)",
      list: [
        "Opening bid conversion: 65%",
        "Price escalation: 35% average",
        "Buyer participation: 18/lot",
        "Completion rate: 82%"
      ]
    },
    {
      title: "Category Performance",
      category: "US Handicraft B2B Marketplace (Bidding and Auctions)",
      list: [
        "Premium carpets: $850/sqft",
        "Artisan textiles: $280/piece",
        "Heritage crafts: $1,200/item",
        "Designer craft: $3,500/item"
      ]
    },
    {
      title: "Success Rate Metrics",
      category: "US Handicraft B2B Marketplace (Bidding and Auctions)",
      list: [
        "First auction success: 72%",
        "Repeat buyer rate: 85%",
        "Cross-category bidding: 45%",
        "Seasonal performance: 28%"
      ]
    },



   

    
    
    {
      title: "Appreciation of Artistry",
      category: "US Buyer Purchasing Behaviour",
      list: [
        "Handcraft commands +45%",
        "Quality rating reaches 4.8/5",
        "Traditional crafts valued 92%",
        "Premium crafts grow 15.5%",
      ],
    },
    {
      title: "Originality & Authenticity",
      category: "US Buyer Purchasing Behaviour",
      list: [
        "Verification demand grows 85%",
        "Design premium achieves 65%",
        "Unique pieces claim 42%",
        "Authentication adds 35% value",
      ],
    },
    {
      title: "Heritage Connection",
      category: "US Buyer Purchasing Behaviour",
      list: [
        "Heritage demand rises 28%",
        "Storytelling engages plus 55%",
        "Traditional designs lead 68%",
        "Cultural education reaches 75%",
      ],
    },
    {
      title: "Sustainability & Ethics",
      category: "US Buyer Purchasing Behaviour",
      list: [
        "Sustainable premium gains 40%",
        "Ethical sourcing reaches 82%",
        "Carbon awareness hits 75%",
        "Fair trade adds 45%",
      ],
    },
    
    {
      title: "Consumer Segments",
      category: "US Handicraft Buyer Demography Insights",
      list: [
        "Urban professionals: 45% ",
        "Design enthusiasts: 28% ",
        "Cultural collectors: 17%",
        "Conscious consumers: 10%"
      ]
    },
    {
      title: "Age Distribution Analytics",
      category: "US Handicraft Buyer Demography Insights",
      list: [
        "Ages 35-45 lead 40%",
        "Ages 46-55 comprise 30%",
        "Ages 25-34 represent 20%",
        "Ages 56+ make 10%"
      ]
    },
    {
      title: "Geographic Distribution",
      category: "US Handicraft Buyer Demography Insights",
      list: [
        "Northeast region: 35%",
        "West Coast areas: 30%",
        "Southeast markets: 20%",
        "Midwest territories: 15%"
      ]
    },
    {
      title: "Purchase Behavior",
      category: "US Handicraft Buyer Demography Insights",
      list: [
        "Online shoppers: 45%",
        "Store visitors: 30%",
        "Exhibition buyers: 15%",
        "Auction participants: 10%"
      ]
    },
    {
      title: "Concentrated Market Focus",
      category: "Ease of doing handicraft business in the USA",
      list: [
        "Single regulatory framework",
        "Unified logistics system",
        "Consistent consumer behavior",
        "Streamlined marketing",
      ],
    },
    {
      title: "Premium Positioning",
      category: "Ease of doing handicraft business in the USA",
      list: [
        "Higher profit margins",
        "Better quality recognition",
        "Stronger brand positioning",
        "Simplified authentication",
      ],
    },
    {
      title: "Market Development",
      category: "Ease of doing handicraft business in the USA",
      list: [
        "Deep market penetration",
        "Strong niche dominance",
        "Better customer relationships",
        "Controlled brand growth",
      ],
    },
    {
      title: "Market Size Sufficiency",
      category: "Ease of doing handicraft business in the USA",
      list: [
        "US market already massive",
        "Untapped potential exists",
        "Current share very small",
        "Significant growth room",
      ],
    },

    {
      title: "Logistics Performance",
      category: "Ease of doing handicraft business in the USA",
      list: [
        "Third-party logistics: 45% share",
        "Fulfillment centers: $2.50/sqft",
        "Processing time: 24hrs average",
        "Last-mile delivery: 2-3 days"
      ]
    },
    {
      title: "Payment Solutions",
      category: "Ease of doing handicraft business in the USA",
      list: [
        "Card processing: Next-day",
        "ACH transfers: 2-3 days",
        "Wire transfers: Same-day",
        "Digital wallets: Instant"
      ]
    },
    {
      title: "Account Services",
      category: "Ease of doing handicraft business in the USA",
      list: [
        "Business account: $0-25/month",
        "International transfers: 1% fee",
        "Credit line: $50K average",
        "Payment processing: 2.9% rate"
      ]
    },
    {
      title: "Import Shipping",
      category: "Ease of doing handicraft business in the USA",
      list: [
        "Container cost: $3,500-5,000",
        "Air freight: $4.50/kg",
        "Custom clearance: 2-3 days",
        "Documentation: Digital"
      ]
    }
    
    
  ];
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Bussines Niche" },
  ];

  return (
    <>
      {/* <Breadcrumb title="Bussines Niche" links={breadcrumbLinks} /> */}
      <HeroSection
      subtitle="De K0SHUR CRAFTS B2B CONNECT"
      heading1="Welcome to DKC Buyer"
      heading2="Partnership Portal Hub"
      description="Join the largest offshore startup network revolutionizing Kashmiri crafts..."
      buttonText="Bussiness Niche"
      buttonLink=""
      videoLink="https://www.youtube.com/watch?v=Wx48y_fOfiY"
      heroImage={heroImage}
    />
    <DesignProtection main_title={"Why De Koshur Crafts Business Niche-Exclusively USA Only"} title={"Market Confidence Assurance"} description={"The USA offers unmatched opportunities with its vast consumer market and high purchasing power. The demand for luxury, handmade goods is growing, and American consumers value authentic, eco-friendly products, particularly those with sustainable and ethical practices. Established Brick and Mortar, Consignmnet, Import Export, B2B Market place and e-commerce channels provide easy access to affluent customers seeking unique, high-quality items, making it an ideal market for Kashmiri crafts."} bottom_text={"DKC Covers Every Segment of the U.S. Handicraft Market - The World’s Largest & Most Organized Handicraft Market"} bottom_heading={"Dream at Your Doorstep"} servicesData={servicesData} />
      
    </>
  );
}
