import { Calendar, MapPin, Building } from "lucide-react";

const Home = () => {
  return (
    <div className="flex w-[40%] flex-col">
      <Profile />
      <TimeLines />
      <Projects />
      <Tech />
      <Softwares />
      <hr />
      <button>Resume</button>
    </div>
  );
};

const Profile = () => {
  const btnStyle =
    "mr-8 border-gray-700 rounded-lg py-1 px-3 text-sm bg-gray-700 hover:bg-white hover:text-black hover:cursor-pointer";
  return (
    <div className="mt-20 mb-10 flex flex-col justify-center content-center">
      <div className="text-2xl mb-1 font-semibold">Hey, I'm Bhaskar</div>
      <div className="text-2xl font-semibold">Fullstack Developer.</div>
      <div className="my-6">
        <button className={btnStyle}>
          <div className="flex justify-between">
            <img src="\public\linkedin.png" alt="" className="mr-2 h-5" />
            LinkedIn
          </div>
        </button>
        <button className={btnStyle}>
          <div className="flex justify-between">
            <img src="\public\github.png" alt="" className="mr-2 h-5" />
            Github
          </div>
        </button>
        <button className={btnStyle}>
          <div className="flex justify-between">
            <img src="\public\mail.png" alt="" className="mr-2 h-5" />
            Mail
          </div>
        </button>
      </div>
      <div className="mb-3 text-gray-400">
        Experienced full-stack developer with 5+ years of expertise in Java,
        SpringBoot, Angular and SQL. Interested to learn new technologies
      </div>
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
      <div className="text-xl font-semibold mb-6">Career Timeline</div>
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 rounded-full"></div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative flex items-center">
              {/* Timeline Dot */}
              {index === 0 ? (
                <>
                  {/* Static dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-20"></div>
                  {/* Pulsing ring around the dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full opacity-30 animate-ping z-10"></div>
                </>
              ) : (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full border-4 border-white shadow-lg z-10"></div>
              )}

              {/* Content Card */}
              <div
                className={`w-5/12 ${
                  item.side === "right" ? "ml-auto" : "mr-auto"
                }`}
              >
                <div className="bg-black border border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  {/* Company and Position */}
                  <div className="flex items-center mb-2">
                    <Building className="w-4 h-4 text-gray-400 mr-2" />
                    <h3 className="font-semibold text-lg text-white">
                      {item.company}
                    </h3>
                  </div>
                  <div className="text-gray-300 font-medium mb-3">
                    {item.position}
                  </div>

                  {/* Location and Years */}
                  <div className="flex flex-col space-y-1 mb-3">
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{item.years}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <div className="text-sm font-medium text-gray-300 mb-2">
                      Key Skills:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs bg-gray-700 text-gray-200 rounded border border-gray-600 hover:bg-gray-600 transition-colors duration-150"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

const Projects = () => {
  return (
    <>
      <hr />
      Projects
    </>
  );
};

const Tech = () => {
  return (
    <>
      <hr />
      Tech
    </>
  );
};

const Softwares = () => {
  return (
    <>
      <hr />
      Softwares
    </>
  );
};

export default Home;
