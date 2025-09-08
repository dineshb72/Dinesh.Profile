import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

// 1) Import logo images (place them in src/Assets/)
import GFLLogo from "../../Assets/gfl.png";
import VeltrisLogo from "../../Assets/veltris.png";
import PayPalLogo from "../../Assets/Paypal_Logo.png";
import VirtusaLogo from "../../Assets/Virtusa_Logo.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="Fluorescent-Blue">Work Experience</strong>
        </h1>
        <p>Professional experiences that shaped my career</p>

        {/* Row 1: PayPal | Games for Love */}
        <Row className="gy-4">
          <Col xs={12} md={6} className="d-flex">
            <ProjectCard
              imgPath={PayPalLogo}
              title="PayPal"
              description="Built Spring Boot microservices on GCP with MySQL & Redis, integrated Kafka pipelines, and contributed to AI-assisted fraud detection—accelerating compliance audits and improving regulatory visibility."
            />
          </Col>
          <Col xs={12} md={6} className="d-flex">
            <ProjectCard
              imgPath={GFLLogo}
              title="Games for Love"
              description="Developed a real-time React + Spring Boot dashboard, integrated Discord & GitHub APIs, and automated deployments with GitHub Actions + AWS CloudWatch—raising live-stream event engagement by 35%."
            />
          </Col>
        </Row>

        {/* Row 2: Veltris | Virtusa */}
        <Row className="gy-4 mt-md-1">
          <Col xs={12} md={6} className="d-flex">
            <ProjectCard
              imgPath={VeltrisLogo}
              title="Veltris Technologies"
              description="Engineered Spring Boot APIs with retry logic, optimized MongoDB indexes, and refactored React checkout flows—supporting 5× traffic surges and reducing cart abandonment by 25%."
            />
          </Col>
          <Col xs={12} md={6} className="d-flex">
            <ProjectCard
              imgPath={VirtusaLogo}
              title="Virtusa"
              description="Built CRUD APIs with Spring Boot and a React asset tracker dashboard, automated testing with JUnit + Postman in Jenkins, and contributed to Agile sprint delivery during internship."
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}
export default Projects;