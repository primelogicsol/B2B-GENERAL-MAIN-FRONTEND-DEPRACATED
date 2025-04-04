import React from 'react';

const LocationBullets = () => {
  const bulletPoints = [
    "Fueling Expansion Through Operational Synergy Worldwide.",
    "Logistics Streamlined for Maximum Efficiency and Impact.",
    "Bridging Markets, Unlocking Potential, Delivering Growth.",
    "Innovative Foundations for Limitless Global Connectivity.",
    "Expanding Horizons, Strengthening Networks, Achieving Goals."
  ];

  return (
    <div className="col-xl-6 col-lg-6 col-md-6 ps-5">
      <div className="mt-3 clskdsd">
        {bulletPoints.map((text, index) => (
          <p key={index} className="bullet-after">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LocationBullets;
