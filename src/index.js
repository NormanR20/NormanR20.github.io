import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "toastr/build/toastr.css";
import "rsuite/dist/rsuite.min.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "../src/traslations/es/global.json";
import global_en from "../src/traslations/en/global.json";

// const evaluar = () => {
var leng = "es";
if (window.localStorage) {
  if (
    window.localStorage.getItem("idioma") !== undefined &&
    window.localStorage.getItem("idioma")
  ) {
    leng = localStorage.getItem("idioma");
  }
}
// };

i18next.init({
  interpolation: { escapeValue: false },
  lng: leng,
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
