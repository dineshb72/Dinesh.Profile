import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

// 1) Import logo images (place them in src/Assets/)
import GFLLogo from "../../Assets/gfl.png";
import VeltrisLogo from "../../Assets/veltris.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="Fluorescent-Blue">Work Experience</strong>
        </h1>
        <p>Here are the clients and companies I’ve worked with professionally.</p>

        {/* === SAME GRID SIZES AS BEFORE === */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
  <div className="logo-wrapper">
    <ProjectCard
      imgPath={GFLLogo}
      title="Games for Love (Remote, USA)"
      description="Built a real-time React + Spring dashboard, integrated GitHub & Discord APIs, and automated CI/CD with GitHub Actions + AWS CloudWatch—boosting live-event engagement by 35%."
      ghLink=""
      demoLink=""
    />
  </div>
</Col>
<Col md={6} lg={4} className="project-card">
  <div className="logo-wrapper">
    <ProjectCard
      imgPath={VeltrisLogo}
      title="Veltris Technologies (Hyderabad, India)"
      description="Developed Spring Boot APIs and modular React checkout flows, tuned MongoDB indexes, and owned Jenkins pipelines—cutting cart abandonment by 25% and search latency by 60%."
      ghLink=""
      demoLink=""
    />
  </div>
</Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;