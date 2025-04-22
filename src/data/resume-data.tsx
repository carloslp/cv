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
    "I'm passionate about learning new technologies and applying them to solve real-world problems. I value teamwork, innovation, and customer satisfaction. I can bring diverse perspectives and experiences to the team. I also facilitate agile methodologies and practices to ensure the timely and quality delivery of project results. I collaborate and communicate with different stakeholders, such as developers, testers, business analysts, and operations managers, to understand their needs, expectations, and feedback",
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
      degree: "Master's in Information Technology Management / Maestria en Gestion de Tecnologias de la Informacion",
      start: "2021",
      end: "2023",
    },
    {
      school: "Instituto Tecnológico Superior de Guasave",
      degree: "Computer Systems Engineering, Database / Ingenieria en Sistemas Computacionales, Base de Datos",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Coppel SA de CV",
      link: "https://coppel.com",
      badges: ['Chief Solutioning'],
      title: "Software Development Manager / Gerente de Desarrollo",
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
      title: "Software Architect / Arquitecto de Software",
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
      title: "Developer / Programador",
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
      title: "Systems Assistant / Auxiliar de Sistemas",
      logo: null,
      start: "Feb 2019",
      end: "Mar 2019",
      description: "",
    },
    {
      company: "El Tiempo Periódico de Sinaloa · Profesional independiente",
      link: "https://eltiempodesinaloa.com/",
      badges: ["Remoto"],
      title: "Webmaster",
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
      title: "Migration from on-premise to GCP Cloud.",
      techStack: ["Lider de Proyectos","GKE", "Docker"],
      description:
        "",
      logo: null,
    },
    {
      title: "Migration of Store Inventory PDAs",
      techStack: ["Lider de Proyectos", "Android", "PHP"],
      description:
        "Migration of Windows Mobile PDAs to Android.",
      logo: null
    },
    {
      title: "Automatic Inventory and Web Label Re-printing",
      techStack: ["Lider de Proyectos", "Angular", "PHP", "Microservicios"],
      description: "Tool for unscheduled clothing inventory and on-demand migration of clothing labels to the web..",
      logo: null
    },
    {
      title: "Administrator for manager fingerprint delegation.",
      techStack: ["Lider de Proyecto", "Angular", "PHP", "C++","PostgreSQL","Microservicios"],
      description:
        "Administrator of temporary manager permissions for designated employees.",
      logo: null
    },
    {
      title: "Migration of Credit Application and CAT Calls.",
      techStack: ["Lider de Proyecto", "PHP","JavaScript", "C++","PostgreSQL"],
      description: "Fixing vulnerabilities based on an n-2 rule (minimum two versions back from the latest) for operating systems and coding languages.",
      logo: null,
    },
    {
      title: "MercadoPago QR at Point of Sale.",
      techStack: ["Arquitecto de Software", "Angular","TypeScript", "C++", "Java", "PostgreSQL", "Docker"],
      description:
        "Definition of Architecture and integration of MercadoPago QR at Coppel Point of Sale.",
      logo: null,
    },
    {
      title: "Coppel Credit (Argentina) on the Web",
      techStack: ["Arquitecto de Software","C++", "Java", "PostgreSQL"],
      description:
        "Definition of Architecture and coding of APIs for Coppel customer credit sales on the Internet.",
      logo: null,
    },
    {
      title: "Incorporation of Discounts for Affiliates",
      techStack: ["Desarrollador","Angular", "TypeScript", "C++","PostgreSQL"],
      description:
        "Module that allows applying affiliate discounts to clothing and furniture items.",
      logo: null,
    },
    {
      title: "Unification of Store Systems",
      techStack: ["Desarrollador","Angular", "TypeScript", "C++", "Nginx", "PostgreSQL"],
      description:
        "Consolidation of clothing and furniture sales systems, along with a module for complementary sales.",
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
