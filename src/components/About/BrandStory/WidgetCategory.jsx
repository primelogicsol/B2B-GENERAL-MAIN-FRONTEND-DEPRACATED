import React from 'react';
import { Link } from 'react-router-dom';
const WidgetCategory = ({ categories }) => {
  return (
    <div className="widget-category">
      <ul style={{paddingLeft:'0px'}}>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={category.link} style={{textDecoration:'none'}}>
              {/* <img src={category.icon} /> */}
              {category.title}
              <i className="bi bi-arrow-right"></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetCategory;