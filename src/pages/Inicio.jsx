import React, { useState, useEffect } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import Bienvenida from "../components/Bienvenida";
import SobreMi from "../components/SobreMi";
import Habilidades from "../components/Habilidades";
import HojaDeVida from "../components/HojaDeVida";
import Proyecto from "../components/Proyecto";
import Data from "../components/Data/Data";
import Data_EN from "../components/Data/Data_EN";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

const Inicio = () => {
  const [show, setShow] = useState(false);
  const [itemView, setItemView] = useState({});
  const [t, i18n] = useTranslation("global");

  const onShow = (item) => {
    setShow(true);
    setItemView(item);
  };

  useEffect(() => {
    if (window.localStorage) {
      if (
        window.localStorage.getItem("idioma") !== undefined &&
        window.localStorage.getItem("idioma")
      ) {
        if (
          window.localStorage.getItem("idioma") !== "es" &&
          window.localStorage.getItem("idioma") !== "en"
        ) {
          localStorage.removeItem("idioma");
          localStorage.setItem("idioma", "es");
          i18n.changeLanguage("es");
        }
        // console.log(localStorage.getItem("idioma"));
        // alert("idioma si existe en localStorage!!");
        //Elimina idioma
        // localStorage.removeItem("idioma");
      } else {
        localStorage.setItem("idioma", "es");
      }
    }
    Aos.init({ duration: 2000, once: "true" });
  }, []);

  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <CustomNavbar />
      <Bienvenida />
      <Col
        data-aos="slide-left"
        style={{
          borderTop: "#000000",
          borderBottom: "#000000",
        }}
        className="mt-2"
        id="About"
      >
        <Row>
          <Col xl="6" lg="6" md="6" sm="6" className="py-5">
            <Container fluid>
              <SobreMi />
            </Container>
          </Col>
          <Col
            xl="6"
            lg="6"
            md="6"
            sm="6"
            style={{
              zIndex: "2000",
              backgroundColor: "#000000",
              borderTopLeftRadius: "20rem",
              borderBottomLeftRadius: "20rem",
              transitionDelay: "2s",
            }}
            className="shadow-sm"
          >
            {/* <Container fluid className="bg-light vh-50 py-5"></Container> */}
          </Col>
        </Row>
      </Col>
      <Col
        data-aos="slide-right"
        style={{
          borderTop: "#000000",
          borderBottom: "#000000",
        }}
        className="mt-2"
      >
        <Row>
          <Col
            xl="6"
            lg="6"
            md="6"
            sm="6"
            style={{
              zIndex: "2000",
              backgroundColor: "#000000",
              borderTopRightRadius: "20rem",
              borderBottomRightRadius: "20rem",
              transitionDelay: "2s",
            }}
            className="shadow-sm"
          >
            {/* <Container fluid className="bg-image vh-50 py-5"></Container> */}
          </Col>
          <Col xl="6" lg="6" md="6" sm="6" className="py-5">
            <Container fluid>
              <Habilidades />
            </Container>
          </Col>
        </Row>
      </Col>
      <Col
        data-aos="slide-letf"
        style={{
          borderTop: "#000000",
          borderBottom: "#000000",
        }}
        className="mt-2"
        id="Resume"
      >
        <Row>
          <Col xl="6" lg="6" md="6" sm="6" className="py-5">
            <Container fluid className="my-5">
              <Container
                fluid
                style={{ marginTop: "5rem", marginBottom: "5rem" }}
              >
                <HojaDeVida />
              </Container>
              {/* <hr className="my-5 text-light" /> */}
            </Container>
          </Col>
          <Col
            xl="6"
            lg="6"
            md="6"
            sm="6"
            style={{
              zIndex: "2000",
              backgroundColor: "#000000",
              borderTopLeftRadius: "20rem",
              borderBottomLeftRadius: "20rem",
              transitionDelay: "2s",
            }}
            className="shadow-sm"
          >
            {/* <Container fluid className="bg-image vh-50 py-5"></Container> */}
          </Col>
        </Row>
      </Col>
      <Col
        style={{
          borderTop: "#000000",
          borderBottom: "#000000",
        }}
        className="mt-2"
        id="Proyects"
      >
        <Container>
          <Container fluid className="pt-5">
            <div data-aos="zoom-in-up">
              <Row className="d-flex flex-wrap justify-content-center align-items-center">
                <h3
                  className="mb-4"
                  align="center"
                  style={{ color: "#001220" }}
                >
                  {t("Proyects.title")}
                </h3>
              </Row>
              <Row className="d-flex flex-wrap justify-content-start align-items-center">
                {i18n.language === "es" &&
                  Data.map((item) => (
                    <Proyecto
                      imagen={item.imagen}
                      title={item.title}
                      subTitle={item.subTitle}
                      onShow={() => onShow(item)}
                    />
                  ))}
                {i18n.language === "en" &&
                  Data_EN.map((item) => (
                    <Proyecto
                      imagen={item.imagen}
                      title={item.title}
                      subTitle={item.subTitle}
                      onShow={() => onShow(item)}
                    />
                  ))}
              </Row>
            </div>
          </Container>
        </Container>
        <hr class="my-5" />
      </Col>
      <Container className="my-3">
        <Container fluid className="mt-5" id="Contact">
          <div data-aos="zoom-in-up">
            <Form />
            <br />
            <Contacto />
          </div>
        </Container>
      </Container>
      <Footer />
      <Modal size="xl" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{itemView.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Container>
              <Container
                xl="12"
                lg="12"
                md="12"
                sm="12"
                className="tabla shadow-sm rounded px-5"
              >
                <h1 className="mb-4 text-muted" style={{ textAlign: "center" }}>
                  {t("Proyect.description")}:
                </h1>
                <p className="text-muted">{itemView.descripcion}</p>
              </Container>
              <Container
                xl="12"
                lg="12"
                md="12"
                sm="12"
                className="tabla shadow-sm rounded px-5"
              >
                <h1
                  className="mb-4 text-muted mx-auto"
                  style={{ textAlign: "center" }}
                >
                  {t("Proyect.characteristics")}:
                </h1>
                <Row>
                  <Col xl="4" lg="4" md="4" sm="12">
                    <h4 className="mb-4 text-muted text-justify">
                      {itemView &&
                        itemView.caracteristicas &&
                        itemView.caracteristicas.length > 0 &&
                        itemView.caracteristicas[0].nombre}
                      :
                    </h4>
                    <div>
                      {itemView &&
                        itemView.caracteristicas &&
                        itemView.caracteristicas.length > 0 &&
                        itemView.caracteristicas[0].temario.map((tem) => (
                          <>
                            <li>{tem}</li>
                          </>
                        ))}
                    </div>
                  </Col>
                  <Col xl="4" lg="4" md="4" sm="12">
                    <h4
                      className="mb-4 text-muted"
                      style={{ textAlign: "center" }}
                    >
                      {itemView &&
                        itemView.caracteristicas &&
                        itemView.caracteristicas.length > 0 &&
                        itemView.caracteristicas[1].nombre}
                      :
                    </h4>
                    <div>
                      {itemView &&
                        itemView.caracteristicas &&
                        itemView.caracteristicas.length > 0 &&
                        itemView.caracteristicas[1].temario.map((tem) => (
                          <>
                            <li>{tem}</li>
                          </>
                        ))}
                    </div>
                  </Col>
                  <Col xl="4" lg="4" md="4" sm="12">
                    <h4
                      className="mb-4 text-muted"
                      style={{ textAlign: "center" }}
                    >
                      {itemView &&
                        itemView.caracteristicas &&
                        itemView.caracteristicas.length > 0 &&
                        itemView.caracteristicas[2].nombre}
                      :
                    </h4>
                    <Row>
                      {itemView &&
                        itemView.caracteristicas &&
                        itemView.caracteristicas.length > 0 &&
                        itemView.caracteristicas[2].temario.map((tem) => (
                          <>
                            <Col xl="4" lg="4" md="4" sm="6">
                              <img src={tem} alt="" style={{ width: "100%" }} />
                            </Col>
                          </>
                        ))}
                    </Row>
                  </Col>
                </Row>
              </Container>
              {itemView && itemView.url !== "" && (
                <>
                  <div className="container col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 tabla px-5">
                    <h4 className="mb-4 text-muted">
                      Url: <a href={itemView.url}>{itemView.url}</a>
                    </h4>
                  </div>
                </>
              )}
            </Container>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            style={{
              backgroundColor: "#000000",
            }}
            onClick={() => setShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Inicio;
