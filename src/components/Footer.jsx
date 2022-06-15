import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import InstagramIcon from "../images/InstagramIcon.png";
import LinkedInIcon from "../images/LinkedInIcon.png";
import facebook from "../images/facebook.png";
import "../css/style.css";
import us_en from "../images/us_en.png";
import es_es from "../images/es_es.png";

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
          className="text-dark"
          width="100%"
          style={{
            // backgroundColor: "#000000",
            borderTop: "1px solid #e5e5ea",
          }}
        >
          <Col>
            <Row>
              <Col className="d-flex flex-wrap justify-content-start align-items-center">
                <Row className="text-center p-3 mx-2">
                  <Row>
                    © 2022 Copyright: <p>Norman Raudales</p>
                  </Row>
                </Row>
              </Col>
              <Col className="d-flex flex-wrap justify-content-end align-items-center">
                <Row className="text-center p-3 mx-2">
                  <Col>
                    <Row>
                      <p>
                        {/* <Row>{t("footer.title")} :</Row>{" "} */}
                        {i18n.language.toUpperCase() === "ES" && (
                          <Row>
                            <img
                              id="es_es"
                              src={es_es}
                              alt="es_es"
                              width="20px"
                              className="mr-2"
                            />
                            ES
                          </Row>
                        )}
                        {i18n.language.toUpperCase() === "EN" && (
                          <Row>
                            <img
                              id="us_en"
                              src={us_en}
                              alt="us_en"
                              width="20px"
                              className="mr-2"
                            />
                            EN
                          </Row>
                        )}
                        {/* &nbsp;&nbsp;&nbsp;&nbsp;V. 2.0 */}
                      </p>
                    </Row>
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
