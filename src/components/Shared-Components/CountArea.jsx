import React from 'react';

const CounterArea = () => {
  return (
    <div className="counter-area">
      <div className="container">
        <div className="row counter-item">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter-single-box">
              <div className="counter-content">
                <h4 className="counter">98</h4>
                <span>%</span>
                <p>Compliance Assurance</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter-single-box">
              <div className="counter-content">
                <h4 className="counter">95</h4>
                <span>%</span>
                <p>Technology Adoption Rate</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter-single-box">
              <div className="counter-content">
                <h4 className="counter">95</h4>
                <span>%</span>
                <p>Supply Chain Efficiency</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter-single-box">
              <div className="counter-content">
                <h4 className="counter">60</h4>
                <span>%</span>
                <p>Cost Savings</p>
              </div>
            </div>
          </div>
        </div>
        {/* Uncomment and import the image if needed */}
        {/* <div className="counter-thumb">
          <img src="assets/images/home-3/counter-thu.png" alt="thumb" />
        </div> */}
      </div>
    </div>
  );
};

export default CounterArea;
