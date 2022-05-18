// import React from "react";
import imagen1 from "../../images/cmsOneClick.svg";
import imagen2 from "../../images/PoaPacc.svg";
import imagen3 from "../../images/rrhh_aurora.svg";
import Angular from "../../images/angularIcon.png";
import NodeIcon from "../../images/NodeIcon.png";
import typescriptIcon from "../../images/typescriptIcon.png";
import mongodbIcon from "../../images/mongodbIcon.png";
import javascriptIcon from "../../images/javascriptIcon.png";
import htmlIcon from "../../images/htmlIcon.png";
import cssIcon from "../../images/cssIcon.png";
import phpIcon from "../../images/phpIcon.png";
import mysqlIcon from "../../images/mysqlIcon.png";

const Data = [
  {
    title: "Cms OneClick",
    subTitle:
      "Este proyecto fue desarrollado como proyecto final de la asignatura Sistemas Expertos, en la Universidad Nacional Autónoma de Honduras.",
    imagen: imagen1,
    descripcion:
      "Este sistema es un proyecto que fue desarrollado como proyecto, está en fase beta, ya que nunca se puso para uso del público, sin embargo los requerimientos solicitadas. La aplicación es responsiva, lo que significa que puede ser utilizada en computadora y en celulares.",
    caracteristicas: [
      {
        nombre: "Control Usuarios",
        temario: [
          "Módulo de usuario administrador, el cual tenga control de los usuarios registrados, los roles y accesos de los usuarios, y también el contenido que se muestra dentro de este.",
          "Módulo de usuario normal, el cual tiene acceso solamente a lo que el usuario administrador le dé acceso.",
        ],
      },
      {
        nombre: "Creación de sitios",
        temario: [
          "Creación de sitios web mediante plantillas, las cuales son definidas por el usuario administrador.",
          "Edición de los sitios creados por el usuario.",
          "Visitar e interactuar con los sitios creados por otros usuarios.",
          "Control de likes y comentarios recibidos un sitio de los creados por el usuario.",
        ],
      },
      {
        nombre: "Tecnologías utilizadas:",
        temario: [
          Angular,
          NodeIcon,
          typescriptIcon,
          mongodbIcon,
          javascriptIcon,
          htmlIcon,
          cssIcon,
        ],
      },
    ],
    url: "https://oneclick-dev.herokuapp.com/",
  },
  {
    title: "Sistema Poa-Pacc",
    subTitle:
      "Este sistema fue desarrollado para uso dentro la Facultad de Ingeniería de la Universidad Nacional Autónoma de Honduras.",
    imagen: imagen2,
    descripcion:
      "Esta aplicación fue desarrollada como proyecto de práctica, con esta se agilizaron muchos procesos administrativos que se realizaban en la Facultad de Ingeniería de la Universidad Nacional Autónoma de Honduras. El proyecto va orientado a la planificación de actividades a realizar al año, planificar actividades según presupuestos asignados y poder generar informes administrativos de estas, entre otras funcionalidades dentro del sistema.",
    caracteristicas: [
      {
        nombre: "Control Usuarios",
        temario: [
          "Módulo de superusuario, en el cual pueda controlar que usuarios pueden interactuar con el sistema.",
          "Modulo usuarios administrativos, en el cual se generará reportes, asignador presupuestos, entre otras funcionalidades.",
          "Modulo usuarios de departamento, en el cual se pueda ingresar las actividades a planificar, estos solo pueden Visualizar y utilizar el presupuesto que se asignó, solicitar permisos, entre otras funcionalidades.",
        ],
      },
      {
        nombre: "Poa y Pacc",
        temario: [
          "Formulario para ingresar actividades, para usuarios de departamento, el cual fue desarrollado utilizando una función llamada wizard.",
          "Visualizar actividades planificadas mediante dos métodos, para usuarios de departamento, un calendario y un listado en una tabla.",
          "Modificar actividades ingresadas, para usuarios de departamento.",
          "Generar reportes de la planificación final, para usuarios administrativos, la generación de los reportes se realiza bajo las condiciones solicitadas por los usuarios del sistema.",
        ],
      },
      {
        nombre: "Tecnologías utilizadas:",
        temario: [phpIcon, javascriptIcon, mysqlIcon, htmlIcon, cssIcon],
      },
    ],
    url: "",
  },
  {
    title: "Sistema Aurora",
    subTitle:
      "Este sistema fue desarrollado para uso dentro la Facultad de Ingeniería de la Universidad Nacional Autónoma de Honduras.",
    imagen: imagen3,
    descripcion:
      "Esta aplicación fue desarrollada como proyecto de práctica, con esta se agilizaron muchos procesos administrativos que se realizaban en la Facultad de Ingeniería de la Universidad Nacional Autónoma de Honduras. El proyecto va orientado a la planificación de actividades a realizar al año, planificar actividades según presupuestos asignados y poder generar informes administrativos de estas, entre otras funcionalidades dentro del sistema.",
    caracteristicas: [
      {
        nombre: "Control Usuarios",
        temario: [
          "Módulo de superusuario, en el cual pueda controlar que usuarios pueden interactuar con el sistema.",
          "Modulo usuarios administrativos, en el cual se generará reportes, asignador presupuestos, entre otras funcionalidades.",
          "Modulo usuarios de departamento, en el cual se pueda ingresar las actividades a planificar, estos solo pueden Visualizar y utilizar el presupuesto que se asignó, solicitar permisos, entre otras funcionalidades.",
        ],
      },
      {
        nombre: "Poa y Pacc",
        temario: [
          "Formulario para ingresar actividades, para usuarios de departamento, el cual fue desarrollado utilizando una función llamada wizard.",
          "Visualizar actividades planificadas mediante dos métodos, para usuarios de departamento, un calendario y un listado en una tabla.",
          "Modificar actividades ingresadas, para usuarios de departamento.",
          "Generar reportes de la planificación final, para usuarios administrativos, la generación de los reportes se realiza bajo las condiciones solicitadas por los usuarios del sistema.",
        ],
      },
      {
        nombre: "Tecnologías utilizadas:",
        temario: [phpIcon, javascriptIcon, mysqlIcon, htmlIcon, cssIcon],
      },
    ],
    url: "",
  },
];
export default Data;
