import { useState } from "react";
import {
  Calendar,
  MapPin,
  Building,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  CheckCircle,
} from "lucide-react";

// Import icons from react-icons
import {
  FaJava,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiNestjs,
  SiGraphql,
  SiApachekafka,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiJenkins,
  SiIntellijidea,
  SiEclipseide,
  SiPostman,
  SiGithub,
  SiConfluence,
  SiDiagramsdotnet,
  SiJira,
} from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";

const ClipboardNotification = () => {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center bg-vibrant-teal text-navy-blue font-semibold py-3 px-5 rounded-lg shadow-xl animate-fade-in-down">
      <CheckCircle className="w-5 h-5 mr-3" />
      Copied to clipboard!
    </div>
  );
};

type ProfileProps = {
  onMailClick: () => void;
};

const Profile = ( prop: ProfileProps ) => {
  const btnStyle =
    "mr-4 mb-2 bg-dark-blue-gray text-light-slate rounded-full py-2 px-5 text-sm transition-all duration-300 ease-in-out hover:bg-vibrant-teal hover:text-navy-blue hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-vibrant-teal focus:ring-opacity-50";

  return (
    <div className="mt-16 mb-10 text-center">
      <div className="text-5xl mb-3 font-bold text-vibrant-teal animate-fade-in-up">
        Hey, I'm Bhaskar
      </div>
      <div className="text-4xl font-semibold mb-8 text-light-slate animate-fade-in-up animation-delay-300">
        Fullstack Developer.
      </div>
      <div className="my-8 flex justify-center flex-wrap">
        <a
          href="https://www.linkedin.com/in/bhaskar-hegde-a24359159/"
          target="_blank"
          rel="noopener noreferrer"
          className={btnStyle}
        >
          <div className="flex items-center">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </div>
        </a>
        <a
          href="https://github.com/Bhaskar104"
          target="_blank"
          rel="noopener noreferrer"
          className={btnStyle}
        >
          <div className="flex items-center">
            <Github className="mr-2 h-4 w-4" />
            Github
          </div>
        </a>
        <button type="button" onClick={prop.onMailClick} className={btnStyle}>
          <a href="mailTo:189bkh@gmail.com">
          <div className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            Mail
          </div>
          </a>
        </button>
      </div>
      <p className="mb-3 text-slate-gray leading-relaxed text-lg max-w-2xl mx-auto animate-fade-in animation-delay-600">
        Full-stack developer with 5+ years of expertise in Java, SpringBoot,
        Angular/React and SQL. Passionate about building scalable and efficient
        applications, and always keen to explore new technologies.
      </p>
    </div>
  );
};

const TimeLines = () => {
  const timelineData = [
    {
      id: 1,
      company: "Accenture",
      position: "Senior Software Engineer",
      location: "Bengaluru",
      years: "2023 - Present",
      skills: [
        "Java",
        "Spring Boot",
        "NestJs",
        "GraphQL",
        "Angular",
        "React Js",
        "Kafka",
        "Docker",
      ],
      side: "right",
    },
    {
      id: 2,
      company: "Infosys",
      position: "Technology Analyst",
      location: "Mysore",
      years: "2019 - 2023",
      skills: ["Java", "Spring Boot", "Angular", "SQL", "Jenkins"],
      side: "left",
    },
  ];

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold mb-10 text-center text-vibrant-teal">
        Career Timeline
      </h2>
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-dark-blue-gray rounded-full h-full"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative flex items-center">
              {/* Timeline Dot */}
              {item.years.includes("Present") ? ( // Check if "Present" is in the years string
                <>
                  {/* Pulsating ring around the dot */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-vibrant-teal rounded-full opacity-30 animate-pulse-slow z-10"></div>
                  {/* Static dot */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-vibrant-teal rounded-full border-4 border-navy-blue shadow-lg z-20"></div>
                </>
              ) : (
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-gray rounded-full border-4 border-navy-blue shadow-lg z-10"></div>
              )}

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 p-6 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-vibrant-teal ${
                  item.side === "right"
                    ? "md:ml-[54%] bg-dark-blue-gray"
                    : "md:mr-[54%] bg-dark-blue-gray"
                }`}
              >
                <div className="flex items-center mb-3">
                  <Building className="w-5 h-5 text-vibrant-teal mr-3" />
                  <h3 className="font-bold text-xl text-light-slate">
                    {item.company}
                  </h3>
                </div>
                <div className="text-slate-gray font-medium mb-4 text-lg">
                  {item.position}
                </div>

                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex items-center text-slate-gray text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center text-slate-gray text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{item.years}</span>
                  </div>
                </div>

                <div>
                  <div className="text-md font-medium text-light-slate mb-3">
                    Key Skills:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-xs bg-navy-blue text-vibrant-teal rounded-full border border-vibrant-teal hover:bg-vibrant-teal hover:text-navy-blue transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const projectData = [
//     {
//       id: 1,
//       name: "E-Commerce Platform",
//       description:
//         "Full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
//       link: "https://github.com/Bhaskar104",
//       tags: ["React", "Node.js", "MongoDB", "Stripe"],
//     },
//     {
//       id: 2,
//       name: "Task Management App",
//       description:
//         "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features built with Angular and Spring Boot.",
//       link: "https://github.com/Bhaskar104",
//       tags: ["Angular", "Spring Boot", "PostgreSQL", "WebSocket"],
//     },
//     {
//       id: 3,
//       name: "Weather Dashboard",
//       description:
//         "Interactive weather application with location-based forecasts, historical data visualization, and responsive design using React and weather APIs.",
//       link: "https://github.com/Bhaskar104",
//       tags: ["React", "Chart.js", "OpenWeather API"],
//     },
//     {
//       id: 4,
//       name: "Social Media Analytics",
//       description:
//         "Analytics dashboard for social media metrics with data visualization, user engagement tracking, and automated reporting features.",
//       link: "https://github.com/Bhaskar104",
//       tags: ["Vue.js", "D3.js", "Python", "Flask"],
//     },
//     {
//       id: 5,
//       name: "Portfolio Website",
//       description:
//         "Responsive portfolio website showcasing projects and skills with modern design, smooth animations, and optimized performance.",
//       link: "https://github.com/Bhaskar104",
//       tags: ["React", "Tailwind CSS", "Framer Motion"],
//     },
//   ];

//   const itemsPerPage = 3;
//   const totalPages = Math.ceil(projectData.length / itemsPerPage);

//   const navigateWithAnimation = (newIndex) => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex(newIndex);
//       setTimeout(() => {
//         setIsAnimating(false);
//       }, 500);
//     }, 300);
//   };

//   const goToPrevious = () => {
//     const newIndex = currentIndex === 0 ? totalPages - 1 : currentIndex - 1;
//     navigateWithAnimation(newIndex);
//   };

//   const goToNext = () => {
//     const newIndex = currentIndex === totalPages - 1 ? 0 : currentIndex + 1;
//     navigateWithAnimation(newIndex);
//   };

//   const currentProjects = projectData.slice(
//     currentIndex * itemsPerPage,
//     (currentIndex + 1) * itemsPerPage
//   );

//   return (
//     <div className="mb-10 w-full">
//       <h2 className="text-3xl font-bold mb-10 text-center text-vibrant-teal">
//         Featured Projects
//       </h2>

//       <div className="relative px-8 md:px-0">
//         <button
//           onClick={goToPrevious}
//           disabled={isAnimating}
//           className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
//             isAnimating
//               ? "bg-dark-blue-gray text-slate-gray cursor-not-allowed"
//               : "bg-vibrant-teal text-navy-blue hover:bg-teal-500 hover:scale-110"
//           }`}
//           aria-label="Previous projects"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>

//         <button
//           onClick={goToNext}
//           disabled={isAnimating}
//           className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
//             isAnimating
//               ? "bg-dark-blue-gray text-slate-gray cursor-not-allowed"
//               : "bg-vibrant-teal text-navy-blue hover:bg-teal-500 hover:scale-110"
//           }`}
//           aria-label="Next projects"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {currentProjects.map((project, index) => (
//             <div
//               key={`${project.id}-${currentIndex}`}
//               className={`group perspective-1000 cursor-pointer transform transition-all duration-700 ease-in-out ${
//                 isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
//               }`}
//               style={{
//                 transitionDelay: isAnimating ? "0ms" : `${index * 100}ms`,
//               }}
//               onClick={() =>
//                 !isAnimating && window.open(project.link, "_blank")
//               }
//             >
//               <div className="relative w-full h-72 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
//                 {/* Front Side */}
//                 <div className="absolute inset-0 backface-hidden bg-dark-blue-gray border border-dark-blue-gray rounded-lg p-6 shadow-xl flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-bold text-vibrant-teal mb-3">
//                       {project.name}
//                     </h3>
//                     <p className="text-slate-gray text-sm mb-4 line-clamp-4">
//                       {project.description}
//                     </p>
//                   </div>
//                   <div className="flex flex-wrap gap-2 mt-auto">
//                     {project.tags.map((tag, tagIndex) => (
//                       <span
//                         key={tagIndex}
//                         className="px-3 py-1 text-xs bg-navy-blue text-vibrant-teal rounded-full border border-vibrant-teal"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Back Side */}
//                 <div className="absolute inset-0 backface-hidden rotate-y-180 bg-dark-blue-gray border border-dark-blue-gray rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
//                   <p className="text-vibrant-teal text-lg font-semibold">
//                     View on GitHub
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-center mt-10 space-x-3">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => !isAnimating && navigateWithAnimation(index)}
//             disabled={isAnimating}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentIndex
//                 ? "bg-vibrant-teal scale-125 shadow-md"
//                 : "bg-slate-gray hover:bg-light-slate"
//             } ${isAnimating ? "cursor-not-allowed" : "cursor-pointer"}`}
//             aria-label={`Go to page ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

const Tech = () => {
  const techData = [
    {
      category: "Backend",
      technologies: [
        { name: "Java", icon: <FaJava />, color: "text-orange-400" },
        {
          name: "Spring Boot",
          icon: <SiSpringboot />,
          color: "text-green-400",
        },
        { name: "NestJS", icon: <SiNestjs />, color: "text-red-400" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-300" },
        { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-400" },
        { name: "Kafka", icon: <SiApachekafka />, color: "text-blue-400" },
      ],
    },
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-blue-300" },
        { name: "Angular", icon: <FaAngular />, color: "text-red-500" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-light-slate" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          color: "text-yellow-300",
        },
      ],
    },
    {
      category: "Database",
      technologies: [
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
      ],
    },
    {
      category: "DevOps",
      technologies: [
        { name: "Jenkins", icon: <SiJenkins />, color: "text-red-600" },
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
        { name: "Azure", icon: <VscAzure />, color: "text-blue-400" },
        { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
      ],
    },
  ];

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold mb-10 text-center text-vibrant-teal">
        Tech Stack
      </h2>

      <div className="space-y-10">
        {techData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="text-center">
            <h3 className="text-2xl font-semibold text-light-slate mb-6">
              {category.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="group bg-dark-blue-gray border border-dark-blue-gray rounded-lg p-5 min-w-[140px] flex flex-col items-center justify-center space-y-3 transition-all duration-300 ease-in-out hover:border-vibrant-teal hover:shadow-xl hover:scale-105 cursor-pointer"
                >
                  <span
                    className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {tech.icon}
                  </span>
                  <span
                    className={`text-md font-medium text-light-slate group-hover:text-vibrant-teal transition-colors duration-200`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Softwares = () => {
  const allSoftwares = [
    { name: "VS Code", icon: <VscVscode />, color: "text-blue-500" },
    {
      name: "IntelliJ IDEA",
      icon: <SiIntellijidea />,
      color: "text-purple-500",
    },
    { name: "Eclipse", icon: <SiEclipseide />, color: "text-indigo-500" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
    { name: "GitHub", icon: <SiGithub />, color: "text-slate-gray" },
    { name: "Docker Desktop", icon: <FaDocker />, color: "text-blue-500" },
    { name: "MySQL Workbench", icon: <SiMysql />, color: "text-blue-600" },
    { name: "pgAdmin", icon: <SiPostgresql />, color: "text-blue-500" },
    { name: "Figma", icon: <FaFigma />, color: "text-fuchsia-500" },
    { name: "Jira", icon: <SiJira />, color: "text-blue-600" },
    { name: "Confluence", icon: <SiConfluence />, color: "text-blue-500" },
    { name: "Draw.io", icon: <SiDiagramsdotnet />, color: "text-orange-500" },
  ];

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold mb-10 text-center text-vibrant-teal">
        Software & Tools
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {allSoftwares.map((software, index) => (
          <div
            key={index}
            className="group bg-dark-blue-gray border border-dark-blue-gray rounded-lg p-5 w-[160px] h-[140px] flex flex-col items-center justify-center space-y-3 transition-all duration-300 ease-in-out hover:border-vibrant-teal hover:shadow-xl hover:scale-105 cursor-pointer"
          >
            <span
              className={`text-4xl ${software.color} group-hover:scale-110 transition-transform duration-300`}
            >
              {software.icon}
            </span>
            <span
              className={`text-md font-medium text-light-slate group-hover:text-vibrant-teal transition-colors duration-200 text-center`}
            >
              {software.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleMailClick = () => {
    const email = "189bkh@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-navy-blue text-light-slate font-sans relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gold-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
            body { font-family: 'Poppins', sans-serif; }
            .bg-navy-blue { background-color: #0A192F; }
            .text-light-slate { color: #CCD6F6; }
            .text-slate-gray { color: #8892B0; }
            .text-vibrant-teal { color: #64FFDA; }
            .bg-dark-blue-gray { background-color: #112240; }
            .border-dark-blue-gray { border-color: #233554; }
            .hover\\:bg-vibrant-teal-dark { background-color: #4CAF9D; }
            .hover\\:text-gold { color: #FFD700; }
            .focus\\:ring-vibrant-teal { --tw-ring-color: #64FFDA; }

            .perspective-1000 { perspective: 1000px; }
            .transform-style-preserve-3d { transform-style: preserve-3d; }
            .backface-hidden { backface-visibility: hidden; }
            .rotate-y-180 { transform: rotateY(180deg); }
            .group:hover .group-hover\\:rotate-y-180 { transform: rotateY(180deg); }
            .line-clamp-4 { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }

            @keyframes blob {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(30px, -50px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
            }
            .animate-blob { animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9); }
            .animation-delay-2000 { animation-delay: 2s; }
            .animation-delay-4000 { animation-delay: 4s; }

            @keyframes pulse-slow {
              0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
              50% { transform: translate(-50%, -50%) scale(1.4); opacity: 0.3; }
            }
            .animate-pulse-slow { animation: pulse-slow 3s infinite cubic-bezier(0.4, 0, 0.6, 1); }
            
            @keyframes fade-in-down {
                0% { opacity: 0; transform: translateY(-20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-down { animation: fade-in-down 0.5s ease-out forwards; }
          `,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <Profile onMailClick={handleMailClick} />
        <hr className="border-dark-blue-gray my-12" />
        <TimeLines />
        {/* <hr className="border-dark-blue-gray my-12" />
        <Projects /> */}
        <hr className="border-dark-blue-gray my-12" />
        <Tech />
        <hr className="border-dark-blue-gray my-12" />
        <Softwares />
        <hr className="border-dark-blue-gray my-12" />
        <div className="flex justify-center mt-10">
          <a
            href="/path/to/your/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-vibrant-teal text-navy-blue font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-teal-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-vibrant-teal focus:ring-opacity-50"
          >
            <FileText className="w-5 h-5 mr-2" />
            View My Resume
          </a>
        </div>
      </div>
      {showNotification && <ClipboardNotification />}
    </div>
  );
};

export default Home;
