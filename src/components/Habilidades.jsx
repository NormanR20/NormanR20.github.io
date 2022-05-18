import React from "react";
import { useTranslation } from "react-i18next";
import PHPICON from "../images/phpIcon.png";
import javascriptIcon from "../images/javascriptIcon.png";
import mysqlIcon from "../images/mysqlIcon.png";
import htmlIcon from "../images/htmlIcon.png";
import cssIcon from "../images/cssIcon.png";
import angularIcon from "../images/angularIcon.png";
import NodeIcon from "../images/NodeIcon.png";
import typescriptIcon from "../images/typescriptIcon.png";
import mongodbIcon from "../images/mongodbIcon.png";
import reactIcon from "../images/react.png";
import { Col, Container, Row } from "react-bootstrap";
import "../css/style.css";

const Habilidades = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <section id="Habilities" className="slide-in-from-right mover">
        <Row className="d-flex flex-wrap justify-content-center align-items-center">
          <h3 className="mb-4" align="center" style={{ color: "#001220" }}>
            {t("skills.title")}
          </h3>
        </Row>
        <Row>
          <Col
            lg="8"
            xl="8"
            md="8"
            sm="8"
            className="gx-5 mb-4"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <p className="text-muted">{t("skills.description")}</p>
            <br />
            <p className="text-muted">{t("skills.techs")}</p>
            <Container as={Row} className="tabla">
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                <img src={PHPICON} alt="PHPICON" style={{ width: "100%" }} />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                <img
                  src={javascriptIcon}
                  alt="javascriptIcon"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                <img
                  src={mysqlIcon}
                  alt="mysqlIcon"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                <img src={htmlIcon} alt="htmlIcon" style={{ width: "100%" }} />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                <img src={cssIcon} alt="cssIcon" style={{ width: "100%" }} />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                <img
                  src={angularIcon}
                  alt="angularIcon"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                <img src={NodeIcon} alt="NodeIcon" style={{ width: "100%" }} />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                <img
                  src={typescriptIcon}
                  alt="typescriptIcon"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                <img
                  src={mongodbIcon}
                  alt="mongodbIcon"
                  style={{ width: "100%", filter: "grayscale(100%)" }}
                />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                <img
                  src={reactIcon}
                  alt="mongodbIcon"
                  style={{ width: "100%", filter: "grayscale(100%)" }}
                />
              </div>
            </Container>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Habilidades;
