import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bordershape from "../../assets/images/border-shape.png";
import projectBgShapr from "../../assets/images/project-bg-shape.png";
import { Grid, Typography, Box, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import sliderTopImage from "../../assets/images/slider-top-image.png";
import {
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  Award,
  Target,
  ShoppingBag,
  Scale,
  Heart,
  Clock,
  Zap,
  Star,
} from "lucide-react";
const CarouselSlider = ({ title, subtitle }) => {
  const sliderRef = useRef(null);
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  const leftStats = [
    {
      label: "Annual Revenue",
      value: "160",
      prefix: "$",
      suffix: "M+",
      icon: <DollarSign />,
    },
    { label: "Global Export", value: "78", suffix: "%", icon: <Globe /> },
    { label: "Artisans", value: "88000", suffix: "+", icon: <Users /> },
    {
      label: "Market Growth",
      value: "17",
      suffix: "% YoY",
      icon: <TrendingUp />,
    },
    { label: "Quality Rating", value: "4.8", suffix: "/5", icon: <Award /> },
    { label: "Sustainability", value: "96", suffix: "%", icon: <Target /> },
  ];

  const rightStats = [
    { label: "Market Share", value: "30", suffix: "%", icon: <ShoppingBag /> },
    { label: "Product Range", value: "80", suffix: "+", icon: <Scale /> },
    {
      label: "Customer Satisfaction",
      value: "97",
      suffix: "%",
      icon: <Heart />,
    },
    {
      label: "Avg Production Time",
      value: "60",
      suffix: " Days",
      icon: <Clock />,
    },
    { label: "Energy Efficiency", value: "93", suffix: "%", icon: <Zap /> },
    { label: "Innovation Index", value: "4.6", suffix: "/5", icon: <Star /> },
  ];

  const slidesData = [
    {
      // image: "/api/placeholder/772/949",
      // alt: "Slide 1",
      overlay: "rgba(0,0,0,0.7)",
      leftStats: [
        {
          label: "Annual Revenue",
          value: "160",
          prefix: "$",
          suffix: "M+",
          icon: <DollarSign />,
        },
        { label: "Global Export", value: "78", suffix: "%", icon: <Globe /> },
        { label: "Artisans", value: "88000", suffix: "+", icon: <Users /> },
        {
          label: "Market Growth",
          value: "17",
          suffix: "% YoY",
          icon: <TrendingUp />,
        },
        {
          label: "Quality Rating",
          value: "4.8",
          suffix: "/5",
          icon: <Award />,
        },
        { label: "Sustainability", value: "96", suffix: "%", icon: <Target /> },
      ],
      rightStats: [
        {
          label: "Market Share",
          value: "30",
          suffix: "%",
          icon: <ShoppingBag />,
        },
        { label: "Product Range", value: "80", suffix: "+", icon: <Scale /> },
        {
          label: "Customer Satisfaction",
          value: "97",
          suffix: "%",
          icon: <Heart />,
        },
        {
          label: "Avg Production Time",
          value: "60",
          suffix: " Days",
          icon: <Clock />,
        },
        { label: "Energy Efficiency", value: "93", suffix: "%", icon: <Zap /> },
        {
          label: "Innovation Index",
          value: "4.6",
          suffix: "/5",
          icon: <Star />,
        },
      ],
      title: "Boutique",
      subtitle: "Product Range",
      products: [
        "Pashmina",
        "Kani",
        "Cashmere",
        "Silk",
        "Bags & Purses",
        "Jackets",
        "Kaftans",
        "Kurtas",
        "Pherans",
        "Jewelry",
      ],
    },
    {
      image: "/api/placeholder/772/949",
      // alt: "Slide 1",
      overlay: "rgba(0,0,0,0.7)",
      leftStats: [
        {
          label: "Annual Revenue",
          value: "160",
          prefix: "$",
          suffix: "M+",
          icon: <DollarSign />,
        },
        { label: "Global Export", value: "78", suffix: "%", icon: <Globe /> },
        { label: "Artisans", value: "88000", suffix: "+", icon: <Users /> },
        {
          label: "Market Growth",
          value: "17",
          suffix: "% YoY",
          icon: <TrendingUp />,
        },
        {
          label: "Quality Rating",
          value: "4.8",
          suffix: "/5",
          icon: <Award />,
        },
        { label: "Sustainability", value: "96", suffix: "%", icon: <Target /> },
      ],
      rightStats: [
        {
          label: "Market Share",
          value: "30",
          suffix: "%",
          icon: <ShoppingBag />,
        },
        { label: "Product Range", value: "80", suffix: "+", icon: <Scale /> },
        {
          label: "Customer Satisfaction",
          value: "97",
          suffix: "%",
          icon: <Heart />,
        },
        {
          label: "Avg Production Time",
          value: "60",
          suffix: " Days",
          icon: <Clock />,
        },
        { label: "Energy Efficiency", value: "93", suffix: "%", icon: <Zap /> },
        {
          label: "Innovation Index",
          value: "4.6",
          suffix: "/5",
          icon: <Star />,
        },
      ],
      title: "Interior Decor",
      subtitle: "Product Range",
      products: [
        "Papier-Mache",
        "Tapestry",
        "Jeweled Hangings",
        "Office Accessories",
        "Room Screens",
        "Cushion Covers",
        "Bed Linens",
      ],
    },
    {
      image: "/api/placeholder/772/949",
      // alt: "Slide 1",
      overlay: "rgba(0,0,0,0.7)",
      leftStats: [
        {
          label: "Annual Revenue",
          value: "160",
          prefix: "$",
          suffix: "M+",
          icon: <DollarSign />,
        },
        { label: "Global Export", value: "78", suffix: "%", icon: <Globe /> },
        { label: "Artisans", value: "88000", suffix: "+", icon: <Users /> },
        {
          label: "Market Growth",
          value: "17",
          suffix: "% YoY",
          icon: <TrendingUp />,
        },
        {
          label: "Quality Rating",
          value: "4.8",
          suffix: "/5",
          icon: <Award />,
        },
        { label: "Sustainability", value: "96", suffix: "%", icon: <Target /> },
      ],
      rightStats: [
        {
          label: "Market Share",
          value: "30",
          suffix: "%",
          icon: <ShoppingBag />,
        },
        { label: "Product Range", value: "80", suffix: "+", icon: <Scale /> },
        {
          label: "Customer Satisfaction",
          value: "97",
          suffix: "%",
          icon: <Heart />,
        },
        {
          label: "Avg Production Time",
          value: "60",
          suffix: " Days",
          icon: <Clock />,
        },
        { label: "Energy Efficiency", value: "93", suffix: "%", icon: <Zap /> },
        {
          label: "Innovation Index",
          value: "4.6",
          suffix: "/5",
          icon: <Star />,
        },
      ],
      title: "Dining & Serving Ware",
      subtitle: "Product Range",
      products: ["Paper machieware", "Walnutware", "Silverware", "Copperware"],
    },

    {
      image: "/api/placeholder/772/949",
      // alt: "Slide 1",
      overlay: "rgba(0,0,0,0.7)",
      leftStats: [
        {
          label: "Annual Revenue",
          value: "160",
          prefix: "$",
          suffix: "M+",
          icon: <DollarSign />,
        },
        { label: "Global Export", value: "78", suffix: "%", icon: <Globe /> },
        { label: "Artisans", value: "88000", suffix: "+", icon: <Users /> },
        {
          label: "Market Growth",
          value: "17",
          suffix: "% YoY",
          icon: <TrendingUp />,
        },
        {
          label: "Quality Rating",
          value: "4.8",
          suffix: "/5",
          icon: <Award />,
        },
        { label: "Sustainability", value: "96", suffix: "%", icon: <Target /> },
      ],
      rightStats: [
        {
          label: "Market Share",
          value: "30",
          suffix: "%",
          icon: <ShoppingBag />,
        },
        { label: "Product Range", value: "80", suffix: "+", icon: <Scale /> },
        {
          label: "Customer Satisfaction",
          value: "97",
          suffix: "%",
          icon: <Heart />,
        },
        {
          label: "Avg Production Time",
          value: "60",
          suffix: " Days",
          icon: <Clock />,
        },
        { label: "Energy Efficiency", value: "93", suffix: "%", icon: <Zap /> },
        {
          label: "Innovation Index",
          value: "4.6",
          suffix: "/5",
          icon: <Star />,
        },
      ],
      title: "Rugs and Carpets",
      subtitle: "Product Range",
      products: ["Rugs and Carpets", "Namda Embroidery"],
    },

    {
      image: "/api/placeholder/772/949",
      // alt: "Slide 1",
      overlay: "rgba(0,0,0,0.7)",
      leftStats: [
        {
          label: "Annual Revenue",
          value: "160",
          prefix: "$",
          suffix: "M+",
          icon: <DollarSign />,
        },
        { label: "Global Export", value: "78", suffix: "%", icon: <Globe /> },
        { label: "Artisans", value: "88000", suffix: "+", icon: <Users /> },
        {
          label: "Market Growth",
          value: "17",
          suffix: "% YoY",
          icon: <TrendingUp />,
        },
        {
          label: "Quality Rating",
          value: "4.8",
          suffix: "/5",
          icon: <Award />,
        },
        { label: "Sustainability", value: "96", suffix: "%", icon: <Target /> },
      ],
      rightStats: [
        {
          label: "Market Share",
          value: "30",
          suffix: "%",
          icon: <ShoppingBag />,
        },
        { label: "Product Range", value: "80", suffix: "+", icon: <Scale /> },
        {
          label: "Customer Satisfaction",
          value: "97",
          suffix: "%",
          icon: <Heart />,
        },
        {
          label: "Avg Production Time",
          value: "60",
          suffix: " Days",
          icon: <Clock />,
        },
        { label: "Energy Efficiency", value: "93", suffix: "%", icon: <Zap /> },
        {
          label: "Innovation Index",
          value: "4.6",
          suffix: "/5",
          icon: <Star />,
        },
      ],
      title: "Furniture",
      subtitle: "Product Range",
      products: [
        "Walnut Wood Carving",
        "Crewel Upholstered",
        "Wicker Furniture",
        "Room Dividers",
      ],
    },

    {
      image: "/api/placeholder/772/949",
      // alt: "Slide 1",
      overlay: "rgba(0,0,0,0.7)",
      leftStats: [
        {
          label: "Annual Revenue",
          value: "160",
          prefix: "$",
          suffix: "M+",
          icon: <DollarSign />,
        },
        { label: "Global Export", value: "78", suffix: "%", icon: <Globe /> },
        { label: "Artisans", value: "88000", suffix: "+", icon: <Users /> },
        {
          label: "Market Growth",
          value: "17",
          suffix: "% YoY",
          icon: <TrendingUp />,
        },
        {
          label: "Quality Rating",
          value: "4.8",
          suffix: "/5",
          icon: <Award />,
        },
        { label: "Sustainability", value: "96", suffix: "%", icon: <Target /> },
      ],
      rightStats: [
        {
          label: "Market Share",
          value: "30",
          suffix: "%",
          icon: <ShoppingBag />,
        },
        { label: "Product Range", value: "80", suffix: "+", icon: <Scale /> },
        {
          label: "Customer Satisfaction",
          value: "97",
          suffix: "%",
          icon: <Heart />,
        },
        {
          label: "Avg Production Time",
          value: "60",
          suffix: " Days",
          icon: <Clock />,
        },
        { label: "Energy Efficiency", value: "93", suffix: "%", icon: <Zap /> },
        {
          label: "Innovation Index",
          value: "4.6",
          suffix: "/5",
          icon: <Star />,
        },
      ],
      title: "Ceiling Treatment",
      subtitle: "Product Range",
      products: [
        "Ceiling Treatment - Khatamband",
        "Decorative ceiling",
        "Window Treatment",
        "Pinjrakari & Crewel",
        "Kashmir Lattice Work",
        "Embroidery Curtains",
      ],
    },

    {
      image: "/api/placeholder/772/949",
      // alt: "Slide 1",
      overlay: "rgba(0,0,0,0.7)",
      leftStats: [
        {
          label: "Annual Revenue",
          value: "160",
          prefix: "$",
          suffix: "M+",
          icon: <DollarSign />,
        },
        { label: "Global Export", value: "78", suffix: "%", icon: <Globe /> },
        { label: "Artisans", value: "88000", suffix: "+", icon: <Users /> },
        {
          label: "Market Growth",
          value: "17",
          suffix: "% YoY",
          icon: <TrendingUp />,
        },
        {
          label: "Quality Rating",
          value: "4.8",
          suffix: "/5",
          icon: <Award />,
        },
        { label: "Sustainability", value: "96", suffix: "%", icon: <Target /> },
      ],
      rightStats: [
        {
          label: "Market Share",
          value: "30",
          suffix: "%",
          icon: <ShoppingBag />,
        },
        { label: "Product Range", value: "80", suffix: "+", icon: <Scale /> },
        {
          label: "Customer Satisfaction",
          value: "97",
          suffix: "%",
          icon: <Heart />,
        },
        {
          label: "Avg Production Time",
          value: "60",
          suffix: " Days",
          icon: <Clock />,
        },
        { label: "Energy Efficiency", value: "93", suffix: "%", icon: <Zap /> },
        {
          label: "Innovation Index",
          value: "4.6",
          suffix: "/5",
          icon: <Star />,
        },
      ],
      title: "Recycled Craft ",
      subtitle: "Product Range",
      products: ["Papier-Mache", "Gabba"],
    },

    {
      image: "/api/placeholder/772/949",
      // alt: "Slide 1",
      overlay: "rgba(0,0,0,0.7)",
      leftStats: [
        {
          label: "Annual Revenue",
          value: "160",
          prefix: "$",
          suffix: "M+",
          icon: <DollarSign />,
        },
        { label: "Global Export", value: "78", suffix: "%", icon: <Globe /> },
        { label: "Artisans", value: "88000", suffix: "+", icon: <Users /> },
        {
          label: "Market Growth",
          value: "17",
          suffix: "% YoY",
          icon: <TrendingUp />,
        },
        {
          label: "Quality Rating",
          value: "4.8",
          suffix: "/5",
          icon: <Award />,
        },
        { label: "Sustainability", value: "96", suffix: "%", icon: <Target /> },
      ],
      rightStats: [
        {
          label: "Market Share",
          value: "30",
          suffix: "%",
          icon: <ShoppingBag />,
        },
        { label: "Product Range", value: "80", suffix: "+", icon: <Scale /> },
        {
          label: "Customer Satisfaction",
          value: "97",
          suffix: "%",
          icon: <Heart />,
        },
        {
          label: "Avg Production Time",
          value: "60",
          suffix: " Days",
          icon: <Clock />,
        },
        { label: "Energy Efficiency", value: "93", suffix: "%", icon: <Zap /> },
        {
          label: "Innovation Index",
          value: "4.6",
          suffix: "/5",
          icon: <Star />,
        },
      ],
      title: "Sports Craft ",
      subtitle: "Product Range",
      products: ["Circket-Bat", "Chess-Board"],
    },
    {
      image: "/api/placeholder/772/949",
      // alt: "Slide 1",
      overlay: "rgba(0,0,0,0.7)",
      leftStats: [
        {
          label: "Annual Revenue",
          value: "160",
          prefix: "$",
          suffix: "M+",
          icon: <DollarSign />,
        },
        { label: "Global Export", value: "78", suffix: "%", icon: <Globe /> },
        { label: "Artisans", value: "88000", suffix: "+", icon: <Users /> },
        {
          label: "Market Growth",
          value: "17",
          suffix: "% YoY",
          icon: <TrendingUp />,
        },
        {
          label: "Quality Rating",
          value: "4.8",
          suffix: "/5",
          icon: <Award />,
        },
        { label: "Sustainability", value: "96", suffix: "%", icon: <Target /> },
      ],
      rightStats: [
        {
          label: "Market Share",
          value: "30",
          suffix: "%",
          icon: <ShoppingBag />,
        },
        { label: "Product Range", value: "80", suffix: "+", icon: <Scale /> },
        {
          label: "Customer Satisfaction",
          value: "97",
          suffix: "%",
          icon: <Heart />,
        },
        {
          label: "Avg Production Time",
          value: "60",
          suffix: " Days",
          icon: <Clock />,
        },
        { label: "Energy Efficiency", value: "93", suffix: "%", icon: <Zap /> },
        {
          label: "Innovation Index",
          value: "4.6",
          suffix: "/5",
          icon: <Star />,
        },
      ],
      title: "Hide Craft",
      subtitle: "Product Range",
      products: ["Leather", "Fur & Astrakhan"],
    },

    {
      image: "/api/placeholder/772/949",
      // alt: "Slide 1",
      overlay: "rgba(0,0,0,0.7)",
      leftStats: [
        {
          label: "Annual Revenue",
          value: "160",
          prefix: "$",
          suffix: "M+",
          icon: <DollarSign />,
        },
        { label: "Global Export", value: "78", suffix: "%", icon: <Globe /> },
        { label: "Artisans", value: "88000", suffix: "+", icon: <Users /> },
        {
          label: "Market Growth",
          value: "17",
          suffix: "% YoY",
          icon: <TrendingUp />,
        },
        {
          label: "Quality Rating",
          value: "4.8",
          suffix: "/5",
          icon: <Award />,
        },
        { label: "Sustainability", value: "96", suffix: "%", icon: <Target /> },
      ],
      rightStats: [
        {
          label: "Market Share",
          value: "30",
          suffix: "%",
          icon: <ShoppingBag />,
        },
        { label: "Product Range", value: "80", suffix: "+", icon: <Scale /> },
        {
          label: "Customer Satisfaction",
          value: "97",
          suffix: "%",
          icon: <Heart />,
        },
        {
          label: "Avg Production Time",
          value: "60",
          suffix: " Days",
          icon: <Clock />,
        },
        { label: "Energy Efficiency", value: "93", suffix: "%", icon: <Zap /> },
        {
          label: "Innovation Index",
          value: "4.6",
          suffix: "/5",
          icon: <Star />,
        },
      ],
      title: "Embriodery",
      subtitle: "Product Range",
      products: [
        "Fine Needlework",
        "Metal Thread Work",
        "Crewel Work",
        "Hook Work",
        "Double-sided Work",
        "Surface Embroidery",
        "Net Work",
        "Papier-Machie Inspired",
      ],
    },
  ];

  const slides = [
    {
      image: "/api/placeholder/772/949",
      title: "Khatamband Craft",
      description: "A unique ceiling treatment from Kashmir",
      leftStats: leftStats,
      rightStats: rightStats,
    },
    {
      image: "/api/placeholder/772/949",
      title: "Khatamband Craft",
      description: "A unique ceiling treatment from Kashmir",
      leftStats: leftStats,
      rightStats: rightStats,
    },
    // Add more slide data here for multiple slides...
  ];

  return (
    <div className="project-area styl-two pt-5">
      <div className="container-fluid">
        <div className="row project-section">
          <div className="col-12">
            <div className="section-title text-left">
              <h5 className="section-sub-title">
                Sourcing Sustainability, Delivering Quality
              </h5>
              <h1 className="section-main-title">
                De Koshur Crafts B2B Connect Platform Product Range
              </h1>
             
            </div>
          </div>
          <div
            className="col-md-6 d-flex justify-content-center"
            style={{ zIndex: 100 }}
          ></div>
        </div>
        <div className="row project-carousel">
          <div className="row project-carousel" style={{ margin: "0px" }}>
            <Slider {...settings} ref={sliderRef}>
              {slidesData.map((slide, index) => (
                <div key={index} className="project_item owl-carousel px-2">
                  <Card
                    sx={{
                      margin: "0px",

                      background: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <Box>
                      {" "}
                      {/* <img
                        className="mx-auto"
                        src={sliderTopImage}
                        alt={slide.alt || "Slide Background"}
                        style={{
                          width: "20%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      /> */}
                      <h3 className="text-center text-white pt-3"><i>Hand Made</i> </h3>
                    </Box>

                    <Box
                      display="flex"
                      flexWrap="nowrap"
                      justifyContent="space-between"
                      width="100%"
                    >
                      {/* left side */}
                      <Box
                        className="slider-left-side"
                        sx={{ flex: 1, margin: 1, padding: 0 }}
                      >
                        <Box sx={{ maxWidth: "fit-content" }} mx={"auto"}>
                          {slide.leftStats.map((stat, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                mb: 4,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                size={{ xs: 12, sm: 13, md: 16, lg: 20 }}
                                sx={{
                                  mr: 2,
                                  color: "#ff3c00",
                                  marginRight: { xs: 1, sm: 1, md: 3, lg: 4 },
                                }}
                              >
                                {React.cloneElement(stat.icon, {
                                  size:
                                    window.innerWidth >= 1280
                                      ? 30
                                      : window.innerWidth >= 900
                                        ? 20
                                        : window.innerWidth >= 760
                                          ? 18
                                          : window.innerWidth <= 600
                                            ? 12
                                            : 14,
                                })}
                              </Box>
                              <Box>
                                <Typography
                                  variant="h6"
                                  color="white"
                                  sx={{
                                    fontSize: {
                                      xs: "12px",
                                      sm: "13px",
                                      md: "16px",
                                      lg: "20px",
                                    },
                                  }}
                                >
                                  {stat.label}
                                </Typography>
                                <Typography variant="body2" color="white">
                                  {stat.prefix}
                                  {stat.value}
                                  {stat.suffix}
                                </Typography>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      {/* Center side */}
                      <Box sx={{ flex: 1, margin: 1, padding: 0 }}>
                        <Typography
                          variant="h4"
                          color="white"
                          fontWeight="bold"
                          mb={3}
                          textAlign="center"
                          sx={{
                            fontSize: {
                              xs: "12px",
                              sm: "13px",
                              md: "16px",
                              lg: "20px",
                            },
                          }}
                        >
                          {slide.title}
                        </Typography>
                        <Box
                          sx={{
                            backgroundColor: "rgba(255,255,255,0.1)",
                            backdropFilter: "blur(10px)",
                            borderRadius: "8px",
                            p: 2,
                            padding: { xs: "5px", sm: "7px", md: "20px" },
                          }}
                        >
                          <Typography
                            variant="h6"
                            color="white"
                            fontWeight="bold"
                            // mb={4}
                            textAlign="center"
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "16px",
                                lg: "18px",
                              },
                              marginBottom: {
                                xs: "10px",
                                sm: "10px",
                                md: "10px",
                                lg: "20px",
                              },
                            }}
                          >
                            {slide.subtitle}
                          </Typography>
                          <Grid container spacing={1}>
                            {slide.products.map((product, idx) => (
                              <Grid item xs={12} key={idx}>
                                <Box
                                  sx={{
                                    backgroundColor: "rgba(122, 122, 122, 0.3)",
                                    borderRadius: "8px",
                                    color: "#ff3c00",

                                    p: 2,
                                    "&:hover": {
                                      backgroundColor: "#ff3c00",
                                      // color: "white",
                                    },
                                    padding: { xs: "2px", md: "10px" },
                                  }}
                                >
                                  <Typography
                                    variant="body2"
                                    color="white"
                                    sx={{
                                      "&:hover": { color: "white" },
                                      width: "100%",
                                      textAlign: "center",
                                      fontSize: {
                                        xs: "7px",
                                        sm: "9px",
                                        md: "9px",
                                        lg: "16px",
                                      },
                                    }}
                                  >
                                    {product}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      </Box>

                      {/* Right Side  */}
                      <Box
                        className="slider-right-side"
                        sx={{ flex: 1, margin: 1, padding: 0 }}
                      >
                        <Box sx={{ maxWidth: "fit-content" }} mx={"auto"}>
                          {slide.rightStats.map((stat, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                mb: 4,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  mr: 2,
                                  color: "#ff3c00",
                                  fontSize: {
                                    xs: "12px",
                                    sm: "13px",
                                    md: "16px",
                                    lg: "20px",
                                  },
                                  marginRight: { xs: 1, sm: 1, md: 3, lg: 4 },
                                }}
                              >
                                {React.cloneElement(stat.icon, {
                                  size:
                                    window.innerWidth >= 1280
                                      ? 30
                                      : window.innerWidth >= 900
                                        ? 20
                                        : window.innerWidth >= 760
                                          ? 18
                                          : window.innerWidth <= 600
                                            ? 12
                                            : 14,
                                })}
                              </Box>
                              <Box>
                                <Typography
                                  variant="h6"
                                  color="white"
                                  sx={{
                                    fontSize: {
                                      xs: "12px",
                                      sm: "13px",
                                      md: "16px",
                                      lg: "20px",
                                    },
                                  }}
                                >
                                  {stat.label}
                                </Typography>
                                <Typography variant="body2" color="white">
                                  {stat.value}
                                  {stat.suffix}
                                </Typography>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="project-bg-shape rotateme">
        <img src={projectBgShapr} alt="shape" />
      </div>
    </div>
  );
};

export default CarouselSlider;
