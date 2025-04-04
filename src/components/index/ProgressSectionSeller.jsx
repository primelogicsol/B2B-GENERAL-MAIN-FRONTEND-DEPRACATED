import React, { useEffect, useRef, useState } from "react";

const SellerNetworkSection = () => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null); // Reference for the section
  const [inView, setInView] = useState(false); // State to track visibility

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const progressCircles = document.querySelectorAll(".progress-circle");

    const animateProgress = (circle) => {
      const progress = parseInt(circle.getAttribute("data-progress"), 10);
      const progressValue = circle.querySelector(".progress-value");

      let startValue = 0;
      const duration = 2000;
      const targetValue = progress;
      const incrementRate = targetValue / (duration / 16);
      let lastTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - lastTime;
        if (elapsedTime >= 16) {
          lastTime = currentTime;
          startValue = Math.min(startValue + incrementRate, targetValue);
          progressValue.textContent = Math.round(startValue);

          if (startValue < targetValue) {
            requestAnimationFrame(animate);
          } else {
            progressValue.textContent = targetValue;
          }
        } else {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    if (inView) {
      progressCircles.forEach(animateProgress); // Only animate if the section is in view
    }
  }, [inView]); // Re-run the effect if the visibility changes

  useEffect(() => {
    // Set up IntersectionObserver to trigger when the section enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Set inView to true when the section comes into view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="progress-section mt-3 py-5 text-white" ref={sectionRef}>
      <div className="container">
        <div className="row mb-2">
          <div className="section-title">
            <h5 className="section-sub-title1">
              Our Registered Seller Network
            </h5>
          </div>
          <div className="text-center"></div>
        </div>

        <div className="last-sec" ref={scrollContainerRef}>
          {[
            { title: "Individual Artisans", progress: 1032 },
            { title: "Artisan Cooperatives", progress: 15 },
            { title: "Small Businesses", progress: 23 },
            { title: "Women Enterprises", progress: 6 },
            { title: "Export-Manufacturers", progress: 17 },
            { title: "Online-First Sellers", progress: 22 },
            { title: "Design Specialists", progress: 3 },
            { title: "Luxury Craft Sellers", progress: 16 },
            { title: "Wholesale Suppliers", progress: 13 },
            { title: "Exhibitors", progress: 7 },
          ].map((item, index) => (
            <div className="progress-block item" key={index}>
              <div className="progress-circle" data-progress={item.progress}>
                <div className="progress-value"></div>
              </div>
              <p className="progress-title mt-3">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="coutingsec scroll-section d-flex justify-content-center mb-2">
          <button className="scrol-left w-25" onClick={handleScrollLeft}>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </button>
          <button className="scrol-right w-25" onClick={handleScrollRight}>
            <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SellerNetworkSection;
