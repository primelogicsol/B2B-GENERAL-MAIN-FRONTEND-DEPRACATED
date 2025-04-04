// import React, { useState } from "react";

// const CaseStudyVideo = ({
//   videoId,
//   videoSrc,
//   activeVideoId,
//   setActiveVideoId,
// }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const togglePlay = () => {
//     const video = document.getElementById(videoId);

//     if (activeVideoId !== videoId) {
//       setActiveVideoId(videoId);
//     }

//     if (isPlaying) {
//       video.pause();
//     } else {
//       video.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const toggleFullscreen = () => {
//     const video = document.getElementById(videoId);
//     if (isFullscreen) {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       } else if (document.msExitFullscreen) {
//         document.msExitFullscreen();
//       } else if (document.webkitExitFullscreen) {
//         document.webkitExitFullscreen();
//       }
//     } else {
//       if (video.requestFullscreen) {
//         video.requestFullscreen();
//       } else if (video.msRequestFullscreen) {
//         video.msRequestFullscreen();
//       } else if (video.webkitRequestFullscreen) {
//         video.webkitRequestFullscreen();
//       }
//     }
//     setIsFullscreen(!isFullscreen);
//   };

//   return (
//     <div className="col-lg-6 mt-3 col-md-6">
//       <div className="case-studies-single-box">
//         <div className="case-studies-thumb">
//           <video
//             id={videoId}
//             className="videi1"
//             src={videoSrc}
//             onPlay={() => setIsPlaying(true)}
//             onPause={() => setIsPlaying(false)}
//           ></video>
//           <div className="play-overlay" onClick={togglePlay}>
//             <div className="play-button"></div>
//           </div>
//           <div
//             className="fullscreen-button"
//             onClick={toggleFullscreen}
//             style={{
//               opacity: activeVideoId === videoId ? 1 : 0,
//               visibility: activeVideoId === videoId ? "visible" : "hidden",
//             }}
//           >
//             <i className="bi bi-fullscreen"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CaseStudiesArea = () => {
//   const [activeVideoId, setActiveVideoId] = useState(null);

//   return (
//     <div className="case-studies-area">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="section-title text-center">
//               <h6 className="section-sub-title" style={{ fontSize: "18px" }}>
//                 DKC B2B CONNECT – YOUR STRATEGIC PARTNER IN KASHMIRI LUXURY
//                 HANDICRAFTS
//               </h6>
//               <div className="col-lg-8 m-auto mb-4">
//                 <p className="text-2xl">
//                   We are Premier Leader in Kashmiri Handicrafts. A pioneering
//                   force in the omni-channel business ecosystem, sustainability,
//                   and research leadership. Your trusted B2B sourcing platform,
//                   ensuring certified authenticity, seamless logistics, and
//                   compliance. Strategically operating across New York, D.C., Los
//                   Angeles, San Francisco, Chicago, Houston, and Miami. A U.S.
//                   Veteran-Owned, WBENC, and MBE Certified Business.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="case-studies-box">
//             <div className="row">
//               <CaseStudyVideo
//                 videoId="video1"
//                 videoSrc="/videos/video1.mp4"
//                 activeVideoId={activeVideoId}
//                 setActiveVideoId={setActiveVideoId}
//               />
//               <CaseStudyVideo
//                 videoId="video2"
//                 videoSrc="/videos/video-2.mp4"
//                 activeVideoId={activeVideoId}
//                 setActiveVideoId={setActiveVideoId}
//               />
//               <CaseStudyVideo
//                 videoId="video3"
//                 videoSrc="/videos/video-3.mp4"
//                 activeVideoId={activeVideoId}
//                 setActiveVideoId={setActiveVideoId}
//               />
//               <CaseStudyVideo
//                 videoId="video4"
//                 videoSrc="/videos/video-4.mp4"
//                 activeVideoId={activeVideoId}
//                 setActiveVideoId={setActiveVideoId}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudiesArea;



import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const videoUrls = [
  "/videos/video-1.mp4",
  "/videos/video-2.mp4",
  "/videos/video-3.mp4",
  "/videos/video-4.mp4"
];

const AboutSection = ({ title, color_title, subtitle, description,description2, items, image, extraText,under_description,package_heading,package_heading2,third_heading,itemss }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <div className="about-section mt-5">
      <div className="container">
        <div className="row align-items-start">
          {/* Image Section */}
          

          {/* Content Section */}
          <div className="col-lg-6 align-items-center mx-auto">
            <div className="about-contact">
              <div className="section-title text-left">
                <h6 className="section-sub-title" style={{ fontSize: '15px' }}>
                  {subtitle} 
                </h6>
                <h1 className="section-main-title" style={{ fontSize: '20px' }}>
                  {title} <span>{color_title}</span>
                </h1>
                {/* <p className="section-title-descr">{description}</p> */}
                <h4 className="mt-2 section-main-title">
                  {package_heading} 
                </h4>
              </div>

              {/* List Section */}
              <div className="about-item-list">
                <ul>
                  {items.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{
                      __html: item, 
                    }}></li>
                  ))}
                </ul>
              </div>
              <h4 className="mt-2 section-main-title">
                  {package_heading2} 
                </h4>
                
                
                <div className="about-item-list">
                <div className="about-item-list">
                <ul>
        {itemss && itemss.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
              </div>
              </div>
              {/* Extra Text */}
              {extraText && (
                <div className="ec-text">
                  <h6 style={{ color: '#ff3d00' }}>{extraText.title}</h6>
                  <p>{extraText.description}</p>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-5" >
          <div className="about-thumb">
        <Slider {...settings}>
          {videoUrls.map((video, index) => (
            <div key={index}>
              <video controls width="100%">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </Slider>
        <p className='mt-20'>We enjoy <b>Global Leadership in Kashmir Handicrafts</b> , Business Innovation, Craft Advocacy, and Research Excellence. </p>
        <p>We are certified U.S. business committed to diversity, equity, inclusion, and belonging. As a U.S. Veteran-Owned Business, it holds prestigious certifications, including WBENC (<b>Women's Business Enterprise</b>) and MBE (<b>Minority Business Enterprise Program</b>), demonstrating its dedication to fostering an inclusive and equitable business environment.</p>
          <p>We are  America’s Premier Progressive <b>Omni-Channel</b> Business Ecosystem, customized exclusively for premier Kashmiri handicrafts</p>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
