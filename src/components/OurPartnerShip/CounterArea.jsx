import React, { useState, useEffect } from 'react';

const CounterArea = ({ countersData, heading }) => {
  const [counterValues, setCounterValues] = useState(
    countersData.map(() => 0) // Initialize all counters to 0
  );

  useEffect(() => {
    // Function to animate the counter
    const animateCounter = (index, target) => {
      let current = 0;
      const increment = target / 200; 
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCounterValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = Math.floor(current); 
          return newValues;
        });
      }, 10); 
    };

  
    countersData.forEach((counter, index) => {
      animateCounter(index, counter.target);
    });
  }, [countersData]); 

  return (
    <div className="counter-area">
      <div className="container">
        <div className="row counter-item">
          {countersData.map((counter, index) => (
            <div className="col" key={index}>
              <div className="counter-single-box">
                <div className="counter-content">
                  <span>$</span>
                  <h4 className="counter" style={{textDecoration:"line-through",textDecorationColor:"black"}}>{counterValues[index]}</h4>
                  
                  
                  <p>Early Adopters</p>
                  <span className="mt-2 fs-3">{counter.range}</span>
                  <p>{counter.planName}</p>
                  {counter.size ? <p>Space: {counter.size}</p> :""}
                  {counter.location ? <p>Location: {counter.location}</p> :""}
                  {counter.discount ? <p>Discounted Fees: {counter.discount}</p> :""}
                 
                </div>
              </div>
            </div>
          ))}
         
          <div className="col-lg-12 col-md-12 mt-4 col-sm-12 col-xs-12">
            <div className="text-center font-weight-bold">
              <h4>{heading}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;












