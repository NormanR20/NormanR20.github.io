import React from "react";
import { useTranslation } from "react-i18next";
import InstagramIcon from "../images/InstagramIcon.png";
import LinkedInIcon from "../images/LinkedInIcon.png";
import facebook from "../images/facebook.png";
import { Col, Container, Row } from "react-bootstrap";
import "../css/style.css";

const Contacto = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <section
        class="mb-3 slide-in-from-right mover"
        id="Contact"
        style={{ textAlign: "center", padding: "2%" }}
      >
        {/* <Container class="container row">
          <Row className="d-flex flex-wrap justify-content-center align-items-center">
            <h3 className="mb-4" align="center" style={{ color: "#001220" }}>
              {t("Contact.title")}
            </h3>
          </Row>
        </Container> */}

        <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-center text-center">
              <Col
                style={{ marginLeft: "auto" }}
                lg="1"
                xl="1"
                md="1"
                sm="4"
                id="iconoF"
                align="center"
              >
                <img
                  src={facebook}
                  alt=""
                  style={{ width: "30px" }}
                  onclick="//window.open('https://www.facebook.com/nraudalesmejia/')"
                />
              </Col>
              <Col lg="1" xl="1" md="1" sm="4" id="iconoF" align="center">
                <img
                  src={InstagramIcon}
                  alt=""
                  style={{ width: "30px" }}
                  onclick="//window.open('https://www.instagram.com/_normanr17_/?hl=es')"
                />
              </Col>
              <Col
                lg="1"
                xl="1"
                md="1"
                sm="4"
                style={{ marginRight: "auto" }}
                id="iconoF"
                align="center"
              >
                <img
                  src={LinkedInIcon}
                  alt=""
                  style={{ width: "30px" }}
                  onclick="window.open('https://www.linkedin.com/in/norman-eduardo-raudales-mejia-234722197')"
                />
              </Col>
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <p>{t("Contact.email")}: norman17.rm@gmail.com</p>
          <p>{t("Contact.cellphone")}: (504) 9777-1623</p>
        </Container>
      </section>
    </div>
  );
};

export default Contacto;
