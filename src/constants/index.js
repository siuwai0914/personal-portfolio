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
  miniurl
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
  SiStreamlit
} from "react-icons/si";

import {
  FaUnity
} from "react-icons/fa6";

import { 
  FaWindows 
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
  BsFiletypeXml 
} from "react-icons/bs";

import { 
  FcLinux 
} from "react-icons/fc";

import { 
  DiCss3, DiJava, DiRuby 
} from "react-icons/di";

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
      }
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
        title: "Instructor",
        duration: "May 2022 - Present",
        content: [
          {
            text: "Specializes in backend, frontend, and Unity, and teaches students of all ages, including kids, teenagers, and adults.",
            link: "",
          },
          {
            text: "Provide training to new instructor",
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
            text: "Develops SDKs in different programming languages, including Java, PHP and Python",
            link: ""
          },
          {
            text: "Provide sample source code in different programming languages for clients to use Kody SDKs.",
            link: ""
          },
          {
            text: "Collaborate with clients to understand their technical requirements and design effective implementation strategies.",
            link: ""
          }
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
    organisation: "HKTVmall",
    logo: hktvmall,
    link: "https://www.hktvmall.com/",
    positions: [
      {
        title: "Senior Programmer",
        duration: "Jun 2021 - May 2022",
        content: [
          {
            text: "Led a payment team of four in implementing numerous payment gateways for the online shopping mall, including Octopus, Atome, AlipayHK, and WeChatPay.",
            link: "",
          },
          {
            text: "Built microservice architecture for payment gateway processes",
            link: "",
          },
        ],
      },
      {
        title: "Programmer II",
        duration: "Oct 2020 - Jun 2021",
        content: [
          {
            text: "Developed HKTVpay for HKTV O2O Shop. ",
            link: "",
          },
          {
            text: "Developed payment APIs for HKTV Express. ",
            link: "",
          },
        ],
      },
      {
        title: "Programmer",
        duration: "Dec 2018 - Oct 2020",
        content: [
          {
            text: "Developed and coordinated with external parties like Citibank for project planning including Citibank Direct Payment Gateway",
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
            text: "Developed RESTful APIs for insurance purchases within the app",
            link: "",
          },
          {
            text: "Integrated TNG wallet and TransUnion APIs for eKYC into the Wesurance App",
            link: "",
          },
          {
            text: "Created websites for purchasing travel insurance online, as well as promotional websites for the marketing team.",
            link: "",
          },
        ],
      },
    ],
  }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Bulls and Cows Game (Chrome Extension)",
    link: "https://chromewebstore.google.com/detail/bulls-and-cows-game/lnlpicpfopckcjfaoeablgpmdiabcpfh",
    image: bullsandcows,
    content:
      "Bulls and Cows is a classic code-breaking mind game that can be played in a single-player format. In this version, the game generates a secret code, a 4-digit number with all unique digits, and the player attempts to guess it.",
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
      "Bulls and Cows is a classic code-breaking mind game that can be played in a single-player format. In this version, the game generates a secret code, a 4-digit number with all unique digits, and the player attempts to guess it.",
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
    title: "MiniURL",
    link: "https://miniurl-seven.vercel.app/",
    image: miniurl,
    content:
      "An Flask application that can shorten the URL",
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
    id: "project-4",
    title: "Snake Game",
    link: "https://chromewebstore.google.com/detail/snake-game/khcpichjabclbbhngajmmdbdodjgbnck",
    image: snakegame,
    content:
      "Classic Snake Game: Simple, addictive, and fun! The snake speeds up as it grows longer. Highest score saved.",
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
    title: "Number Guessing Game",
    link: "https://chromewebstore.google.com/detail/number-guessing-game/jfemcpegabojooeagmbllbkgcebemcea",
    image: numberguessinggame,
    content:
      "A fun and easy number guessing game",
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
    tagLine: "Full-Stack Developer | Python | Java | Payment",
    intro: "Software Developer from Hong Kong who is either busy improving his craft or pondering over the next big idea."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];
