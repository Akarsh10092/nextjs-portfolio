const navigation = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Blogs", href: "#blogs" },
  { name: "Experience", href: "#work" },
  { name: "Contact Me", href: "#contact" },
];
const services = [
  {
    title: "Frontend Developer",
    icon: "/about/front2.png",
  },
  {
    title: "React Native Developer",
    icon: "/about/native2.png",
  },

  {
    title: "Backend Developer",
    icon: "/about/back2.png",
  },
];
const about = {
  title: "About Me",
  desc: ` I'm a skilled software developer with experience in TypeScript and
 JavaScript, and expertise in frameworks like NextJS, Node.js, and
 Three.js. I'm a quick learner and collaborate closely with clients to
 create efficient, scalable, and user-friendly solutions that solve
 real-world problems. Let's work together to bring your ideas to life!`,
};
const experience = [
  {
    company: "Vaionex APAC",
    position: "FrontEnd Developer",
    icon: "/about/vaionex.jpg",
    color: "#383E56",
    date: "2023-present",
    points: [{ point: "Helllo" }, { point: "Helllo" }, { point: "Helllo" }],
  },
  {
    company: "Cognizant",
    position: "Programmer Analyst",
    icon: "/about/cognizant.jpg",
    color: "#383E56",
    date: "2021-2022",
    points: [{ point: "Helllo" }, { point: "Helllo" }, { point: "Helllo" }],
  },
];
const projectCardData = [
  {
    imgsrc: "/about/btech.png",
    title: "Btech Burger Wala",
    text: "Comprehensive ecommerce app for food ordering using MERN stack",
    view: "https://btechburgerwala-eight.vercel.app/",
    source: "https://github.com/Akarsh10092/btechBurgerwala-frontend",
  },
  {
    imgsrc: "/about/admin.png",

    title: "Admin DashBoard",

    text: "Admin Dashboard for everyday access of daily eventfull data",

    view: "https://admindashboard-flax.vercel.app/",

    source: "https://github.com/Akarsh10092/admindashboard",
  },
  {
    imgsrc: "/about/ecom.png",
    title: "Ecom Website",
    text: "ECom Website for all your fashion needs in one place",
    view: "https://ecom-app-one.vercel.app/",
    source: "https://github.com/Akarsh10092/ecom-app",
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: "assets/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "assets/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "assets/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "assets/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "assets/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "assets/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "assets/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "assets/tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "assets/tech/mongodb.png",
  },
  {
    name: "Three JS",
    icon: "assets/tech/threejs.svg",
  },
  {
    name: "git",
    icon: "assets/tech/git.png",
  },
  {
    name: "figma",
    icon: "assets/tech/figma.png",
  },
  {
    name: "docker",
    icon: "assets/tech/docker.png",
  },
];

export {
  services,
  about,
  navigation,
  experience,
  technologies,
  projectCardData,
};
