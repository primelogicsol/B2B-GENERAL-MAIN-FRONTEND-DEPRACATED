import React from "react";

// Component Imports
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
import WidgetSidebar from "../../components/About/BrandStory/WidgetSideBae";
import SectionComponent from "../../components/About/BrandStory/SectionComponent";
import HeroSection from "../../components/Shared-Components/HeroSection";
import heroImage from '../../assets/images/sm.png'
export default function BrandStory() {
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Brand Story" },
  ];
  const commonConnection = {
    title: "COMMON CONNECTION",
    description:
      "The Bridge Between Home and Heritage... US-based Kashmiri immigrants are the heartbeat of De Koshur Crafts’ journey.",
    textBoxes: [
      {
        heading: "Catalysts for Positive",
        highlightedText: "Change",
        description:
          "Kashmiri immigrants in the United States act as catalysts for transformation, leveraging their deep ties to Kashmir.",
      },
      {
        heading: "Bridging Key",
        highlightedText: "Connections",
        description:
          "US-based Kashmiris create vital connections between major American companies and Kashmir’s handicraft sector.",
      },
      {
        heading: "Advocates for a Unified",
        highlightedText: "Brand",
        description:
          "Kashmiri immigrants in the US champion the creation of a unified, globally recognized brand—De Koshur Crafts.",
      },
      {
        heading: "Elevating Craft",
        highlightedText: "Standards",
        description:
          "De Koshur Crafts commits to elevating Kashmiri handicrafts to global standards. Through modern business practices.",
      },
      {
        heading: "Preserving Cultural",
        highlightedText: "Heritage",
        description:
          "De Koshur Crafts embodies a deep reverence for Kashmiri cultural heritage. By merging centuries-old traditions.",
      },
      {
        heading: "Framework for",
        highlightedText: "Empowerment",
        description:
          "Central to De Koshur Crafts’ mission is a holistic framework designed to uplift Kashmiri artisans.",
      },
    ],
  };
  const definingMoments = {
    title: "DEFINING MOMENTS",
    description:
      "The establishment of De Koshur Crafts in 2022 marked a transformative milestone, setting the brand on a path to global prominence.",
    textBoxes: [
      {
        heading: "Commitment to",
        highlightedText: "Equity",
        description:
          "Equity is at the heart of De Koshur Crafts, shaping its operations and community interactions. The leadership actively promotes fair opportunities.",
      },
      {
        heading: "Diverse",
        highlightedText: "Leadership",
        description:
          "De Koshur Crafts thrives on the strength of its diverse leadership, blending unique perspectives to shape its mission.",
      },
      {
        heading: "Blueprint for",
        highlightedText: "Growth",
        description:
          "De Koshur Crafts represents a blueprint for sustainable growth, balancing cultural preservation with innovation.",
      },
      {
        heading: "Community",
        highlightedText: "Engagement",
        description:
          "De Koshur Crafts actively fosters engagement with communities in both Kashmir and the USA. By building strong connections.",
      },
    ],
  };
  const brandTransformationContent = {
    title: "Brand Transformation Journey",
    description:
      "De Koshur Crafts has become a seamless omni-channel business, integrating online and offline platforms to meet diverse needs. This transformation ensures accessibility and quality while preserving Kashmiri heritage. By merging traditional craftsmanship with modern technology, the brand connects with global audiences, fostering appreciation for Kashmir’s timeless artistry and establishing itself as a leader in cultural preservation.",
    textBoxes: [
      {
        heading: "Retail and E-Commerce",
        highlightedText: "Fusion",
        description:
          "De Koshur Crafts integrates e-commerce with physical stores across the USA, creating a unified shopping experience. Customers enjoy the convenience of browsing online or visiting nearby stores, enhancing satisfaction and accessibility. This innovative approach bridges digital and physical retail, ensuring consistency and quality across platforms, while broadening the brand’s reach to meet the demands of modern consumers.",
      },
      {
        heading: "Sustainability Through",
        highlightedText: "Recommerce",
        description:
          "De Koshur Crafts embraces sustainability through recommerce, offering pre-owned Kashmiri crafts that extend product lifecycles. This initiative minimizes waste, provides affordable options, and introduces heritage craftsmanship to wider audiences. By adopting eco-friendly practices, the brand demonstrates its commitment to environmental stewardship while maintaining the value and legacy of traditional Kashmiri artistry.",
      },
      {
        heading: "Showcasing Craftsmanship",
        highlightedText: "Globally",
        description:
          "Participating in prestigious exhibitions, De Koshur Crafts celebrates Kashmiri artistry in a personal and engaging setting. These events raise awareness, connect customers with artisans’ stories, and highlight the brand’s rich heritage. By showcasing its craftsmanship on global platforms, the brand fosters a deeper appreciation for Kashmiri culture and strengthens its position as an ambassador for traditional artistry.",
      },
      {
        heading: "Expanding Through",
        highlightedText: "Imports",
        description:
          "De Koshur Crafts capitalizes on import opportunities to deliver authentic Kashmiri products to the USA. This strategy ensures customers receive high-quality, genuine craftsmanship while reinforcing the brand’s reputation as a trusted source. By bridging geographical divides, the brand celebrates the global appeal of Kashmiri artistry and expands its influence in international markets.",
      },
      {
        heading: "Technology-Driven",
        highlightedText: "Efficiency",
        description:
          "Advanced technology powers De Koshur Crafts’ seamless operations. Tools like inventory management systems, CRM platforms, and e-commerce solutions ensure efficiency and customer satisfaction. These innovations create consistent experiences across all platforms, streamlining processes and reinforcing the brand’s commitment to excellence. By integrating technology, the brand modernizes its foundation while preserving the essence of traditional craftsmanship.",
      },
      {
        heading: "Strategic Marketing",
        highlightedText: "Excellence",
        description:
          "De Koshur Crafts amplifies its reach through advanced marketing strategies. Social media campaigns, SEO, email marketing, and influencer collaborations engage audiences online, while in-store promotions and personalized interactions create memorable customer experiences. This dynamic approach enhances brand visibility, connects with diverse audiences, and fosters a lasting connection between customers and Kashmiri heritage.",
      },
    ],
  };
  const legacyContent = {
    title: "OUR BRAND ORIGIN",
    description:
      "At the heart of De Koshur Crafts lies a profound connection to Kashmir’s cultural soul. Rooted in the term “Koshur,” meaning “Kashmiri,” our brand embodies a legacy of authenticity and artistry that mirrors the rich heritage of this land.",
    textBoxes: [
      {
        heading: "Inspired by the",
        highlightedText: "Himalayas",
        description:
          "Nestled in the breathtaking expanse of the Himalayas, Kashmir’s natural beauty and cultural vibrancy are more than a backdrop—they are the lifeblood of our brand. This majestic landscape, depicted in our logo, shapes each piece, channeling the spirit of Kashmir’s awe-inspiring environment into every creation.",
      },
      {
        heading: "Legacy of the",
        highlightedText: "Silk Route",
        description:
          "Once a vital node on the ancient Silk Route, Kashmir has been a melting pot of cultures, ideas, and artistic expressions. Our crafts are infused with these influences, showcasing the multicultural richness and unique character honed by centuries of exchange. This history lives on in the diversity of techniques and materials woven into every piece.",
      },
      {
        heading: "UNESCO",
        highlightedText: "Recognition",
        description:
          "Recognized by UNESCO’s Creative Cities Network, Kashmir’s unparalleled cultural legacy holds a prestigious global place. This acknowledgment reaffirms our commitment to preserving the arts defining Kashmir’s identity. At De Koshur Crafts, we honor this duty by promoting traditional arts, bridging heritage with those who cherish it, and elevating Kashmir’s timeless craftsmanship to the world.",
      },
      {
        heading: "WCC",
        highlightedText: "Recognition",
        description:
          "Recognized by the World Craft Council for its exceptional artisanal traditions, Kashmir proudly holds a distinguished position in the global craft community. This honor strengthens our resolve to preserve and promote the artistry that defines Kashmir’s essence. At De Koshur Crafts, we celebrate this legacy by sharing these timeless crafts with the world, connecting heritage with admirers everywhere.",
      },
      {
        heading: "Artistry & Sufi",
        highlightedText: "Legacy",
        description:
          "Kashmiri artisans preserve centuries-old techniques, mastering intricate patterns and textures. Rooted in the Sufi lineage, their creations transcend commerce, embodying soulful expression. Each piece reflects spiritual depth and authenticity, offering not just beauty but a timeless connection to Kashmir’s heritage, where artistry and meaning intertwine to celebrate a rich cultural legacy.",
      },
      {
        heading: "A Global Fashion",
        highlightedText: "Legacy",
        description:
          "From European aristocracy’s passion for luxurious Pashmina shawls to the intricate carpets adorning royal courts, Kashmiri crafts have profoundly influenced global fashion and luxury. This enduring appeal, born of unmatched artistry, lives on in our products. Each piece embodies a legacy of elegance, craftsmanship, and heritage, cherished across generations.",
      },
    ],
  };

  return (
    <div>
      <HeroSection
      subtitle="De K0SHUR CRAFTS B2B CONNECT"
      heading1="Welcome to DKC Buyer"
      heading2="Partnership Portal Hub"
      description="Join the largest offshore startup network revolutionizing Kashmiri crafts..."
      buttonText="Brand Story"
      buttonLink=""
      videoLink="https://www.youtube.com/watch?v=Wx48y_fOfiY"
      heroImage={heroImage}
    />
      {/* <Breadcrumb title="Brand Story" links={breadcrumbLinks} /> */}
      <div className="services-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="services-details-content"></div>
              <SectionComponent {...legacyContent} />
              <SectionComponent {...commonConnection} />
              <SectionComponent {...definingMoments} />
              <SectionComponent {...brandTransformationContent} />
            </div>
            <div className="col-lg-4">
              <WidgetSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
