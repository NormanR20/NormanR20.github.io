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
import reactIcon from "../../images/react.png";

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
        nombreTemario: [
          "Angular",
          "NodeJS",
          "TypeScript",
          "Mongodb",
          "JavaScript",
          "MySQL",
          "HTML",
          "CSS",
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
        nombreTemario: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      },
    ],
    url: "",
  },
  {
    title: "Aurora System",
    subTitle: "This system was developed for use by the Farinter drugstore.",
    imagen: imagen3,
    descripcion:
      "This application was developed to streamline the processes that are developed in human resources.",
    caracteristicas: [
      {
        nombre: "Control Usuarios",
        temario: [
          "Superuser role, in which you can control which users can interact with the system.",
          "Manager user role, which can view the employees that are assigned to it and all the corresponding information, and is also allowed to monitor the processes to which an employee is assigned.",
          "Employee role, in which you can view information corresponding to him, view pending documents and participate in surveys, etc.",
          "Senior management role, this has access to all the information of the application",
          "Work environment module, this has its own role of manager, this is where you have access to internal surveys carried out within the company",
          "OnBoarding and OffBoarding module, this has its own responsible role, in which the processes corresponding to hiring and dismissals are carried out, the processes are carried out through steps where the responsible personnel indicates what must be followed in each step",
        ],
      },
      {
        nombre: "Aurora",
        temario: [
          "Control of employees both entries and exits.",
          "View and generate reports by module.",
          "Document management.",
        ],
      },
      {
        nombre: "Tecnologías utilizadas:",
        temario: [reactIcon, javascriptIcon, htmlIcon, cssIcon],
        nombreTemario: ["ReactJs", "JavaScript", "HTML", "CSS"],
      },
    ],
    url: "",
  },
];
export default Data_EN;
