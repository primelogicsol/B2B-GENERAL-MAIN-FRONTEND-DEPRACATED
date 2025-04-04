/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import footer_logo from "../../assets/images/footer-logo.png";
import main_logo from "../../assets/images/main_logo.png";
import { Phone, Email } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
const FooterArea = () => {
  const currentYear = new Date().getFullYear();
  const usefulLinks = [
    { label: "Home", path: "/about-us" },
    { label: "Partnership Process", path: "/team" },
    { label: "Vendor Portal", path: "/blog-grid" },
    { label: "Partnerships", path: "/blog-grid" },
    { label: "Registration", path: "/contact" },
    { label: "Application Status", path: "/testimonial" },
    { label: "Book Appointment", path: "/" },
  ];

  const servicesLinks = [
    { label: "E-commerce", path: "/about-us" },
    { label: "Consignment", path: "/faq" },
    { label: "Exhibition", path: "/faq" },
    { label: "Import Export", path: "/contact" },
    { label: "Subsidiary", path: "" },
    { label: "Brick & Mortar", path: "/team" },
    { label: "Franchise", path: "/blog-grid" },
  ];

  const aboutUsLinks = [
    { label: "Our Ethos", path: "/our-ethos" },
    { label: "Brand Story", path: "/brand-story" },
    { label: "Brand Credentials", path: "/brand-credential" },
    { label: "Bussiness Location", path: "/bussiness-location" },
    { label: "Bussiness Niche", path: "bussiness-niche" },
    { label: "Team", path: "/team" },
    { label: "Contact Us", path: "/contact" },
  ];

  const footerLinks = [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Supports", path: "/supports" },
  ];

  return (
    <div className="footer-area">
      <div className="container-fluid">
        <div className="row footer">
          <div className="col-lg-3 col-md-6 col-sm-6 footer-col">
            <div className="footer-widget">
              <div className="footer-logo" style={{ marginTop: "-17px" }}>
                <Link to="/">
                  <img
                    src={main_logo}
                    alt="footer-logo"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </Link>
              </div>
              <p className="footer-widget-text">
                Our platform connects businesses, expanding the reach of
                authentic Kashmiri handicrafts in the U.S. Through strategic
                partnerships, support, and a focus on sustainability and fair
                trade, we create a unique marketplace. With deep expertise in
                Kashmiri artistry and the U.S. market, we are the premier
                destination for elevating these crafts.
              </p>
              <div className="footer-social my-2">
                <div className="footer-widget-social d-flex justify-content-left">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget left">
              <div className="widget-title">
                <h2>Quick Links</h2>
              </div>
              <ul>
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Links */}
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget left">
              <div className="widget-title">
                <h2>Partnerships</h2>
              </div>
              <ul>
                {servicesLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget left">
              <div className="widget-title">
                <h2>About Us</h2>
              </div>
              <ul>
                {aboutUsLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-cm-6 text-white text-base sm:text-[13px]">
            <Box className="container p-0 m-0">
              <Box className="row">
                <div className="widget-title">
                  <h2 className="ms-2">Contacts</h2>
                </div>

                {/* Phone Numbers */}
                <Box className="col-12 d-flex align-items-center ">
                  <Phone className="me-3 " fontSize="small"   />
                  <Box className="d-flex mb-3 flex-column justify-content-between">
  <Typography sx={{ fontSize: { xs: "11px", sm: "13px",md:"19px" } }}>
    <span>India:</span> +91 194 313 1113
  </Typography>
  <Typography sx={{ fontSize: { xs: "11px", sm: "13px",md:"19px" } }}>
    <span>US:</span> +1 (916) 699 0091
  </Typography>
</Box>

                </Box>

                {/* Email */}
                <Box className="col-12 mb-3 d-flex align-items-center">
                  <Email className="me-3" fontSize="small" />
                  <Box className="d-flex flex-column justify-content-between">
                    <Typography sx={{ fontSize: { xs: "13px", sm: "13px",md:"19px" } }}>b2b@dekoshurcrafts.com</Typography>
                  </Box>
                </Box>

                {/* Address Section */}
                <Box className="container" display="flex" alignItems="center">
                  <Phone className="me-3" fontSize="small" />
                  <div
                    className="vertical-line"
                    style={{
                      marginRight: "5px",
                      width: "1px",
                      height: "250px",
                      backgroundColor: "white",
                    }}
                  ></div>
                  <div className="d-flex flex-column justify-content-between ps-3">
                    <Typography className="font-bold" sx={{ fontSize: { xs: "13px", sm: "13px",md:"19px" } }}>Corporation Office</Typography>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "13px",md:"19px" } }}>
                      4445 Corporation Ln Ste 264, Virginia Beach, Virginia
                      23462
                    </Typography>

                    <Typography className="mt-2 font-bold" sx={{ fontSize: { xs: "13px", sm: "13px",md:"19px" } }}>Greater DC Address</Typography>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "13px",md:"19px" } }}>9480 Main St # 1185 Fairfax 22031</Typography>

                    <Typography sx={{ fontSize: { xs: "13px", sm: "13px",md:"19px" } }} className="mt-2 font-bold">Kashmir India Office</Typography>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "13px",md:"19px" } }}>
                      2 Gousia Colony Ext Zakura (Opp Industrial Estate)
                      Srinagar 190006
                    </Typography>
                  </div>
                </Box>
              </Box>
            </Box>
          </div>

          
        </div>

        {/* Footer Bottom Links */}
        <div className="row copyright">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="copyright-text">
              <Typography sx={{ fontSize: { xs: "13px", sm: "13px",md:"19px" } }}>© Copyright {currentYear} By DKC Bazaar LLC </Typography>
              <div className="copyright-list">
                <ul>
                  <li>
                    <Link to="/privacy-policy" sx={{ fontSize: { xs: "13px", sm: "13px",md:"19px" } }}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="">|</Link>
                  </li>
                  <li>
                    <Link to="/support">Supports</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="copyright-list">
              <ul className="">
                <li className="text-light">
                  <Typography sx={{ fontSize: { xs: "13px", sm: "13px",md:"19px" } }}>Website Powered & Maintained by Prime Logic Solutions</Typography>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterArea;
