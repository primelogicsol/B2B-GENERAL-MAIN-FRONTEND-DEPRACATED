import React, { useEffect, useRef, useState } from "react";
import pattern1 from "../../assets/images/pattern-1.png";

const ProgressSection = () => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null); // Reference for the section
  const [inView, setInView] = useState(false); // State to track visibility

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
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
        <div className="row">
          <div className="section-title">
            <h5 className="section-sub-title1">Our Registered Buyer Network</h5>
          </div>
          <div className="text-center"></div>
        </div>

        <div className="last-sec" ref={scrollContainerRef}>
          {[
            { title: "Individual", progress: 1523 },
            { title: "Retailers", progress: 351 },
            { title: "Wholesalers", progress: 311 },
            { title: "E-commerce Platforms", progress: 18 },
            { title: "Interior Designers", progress: 68 },
            { title: "Corporate Buyers", progress: 8 },
            { title: "Art Collectors", progress: 205 },
            { title: "Importers/Exporters", progress: 52 },
            { title: "Museums and Galleries", progress: 7 },
            { title: "Hospitality Chains", progress: 21 },
            { title: "Fashion Designers", progress: 28 },
          ].map((item, index) => (
            <div className="progress-block item" key={index}>
              <div className="progress-circle" data-progress={item.progress}>
                <div className="progress-value">0</div>
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

export default ProgressSection;
