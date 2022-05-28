import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import InstagramIcon from "../images/InstagramIcon.png";
import LinkedInIcon from "../images/LinkedInIcon.png";
import facebook from "../images/facebook.png";
import "../css/style.css";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      {/* <div
        style={{
          backgroundImage:
            "linear-gradient(to top,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2),white)",
          height: "2rem",
          marginTop: "-1rem",
        }}
      ></div> */}
      <div>
        {/* <div
          style={{
            backgroundImage: "linear-gradient(to top,black,white,white,white)",
            height: "3rem",
            marginTop: "-1rem",
          }}
        ></div> */}
        <footer
          class="text-light"
          width="100%"
          style={{
            backgroundColor: "#000000",
          }}
        >
          <Col>
            <Row>
              <Col className="d-flex flex-wrap justify-content-start align-items-center">
                <Row className="text-center p-3 mx-2">
                  © 2022 Copyright:
                  <p>Norman Raudales</p>
                </Row>
              </Col>
              <Col className="d-flex flex-wrap justify-content-end align-items-center">
                <Row className="text-center p-3 mx-2">
                  <Col>
                    <p>
                      {t("footer.title")} : {i18n.language.toUpperCase()}
                      {/* &nbsp;&nbsp;&nbsp;&nbsp;V. 2.0 */}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </footer>
      </div>
    </>
  );
};

export default Footer;
