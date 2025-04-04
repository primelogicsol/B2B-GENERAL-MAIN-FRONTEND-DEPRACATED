import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import main_logo from "../../assets/images/main_logo_scroll.png";
import main_logo_scroll from "../../assets/images/main_logo.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  // Handle scroll for sticky navbar
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
      label: "Partnerships",
      to: "#",
      subMenu: [
        { label: "Drop shipping", to: "/ecommerce" },
        { label: "Consignment", to: "/consignment" },
        { label: "Exhibition", to: "/exhibition" },
        { label: "Import Export", to: "/importexport" },
        { label: "Investor", to: "/subsidary" },
        { label: "Brick & Mortar", to: "/brick-mortar" },
        { label: "Franchise", to: "/franchise" },
      ],
    },
    { label: "Process", to: "/partnership-process" },
    { label: "Registration", to: "/partnership-registration" },
    { label: "Book Appointment", to: "/book-appointment" },
  ];

  return (
    <div
      id="sticky-header"
      className={`solutek_nav_manu ${isSticky ? "sticky" : ""}`}
      style={{
        
        height: window.innerWidth < 992 ? "50px" : isSticky ? "50px" : "100px",
      }}
    >
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          {/* Logo Section */}
          <div
            className="col-lg-2 header-main-logo d-none d-lg-block"
            style={{
              height: window.innerWidth < 992 ? "50px" : isSticky ? "50px" : "100px",
            }}
          >
            <img
              src={isScrolled ? main_logo_scroll : main_logo}
              alt="Logo"
              style={{
                width: isScrolled ? "35px" : "",
                height: isScrolled ? "35px" : "",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </div>

          {/* Desktop Navbar */}
          {!isMobile && (
            <>
              <div
                className="col-lg-8"
                style={{
                  height: isSticky ? "50px" : "100px",
                }}
              >
                <nav
                  className="solutek_menu d-flex justify-content-center"
                  style={{
                    height: isSticky ? "50px" : "100px",
                  }}
                >
                  <ul className="nav_scroll">
                    {navigationData.map((item, idx) => (
                      <li
                        key={idx}
                        className="me-3"
                        onMouseLeave={() => setActiveSubMenu(null)}
                        onMouseEnter={() =>
                          item.subMenu && setActiveSubMenu(idx)
                        }
                      >
                        <Link
                          to={item.to}
                          onClick={() => item.subMenu && handleMenuClick(idx)}
                          style={{
                            color:
                              location.pathname === item.to ? "#ff3c00" : "",
                          }}
                        >
                          {item.label}{" "}
                          {item.subMenu && (
                            <i className="bi bi-chevron-down"></i>
                          )}
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

              {/* Desktop Login/Register Buttons */}
              <div className="col-lg-2">
                <div className="header-btn pt-0">
                  <Link to="/login" className="me-1">
                    Login <span style={{ color: "#ff3c00" }}>|</span>{" "}
                  </Link>
                  <Link to="/register">Register</Link>
                </div>
              </div>
            </>
          )}

          {/* Mobile Navbar */}
          {isMobile && (
            <div className="mobile-menu-area sticky d-sm-block d-lg-none w-100">
              <div className="menu-header d-flex justify-content-between align-items-center p-2">
                <h4 className="menu-name text-white mt-2">DKC B2B Connect</h4>
                <button
                  className="menu-toggle-button"
                  onClick={toggleMobileMenu}
                  style={{
                    border: "none",
                    background: "none",
                    fontSize: "24px",
                    cursor: "pointer",
                    marginLeft: "auto",
                    maxWidth: "35px",
                    color:"white"
                  }}
                >
                  {isMobileMenuOpen ? "X" : "☰"}
                </button>
              </div>
              {isMobileMenuOpen && (
                <div className="mobile-menu open">
                  <nav className="solutek_menu">
                    <ul className="nav_scroll">
                      {navigationData.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={item.to}
                            onClick={() => {
                              if (item.subMenu) {
                                setActiveSubMenu(
                                  activeSubMenu === idx ? null : idx
                                );
                              } else {
                                setIsMobileMenuOpen(false);
                              }
                              window.scrollTo(0, 0);
                            }}
                          >
                            {item.label}{" "}
                            {item.subMenu && (
                              <i className="bi bi-chevron-down"></i>
                            )}
                          </Link>
                          {item.subMenu && activeSubMenu === idx && (
                            <ul className="sub-menu">
                              {item.subMenu.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <Link
                                    to={subItem.to}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {subItem.label}
                                  </Link>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
