import React, { useState } from 'react';

const CaseStudyArea = ({ title, subtitle,colortitle, categories, caseStudyData }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleFilterClick = (category) => {
    setActiveCategory(category);
  };

  // Filter data based on activeCategory
  const filteredData =
    activeCategory === 'all'
      ? caseStudyData
      : caseStudyData.filter((item) => item.category === activeCategory);

  return (
    <div className="case-study-area">
      <div className="container">
        {/* Section Title */}
        <div className="row case-study-bg">
          <div className="col-lg-12 col-sm-12">
            <div className="section-title">
              <h5 className="section-sub-title" >{title}</h5>
              <h6 className='mb-4'>{subtitle}<span  style={{color:'#ff3c00',fontSize:"18px"}}><b>{colortitle}</b></span></h6>
            </div>
            {/* Menu Filtering */}
            <div className="case_study_nav">
              <div className="case_study_menu">
                <ul className="filter-buttons">
                  {categories.map((category) => (
                    <li
                      key={category.key}
                      className={`mt-2 ${
                        activeCategory === category.key ? 'current_menu_item' : ''
                      }`}
                      role="button"
                      onClick={() => handleFilterClick(category.key)}
                    >
                      {category.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Case Study Content */}
        <div className="row image_load">
          {filteredData.map((item, index) => (
            <CaseStudyBox
              key={index}
              title={item.title}
              subtitle={item.subtitle || ''}
              features={item.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Case Study Box Component
const CaseStudyBox = ({ title, subtitle, features }) => (
  <div className="col-lg-6 col-sm-6 grid-item">
    <div className="case-study-single-box">
      <div className="case-study-content case-sds mt-2">
        <div className="case-study-title">
          <h5>
            <b>{title}</b>
          </h5>
          {subtitle && <h3>{subtitle}</h3>}
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default CaseStudyArea;





