import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
    setActiveSubMenu(null);
  }, [location.pathname]);

  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (index) => {
    setActiveSubMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveSubMenu(null);
  };

  const navigationData = [
    { label: "Home", to: "/" },
    {
      label: "About Us",
      to: "#",
      subMenu: [
        { label: "Our Ethos", to: "/our-ethos" },
        { label: "Brand Story", to: "/brand-story" },
        { label: "Brand Credentials", to: "/brand-credential" },
        { label: "Business Location", to: "/bussiness-location" },
        { label: "Business Niche", to: "/bussiness-niche" },
        { label: "Team", to: "/team" },
        { label: "Contact Us", to: "/contact" },
      ],
    },
    {
      label: "Our Partnership",
      to: "#",
      subMenu: [
        { label: "E Commerce", to: "/ecommerce" },
        { label: "Brick & Mortar", to: "/brick-mortar" },
        { label: "Import Export", to: "/importexport" },
        { label: "Consignment", to: "/consignment" },
        { label: "Exhibition", to: "/exhibition" },
        { label: "Investor", to: "/subsidary" },
        { label: "Franchise", to: "/franchise" },
      ],
    },
    { label: "Partnership Process", to: "/partnership-process" },
    { label: "Partnership Registration", to: "/partnership-registration" },
    { label: "Book Appointment", to: "/book-appointment" },
  ];

  return (
    <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none w-100">
      <div className="menu-header d-flex justify-content-between align-items-center p-2">
        <h4 className="menu-name text-white mt-2">DKC B2B Connect</h4>
        <button className="menu-toggle-button" onClick={toggleMenu} style={{ border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer',marginLeft: 'auto',maxWidth:"35px" }}>
          {isOpen ? 'X' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu open">
          <nav className="solutek_menu">
            <ul className="nav_scroll">
              {navigationData.map((item, idx) => (
                <li key={idx} onMouseLeave={handleMouseLeave} onMouseEnter={() => item.subMenu && handleMouseEnter(idx)}>
                  <Link to={item.to} onClick={() => {item.subMenu && setActiveSubMenu(activeSubMenu === idx ? null : idx);window.scrollTo(0, 0) }}>
                    {item.label} {item.subMenu && <i className="bi bi-chevron-down"></i>}
                  </Link>
                  {item.subMenu && activeSubMenu === idx && (
                    <ul className="sub-menu">
                      {item.subMenu.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <Link to={subItem.to}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
