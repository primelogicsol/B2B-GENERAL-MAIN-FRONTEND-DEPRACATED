import React from "react";
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
import TeamSection from "../../components/About/OurEthos/Team";
import team1Image from "../../../src/assets/images/team-1.png";
import aboutImage from "../../../src/assets/images/about_img_1.png";
import FooterArea from "../../components/Shared-Components/FooterArea";
import HeroSection from "../../components/Shared-Components/HeroSection";
import heroImage from '../../assets/images/sm.png'
export default function Team() {
  const breadcrumbLinks = [{ label: "Home", path: "/" }, { label: "Team" }];
  const DeKoshurCraftsUSTeam = {
    imageSrc: team1Image,
    teamTitle: "De Koshur Crafts USA Team",
    teamSubtitle: "Bridging Tradition with Innovation in the USA",
    teamMembers: [
      "Susan Scheff (Executive Director)",
      "Michael Adams (E-Commerce Manager)",
      "Jennifer Carter (Retail Operations Manager)",
      "Angela Brown (Trade and Compliance Manager)",
      "Megan Smith (Consignment Coordinator)",
      "Rachel Morgan (Exhibition Coordinator)",
      "James Thompson (Subsidiary Development Lead)",
      "Jennifer Taylor (Franchise Manager)",
      "Emily Davis (Customer Relations Lead)",
      "Rachel Morgan (Events Coordinator)",
      "Roberts Smith (Technology Coordinator)",
    ],
  };

  const DeKoshurCraftsIndiaTeam = {
    imageSrc: aboutImage,
    teamTitle: "De Koshur Crafts India Team",
    teamSubtitle: "Crafting Excellence from Kashmir's Heart",
    teamMembers: [
      "Jasif Khan (Executive Director)",
      "Gowhar Dhar (Operations Manager)",
      "Dr Iqbal Khan (Marketing and Partnership Lead)",
      "Ijaz Misgar (Design Lead)",
      "Insha Bashir (Artisan Engagement Specialist)",
      "Masarat Khan (Vendor Partnership Coordinator)",
      "Suhail Ahmad Khan (Logistics and Coordinator)",
      "Sajjad Amin (Technology Coordinator)",
      "Fayaz Khan (Sustainability Lead)",
      "Ruqaya Zargar (Training Manager)",
    ],
  };

  return (
    <>
      {/* <Breadcrumb title="Team" links={breadcrumbLinks} /> */}
      <HeroSection
      subtitle="De K0SHUR CRAFTS B2B CONNECT"
      heading1="Welcome to DKC Buyer"
      heading2="Partnership Portal Hub"
      description="Join the largest offshore startup network revolutionizing Kashmiri crafts..."
      buttonText="Team"
      buttonLink=""
      videoLink="https://www.youtube.com/watch?v=Wx48y_fOfiY"
      heroImage={heroImage}
    />
      <TeamSection
        imageSrc={DeKoshurCraftsUSTeam.imageSrc}
        teamTitle={DeKoshurCraftsUSTeam.teamTitle}
        teamSubtitle={DeKoshurCraftsUSTeam.teamSubtitle}
        teamMembers={DeKoshurCraftsUSTeam.teamMembers}
      />
      <TeamSection
        imageSrc={DeKoshurCraftsIndiaTeam.imageSrc}
        teamTitle={DeKoshurCraftsIndiaTeam.teamTitle}
        teamSubtitle={DeKoshurCraftsIndiaTeam.teamSubtitle}
        teamMembers={DeKoshurCraftsIndiaTeam.teamMembers}
      />
    </>
  );
}
