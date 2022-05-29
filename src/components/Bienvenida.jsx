import React from "react";
import { useTranslation } from "react-i18next";
import CPU from "../images/computadora-portatil.svg";
import "../css/style.css";
import { Col, Container } from "react-bootstrap";

const Bienvenida = () => {
  const [t, i18n] = useTranslation("global");
  // console.log(i18n.language);
  return (
    <>
      <div>
        {/* <div id="intro" className="bg-image vh-100 shadow-1-strong"> */}
        <div id="intro" className="bg-image vh-100 shadow-1-strong">
          <Container className="d-flex align-items-center justify-content-center text-center h-100">
            <div className="text-white" data-aos="zoom-in-up">
              <Col
                lg="4"
                xl="4"
                md="4"
                sm="4"
                xs="4"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <img id="imgCpu" src={CPU} alt="CPU" />
              </Col>
              <h1 className="mb-3" id="NombreMio">
                Norman Raudales
              </h1>
              <Container className="d-flex align-items-center justify-content-center text-center">
                <h3 className="mb-4">{t("welcome.web-developer")}</h3>
              </Container>
            </div>
          </Container>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom,black,black,white,white)",
          height: "3rem",
          marginTop: "-1rem",
        }}
      ></div>
    </>
  );
};

export default Bienvenida;
