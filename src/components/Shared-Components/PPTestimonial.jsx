import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
function PPTestimonial() {
  const [autoplay, setAutoplay] = useState(true); // State to control autoplay
  const sliderRef = useRef(null);
  const slides = [
    {
      title: "Customer Satisfaction",
      description:
        "Measures customer feedback, reviews, and repeat business. High scores reflect a strong understanding of client needs and exceptional service.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 6", class: "" },
        { label: "Performer", range: "7-8", class: "color-yellow" },
        { label: "Leader", range: "> 8", class: "color-green" },
      ],
    },
    {
      title: "Delivery Timeliness",
      description:
        "Evaluates adherence to the agreed-upon delivery schedules. Consistent and timely on-time deliveries effectively showcase reliability and operational efficiency.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 6", class: "" },
        { label: "Performer", range: "7-8", class: "color-yellow" },
        { label: "Leader", range: "> 8", class: "color-green" },
      ],
    },
    {
      title: "Products Quality",
      description:
        "Assesses the durability, craftsmanship, and value of products or services provided. High-quality offerings enhance brand reputation and customer trust.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 7", class: "" },
        { label: "Performer", range: "8", class: "color-yellow" },
        { label: "Leader", range: "> 8", class: "color-green" },
      ],
    },
    {
      title: "Compliance with DKC",
      description:
        "Ensures adherence to organizational standards, ethical guidelines, and operational protocols. Compliance reflects professionalism and alignment with company values.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 6", class: "" },
        { label: "Performer", range: "7-8", class: "color-yellow" },
        { label: "Leader", range: "> 8", class: "color-green" },
      ],
    },
    {
      title: "Innovation",
      description:
        "Recognizes the ability to innovate and adapt to market trends, customer preferences, and emerging challenges. Encourages creative problem-solving and agility in operations.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 2", class: "" },
        { label: "Performer", range: "3-6", class: "color-yellow" },
        { label: "Leader", range: "> 6", class: "color-green" },
      ],
    },
    {
      title: "Communication",
      description:
        "Assesses effectiveness in responding to queries, maintaining transparency, and collaborating with stakeholders. Strong communication fosters seamless partnerships.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 5", class: "" },
        { label: "Performer", range: "6-7", class: "color-yellow" },
        { label: "Leader", range: "> 7", class: "color-green" },
      ],
    },
    {
      title: "Financial Stability",
      description:
        "Evaluates the vendor's ability to maintain financial health and meet obligations. A financially stable vendor ensures uninterrupted operations.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 4", class: "" },
        { label: "Performer", range: "5-8", class: "color-yellow" },
        { label: "Leader", range: "> 8", class: "color-green" },
      ],
    },
    {
      title: "Operational Efficiency",
      description:
        "Measures the effectiveness of internal processes, inventory management, and resource allocation. High efficiency reduces costs and increases reliability.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 6", class: "color-red" },
        { label: "Performer", range: "7-8", class: "color-yellow" },
        { label: "Leader", range: "> 8", class: "color-green" },
      ],
    },
    {
      title: "Regulatory Standards",
      description:
        "Ensures that all legal requirements and industry-specific regulations are consistently met. Strong regulatory compliance effectively minimizes risks and maintains organizational credibility.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 7", class: "color-red" },
        { label: "Performer", range: "7-8", class: "color-yellow" },
        { label: "Leader", range: "> 8", class: "color-green" },
      ],
    },
    {
      title: "Sustainability",
      description:
        "Evaluates the use of eco-friendly materials, waste management, and sustainable production practices. Vendors with minimal environmental impact align with global sustainability goals.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 5", class: "color-red" },
        { label: "Performer", range: "6-7", class: "color-yellow" },
        { label: "Leader", range: "> 7", class: "color-green" },
      ],
    },
    {
      title: "Tech Capabilities",
      description:
        "Measures the adoption of technology for production, supply chain, and customer engagement. Technologically advanced vendors demonstrate efficiency and innovation.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 3", class: "color-red" },
        { label: "Performer", range: "4-7", class: "color-yellow" },
        { label: "Leader", range: "> 7", class: "color-green" },
      ],
    },
    {
      title: "Artisan Engagement",
      description:
        "Assesses vendor efforts in supporting and empowering artisans, ensuring fair wages and opportunities. High scores reflect social responsibility and ethical practices.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 5", class: "color-red" },
        { label: "Performer", range: "6-8", class: "color-yellow" },
        { label: "Leader", range: "> 8", class: "color-green" },
      ],
    },
    {
      title: "Risk Management",
      description:
        "Evaluates the vendor’s ability to foresee, mitigate, and address potential risks in operations. Effective risk management ensures continuity and resilience.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 4", class: "color-red" },
        { label: "Performer", range: "5-8", class: "color-yellow" },
        { label: "Leader", range: "> 8", class: "color-green" },
      ],
    },
    {
      title: "Product Availability",
      description:
        "Ensures consistent stock levels to effectively meet market demand and avoid any disruptions. High availability reflects robust supply chain management practices.",
      rating: 5,
      thresholds: [
        { label: "Underachiever", range: "< 5", class: "color-red" },
        { label: "Performer", range: "6-8", class: "color-yellow" },
        { label: "Leader", range: "> 8", class: "color-green" },
      ],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleHeroVideoClick = () => {
    setAutoplay((prevAutoplay) => {
      if (prevAutoplay) {
        if (sliderRef.current) sliderRef.current.slickPause();
      } else {
        if (sliderRef.current) sliderRef.current.slickPlay();
      }
      return !prevAutoplay;
    });
  };
  return (
    <div className="testimonial-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h5 className="section-sub-title" style={{ fontSize: "25px" }}>
                KPI Evaluation Metrics Framework for Buyers
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="testi_list">
              <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                  <div class="col-lg-12 col-md-12">
                    <div className="testi-box" key={index}>
                      <div className="testi-single-box ms-4 py-4">
                        <div className="testi-icon">
                          <h5 className="text-white">{slide.title}</h5>
                        </div>
                        <div className="testi-content">
                          <p
                            className="testi-text"
                            style={{ fontSize: "16px" }}
                          >
                            {slide.description}
                          </p>
                          <ul className="testi-rating">
                            {Array.from({ length: slide.rating }).map(
                              (_, starIndex) => (
                                <li key={starIndex}>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                              )
                            )}
                          </ul>
                          <h3 className="testi-title">Threshold Score</h3>
                          <div className="row mt-3">
                            {slide.thresholds.map(
                              (threshold, thresholdIndex) => (
                                <div
                                  className="col-lg-4 col-md-12 col-sm-12 col-xs-12"
                                  key={thresholdIndex}
                                >
                                  <div className="threshold">
                                    <h6>{threshold.label}</h6>
                                    <p className={threshold.class}>
                                      <b>{threshold.range}</b>
                                    </p>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="hero-video-icon d-flex justify-content-center">
            <Link
              to="https://www.youtube.com/watch?v=Wx48y_fOfiY"
              className="video-vemo-icon venobox vbox-item"
              data-vbtype="youtube"
              data-autoplay="true"
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                handleHeroVideoClick();
              }}
            >
              <i className="bi bi-pause"></i>
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PPTestimonial;
