/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "../css/style.css";

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
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
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
                  href="/PortafolioDigital"
                  onClick={() => {
                    localStorage.removeItem("idioma");
                    localStorage.setItem("idioma", "es");
                    i18n.changeLanguage("es");
                  }}
                >
                  ES
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/PortafolioDigital"
                  onClick={() => {
                    localStorage.removeItem("idioma");
                    localStorage.setItem("idioma", "en");
                    i18n.changeLanguage("en");
                  }}
                >
                  EN
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
