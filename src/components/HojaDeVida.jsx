import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../css/style.css";
import Pdf1 from "../assets/HojaDeVida-NormanRaudales.pdf";
import Pdf2 from "../assets/Resume-NormanRaudales.pdf";

const HojaDeVida = () => {
  const [t, i18n] = useTranslation("global");
  const [state, setstate] = useState("es");

  const history = useHistory();

  return (
    <Container style={{ padding: "2%" }} id="Resume">
      <section id="Resume1" className="slide-in-from-right mover">
        <Row className="d-flex flex-wrap justify-content-center align-items-center">
          <h3 className="mb-4" align="center" style={{ color: "#001220" }}>
            {t("Resume.title")}
          </h3>
        </Row>
        <Row
          className="col-md-6 gx-5 mb-4"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          <p
            className="text-muted col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            {t("Resume.description")}:
          </p>
        </Row>
        <br />
        <Container align="center" fluid>
          <Col xl="4" lg="4" md="4" sm="6">
            {i18n && i18n.language === "es" && (
              <a rel="noreferrer" target="_blank" href={Pdf1}>
                <Button className="rounded-pill" variant="dark">
                  Hoja de vida (PDF)
                </Button>
              </a>
            )}
            {i18n && i18n.language === "en" && (
              <a rel="noreferrer" target="_blank" href={Pdf2}>
                <Button className="rounded-pill" variant="dark">
                  Resume (PDF)
                </Button>
              </a>
            )}
          </Col>
        </Container>
      </section>
    </Container>
  );
};

export default HojaDeVida;
