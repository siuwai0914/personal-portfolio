import {
  googlecsfirst,
  hku,
  wesurance,
  hktvmall,
  cryptodotcom,
  preface,
  kody,
  bullsandcows,
  numberguessinggame,
  snakegame,
  miniurl,
  csfirstphoto,
  titanic,
  spaceinvader,
  memorygame,
  weather,
  nikewebscraping,
  footballnews,
  twoofoureight,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiNetlify,
  SiFlask,
  SiNextdotjs,
  SiSelenium,
  SiMongodb,
  SiRedis,
  SiVercel,
  SiPostgresql,
  SiSwift,
  SiPhp,
  SiJson,
  SiPandas,
  SiDocker,
  SiApachemaven,
  SiMacos,
  SiStreamlit,
  SiDatadog,
  SiNumpy,
  SiPytest,
  SiGoogleappsscript,
  SiFastapi
} from "react-icons/si";

import {
  FaUnity
} from "react-icons/fa6";

import { 
  FaWindows, 
  FaItchIo,
  FaBootstrap,
  FaReact
} from "react-icons/fa";

import { 
  BiLogoFlask,
  BiLogoSpringBoot,
  BiLogoVisualStudio
} from "react-icons/bi";

import { 
  TbBrandCSharp 
} from "react-icons/tb";

import { 
  BsFiletypeXml ,
  BsFiletypeCsv
} from "react-icons/bs";

import { 
  FcLinux 
} from "react-icons/fc";

import { 
  DiCss3, DiJava, DiRuby 
} from "react-icons/di";

import { RiNextjsFill } from "react-icons/ri";

export const resumeLink = "";
export const repoLink = "https://github.com/siuwai0914/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/timmyswcheung";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: hku,
    title: "The University of Hong Kong",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "September 2013 - June 2017",
    content1: "Major: Computer Science",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [

];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-2",
        icon: DiJava,
        name: "Java",
        
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: DiRuby,
        name: "Ruby",
      },
      {
        id: "pl-5",
        icon: SiSwift,
        name: "Swift",
      },
      {
        id: "pl-6",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-7",
        icon: SiPhp,
        name: "PHP",
      },
      {
        id: "pl-8",
        icon: TbBrandCSharp,
        name: "C#",
      },
    ],
  },
  {
    title: "Data Representation Languages",
    items: [
      {
        id: "drl-1",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "drl-2",
        icon: BsFiletypeXml,
        name: "XML",
      },
      {
        id: "drl-3",
        icon: SiJson,
        name: "JSON",
      },
      {
        id: "drl-4",
        icon: BsFiletypeCsv,
        name: "CSV",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: BiLogoSpringBoot,
        name: "Spring Boot",
      },
      {
        id: "f-2",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-3",
        icon: BiLogoFlask,
        name: "Flask",
      },
      {
        id: "f-4",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-5",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-8",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-9",
        icon: SiRubyonrails,
        name: "Ruby on Rails",
      },
      {
        id: "f-10",
        icon: SiSelenium,
        name: "Selenium",
      },
      {
        id: "f-11",
        icon: SiPandas,
        name: "Pandas",
      },
      {
        id: "f-12",
        icon: SiNumpy,
        name: "Numpy",
      },
      {
        id: "f-13",
        icon: SiPytest,
        name: "Pytest",
      },
      {
        id: "f-14",
        icon: FaBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-15",
        icon: SiFastapi,
        name: "FastAPI",
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        id: "d-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "d-2",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "d-3",
        icon: SiRedis,
        name: "Redis",
      },
      {
        id: "d-4",
        icon: SiPostgresql,
        name: "Postgresql",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVercel,
        name: "Vercel",
      },
      {
        id: "t-10",
        icon: FaUnity,
        name: "Unity",
      },
      {
        id: "t-11",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-12",
        icon: SiApachemaven,
        name: "Maven",
      },
      {
        id: "t-13",
        icon: SiStreamlit,
        name: "Streamlit",
      },
      {
        id: "t-14",
        icon: SiDatadog,
        name: "Datadog",
      },
      {
        id: "t-15",
        icon: FaItchIo,
        name: "itch.io"
      },
      {
        id: "t-16",
        icon: SiGoogleappsscript,
        name: "Google App Script"
      },
    ],
  },
  {
    title: "Operating System",
    items: [
      {
        id: "os-1",
        icon: SiMacos,
        name: "Mac",
      },
      {
        id: "os-2",
        icon: FcLinux,
        name: "Linux",
      },
      {
        id: "os-3",
        icon: FaWindows,
        name: "Window",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Preface",
    logo: preface,
    link: "https://www.preface.ai",
    positions: [
      {
        title: "Coding Instructor",
        duration: "May 2022 - Present",
        content: [
          {
            text: "Instructed 100+ multi-demographic students, from children to corporate adults, in modern software engineering, prompt engineering and AI concepts.",
            link: "",
          },
          {
            text: "Developed and delivered comprehensive curricula covering AI prompt engineering, LLM workflows, Python (Django, Flask, Data Science), full-stack web development (React, JavaScript, SQL), and mobile/game development (Swift, Unity).",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Kody",
    logo: kody,
    link: "https://kody.com/",
    positions: [
      {
        title: "Implementation Engineer",
        duration: "Dec 2024 - Feb 2025",
        content: [
          {
            text: "Built Java, PHP, and Python SDKs enabling merchants to integrate Kody's in-store payment services.",
            link: "",
          },
          {
            text: "Delivered end-to-end integrations for retail clients including Miniso and Bossini, rolling out in-store payment integrations across their Hong Kong retail networks.",
            link: "",
          },
          {
            text: "Wrote sample code and technical documentation, and gathered requirements directly with client teams.",
            link: "",
          },
          {
            text: "Skills: Java, PHP, Python, PostgreSQL",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "crypto.com",
    logo: cryptodotcom,
    link: "https://crypto.com/",
    positions: [
      {
        title: "Software Developer",
        duration: "May 2022 - July 2022",
        content: [
          {
            text: "Involved in the Crypto.com VISA card auto top up project. This feature eliminates the need for manual topup from the customer.",
            link: "",
          }
        ],
      },
    ],
  },
  {
    organisation: "HKTVmall (Shoalter Technology Limited)",
    logo: hktvmall,
    link: "https://www.hktvmall.com/",
    positions: [
      {
        title: "Senior Programmer",
        duration: "Jun 2021 - May 2022",
        content: [
          {
            text: "Led a payment team of four in integrating 6+ major payment systems, including PayPal, Octopus, Atome, AlipayHK and WeChatPay, securing reliable transaction paths for the platform.",
            link: "",
          },
          {
            text: "Maintained and optimised VISA/MasterCard authorisation pipelines across Cybersource, AsiaPay and MPGS.",
            link: "",
          },
          {
            text: "Designed a secure tokenization architecture enabling third-party merchants to process payments using securely stored customer cards.",
            link: "",
          },
          {
            text: "Built microservice architecture for payment gateway processes, and led code reviews and production checks.",
            link: "",
          },
          {
            text: "Skills: Java Spring Boot (Java 8/11), Redis, MySQL, React",
            link: "",
          },
        ],
      },
      {
        title: "Programmer II",
        duration: "Oct 2020 - Jun 2021",
        content: [
          {
            text: "Built proprietary microservices for HKTVpay, the payment solution for HKTV O2O retail shops.",
            link: "",
          },
          {
            text: "Engineered high-performance payment APIs driving HKTV Express operations.",
            link: "",
          },
        ],
      },
      {
        title: "Programmer",
        duration: "Dec 2018 - Oct 2020",
        content: [
          {
            text: "Integrated and coordinated with external partners, including Citibank, on project planning and delivery of the Citibank Direct Payment Gateway.",
            link: "",
          },
          {
            text: "Automated annual insurance policy renewal and generated financial and marketing reports.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Wesurance",
    logo: wesurance,
    link: "https://www.wesurance.io/",
    positions: [
      {
        title: "System Developer",
        duration: "July 2017 - Dec 2018",
        content: [
          {
            text: "Developed RESTful APIs for in-app insurance purchases.",
            link: "",
          },
          {
            text: "Integrated TNG wallet and TransUnion APIs for eKYC (electronic know-your-customer) verification.",
            link: "",
          },
          {
            text: "Built an online travel insurance platform and promotional websites for the marketing team.",
            link: "",
          },
          {
            text: "Skills: Java Spring Boot (Java 8), MongoDB, MySQL, JavaScript, HTML5",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Bulls and Cows Game (Chrome Extension)",
    link: "https://chromewebstore.google.com/detail/bulls-and-cows-game/lnlpicpfopckcjfaoeablgpmdiabcpfh",
    image: bullsandcows,
    content:
      "A single-player Bulls and Cows code-breaking game, available as a Chrome extension. The game generates a secret 4-digit number with all unique digits, and you guess it using feedback on correct digits and positions. Built with HTML, CSS and JavaScript.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
    ],
  },
  {
    id: "project-2",
    title: "Bulls and Cows Game (iOS App)",
    link: "https://apps.apple.com/us/app/bulls-and-cows-game/id6743632577",
    image: bullsandcows,
    content:
      "A native iOS version of the classic Bulls and Cows code-breaking game, published on the App Store. The game generates a secret 4-digit number with all unique digits and the player tries to guess it. Built with Swift.",
    stack: [
      {
        id: "icon-1",
        icon: SiSwift,
        name: "Swift"
      },
    ],
  },
  {
    id: "project-3",
    title: "Snake Game",
    link: "https://siuwai0914.itch.io/snake-game",
    image: snakegame,
    content:
      "A classic Snake game built with Python and published on itch.io. The snake speeds up as it grows longer, and your highest score is saved.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: FaItchIo,
        name: "itch.io"
      },
    ],
  },
  {
    id: "project-4",
    title: "Snake Game (Chrome Extension)",
    link: "https://chromewebstore.google.com/detail/snake-game/khcpichjabclbbhngajmmdbdodjgbnck",
    image: snakegame,
    content:
      "A classic Snake game available as a Chrome extension. The snake speeds up as it grows longer, and your highest score is saved. Built with HTML, CSS and JavaScript.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
    ],
  },
  {
    id: "project-5",
    title: "Number Guessing Game (Chrome Extension)",
    link: "https://chromewebstore.google.com/detail/number-guessing-game/jfemcpegabojooeagmbllbkgcebemcea",
    image: numberguessinggame,
    content:
      "A simple number guessing game available as a Chrome extension: pick a number range, make your guesses, and get hints until you find the secret number. Built with HTML, CSS and JavaScript.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
    ],
  },
  {
    id: "project-6",
    title: "Titanic Survival Prediction",
    link: "https://predictiontitanic.streamlit.app/",
    image: titanic,
    content:
      "A machine learning web app that predicts whether a Titanic passenger would have survived, based on factors such as age, gender and ticket class. Built with Python, Pandas and NumPy, and deployed with Streamlit.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiPandas,
        name: "Pandas"
      },
      {
        id: "icon-3",
        icon: SiNumpy,
        name: "Numpy"
      },
      {
        id: "icon-4",
        icon: SiStreamlit,
        name: "Streamlit"
      },
    ],
  },
  {
    id: "project-7",
    title: "Space Invader",
    link: "https://siuwai0914.itch.io/space-invader/",
    image: spaceinvader,
    content:
      "A classic 2D space shooter game built with Python and Pygame, published on itch.io.",    
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: FaItchIo,
        name: "itch.io"
      },
    ],
  },
  {
    id: "project-8",
    title: "MiniURL",
    link: "https://miniurl-seven.vercel.app/",
    image: miniurl,
    content:
      "A URL shortener web application built with Flask and Python. Paste a long link to get a short one, with links stored in MongoDB and the app deployed on Vercel.",
    stack: [
      {
        id: "icon-1",
        icon: SiFlask,
        name: "Flask"
      },
      {
        id: "icon-2",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-4",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-5",
        icon: SiMongodb,
        name: "MongoDB"
      },
    ],
  },
  {
    id: "project-9",
    title: "Country Flag Memory Game",
    link: "https://chromewebstore.google.com/detail/country-flag-memory-game/anebppjnjlppafogdlkgekijfalngdlj",
    image: memorygame,
    content:
      "A Chrome extension memory game where you flip cards to match pairs of country flags, testing your memory while learning flags from around the world. Built with HTML, CSS and JavaScript.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
    ],
  },
  {
    id: "project-10",
    title: "Hong Kong Weather Forecast",
    link: "https://data-science-phi.vercel.app/hkweather",
    image: weather,
    content:
      "A Flask web application that fetches and displays the latest 9-day weather forecast for Hong Kong, using real-time data from the Hong Kong Observatory Open Data API.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-4",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-5",
        icon: SiFlask,
        name: "Flask"
      },
    ],
  },
  {
    id: "project-11",
    title: "Nike Product Price Web Scraping",
    link: "https://data-science-phi.vercel.app/nike",
    image: nikewebscraping,
    content:
      "A Python and Flask web application that scrapes and displays product prices across different Nike categories, demonstrating web scraping and data presentation.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-4",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-5",
        icon: SiFlask,
        name: "Flask"
      },
    ],
  },
  {
    id: "project-12",
    title: "Football News - SCMP",
    link: "https://data-science-phi.vercel.app/footballnews",
    image: footballnews,
    content:
      "A Python and Flask web application that scrapes and displays the latest football news from the South China Morning Post (SCMP).",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-4",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-5",
        icon: SiFlask,
        name: "Flask"
      },
    ],
  },
  {
    id: "project-13",
    title: "2048 Game",
    link: "https://2048-puzzle-tile-game.netlify.app/",
    image: twoofoureight,
    content:
      "A browser version of the classic 2048 tile-sliding puzzle: combine matching tiles to reach 2048. Built with React and Next.js and deployed on Netlify.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-4",
        icon: FaReact,
        name: "React"
      },
      {
        id: "icon-5",
        icon: RiNextjsFill,
        name: "Next.js"
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "HKU x Google CS First",
    title: "Gurus",
    duration: "Feburary 2016 - April 2016",
    content: [
      {
        text: "An activity with 8 workshops to teach and assist both primary school and secondary school students in learning programming skills using Scratch.",
        link: "https://photo-nas.cs.hku.hk/photo/index.php#!Albums/album_323031352d32303136/album_323031352d323031362f323031363034313620484b55207820476f6f676c65204353204669727374/photo_323031352d323031362f323031363034313620484b55207820476f6f676c65204353204669727374_50313037303632382e4a5047",
      },
      {
        text: "They applied this knowledge to control Arduino-based robots.",
        link: "https://csfirst.withgoogle.com/s/en/home",
      },
    ],
    logo: googlecsfirst,
    image: csfirstphoto
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/timmyswcheung",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/siuwai0914",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:wai0914@connect.hku.hk",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:siuwai0914@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Timmy Cheung",
    githubUsername: 'siuwai0914',
    tagLine: "Software Engineer | Payment Systems | Java & Python | Hong Kong",
    intro:
    "Software engineer based in Hong Kong with 8+ years of experience in backend development, microservices and payment gateway integrations across fintech and e-commerce. I've integrated 6+ payment systems at HKTVmall, built Java, PHP and Python SDKs at Kody, and teach software engineering and AI. A graduate of The University of Hong Kong (BEng Computer Science).",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];
