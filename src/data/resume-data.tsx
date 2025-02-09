import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Juan Carlos Lopez Palos",
  initials: "JC",
  location: "Culiacan, Sin.",
  locationLink: "#",
  about:
    "Chief Solutioning Coppel Argentina.",
  summary:
    "Me apasiona aprender nuevas tecnologías y aplicarlas para resolver problemas del mundo real. Valoro el trabajo en equipo, la innovación y la satisfacción del cliente. Puedo aportar diversas perspectivas y experiencias al equipo. También facilito metodologías y prácticas ágiles, para garantizar la entrega oportuna y de calidad de los resultados del proyecto. Colaboro y me comunico con diferentes partes interesadas, como desarrolladores, evaluadores, analistas de negocios y gerentes de operación, para comprender sus necesidades, expectativas y comentarios.",
  avatarUrl: "/img.jpg",
  personalWebsiteUrl: "https://juanlopez.dev",
  contact: {
    email: "me@juanlopez.dev",
    tel: "",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/carloslp0/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Universidad TecMilenio",
      degree: "Maestria en Gestion de Tecnologias de la Informacion",
      start: "2021",
      end: "2023",
    },
    {
      school: "Instituto Tecnológico Superior de Guasave",
      degree: "Ingenieria en Sistemas Computacionales, Base de Datos",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Coppel SA de CV",
      link: "https://coppel.com",
      badges: [],
      title: "Chief Solutioning",
      logo: null,
      start: "Jul 2024",
      end: null,
      description:
        "",
    },
    {
      company: "Coppel SA de CV",
      link: "https://coppel.com",
      badges: [],
      title: "Lider de Proyecto / Scrum Master",
      logo: null,
      start: "Jun 2022",
      end: "Sep 2024",
      description:
        "",
    },
    {
      company: "Coppel SA de CV",
      link: "https://coppel.com",
      badges: [],
      title: "Arquitecto de Software",
      logo: null,
      start: "Oct 2020",
      end: "Jun 2022",
      description:
        "",
    },
    {
      company: "Coppel SA de CV",
      link: "https://coppel.com",
      badges: [],
      title: "Programador",
      logo: null,
      start: "Mar 2019",
      end: "Oct 2020",
      description:
        "",
    },
    {
      company: "GANADERA RUBIO'S, S.P.R. DE R.L.",
      link: "#",
      badges: [],
      title: "Auxiliar de Sistemas",
      logo: null,
      start: "Feb 2019",
      end: "Mar 2019",
      description: "",
    },
    {
      company: "El Tiempo Periódico de Sinaloa · Profesional independiente",
      link: "https://eltiempodesinaloa.com/",
      badges: ["Remoto"],
      title: "Auxiliar de Sistemas",
      logo: null,
      start: "Ene 2018",
      end: null,
      description: "",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Docker",
    "Node.js",
    "Git",
    "Google Cloud Platform",
    "NGINX",
    "PaaS",
    "PHP",
    "PostgreSQL"
  ],
  projects: [
    {
      title: "Migración on premise a Cloud GCP",
      techStack: ["Lider de Proyectos","GKE", "Docker"],
      description:
        "Migracion de servicio r",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Migración PDAs de inventarios de Tienda",
      techStack: ["Lider de Proyectos", "Android", "PHP"],
      description:
        "Migracion de PDA Windows Mobile a Android.",
      logo: null
    },
    {
      title: "Inventarios Automáticos y Re-Impresión de Etiquetas Web",
      techStack: ["Lider de Proyectos", "Angular", "PHP", "Microservicios"],
      description: "Herramienta para inventario de ropa no programado y migracion de etiquetas de ropa a web a demanda.",
      logo: null
    },
    {
      title: "Administrador para delegación de huellas de gerente",
      techStack: ["Lider de Proyecto", "Angular", "PHP", "C++","PostgreSQL","Microservicios"],
      description:
        "Administrador de permisos de gerentes temporales para colaboradores especificos.",
      logo: null
    },
    {
      title: "Migración Solicitud de Crédito y Llamadas CAT",
      techStack: ["Lider de Proyecto", "PHP","JavaScript", "C++","PostgreSQL"],
      description: "Remediacion de vulnerabilidades siguiendo n-2, sistema operativo y lenguajes.",
      logo: null,
    },
    {
      title: "QR MercadoPago en Punto de Venta.",
      techStack: ["Arquitecto de Software", "Angular","TypeScript", "C++", "Java", "PostgreSQL", "Docker"],
      description:
        "Definicion de Arquitectura e integracion de QR de MercadoPago en Punto de Venta Coppel.",
      logo: null,
    },
    {
      title: "Crédito Coppel (Argentina) en la Web",
      techStack: ["Arquitecto de Software","C++", "Java", "PostgreSQL"],
      description:
        "Definicion de Arquitectura y codificacion de Apis para venta credito de cliente Coppel en Internet.",
      logo: null,
    },
    {
      title: "Incorporación de Descuentos a Afiliados",
      techStack: ["Desarrollador","Angular", "TypeScript", "C++","PostgreSQL"],
      description:
        "Modulo que permite aplicar descuentos de afialiados a articulos de ropa y muebles.",
      logo: null,
    },
    {
      title: "Unificación de Sistemas en Tienda",
      techStack: ["Desarrollador","Angular", "TypeScript", "C++", "Nginx", "PostgreSQL"],
      description:
        "Unificación de sistemas de venta de ropa y muebles, asi como modulo de complementarios a la venta.",
      logo: null,
    },
    {
      title: "El Tiempo Periódico de Sinaloa",
      techStack: [
        "WordPress",
      ],
      description:
        "Periódico local",
      logo: null,
      link: {
        label: "eltiempodesinaloa.com",
        href: "https://eltiempodesinaloa.com/",
      },
    },
  ],
} as const;
