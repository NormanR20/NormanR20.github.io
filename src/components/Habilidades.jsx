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
import djangoIcon from "../images/logo-django.png";
import postgresIcon from "../images/postgresql-logo.png";
import bootstrap from "../images/Bootstrap_logo.png";
import reactBootstrap from "../images/react-bootstrap.svg";
import redux from "../images/redux.svg";
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
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img src={PHPICON} alt="PHPICON" style={{ width: "100%" }} />
                <b>PHP</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img
                  src={javascriptIcon}
                  alt="javascriptIcon"
                  style={{ width: "100%" }}
                />
                <b>JavaScript</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img
                  src={mysqlIcon}
                  alt="mysqlIcon"
                  style={{ width: "100%" }}
                />
                <b>MySQL</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img src={htmlIcon} alt="htmlIcon" style={{ width: "100%" }} />
                <b>HTML</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img src={cssIcon} alt="cssIcon" style={{ width: "100%" }} />
                <b>CSS</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img
                  src={angularIcon}
                  alt="angularIcon"
                  style={{ width: "100%" }}
                />
                <b>Angular</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img src={NodeIcon} alt="NodeIcon" style={{ width: "100%" }} />
                <b>NodeJS</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img
                  src={typescriptIcon}
                  alt="typescriptIcon"
                  style={{ width: "100%" }}
                />
                <b>TypeScript</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img
                  src={mongodbIcon}
                  alt="mongodbIcon"
                  style={{ width: "100%", filter: "grayscale(100%)" }}
                />
                <b>Mongodb</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img
                  src={reactIcon}
                  alt="mongodbIcon"
                  style={{ width: "100%", filter: "grayscale(100%)" }}
                />
                <b>ReactJs</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img
                  src={reactBootstrap}
                  alt="reactBootstrapIcon"
                  style={{ width: "100%", filter: "grayscale(100%)" }}
                />
                <b>ReactBootstrap</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img
                  src={redux}
                  alt="reduxIcon"
                  style={{ width: "100%", filter: "grayscale(100%)" }}
                />
                <b>Redux</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img
                  src={bootstrap}
                  alt="bootstrapIcon"
                  style={{ width: "100%", filter: "grayscale(100%)" }}
                />
                <b>Bootstrap</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img
                  src={djangoIcon}
                  alt="djangoIcon"
                  style={{ width: "100%", filter: "grayscale(100%)" }}
                />
                <b>Django</b>
              </Col>
              <Col
                xl="2"
                lg="2"
                md="4"
                sm="4"
                xs="4"
                className="d-flex flex-wrap justify-content-center align-items-center"
              >
                <img
                  src={postgresIcon}
                  alt="postgresSQLIcon"
                  style={{ width: "100%", filter: "grayscale(100%)" }}
                />
                <b>PostgresSQL</b>
              </Col>
            </Container>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Habilidades;
