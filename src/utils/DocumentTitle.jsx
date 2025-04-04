import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/home": "Home - Business",
      "/ecommerce": "E-commerce",
      "/services": "Our Services - Business",
      "/": "Business",
    };

    document.title = titles[location.pathname] || "Business";
  }, [location]);

  return null;
};

export default DynamicTitle;
