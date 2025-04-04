/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useState} from "react";
// Import your images
import projectImage1 from "../../assets/images/project-thu.png";
import projectImage2 from "../../assets/images/project-thu2.png";
import borderShape from "../../assets/images/border-shape.png";
import projectBgShape from "../../assets/images/project-bg-shape.png";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProjectArea = () => {
  const projects = [
    {
      title: "PASHMINA",
      description: "WEAVING CRAFTS",
      imgSrc: projectImage1,
    },
    {
      title: "KANI",
      description: "WEAVING CRAFTS",
      imgSrc: projectImage2,
    },
    {
      title: "CARPET",
      description: "WEAVING CRAFTS",
      imgSrc: projectImage1
    },
    {
      title: "SILK",
      description: "WEAVING CRAFTS",
      imgSrc: projectImage2
    },
    {
      title: "SOZNI",
      description: "EMBROIDERY CRAFT",
      imgSrc: projectImage2
    },
  ];

  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3).concat(
    currentIndex + 3 > projects.length
      ? projects.slice(0, (currentIndex + 3) % projects.length)
      : []
  );

  return (
    <div className="project-area styl-two pt-5">
      <Container fluid>
        <Row className="project-section">
          <Col lg={6}>
            <div className="section-title text-left">
              <h5 className="section-sub-title">Featured Craft Categories</h5>
              <h1 className="section-main-title">Technology's Evolution</h1>
              <h1 className="section-main-title">Towards Brilliance</h1>
            </div>
          </Col>
          <Col lg={6}></Col>
        </Row>
        <Row className="owl-nav">
          <div
            className="carousel-control-prev owl-prev"
            onClick={prevSlide}
           
          >
            <i className="fa fa-arrow-left"></i>
          </div>
          <Button
            variant="outline-primary"
            className="carousel-control-next"
            onClick={nextSlide}
           
          >
           <i className="fa fa-arrow-right"></i>
          </Button>
          {visibleProjects.map((project, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="project-single-box">
              <div className="project-thumb">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </div>
              <div className="project-content">
                <h4 className="project-title">
                  <a href="project-details.html">{project.title}</a>
                </h4>
                <p className="project-des">{project.description}</p>
              </div>
              <div className="project-icon">
                <span><i className="bi bi-arrow-right"></i></span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};




export default ProjectArea;
