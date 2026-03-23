import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import ZohoLogo from "../../Assets/Projects/zoho_logo.png";
import PayPalLogo from "../../Assets/Paypal_Logo.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading text-center">
          My <strong className="Fluorescent-Blue">Work Experience</strong>
        </h1>

        <p className="text-center project-subheading">
          Professional experiences that shaped my career
        </p>

        <div className="project-row-wrap">
          <Row className="g-4 justify-content-center">

            <Col md={6} lg={5} className="d-flex justify-content-center">
              <ProjectCard
                imgPath={PayPalLogo}
                logoClass="paypal-logo"
                title="PayPal"
                subtitle="March 2025 – Present"
                description="Built Spring Boot microservices on GCP with MySQL & Redis, integrated Kafka pipelines, and contributed to AI-assisted fraud detection—accelerating compliance audits and improving regulatory visibility."
              />
            </Col>

            <Col md={6} lg={5} className="d-flex justify-content-center">
              <ProjectCard
                imgPath={ZohoLogo}
                logoClass="zoho-logo"
                title="Zoho"
                subtitle="July 2021 – Dec 2022"
                description="Developed a real-time React + Spring Boot dashboard, integrated Discord & GitHub APIs, and automated deployments with GitHub Actions + AWS CloudWatch—raising live-stream event engagement by 35%."
              />
            </Col>

          </Row>
        </div>

      </Container>

      <ScrollToTop />
    </Container>
  );
}

export default Projects;