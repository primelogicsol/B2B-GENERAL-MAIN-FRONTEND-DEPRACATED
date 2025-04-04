import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrumb = ({ title, links }) => {
  return (
    <div className="breadcumb-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcumb-content">
              <h4>{title}</h4>
              {/* <ul className="breadcumb-list"> */}
                {/* {links.map((link, index) => (
                  <React.Fragment key={index}>
                    {link.path ? (
                      <li>
                        <Link to={link.path}>{link.label}</Link>
                      </li>
                    ) : (
                      <li>{link.label}</li>
                    )}
                    {index < links.length - 1 && <li className="list-arrow">&lt;</li>}
                  </React.Fragment>
                ))} */}
              {/* </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop validation
Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string, // Optional for non-clickable items
    })
  ).isRequired,
};

export default Breadcrumb;
