import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import epitoza from '../assets/company/epitoza.png';
import AccioJob from '../assets/company/accioNew.jpeg';
import materialUi from '../assets/tech/materialUi.png';
import bootStrap from '../assets/tech/bootstrap.png';
import expressjs from '../assets/tech/expressjs.png';
import Blog from '../assets/img/blog.webp';
import Snatche from '../assets/img/Snatche.png';
import CryptoTracker from '../assets/img/CryptoTracker.png';
import Sugat from '../assets/img/Sugat.png'
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Back-End Developer",
    icon: backend,
  },
  {
    title: "React.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "expressjs",
    icon: expressjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "materialUi",
    icon:   materialUi,
  },
  {
    name: "bootStrap",
    icon: bootStrap,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Epitoza Infotech Solutions Pvt Ltd",
    icon: epitoza,
    iconBg: "#383E56",
    date: "January 2025 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "MERN Stack Developer with hands-on experience building responsive, scalable web applications using MongoDB, Express.js, React.js, and Node.js",
      "Skilled in REST API development, state management, authentication, and performance optimization. Strong understanding of full-stack architecture and modern JavaScript practices.",
      "Utilized React Libraries to create interactive , responsive, and user-friendly web designs Collaborated with Web Designers and Team Members to ensure web applications met customer requirements",
      "Designed and managed MongoDB databases using Mongoose, Implemented authentication and authorization using JWT",
    ],
  },
  {
    title: "MERN Stack development (Trainee)",
    company_name: "Acciohob",
    icon: AccioJob,
    iconBg: "#E6DEDD",
    date: "March 2023 - July 2024",
    points: [
      "At AccioJob Tech Institute, I completed intensive training in MERN Stack Development, where I built full-stack applications using MongoDB, Express.js, React, and Node.js.",
      "I worked on developing RESTful APIs, implemented user authentication, managed databases, and created responsive frontend interfaces.",
      "The program strengthened my understanding of end-to-end application development and best coding practices.",
      "Daily solve one DSA question and got rewards from Acciojob.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as pretty as our product, but Shrikant proved me wrong.",
    name: "Varun Jain",
    designation: "CEO",
    company: "VJ Solutions",
    image: "https://th.bing.com/th/id/OIP.8Je077DipWVoYs2dHKJ7QAHaJQ?w=159&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shrikant does.",
    name: "Alok Rai",
    designation: "COO",
    company: "Anush IT Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Shrikant optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Sugat Pandit",
    designation: "owner",
    company: "P&P Enterprises",
    image: Sugat,
  },
];

const projects = [
  {
    name: "Blog",
    description:
      "Built a full-stack Blog Website using MongoDB, Express.js, React.js, and Node.js. Implemented user authentication and authorization using JWT. Ensured responsive design and secure data storage. ∗ Enabling users to create, edit, delete, and publish blog posts. Designed RESTful APIs for blog management, integrated text editor for content creation.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
       {
        name: "JWT",
        color: "blue-text-gradient",
      },
    ],
    image: Blog,
    source_code_link: "https://github.com/",
  },
  {
    name: "Snatche",
    description:
      "Snatche embraces the essence of the original platform, offering a user-friendly interface and visually appealing. ∗ Snactche is a Ecommerce largest and most convenient hyper-local delivery company, which enables you to order shoes, sandal and bid price, and other daily essential products, directly via your mobile or web browser. Sign-in and Sign-up using the JWT",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Swiper.js",
        color: "pink-text-gradient",
      },
       {
        name: "Owl-corousol",
        color: "blue-text-gradient",
      },
       {
        name: "Framer-motion",
        color: "blue-text-gradient",
      },
    ],
    image: Snatche,
    source_code_link: "https://snatche-rho.vercel.app/",
  },
  {
    name: "Crypto Tracker",
    description:
      "CryptoTrackeris the tracker you always needed. Compare different crypto currencies look at their graphs-prices, total volumes, market cap, etc. Implemented various functionality like, Crypto Currencies Grid, List, Search bar, for better user experience ∗ Search from the top 100 Crypto currencies in real time and add them to your watchlist as well .",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Axios",
        color: "blue-text-gradient",
      },
      {
        name: "Chart.js",
        color: "pink-text-gradient",
      },
       {
        name: "Framer-Motion",
        color: "green-text-gradient",
      },
    ],
    image: CryptoTracker,
    source_code_link: "https://crypto-tracker-mayshri-shrikant-prakash-tathes-projects.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
