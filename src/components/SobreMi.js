import React from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import FotoPerfil from "../images/IMG_1946.JPG";
import "../css/style.css";

const SobreMi = () => {
  const [t, i18n] = useTranslation("global");

  const calculateAge = (birthday) => {
    var birthday_arr = birthday.split("/");
    var birthday_date = new Date(
      birthday_arr[2],
      birthday_arr[1] - 1,
      birthday_arr[0]
    );
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  var fecha1 = moment("2021-09-10");
  var fecha2 = moment();

  var age = calculateAge("12/08/1994");

  return (
    <div>
      <section id="About1" className="slide-in-from-right mover">
        <Row className="d-flex flex-wrap justify-content-center align-items-center">
          <h3 className="mb-4" align="center" style={{ color: "#001220" }}>
            {t("about.title")}
          </h3>
        </Row>
        <div className="row">
          <div className="col-md-3 gx-5 mb-4" style={{ marginLeft: "auto" }}>
            <div
              className="bg-image ripple shadow-2-strong rounded-5"
              data-mdb-ripple-color="light"
            >
              <img src={FotoPerfil} className="img-fluid" alt="FotoPerfil" />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </div>
          </div>

          <Col md="6" className="mx-5 mb-4" style={{ marginRight: "auto" }}>
            <p className="text-muted">{t("about.description")}</p>
            <div>
              <li>
                <b>{t("about.ageD")}:</b> {age} {t("about.ageT")}
              </li>
              <li>
                <b>{t("about.languageTitle")}</b>&nbsp;{t("about.language")}
              </li>
              <li>
                <b>{t("about.qualificationTitle")}</b>&nbsp;
                {t("about.qualification")}
              </li>
              <li>
                <b>{t("about.experience")}:</b> {t("about.years")}:&nbsp;
                {fecha2.diff(fecha1, "year")} {t("about.month")}:&nbsp;
                {fecha2.diff(fecha1, "month")}
              </li>
            </div>
          </Col>
        </div>
      </section>
    </div>
  );
};

export default SobreMi;
