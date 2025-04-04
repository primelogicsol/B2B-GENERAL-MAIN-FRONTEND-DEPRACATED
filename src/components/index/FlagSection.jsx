import React, { useState, useEffect } from "react";
import flag13 from "../../assets/logos/134.png";
import flag14 from "../../assets/logos/14.png";
import flag15 from "../../assets/logos/15.png";
import flag16 from "../../assets/logos/16.png";
import flag17 from "../../assets/logos/17.png";
import flag18 from "../../assets/logos/18.png";
import flag19 from "../../assets/logos/19.png";
const FlagSection = () => {
  const logoData = [
    {
      src: flag13,
      title: "DKC Kashmir Floor Art",
      description: "Transforms Your Floor into a Masterpiece.",
    },
    {
      src: flag14,
      title: "DKC Himalayan Pashmina Luxe",
      description: "Feel the Luxury, Wear the Heritage.",
    },
    {
      src: flag15,
      title: "DKC Couture Boutique",
      description: "Crafting Style with a Kashmiri Touch.",
    },
    {
      src: flag16,
      title: "DKC Heritage Interiors",
      description: "Infusing Your Home with Kashmir’s Rich Legacy.",
    },
    {
      src: flag17,
      title: "DKC Kashmir Gemstone",
      description: "Jewels as Pure and Radiant as Kashmir’s Heart.",
    },
    {
      src: flag19,
      title: "DKC Wooden Wonders",
      description: "Turning Wood into Wonders with Kashmir’s Touch.",
    },
  ];

  const [displayLogo, setDisplayLogo] = useState({
    src: flag18,
    title: "De Koshur Crafts Bazaar LLC USA",
    description: "Group of Companies",
  });

  const changeLogo = (src, title, description) => {
    setDisplayLogo({ src, title, description });
  };

  return (
    <section className="flag-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12 m-auto">
            <div className="flag-inner">
              <h4>DKC: Elevating Kashmir’s Craft to Global Excellence</h4>
              <p>Luxury, Heritage, and Timeless Craft.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="logo-containers">
              <div className="main-logo">
                <img
                  src={displayLogo.src}
                  alt="Main Logo"
                  id="displayLogo"
                  className="iconss main-logo"
                />
              </div>
              <div className="border-logos">
                {logoData.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    className="border-logo"
                    onClick={() =>
                      changeLogo(logo.src, logo.title, logo.description)
                    }
                    alt={logo.title}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-10 m-auto">
              <div className="logo-details" id="logoDetails">
                <h4 id="logoTitle">{displayLogo.title}</h4>
                <p id="logoDescription">{displayLogo.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagSection;
