import React from 'react';

const FooterUpper = ({ imageSrc, altText }) => {
  return (
    <section className="footer-upper">
      <img src={imageSrc} width="100%" alt={altText} />
    </section>
  );
};

export default FooterUpper;
