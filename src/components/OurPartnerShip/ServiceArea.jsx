/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import service5 from '../../assets/images/service5.png';
import service7 from '../../assets/images/service7.png';
import service8 from '../../assets/images/service8.png';

const ServiceArea = ({ servicesData,main_title='',title,description='',bottom_heading='',bottom_text='', sub_title='' }) => {
  const uniqueCategories = [...new Set(servicesData.map((service) => service.category))];
  if (!servicesData || servicesData.length === 0) {
    return <p>No services available.</p>;
  }

  return (
    <div className="sservice-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
                {main_title ? <h5 className="section-sub-title">{main_title}</h5> :  <h5 className="section-sub-title">
                {/* Platform Benefits for Buyers / Vendors / Industry */}
                Platform Product Design Protection
                </h5>}
             
                { description ? <h4 className='' style={{fontSize:"14px"}}> {description}</h4> : <h4 className='' style={{fontSize:"14px"}}>We understand your concerns about protecting your valuable designs in the digital marketplace. As creators and artisans, your intellectual property represents both your artistic vision and business assets. Our comprehensive protection system has been specifically developed to address the common challenges faced by vendors</h4>}
                
              {/* <h1 className="section-main-title" style={{ fontSize: '30px' }}>
                How Professional Services Drive</h1>
              <h1 className="section-main-title" style={{ fontSize: '30px' }}>
                Success for <span>All.</span>
              </h1> */}
            </div>
          </div>
          {uniqueCategories.map((section) => {
  const filteredServices = servicesData.filter((service) => service.category === section);
        // Only render section title if there are matching services
        return filteredServices.length > 0 ? (
          <React.Fragment key={section}>
            <div className="col-lg-12 mb-1" >
              <div className="section-title"> 
                {  <h5 className="section-sub-title">
                  {/* Platform Benefits for {section} */}
                  {section}
                </h5>}
                
              </div>
            </div>
            {filteredServices.map((service, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                <div className="service-single-box servicesdseds">
                  { service.image && <div className="service-icon">
                    <img src={service.image} alt={service.title} />
                  </div>}
                  
                  <div className="service-content">
                    <h3 className="service-title mb-4">{service.title}</h3>
                    { service.description && <p className="service-text">{service.description}</p> }
                    
                    <ul className="mt-2 ps-1">
              {service.list && service.list.map((item, i) => (
                <li key={i} className="text-gray-600 " style={{fontSize:"13px"}}>{item}</li>
              ))}
            </ul>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ) : null;
      })}

      <div>
        <h3 className='text-center mt-5' style={{color:"#ff3c00"}}>{bottom_heading}</h3>
        <p className='text-center'>{bottom_text}</p>
      </div>
        </div>
        {/* <div className="service-shape bounce-animate3">
          <img src={service5} alt="service5" />
        </div> */}

        {/* <div className="service-shape2">
          <img src={service7} alt="service7" />
        </div>

        <div className="service-shape3 bounce-animate4">
          <img src={service8} alt="service8" />
        </div> */}
      </div>
    </div>
  );
};

export default ServiceArea;
