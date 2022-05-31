/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, Container, NavDropdown, Row } from "react-bootstrap";
import "../css/style.css";
import us_en from "../images/us_en.png";
import es_es from "../images/es_es.png";
import CPU from "../images/computadora-portatil.svg";
import MaterialIcon, { colorPalette } from "material-icons-react";

const CustomNavbar = (props) => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Navbar
        expand="lg"
        // fixed="top"
        style={{
          zIndex: "2000",
          backgroundColor: "#000000",
          transitionDelay: "2s",
        }}
        inverse
        collapseOnSelect
      >
        <Container
          fluid
          className="d-flex align-items-center justify-content-center text-center"
        >
          <Navbar.Brand className="text-light d-flex align-items-center justify-content-center">
            <MaterialIcon icon="computer" invert />
            &nbsp;Norman Raudales
          </Navbar.Brand>
          <Navbar.Toggle
            className="ml-auto bg-light"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="text-light" href="#Intro">
                {t("navbar.home")}
              </Nav.Link>
              <Nav.Link className="text-light" href="#About">
                {t("navbar.about")}
              </Nav.Link>
              <Nav.Link className="text-light" href="#Resume">
                {t("navbar.resume")}
              </Nav.Link>
              <Nav.Link className="text-light" href="#Proyects">
                {t("navbar.proyects")}
              </Nav.Link>
              <Nav.Link className="text-light" href="#Contact">
                {t("navbar.contact")}
              </Nav.Link>
              <NavDropdown title={t("navbar.language")} id="basic-nav-dropdown">
                <NavDropdown.Item
                  // href="/"
                  onClick={() => {
                    localStorage.removeItem("idioma");
                    localStorage.setItem("idioma", "es");
                    i18n.changeLanguage("es");
                  }}
                >
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
                </NavDropdown.Item>
                <NavDropdown.Item
                  // href="/"
                  onClick={() => {
                    localStorage.removeItem("idioma");
                    localStorage.setItem("idioma", "en");
                    i18n.changeLanguage("en");
                  }}
                >
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
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
