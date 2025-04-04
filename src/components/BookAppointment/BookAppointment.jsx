import React from "react";
import { Link } from "react-router-dom"; 

const Breadcrumb = () => {
  return (
    <div className="breadcumb-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcumb-content">
              <h4>Book Appointment</h4>
              <ul className="breadcumb-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="list-arrow">&lt;</li>
                <li>Book Appointment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
