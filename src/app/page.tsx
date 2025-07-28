"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ImageModal from "./components/ImageModal";
import ProjectCard from "./components/ProjectCard";
import TechStackItem from "./components/TechStackItem";
import EducationCard from "./components/EducationCard";
import WorkExperienceCard from "./components/WorkExperienceCard";

export default function Home() {

  const whatAmI = [
    "a passionate developer",
    "a backend specialist",
    "a system integrator",
    "a DevOps enthusiast",
    "a problem solver",
    "a team player",
    "a quick learner",
    "a clean code advocate",
    "a performance optimizer",
    "an architecture enthusiast"
  ]

  const maxLength = Math.max(...whatAmI.map(text => text.length));

  const [iAm, setIAm] = useState("a passionate developer");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({
    src: "",
    alt: ""
  });

  const handleImageClick = (src: string, alt: string) => {
    setModalImage({ src, alt });
    setIsModalOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = whatAmI.indexOf(iAm);
      const nextIndex = (currentIndex + 1) % whatAmI.length;
      setIAm(whatAmI[nextIndex]);
    }, 2000);

    return () => clearInterval(interval);
  })


  return (
    <>
      <div>
        <Navbar></Navbar>
        <main className="pt-20 xl:pt-0">
          <div className="pl-0 sd:pl-8 lg:mx-20">
            <div className="min-h-screen flex items-center">
              <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-8 px-4">
                <div className="w-full lg:w-1/2 animate-slide-in-left">
                  <div className="space-y-4">
                    <h1 className="text-6xl md:text-8xl font-bold text-white">Hi, I'm <span className="pacifico-regular">Tim</span></h1>
                    <p className="text-3xl text-green-500 pacifico-regular opacity-50 animate-[fadeIn_1s_ease-out_forwards]">{iAm}</p>
                    <p className="text-xl text-white"> with a background in application development and extensive experience.
                      My strengths lie in backend development, but I also have a keen interest in frontend work.
                      Additionally, I have experience in DevOps and a solid understanding of system integration.
                      I'm always eager to expand my knowledge and take on new challenges.
                    </p>
                    <div className="">
                      <div className="flex gap-6 mt-4">
                        <a href="https://github.com/i3lackracer" target="_blank" className="group relative flex flex-col items-center">
                          <i className="devicon-github-original text-4xl text-white transition-transform group-hover:scale-110"></i>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/tim-s%C3%BCllner/" target="_blank" className="group relative flex flex-col items-center">
                          <i className="devicon-linkedin-plain text-4xl text-white transition-transform group-hover:scale-110"></i>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">LinkedIn</span>
                        </a>
                        <a href="https://www.xing.com/profile/TimMartin_Suellner" target="_blank" className="group relative flex flex-col items-center">
                          <img className="w-9 h-9 text-white transition-transform group-hover:scale-110 invert" src="xing.png"></img>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Xing</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 animate-slide-in-right animate-bounce">
                  <div className="space-y-4">
                    <img className="md:w-1/2 h-auto object-cover rounded-lg mx-auto" src="me.jpg" alt="Tim's profile picture"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Skills & Technologies </h2>

            <div className="max-w-6xl mx-auto space-y-12">
              {/* Operating Systems */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Operating Systems</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <TechStackItem icon="windows11" name="Windows" link="https://www.microsoft.com/windows" />
                  <TechStackItem icon="linux" name="Linux" invert={true} link="https://www.linux.org/" />
                  <TechStackItem icon="apple" name="macOS" invert={true} link="https://www.apple.com/macos" />
                </div>
              </div>

              {/* Programming Languages */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Programming Languages</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <TechStackItem icon="java" name="Java" link="https://www.java.com" />
                  <TechStackItem icon="csharp" name="C#" link="https://dotnet.microsoft.com/languages/csharp" />
                  <TechStackItem icon="python" name="Python" link="https://www.python.org" />
                  <TechStackItem icon="go-original-wordmark" name="Go" onlyUseIconName={true} link="https://golang.org" />
                  <TechStackItem icon="javascript" name="JavaScript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
                  <TechStackItem icon="typescript" name="TypeScript" link="https://www.typescriptlang.org" />
                  <TechStackItem icon="dart" name="Dart" link="https://dart.dev" />
                  <TechStackItem icon="php" name="PHP" link="https://www.php.net" />
                  <TechStackItem icon="cplusplus" name="C++" link="https://isocpp.org" />
                  <TechStackItem icon="c" name="C" link="https://en.cppreference.com/w/c" />
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Frameworks & Libraries</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <TechStackItem icon="angularjs" name="Angular" link="https://angular.io" />
                  <TechStackItem icon="react" name="React" link="https://reactjs.org" />
                  <TechStackItem icon="vuejs" name="Vue.js" link="https://vuejs.org" />
                  <TechStackItem icon="spring" name="Spring" link="https://spring.io" />
                  <TechStackItem icon="express-original" name="Express" invert={true}  onlyUseIconName={true} link="https://expressjs.com"/>
                  <TechStackItem icon="nestjs" name="NestJS" link="https://nestjs.com" />
                  <TechStackItem icon="flutter" name="Flutter" link="https://flutter.dev" />
                  <TechStackItem icon="tailwindcss" name="Tailwind CSS" link="https://tailwindcss.com" />
                  <TechStackItem icon="nodejs" name="Node.js" link="https://nodejs.org" />
                </div>
              </div>

              {/* DevOps & Cloud */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">DevOps & Cloud</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <TechStackItem icon="docker" name="Docker" link="https://www.docker.com" />
                  <TechStackItem icon="kubernetes" name="Kubernetes" link="https://kubernetes.io" />
                  <TechStackItem icon="googlecloud" name="Google Cloud" link="https://cloud.google.com" />
                  <TechStackItem icon="nginx" name="Nginx" link="https://www.nginx.com" />
                  <TechStackItem icon="github" name="GitHub" invert={true} link="https://github.com" />
                  <TechStackItem icon="gitlab" name="GitLab" link="https://gitlab.com" />
                  <TechStackItem icon="jenkins" name="Jenkins" link="https://www.jenkins.io" />
                  <TechStackItem icon="grafana" name="Grafana" link="https://grafana.com" />
                </div>
              </div>

              {/* Databases */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Databases</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <TechStackItem icon="mysql" name="MySQL" link="https://www.mysql.com" />
                  <TechStackItem icon="postgresql" name="PostgreSQL" link="https://www.postgresql.org" />
                  <TechStackItem icon="mongodb" name="MongoDB" link="https://www.mongodb.com" />
                  <TechStackItem icon="sqlite" name="SQLite" link="https://www.sqlite.org" />
                  <TechStackItem icon="mariadb" name="MariaDB" link="https://mariadb.org" />
                </div>
              </div>

              {/* IDEs & Tools */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">IDEs & Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <TechStackItem icon="visualstudio" name="Visual Studio" link="https://visualstudio.microsoft.com" />
                  <TechStackItem icon="intellij" name="IntelliJ" link="https://www.jetbrains.com/idea" />
                  <TechStackItem icon="vscode" name="VS Code" link="https://code.visualstudio.com" />
                  <TechStackItem icon="gradle" name="Gradle" link="https://gradle.org" />
                  <TechStackItem icon="npm" name="npm" link="https://www.npmjs.com" />
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://yarnpkg.com', '_blank')}>
                    <i className="devicon-yarn-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Yarn</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-gray-300">That's a lot of technologies! Want to know where my strengths lie? <a href="/strengths" className="text-green-500 hover:text-green-600 transition-colors underline">
                Check out my strengths
              </a></p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="pt-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Featured Projects</h2>
            <div className="pt-20 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                    image="/work.suellner.dev-example.png"
                    imageAlt="Work Time Tracker Screenshot"
                    title="Work Time Tracker"
                    description="A full-stack time tracking application with real-time clock in/out, session management, and calendar view. Features JWT authentication, RESTful APIs, and Excel export functionality."
                    techs={["React", "TypeScript", "Tailwind CSS", "Spring Boot", "SQLite"]}
                    techColors={[
                      "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
                      "px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm",
                      "px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm",
                      "px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm",
                      "px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm",
                    ]}
                    links={[
                      {
                        label: "Live Demo",
                        href: "https://work.suellner.dev/login",
                        className: "text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors",
                      },
                      {
                        label: "GitHub",
                        href: "https://github.com/I3lackRacer/work-tracker",
                        className: "text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors",
                      },
                    ]}
                    onImageClick={() => handleImageClick("/work.suellner.dev-example.png", "Work Time Tracker Screenshot")}
                  />
                    <ProjectCard
                    image="/kenya-ptx-atlas-example.png"
                    imageAlt="Kenya PtX Atlas Screenshot"
                    title="Kenya PtX Atlas (Fraunhofer IEE)"
                    description="An interactive web-based mapping and analysis tool for Power-to-X (PtX) potential in Kenya. Features geospatial data visualization, renewable energy resource mapping, and hydrogen production analysis. Developed at Fraunhofer IEE for energy transition research."
                    techs={["Vue", "TypeScript", "Bootstrap", "Python", "Postgres", "Leaflet", "Chart.js"]}
                    techColors={[
                      "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
                      "px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm",
                      "px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm",
                      "px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm",
                      "px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm",
                      "px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm",
                      "px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm",
                    ]}
                    links={[
                      {
                        label: "Website",
                        href: "https://maps.iee.fraunhofer.de/kenya-ptx-atlas/",
                        className: "text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors",
                      } ,
                    ]}
                    onImageClick={() => handleImageClick("/kenya-ptx-atlas-example.png", "Kenya PtX Atlas Screenshot")}
                  />
                  <ProjectCard
                    image="/portfolio-example.png"
                    imageAlt="Portfolio Screenshot"
                    title="Personal Portfolio"
                    description="This is my personal portfolio website, built with Next.js, React, and Tailwind CSS. It showcases my skills, projects, and experience."
                    techs={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
                    techColors={[
                      "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
                      "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
                      "px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm",
                      "px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm",
                    ]}
                    links={[
                      {
                        label: "GitHub",
                        href: "https://github.com/I3lackRacer/portfolio",
                        className: "text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors",
                      },
                    ]}
                    onImageClick={() => handleImageClick("/portfolio-example.png", "Portfolio Screenshot")}
                  />
                  <ProjectCard
                    image="/card-trainer-example.png"
                    imageAlt="Card Trainer Screenshot"
                    title="Card Trainer"  
                    description="An interactive flashcard learning platform with achievements and progress tracking. Built with a microservice architecture for scalability."
                    techs={["Angular", "Spring Boot", "Bootstrap", "PostgreSQL"]}
                    techColors={[
                      "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
                      "px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm",
                      "px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm",
                      "px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm",
                    ]}
                    links={[
                      {
                        label: "GitHub",
                        href: "https://github.com/EikeMenzel/card-trainer",
                        className: "text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors",
                      },
                    ]}
                    onImageClick={() => handleImageClick("/card-trainer-example.png", "Card Trainer Screenshot")}
                  />
                  <ProjectCard
                    image="/sudoku-app-logo.png"
                    imageAlt="Sudoku App Screenshot"
                    title="Sudoku App"  
                    description="A clean, ad-free Sudoku game for Android with customizable themes, dark mode, and optional hints. Built with Flutter for a smooth cross-platform experience."
                    techs={["Flutter", "Dart", "Material Design"]}
                    techColors={[
                      "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
                      "px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm",
                      "px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm",
                    ]}
                    links={[
                      {
                        label: "Play Store",
                        href: "https://play.google.com/store/apps/details?id=de.invertgaming.sodoku_app",
                        className: "text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors",
                      }
                    ]}
                    onImageClick={() => handleImageClick("/sudoku-app-logo.png", "Sudoku App Screenshot")}
                  />
                  <ProjectCard
                    image="/fitness-tracker-app-example.png"
                    imageAlt="Fitness Tracker App Screenshot"
                    title="Fitness Tracker"  
                    description="A comprehensive fitness tracking app that helps users monitor workouts, track progress, and achieve fitness goals. Features include exercise logging, progress charts, and workout planning."
                    techs={["Flutter", "Dart", "Material Design"]}
                    techColors={[
                      "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
                      "px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm",
                      "px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm",
                    ]}
                    links={[
                      {
                        label: "Play Store (Coming Soon)",
                        href: "#",
                        className: "text-gray-400 bg-gray-700 cursor-not-allowed px-4 py-2 rounded-lg",
                      }
                    ]}
                    onImageClick={() => handleImageClick("/fitness-tracker-app-example.png", "Fitness Tracker App Screenshot")}
                  />
                </div>
              </div>
              <ImageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                imageSrc={modalImage.src}
                alt={modalImage.alt}
              />
            </div>
          </div>

          {/* Experience Section */}
          <div className="py-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Work Experience</h2>
            <div className="max-w-4xl mx-auto relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-[110%] w-1 bg-gradient-to-t from-green-500 via-green-500 to-transparent" style={{ top: '-5%' }}></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                <WorkExperienceCard
                  title="Software Developer (Working Student)"
                  company="Fraunhofer IEE"
                  location="Kassel"
                  date="04/2025 - Present"
                  bullets={[
                    "Spring Web API Development",
                    "Vue Frontend Development",
                    "Frontend Data Visualization",
                    "Python Backend Development",
                  ]}
                  align="left"
                />
                <WorkExperienceCard
                  title="Software Developer (Working Student)"
                  company="Enercast GmbH"
                  location="Kassel"
                  date="10/2022 - 06/2024"
                  bullets={[
                    "Spring Web API Development",
                    "File parser development for data import/export",
                    "Algorithm development for solar/wind plant data processing",
                  ]}
                  align="right"
                />
                <WorkExperienceCard
                  title="IT Support / SharePoint Integration (Working Student)"
                  company="Technoform Glass Insulation GmbH"
                  location="Lohfelden"
                  date="08/2021 - 07/2022"
                  bullets={[
                    "SharePoint Administration and Training",
                    "SharePoint Website Development",
                    "Internal First Level IT Support",
                  ]}
                  align="left"
                />
                <WorkExperienceCard
                  title="Application Developer (Apprenticeship)"
                  company="fino create GmbH"
                  location="Kassel"
                  date="09/2018 - 07/2021"
                  bullets={[
                    "Backend Development",
                    "Microservices Development",
                    "Service Monitoring",
                    "Code Reviews",
                    "Scrum Project Planning",
                    "REST API Development",
                  ]}
                  align="right"
                />
                <WorkExperienceCard
                  title="IT Intern"
                  company="Technoform Bautec GmbH"
                  location="Fuldabrück"
                  date="09/2016 - 07/2017"
                  bullets={[
                    "Operating System Installation",
                    "User Training",
                    "IT Asset Management",
                    "Hardware Updates/Upgrades",
                  ]}
                  align="left"
                />
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="py-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Education</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <EducationCard title="Bachelor in Computer Science" titleGrayText="(B.Sc.)" subtitle="Technische Hochschule Mittelhessen, Gießen" date="2021 - Present" />
              <EducationCard title="IT Specialist for Application Development" titleGrayText="(Ausbildung Anwendungsentwicklung)" subtitle="fino create GmbH" date="2018 - 2021" />
              <EducationCard title="Advanced Technical College Entrance Qualification" titleGrayText="(Fachhochschulreife)" subtitle="Max Eyth Schule, Kassel" date="2016 - 2018" />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="py-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Additional Information</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
                <ul className="text-gray-300">
                  <li>German - Native</li>
                  <li>English - B2</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-bold text-white mb-4">Other</h3>
                <ul className="text-gray-300">
                  <li>Driver's License Class B</li>
                  <li>Volunteer IT Support for Seniors</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="py-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Get in Touch</h2>
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-4">
                <a href="mailto:tim@suellner.de" className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg transition-colors">
                  Contact me via Email
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
