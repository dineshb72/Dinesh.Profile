import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/db.png";
import Tilt from "react-parallax-tilt";
import {
  //AiFillGithub,
  //AiOutlineTwitter,
  //AiFillInstagram,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
  <span className="primary-header"> ABOUT </span> ME
</h1>
<p className="home-about-body" data-aos="fade-up">
  <br />
  I'm a <i className="primary-header">Software Developer</i> with 4+ years of hands-on experience building scalable platforms using <i className="primary-header">Spring Boot</i>, <i className="primary-header">React.js</i>, and <i className="primary-header">AWS</i>.
  <br /><br />
  I specialize in turning complex requirements into clean, modular systems that drive real-time performance, reduce engineering friction, and improve long-term maintainability.
  <br /><br />
  Whether it’s reducing release cycles, optimizing cloud costs, or improving user flows — I focus on delivering outcomes that matter to both tech and business teams.
  <br /><br />
  I believe great software is not just about code — it’s about creating systems that scale, adapt, and leave a lasting impact.
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="db"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
               {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                > 
                  <AiFillGithub />
                </a> 
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="mailto:bukyadinesh72@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
             {/* <li className="social-icons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
            <li className="social-icons"> 
  <a
    href="tel:+13142036708"
    className="icon-colour home-social-icons"
    aria-label="Phone"
  >
    <AiFillPhone />
  </a>
</li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
