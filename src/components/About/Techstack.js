import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiAngularSimple,
  DiReact,
  DiNodejs,
  DiJavascript1,
  DiMongodb,
  DiGit,
  DiDocker,
} from "react-icons/di";
import {
  SiSpring,
  SiApachekafka,
  SiRabbitmq,
  SiPostgresql,
  SiAmazonaws,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiGraphql,
  SiRedis,
} from "react-icons/si";

/**
 * Techstack
 * A responsive grid of technology icons that reflects my current full‑stack resume.
 * It highlights real‑time and impact‑driven tools (Kafka, RabbitMQ, Redis),
 * core backend and frontend frameworks (Java, Spring Boot, React, Angular, Node),
 * cloud & DevOps (AWS, Docker, Kubernetes, Jenkins, Terraform),
 * and databases (PostgreSQL, MongoDB) to give recruiters a quick, visual
 * snapshot of the breadth and depth of my skill set.
 */
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Languages & Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring title="Spring Boot" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple title="Angular" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript / TypeScript" />
      </Col>

      {/* Real‑time & API */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql title="GraphQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka title="Apache Kafka" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq title="RabbitMQ" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis title="Redis" />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>

      {/* Cloud & DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws title="AWS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes title="Kubernetes" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins title="Jenkins" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform title="Terraform" />
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git / GitHub" />
      </Col>
    </Row>
  );
}

export default Techstack;