import React from 'react';

const BusinessLocationHeader = ({
  subTitle,
  mainTitle,
  secondaryTitle,
  description,
}) => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-7">
        <div className="section-title text-left">
          <h5 className="section-sub-title">{subTitle}</h5>
          <h1
            style={{ fontSize: '29px !important' }}
            className="section-main-title"
          >
            {mainTitle}
          </h1>
          <h1 className="section-main-title">{secondaryTitle}</h1>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="section-title text-left">
          <p className="section-des text-dark" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};

export default BusinessLocationHeader;
