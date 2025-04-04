/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FooterUpper = ({ imageSrc, altText }) => {
  const [hoveredPoint, setHoveredPoint] = useState(null); // Track which point is hovered
  const navigate = useNavigate();

  const quadrilateral = [
    { x: 52.9, y: 50.77 },
    { x: 61.1, y: 50.77 },
    { x: 60.82, y: 57.43 },
    { x: 53.53, y: 58.34 },
  ];

  // Define specific regions for each link
  const link1Area = { x: 57, y: 58, width: 5, height: 5 }; // Coordinates for the first link
  const link2Area = { x: 45, y: 90, width: 5, height: 5 };
  const link3Area = { x: 10, y: 75, width: 5, height: 5 }; // Coordinates for the second link

  const isPointInArea = (xPercent, yPercent, area) => {
    return (
      xPercent >= area.x &&
      xPercent <= area.x + area.width &&
      yPercent >= area.y &&
      yPercent <= area.y + area.height
    );
  };

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((event.clientY - rect.top) / rect.height) * 100;

    
    // Check if mouse is hovering over any of the link areas
    if (isPointInArea(xPercent, yPercent, link1Area)) {
      setHoveredPoint({ x: xPercent, y: yPercent, to: "/partnership-registration" });
    } else if (isPointInArea(xPercent, yPercent, link2Area)) {
      setHoveredPoint({ x: xPercent, y: yPercent, to: "https://khcrf.org/memberships.html" });
    } else if (isPointInArea(xPercent, yPercent, link3Area)) {
      setHoveredPoint({ x: xPercent, y: yPercent, to: "https://khcrf.org/memberships.html" });
    } else {
      setHoveredPoint(null); // Reset if no point is being hovered over
    }
  };

  return (
    <section className="footer-upper" style={{ position: "relative" }}>
      <img
        src={imageSrc}
        alt={altText}
        style={{ width: "100%", display: "block" }}
        onMouseMove={handleMouseMove} // Track mouse movement to check for hovering
      />
      
      {hoveredPoint && (
        <Link
          to={hoveredPoint.to} // Dynamically set the link based on hovered point
          style={{
            position: "absolute",
            left: `${hoveredPoint.x}%`,
            top: `${hoveredPoint.y}%`,
            transform: "translate(-50%, -50%)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "block",
            cursor: "pointer", // Ensure pointer cursor on hover
          }}
        />
      )}
    </section>
  );
};

export default FooterUpper;
