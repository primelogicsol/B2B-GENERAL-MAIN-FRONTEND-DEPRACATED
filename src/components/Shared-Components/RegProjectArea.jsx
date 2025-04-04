import React,{useState,useEffect} from "react";
import img1 from "../../assets/images/home-two/project-icon.png";
import img2 from "../../assets/images/home-two/project-icon2.png";
import img3 from "../../assets/images/home-two/project-icon3.png";
import img4 from "../../assets/images/home-two/project-icon4.png";
import prors from "../../assets/images/home-two/project-rs.png";
import prows from "../../assets/images/home-two/project-ws.png";
import { Link,useLocation } from "react-router-dom";

import BusinessLocationHeader from "../Shared-Elements/LocationHeader";
import LocationCard from "../Shared-Elements/LocationCrd";
const ProjectArea = () => {


  const location = useLocation();

  // Get the saved highlighted card from sessionStorage
  const savedClickedCards = sessionStorage.getItem("clickedCards");
  const initialClickedCards = savedClickedCards ? JSON.parse(savedClickedCards) : [];

  const [clickedCards, setClickedCards] = useState(initialClickedCards);

  console.log(clickedCards);
  
  const cardData = [
    {
      id: 1,
      link: "/login",
      imgSrc: img1,
      title: "Portal Login",
      description: "Buyer express interest and undergo pre-screening.",
      boxClass: "box-1",
      iconClass: "white-icon",
    },
    {
      id: 2,
      link: "/partnership-registration1",
      imgSrc: img2,
      title: "Select Partnership",
      description: "Evaluate performance, continuous feedback.",
      boxClass: "box-4 reg-project-box",
      iconClass: "white-icon",
    },
    {
      id: 3,
      link: "/application-submission",
      imgSrc: img3,
      title: "Application Submission",
      description: "Submit application necessary documentation.",
      boxClass: "box-2",
      iconClass: "white-icon",
    },
    {
      id: 4,
      link: "/product-portfolio",
      imgSrc: img4,
      title: "Product Portfolio",
      description: "Assess product quality, uniqueness, compatibility.",
      boxClass: "box-4",
      iconClass: "white-icon",
    },
    {
      id: 5,
      link: "/document-submission",
      imgSrc: img2,
      title: "Document Submission",
      description: "Verify compliance with legal operational requirements.",
      boxClass: "box-3",
      iconClass: "white-icon",
    },
    {
      id: 6,
      link: "/vendor-agreement",
      imgSrc: img3,
      title: "Buyer Agreement",
      description: "Sign agreement outlining terms and expectations.",
      boxClass: "box-4",
      iconClass: "white-icon",
    },
    {
      id: 7,
      link: "/application-status",
      imgSrc: img4,
      title: "Application Status",
      description: "Track  real-time status of your application process.",
      boxClass: "box-4",
      iconClass: "white-icon",
    },
    
    
    {
      id: 8,
      link: "/partnership-activation",
      imgSrc: img4,
      title: "Partnership Activation",
      description: "Gain access and upload product listings.",
      boxClass: "box-4",
      iconClass: "white-icon",
    },
  ];

  const handleCardClick = (id) => {
    setClickedCards((prevCards) => {
      const updatedCards = prevCards.filter((cardId) => cardId !== id); // Remove card if it already exists
      updatedCards.push(id); // Add the card as the most recently clicked
      sessionStorage.setItem("clickedCards", JSON.stringify(updatedCards)); // Save in sessionStorage
      return updatedCards;
    });
  };

  useEffect(() => {
    // Update sessionStorage whenever the clickedCards array changes
    sessionStorage.setItem("clickedCards", JSON.stringify(clickedCards));
  }, [clickedCards]);

  return (
    <div className="project-area style-three mt-5">
      <div className="container">
        <BusinessLocationHeader
          subTitle="Begin your journey with De Koshur Crafts"
          mainTitle="Welcome Onboarding"
          secondaryTitle=""
          description=" We are delighted to see your interest in partnering with us. Please complete the online form to kickstart your journey. We're excited to work together and <b>achieve great success!</b> "
        />
        <div className="row project-bs">
          {cardData.map(({ id, link, imgSrc, title, description, boxClass,iconClass }) => {
            let cardClass = "red-class"; // Default: Red for unclicked cards
            if (clickedCards.includes(id)) {
              cardClass = clickedCards[clickedCards.length - 1] === id ? "green-class" : "gray-class"; // Green for most recent, Gray for previously clicked
            }

            return (
              <Link
                key={id}
                className="col-xl-3 col-lg-4 col-md-6"
                to={link}
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => handleCardClick(id)} // Mark card as clicked
              >
                <LocationCard
                  iconSrc={imgSrc}
                  title={title}
                  description={description}
                  className={`${boxClass} ${cardClass}`}
                  titleClass="text-white"
                  iconClass={iconClass}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectArea;
