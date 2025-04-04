import React from 'react';
import WidgetCategory from './WidgetCategory';
import DownloadButton from './DownloadBtn';

const WidgetSidebar = () => {
  const categories = [
    {
      icon: "/assets/images/inner/category-icon.png",
      title: "Brand Evolution",
      link: "/service/service-details",
    },
    {
      icon: "/assets/images/inner/category-icon.png",
      title: "Cultural Preservation",
      link: "/service/service-details",
    },
    {
      icon: "/assets/images/inner/category-icon.png",
      title: "Heritage Craftsmanship",
      link: "/service/service-details",
    },
    {
      icon: "/assets/images/inner/category-icon.png",
      title: "Sustainable Practices",
      link: "/service/service-details",
    },
    {
      icon: "/assets/images/inner/category-icon.png",
      title: "Global Outreach",
      link: "/service/service-details",
    },
    {
      icon: "/assets/images/inner/category-icon.png",
      title: "Strategic Partnerships",
      link: "/service/service-details",
    },
  ];

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="widget-sidber">
          <div className="widget-sidber-content">
            <h4>Pillars of Excellence</h4>
          </div>
          <WidgetCategory categories={categories} />
        </div>

        {/* <div className="widget-sidber">
          <div className="widget-sidber-content">
            <h4>Download</h4>
          </div>
          <DownloadButton
            href="#"
            icon="bi bi-file-earmark-pdf"
            label="Our Story"
            downloadIcon="bi bi-download"
          />
        </div> */}
      </div>
    </div>
  );
};

export default WidgetSidebar;
