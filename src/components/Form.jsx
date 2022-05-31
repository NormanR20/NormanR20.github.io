import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import emailjs from "emailjs-com";
import toastr from "toastr";
import { Col, Row } from "react-bootstrap";

const Form = () => {
  const [t, i18n] = useTranslation("global");
  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3hibv88",
        "template_ck03nf4",
        e.target,
        "efinCDzSA1WkmoDXD"
      )
      .then(
        (result) => {
          console.log(result.text);
          toastr.success(t("email.success"));
        },
        (error) => {
          console.log(error.text);
          toastr.error(t("email.error"));
        }
      );
  };

  return (
    <>
      <div>
        <Col
          style={{
            // backgroundColor: "#000000",
            margin: "0 auto",
            padding: "10px",
          }}
          xl="6"
          lg="6"
          md="6"
          sm="12"
          className="rounded bg-light text-dark p-5 shadow"
        >
          <h4>{t("email.title")}</h4>
          <hr />
          <form onSubmit={enviarEmail}>
            <div className="form-row">
              <div className="form-group col-md-12" style={{ display: "none" }}>
                <label>
                  <b>{t("email.name")}:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  value="Norman Eduardo Raudales Mejía"
                  name="to_name"
                  required
                />
              </div>
              <div className="form-group col-md-12">
                <label>
                  <b>{t("email.name")}:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="from_name"
                  placeholder="Ej. Juan Perez"
                  required
                />
              </div>
              <Row>
                <div className="form-group col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <label>
                    <b>Ext:</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="email"
                    name="ext_from"
                    placeholder="Ej. 504"
                    required
                  />
                </div>
                <div className="form-group col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                  <label>
                    <b>{t("email.cell")}:</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="email"
                    name="cel_from"
                    placeholder="Ej. 95580123"
                    required
                  />
                </div>
              </Row>
              <div className="form-group col-md-12">
                <label>
                  <b>{t("email.email")}:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="from_email"
                  placeholder="Ej. juanito@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>
                <b>{t("email.message")}:</b>
              </label>
              <textarea
                type="text"
                className="form-control"
                id="mensaje"
                name="message"
                placeholder={t("email.placeholder")}
                required
              ></textarea>
            </div>
            <Col className="d-flex flex-wrap justify-content-center align-items-center">
              <button
                type="submit"
                className="btn btn-dark"
                style={{ margin: "0 auto", marginTop: "20px" }}
              >
                {t("email.send")}
              </button>
            </Col>
          </form>
        </Col>
      </div>
    </>
  );
};

export default Form;
