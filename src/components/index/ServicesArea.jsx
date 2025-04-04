import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ServiceArea = ({ services, subtitle, mainTitle, highlight, getServiceCardStyle = () => {} }) => {
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate(); // React Router navigation function

  const handleClick = (service) => {
    if (getServiceCardStyle(service.package) === "active-package") {
      navigate('/package', { state: { service } }); // Navigate to package page
    } else {
      setActiveService(service.package); // Set as active if not already
    }
  };
  return (
    <div className="service-area style-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h5 className="section-sub-title" dangerouslySetInnerHTML={{ __html: subtitle }} />
              <h1 className="section-main-title">
                {mainTitle} <span style={{ color: "#ff3d00" }}>{highlight}</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 my-4">
              <div
                className={`single-service-box ${getServiceCardStyle(service.package)} ${activeService === service.id ? "active" : ""}`}
                onClick={() => handleClick(service)}
              >
                <div className="service-box-inner">
                  <div className="service-content">
                    <h4 className="service-title">{service.title}</h4>
                    {service.fee && (
                      <h6>
                        <span><b>Fee </b></span>: {service.fee}
                      </h6>
                    )}
                    {service.challenge && (
                      <p className="service-des mt-5">
                        <span style={{ color: "#ff7102" }}><b>Challenge</b></span>: {service.challenge}
                      </p>
                    )}
                    {service.benefit && (
                      <p className="service-des">
                        <span style={{ color: "#ff7102" }}><b>Benefit</b></span>: {service.benefit}
                      </p>
                    )}
                    <p className="service-des mt-5">
                      {service.DesignFor && (
                        <>
                          <span style={{ color: "#ff3d00" }}><b>Designed For</b></span>: {service.DesignFor}
                          <br />
                        </>
                      )}
                      {service.access && (
                        <>
                          <span style={{ color: "#ff3d00" }}><b>Direct Access</b></span>: {service.access}
                          <br />
                        </>
                      )}
                      {service.compulsory && (
                        <>
                          <span style={{ color: "#ff3d00" }}><b>Compulsory</b></span>: {service.compulsory}
                          <br />
                        </>
                      )}
                      {service.KPIscore && (
                        <>
                          <span style={{ color: "#ff3d00" }}><b>KPI Score</b></span>: {service.KPIscore}
                          <br />
                        </>
                      )}
                    </p>
                  </div>
                  <div className="service-icon">

                    <img
                      src={getServiceCardStyle(service.package) === "active-package" ? service.icon : service.active_icon}
                      alt="icon"
                      style={{ width: "56px", height: "56px" }}
                    />

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
