import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiIntellijidea,
  SiPostman,
  SiGrafana,
  SiJira,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* OS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux" />
      </Col>

      {/* IDEs */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea title="IntelliJ IDEA" />
      </Col>

      {/* API / Debugging */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>

      {/* Monitoring */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana title="Grafana" />
      </Col>

      {/* Collaboration */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJira title="Jira" />
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>
    </Row>
  );
}

export default Toolstack;

