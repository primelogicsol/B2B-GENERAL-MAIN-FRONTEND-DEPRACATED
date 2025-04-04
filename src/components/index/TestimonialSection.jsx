/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import review_img from '../../assets/images/review.png';
import slide_shape from '../../assets/images/home-3/slide-shape.png';

const TestimonialSection = () => {
  const scrollableRef = useRef(null); 
  const [testimonials, setTestimonials] = useState([
    {
      title: "Authentic Kashmiri Crafts",
      description:
        "Source directly from Kashmiri artisans for genuine, high-quality products. Enjoy the uniqueness of handcrafted pieces, including Pashmina shawls, carpets, and wooden crafts, while ensuring authenticity and cultural value in each product.",
    },
    {
      title: "Affordable Bulk Purchasing",
      description:
        "Take advantage of competitive pricing and bulk purchasing options. Source high-quality Kashmiri crafts directly from artisans at wholesale rates, enabling you to stock your store or marketplace without excessive costs.",
    },
    {
      title: "Diverse Product Range",
      description:
        "Explore a wide range of Kashmiri crafts including textiles, jewelry, wooden products, and home decor. Expand your product offerings with exclusive handcrafted goods, adding value and variety to your business.",
    },
    {
      title: "Customized Orders and Flexibility",
      description:
        "Customize your orders based on specific buyer needs. Whether it's unique designs, large quantities, or seasonal products, work directly with vendors to ensure your inventory matches customer preferences and demand.",
    },
    {
      title: "Consignment Models",
      description:
        "Minimize upfront costs with consignment models, paying only for the products once sold. This allows you to manage inventory more efficiently and reduce financial risks, while offering a wider range of products.",
    },
    {
      title: "Sustainability and Ethical Sourcing",
      description:
        "Support sustainability by sourcing eco-friendly, ethically made Kashmiri products. Ensure your business aligns with fair trade principles, promoting environmental responsibility and fair compensation for artisans across Kashmir.",
    },
    {
      title: "Seamless Integration",
      description:
        "Easily integrate Kashmiri crafts into your online store or retail business. Our platform provides user-friendly tools for sourcing, payment processing, and shipping, allowing you to sell authentic crafts with minimal effort.",
    },
  ]);

  const scrollUp = () => {
    const scrollContainer = scrollableRef.current; 
    if (scrollContainer) {
      scrollContainer.scrollBy({
        top: -200, 
        behavior: "smooth",
      });
    }
  };
  
  
  const scrollDown = () => {
    const scrollContainer = scrollableRef.current; 
    if (scrollContainer) {
      scrollContainer.scrollBy({
        top: 200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const scrollContainer = scrollableRef.current;
      if (scrollContainer) {
        scrollContainer.scrollBy({
          top: 200, 
          behavior: "smooth",
        });
      }
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);
  

  useEffect(() => {
   
    if (scrollableRef.current) {
      scrollableRef.current.style.maxHeight = "400px";
      scrollableRef.current.style.overflowY = "auto";
    }
  }, []);

  return (
    <div className="testimonial-area style-four">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="section-title text-left">
              <h6 className="section-sub-title">UNIQUE Kashmir BUSINESS GIFT</h6>
              <h1 className="section-main-title">Supporting Kashmiri</h1>
              <h1 className="section-main-title">
                Artisans & <span>Crafts.</span>
              </h1>
              <p>
              Elevating Kashmiri craftsmanship through tailored business processes, market insights, and technological innovation. We connect USA-based buyers to the Kashmir handicraft market, representing 80% of the demand, at no cost.
              </p>
            </div>
            <div className="testi-thumb">
              <div className="d-nonee-display">
                <button onClick={scrollUp} className="scrol-up-mobile d2">
                  <i className="bi bi-arrow-up-circle-fill"></i>
                </button>
                <img className="img-mobile-set" src={review_img} alt="thumb" />
                <button onClick={scrollDown} className="scrol-down-mobile d2">
                  <i className="bi bi-arrow-down-circle-fill"></i>
                </button>
              </div>
              <div className="testi-autor">
                <h4 className="testi-user-name">
                  <span>Platform Uniqueness</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <section className="splide position-relative">
                <div className="splide__track">
                  <div
                    className="splide__list scrollable"
                    ref={scrollableRef} 
                  >
                    {testimonials.map((testimonial, index) => (
                      <div className="splide__slide" key={index}>
                        <div className="col-lg-12">
                          <div className="testi-box">
                            <div className="testimonial-single-box">
                              <div className="testi-user-rating">
                                <ul className="testi-rating">
                                
                                </ul>
                              </div>
                              <div className="testi-text">
                                <p className="testi-desc">
                                  <b>{testimonial.title}</b>
                                  <br />
                                  {testimonial.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="col-md-1">
            <div className="slide-shape d1">
              <div className="slide-shape-inner slide-shape-inner1" style={{marginLeft:"13px"}}>
                <button onClick={scrollUp} className="scrol-up">
                  <i className="bi bi-arrow-up-circle-fill"></i>
                </button>
                <img src={slide_shape} alt="shape" />
                <button onClick={scrollDown} className="scrol-down">
                  <i className="bi bi-arrow-down-circle-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
