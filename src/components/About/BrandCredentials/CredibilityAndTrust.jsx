import React from 'react';

const CredibilityAndTrust = () => {
  const items = [
    'Credibility and Trust',
    'Quality Assurance',
    'Market Access',
    'Networking Opportunities',
    'Support and Resources',
    'Competitive Advantage',
    'Ethical and Fair-Trade Practices',
    'Brand Recognition',
    'Consumer Confidence',
    'Compliance with Standards'
  ];

  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
          <h6 style={{ fontSize: '17px', lineHeight: '26px',fontWeight:'700' }}>
            {items.map((item, index) => (
              <span key={index}>
                {item} <span style={{ color: '#ff3c00' }}>I</span>{' '}
              </span>
            ))}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CredibilityAndTrust;
