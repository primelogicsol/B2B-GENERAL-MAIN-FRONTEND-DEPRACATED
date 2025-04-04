/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
const CounterAreaManual = ({ countersData, heading,para }) => {
  
  return (
    <div className="counter-area">
      <div className="container">
        <div className="row counter-item">
            <div className="" >
              <div className="counter-single-box">
                <div className="counter-content">
                  <h4 className="counter">{heading}</h4>
                  <p style={{fontSize:'27px'}}>{para}</p>
                </div>
              </div>
            </div>
          <div className="col-lg-12 col-md-12 mt-4 col-sm-12 col-xs-12">
            <div className="text-center font-weight-bold">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterAreaManual;











