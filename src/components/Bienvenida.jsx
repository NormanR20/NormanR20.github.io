import React from "react";
import { useTranslation } from "react-i18next";
import CPU from "../images/codes-icon.png";
import "../css/style.css";
import { Col, Container } from "react-bootstrap";
import LogoImage from "../images/gamer-4k-game-console-tv-night.jpg";
import styled from "styled-components";

const Hero = styled.div`
  height: 950px;
  background-image: url(${(props) => props.desktopimg}); no-repeat;
  background-size: cover;
  @media screen and (max-width: 1024px) {
    height: 950px;
    background-image: url(${(props) => props.tabletimg}); no-repeat;
  }
  @media screen and (max-width: 640px) {
    height: 800px;
    background-image: url(${(props) => props.mobileimg}); no-repeat;
  }
`;

const Bienvenida = () => {
  const [t, i18n] = useTranslation("global");

  // var sectionStyle = {
  //   background: `url(${LogoImage}) no-repeat`,
  //   backgroundSize: "cover",
  //   padding: "50px 0 50px 0",
  //   height: "950px",
  //   backgroundSize: "100%",
  // };
  return (
    <>
      <div
        style={{
          zIndex: "6",
        }}
      >
        {/* <div id="intro" className="bg-image vh-100 shadow-1-strong"> */}
        <Hero
          id="Intro"
          desktopimg={LogoImage}
          tabletimg={LogoImage}
          mobileimg={LogoImage}
        >
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
                <img
                  id="imgCpu"
                  src={CPU}
                  alt="CPU"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Col>
              <h1
                className="mb-3"
                id="NombreMio"
                style={{ fontFamily: "Alfa Slab One" }}
              >
                Norman Raudales
              </h1>
              <Container className="d-flex align-items-center justify-content-center text-center">
                <h3 className="mb-4" style={{ fontFamily: "Alfa Slab One" }}>
                  Front-End Developer
                </h3>
              </Container>
            </div>
          </Container>
        </Hero>
      </div>
      {/* <div
        style={{
          backgroundImage: "linear-gradient(to bottom,black,black,white,white)",
          height: "3rem",
          marginTop: "-1rem",
        }}
      ></div> */}
    </>
  );
};

export default Bienvenida;
