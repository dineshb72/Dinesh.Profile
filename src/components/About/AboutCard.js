import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hello Everyone, Myself <span className="primary-header">Dinesh Bukya</span> - A Software Developer passionate about building scalable, real-time systems
            <br />
            <br />
            Outside of delivering scalable features and solving production-level challenges,
            here are a few ways I keep sharpening my skills and perspective to bring more value to every project:          </p>
         <ul>
  <li className="about-activity">
    <AiOutlineArrowRight /> Writing tech blogs to simplify system design and backend debugging concepts for others
  </li>
  <li className="about-activity">
    <AiOutlineArrowRight /> Reading engineering and product books to understand performance trade-offs and clean architecture
  </li>
  <li className="about-activity">
    <AiOutlineArrowRight /> Playing strategic games that improve decision-making, reaction timing, and adaptive thinking
  </li>
  <li className="about-activity">
    <AiOutlineArrowRight /> Reviewing open-source codebases and PRs to stay sharp on modern engineering patterns
  </li>
</ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
