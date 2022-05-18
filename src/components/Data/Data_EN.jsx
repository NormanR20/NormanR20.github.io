import React from "react";
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

const Data_EN = [
  {
    title: "Cms OneClick",
    subTitle:
      "This project was developed as a final project of the Expert Systems subject, at the National Autonomous University of Honduras.",
    imagen: imagen1,
    descripcion:
      "This system is a project that was developed as a project, it is in beta phase, since it was never put for public use, however the requested requirements. The application is responsive, which means that it can be used on computer and cell phones.",
    caracteristicas: [
      {
        nombre: "User Control",
        temario: [
          "Administrator user module, which has control of registered users, user roles and access, and also the content that is displayed within it.",
          "Normal user module, which has access only to what the administrator user gives him access.",
        ],
      },
      {
        nombre: "Site creation",
        temario: [
          "Creation of websites using templates, which are defined by the administrator user.",
          "Editing of sites created by the user.",
          "Visit and interact with sites created by other users.",
          "Control of likes and comments received from a site created by the user.",
        ],
      },
      {
        nombre: "Used technology",
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
    title: "Poa-Pacc System",
    subTitle:
      "This system was developed for use within the Faculty of Engineering of the National Autonomous University of Honduras.",
    imagen: imagen2,
    descripcion:
      "This application was developed as a practical project, with this many administrative processes that were carried out in the Faculty of Engineering of the National Autonomous University of Honduras were streamlined. The project is aimed at planning activities to be carried out per year, planning activities according to assigned budgets and being able to generate administrative reports on these, among other functionalities within the system.",
    caracteristicas: [
      {
        nombre: "Control Usuarios",
        temario: [
          "Superuser module, in which you can control which users can interact with the system.",
          "Administrative users module, in which reports will be generated, budget allocator, among other functionalities.",
          "Department users module, in which you can enter the activities to be planned, they can only view and use the budget that was assigned, request permissions, among other functionalities.",
        ],
      },
      {
        nombre: "Poa and Pacc",
        temario: [
          "Form to enter activities, for department users, which was developed using a function called wizard.",
          "View planned activities using two methods, for department users, a calendar and a list in a table.",
          "Modify entered activities, for department users.",
          "Generate reports of the final planning, for administrative users, the generation of reports is carried out under the conditions requested by the users of the system.",
        ],
      },
      {
        nombre: "Used technology",
        temario: [phpIcon, javascriptIcon, mysqlIcon, htmlIcon, cssIcon],
      },
    ],
    url: "",
  },
  {
    title: "Aurora System",
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
export default Data_EN;
