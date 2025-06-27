import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Github from "./Github"; // Uncomment if you decide to add it back
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/aboutme.png";
import Toolstack from "./Toolstack";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "40px", paddingBottom: "98px" }}
              data-aos="fade-right"
            >
              <span className="primary-header">My</span> Info
            </h1>
            <div data-aos="fade-up">
              <Aboutcard />
            </div>
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col>
        </Row>

        {/* Tech Stack */}
        <h1 data-aos="fade-right">
          <span className="primary-header">Skillset</span>
        </h1>
        <div data-aos="fade-up">
          <Techstack />
        </div>

        {/* Tools */}
        <h1 data-aos="fade-right">
          <span className="primary-header">Tools</span>
        </h1>
        <div data-aos="fade-up">
          <Toolstack />
        </div>

        {/* Optional GitHub contribution calendar */}
        {/* <Github /> */}
      </Container>

      <ScrollToTop />
    </Container>
  );
}

export default About;
