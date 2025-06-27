import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  //AiFillGithub,
  //AiOutlineTwitter,
  //AiFillInstagram,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <span>
            Designed and Developed by{" "}
            <i className="primary-header">Dinesh Bukya</i>
          </span>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          {/*  <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="github"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="twitter"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="email"
                href="mailto:bukyadinesh72@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="email"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="linkedin"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
<li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="Contact"
                 href="tel:+13142036708"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact"
              >
                <AiFillPhone />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
