import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
  <span className="primary-header"> WHAT I </span> DO
</h1>
<p className="home-about-body" data-aos="fade-up">
  <br />
  I build enterprise systems that work at scale, the kind where a single architectural decision affects billions of transactions, and a missed bug costs millions.
  Across compliance, fintech, and enterprise platforms, I design and operate the backend infrastructure, databases, and data pipelines that power real-time decision making for some of the largest payment ecosystems in the world.
  <br /><br />
  When complex systems break under pressure, I find what others miss and build it back stronger.
</p>
       
         </Col>
         {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt=""
              />
            </Tilt>
          </Col>  */}
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
                  href="mailto:dinesh.bukya11@gmail.com"
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
    href="tel:+1(408)741-6721"
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
