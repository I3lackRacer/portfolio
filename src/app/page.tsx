"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ImageModal from "./components/ImageModal";
import ProjectCard from "./components/ProjectCard";

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
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.microsoft.com/windows', '_blank')}>
                    <i className="devicon-windows11-original colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Windows</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.linux.org/', '_blank')}>
                    <i className="devicon-linux-plain text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Linux</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.apple.com/macos', '_blank')}>
                    <i className="devicon-apple-original text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">macOS</span>
                  </div>
                </div>
              </div>

              {/* Programming Languages */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Programming Languages</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.java.com', '_blank')}>
                    <i className="devicon-java-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Java</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://dotnet.microsoft.com/languages/csharp', '_blank')}>
                    <i className="devicon-csharp-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">C#</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.python.org', '_blank')}>
                    <i className="devicon-python-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Python</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://golang.org', '_blank')}>
                    <i className="devicon-go-original-wordmark colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Go</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')}>
                    <i className="devicon-javascript-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">JavaScript</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.typescriptlang.org', '_blank')}>
                    <i className="devicon-typescript-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">TypeScript</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://dart.dev', '_blank')}>
                    <i className="devicon-dart-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Dart</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.php.net', '_blank')}>
                    <i className="devicon-php-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">PHP</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://isocpp.org', '_blank')}>
                    <i className="devicon-cplusplus-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">C++</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://en.cppreference.com/w/c', '_blank')}>
                    <i className="devicon-c-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">C</span>
                  </div>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Frameworks & Libraries</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://angular.io', '_blank')}>
                    <i className="devicon-angularjs-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Angular</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://reactjs.org', '_blank')}>
                    <i className="devicon-react-original colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">React</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://vuejs.org', '_blank')}>
                    <i className="devicon-vuejs-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Vue.js</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://spring.io', '_blank')}>
                    <i className="devicon-spring-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Spring</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://expressjs.com', '_blank')}>
                    <i className="devicon-express-original colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100 invert"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Express</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://nestjs.com', '_blank')}>
                    <i className="devicon-nestjs-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">NestJS</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://flutter.dev', '_blank')}>
                    <i className="devicon-flutter-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Flutter</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://tailwindcss.com', '_blank')}>
                    <i className="devicon-tailwindcss-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Tailwind CSS</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://nodejs.org', '_blank')}>
                    <i className="devicon-nodejs-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Node.js</span>
                  </div>
                </div>
              </div>

              {/* DevOps & Cloud */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">DevOps & Cloud</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.docker.com', '_blank')}>
                    <i className="devicon-docker-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Docker</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://kubernetes.io', '_blank')}>
                    <i className="devicon-kubernetes-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Kubernetes</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://cloud.google.com', '_blank')}>
                    <i className="devicon-googlecloud-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Google Cloud</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.nginx.com', '_blank')}>
                    <i className="devicon-nginx-original colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Nginx</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://github.com', '_blank')}>
                    <i className="devicon-github-original colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100 invert"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">GitHub</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://gitlab.com', '_blank')}>
                    <i className="devicon-gitlab-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">GitLab</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.jenkins.io', '_blank')}>
                    <i className="devicon-jenkins-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Jenkins</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://grafana.com', '_blank')}>
                    <i className="devicon-grafana-original colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Grafana</span>
                  </div>
                </div>
              </div>

              {/* Databases */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Databases</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.mysql.com', '_blank')}>
                    <i className="devicon-mysql-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">MySQL</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.postgresql.org', '_blank')}>
                    <i className="devicon-postgresql-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">PostgreSQL</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.mongodb.com', '_blank')}>
                    <i className="devicon-mongodb-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">MongoDB</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.sqlite.org', '_blank')}>
                    <i className="devicon-sqlite-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">SQLite</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://mariadb.org', '_blank')}>
                    <i className="devicon-mariadb-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">MariaDB</span>
                  </div>
                </div>
              </div>

              {/* IDEs & Tools */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">IDEs & Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://visualstudio.microsoft.com', '_blank')}>
                    <i className="devicon-visualstudio-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Visual Studio</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.jetbrains.com/idea', '_blank')}>
                    <i className="devicon-intellij-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">IntelliJ</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://code.visualstudio.com', '_blank')}>
                    <i className="devicon-vscode-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">VS Code</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://gradle.org', '_blank')}>
                    <i className="devicon-gradle-plain colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">Gradle</span>
                  </div>
                  <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open('https://www.npmjs.com', '_blank')}>
                    <i className="devicon-npm-original-wordmark colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-100"></i>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">npm</span>
                  </div>
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
                {/* Faunhofer IEE */}
                <div className="flex justify-start md:w-1/2 relative">
                  <div className="w-4 h-4 absolute right-0 top-5 transform translate-x-1/2 bg-green-500 rounded-full md:visible invisible"></div>
                  <div className="bg-gray-800 rounded-lg p-6 ml-6">
                    <h3 className="text-xl font-bold text-white">Software Developer (Working Student)</h3>
                    <p className="text-green-400">Fraunhofer IEE, Kassel</p>
                    <p className="text-gray-400">04/2025 - Present</p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                      <li>Spring Web API Development</li>
                      <li>Vue Frontend Development</li>
                      <li>Frontend Data Visualization</li>
                      <li>Python Backend Development</li>
                    </ul>
                  </div>
                </div>

                {/* Enercast */}
                <div className="flex justify-end md:w-1/2 ml-auto relative">
                  <div className="w-4 h-4 absolute left-0 top-5 transform -translate-x-1/2 bg-green-500 rounded-full md:visible invisible"></div>
                  <div className="bg-gray-800 rounded-lg p-6 ml-6">
                    <h3 className="text-xl font-bold text-white">Software Developer (Working Student)</h3>
                    <p className="text-green-400">Enercast GmbH, Kassel</p>
                    <p className="text-gray-400">10/2022 - 06/2024</p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                      <li>Spring Web API Development</li>
                      <li>File parser development for data import/export</li>
                      <li>Algorithm development for solar/wind plant data processing</li>
                    </ul>
                  </div>
                </div>

                {/* Technoform Glass */}
                <div className="flex justify-start md:w-1/2 relative">
                  <div className="w-4 h-4 absolute right-0 top-5 transform translate-x-1/2 bg-green-500 rounded-full md:visible invisible"></div>
                  <div className="bg-gray-800 rounded-lg p-6 mr-6">
                    <h3 className="text-xl font-bold text-white">IT Support / SharePoint Integration (Working Student)</h3>
                    <p className="text-green-400">Technoform Glass Insulation GmbH, Lohfelden</p>
                    <p className="text-gray-400">08/2021 - 07/2022</p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                      <li>SharePoint Administration and Training</li>
                      <li>SharePoint Website Development</li>
                      <li>Internal First Level IT Support</li>
                    </ul>
                  </div>
                </div>

                {/* fino create */}
                <div className="flex justify-end md:w-1/2 ml-auto relative">
                  <div className="w-4 h-4 absolute left-0 top-5 transform -translate-x-1/2 bg-green-500 rounded-full md:visible invisible"></div>
                  <div className="bg-gray-800 rounded-lg p-6 ml-6">
                    <h3 className="text-xl font-bold text-white">Application Developer (Apprenticeship)</h3>
                    <p className="text-green-400">fino create GmbH, Kassel</p>
                    <p className="text-gray-400">09/2018 - 07/2021</p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                      <li>Backend Development</li>
                      <li>Microservices Development</li>
                      <li>Service Monitoring</li>
                      <li>Code Reviews</li>
                      <li>Scrum Project Planning</li>
                      <li>REST API Development</li>
                    </ul>
                  </div>
                </div>

                {/* Technoform Bautec */}
                <div className="flex justify-start md:w-1/2 relative">
                  <div className="w-4 h-4 absolute right-0 top-5 transform translate-x-1/2 bg-green-500 rounded-full md:visible invisible"></div>
                  <div className="bg-gray-800 rounded-lg p-6 mr-6">
                    <h3 className="text-xl font-bold text-white">IT Intern</h3>
                    <p className="text-green-400">Technoform Bautec GmbH, Fuldabrück</p>
                    <p className="text-gray-400">09/2016 - 07/2017</p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                      <li>Operating System Installation</li>
                      <li>User Training</li>
                      <li>IT Asset Management</li>
                      <li>Hardware Updates/Upgrades</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="py-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Education</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-bold text-white">Bachelor in Computer Science <span className="text-gray-400">(B.Sc.)</span></h3>
                <p className="text-green-400">Technische Hochschule Mittelhessen, Gießen</p>
                <p className="text-gray-400">2021 - Present</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-bold text-white">IT Specialist for Application Development <span className="text-gray-400">(Ausbildung Anwendungsentwicklung)</span></h3>
                <p className="text-green-400">fino create GmbH</p>
                <p className="text-gray-400">2018 - 2021</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-bold text-white">Advanced Technical College Entrance Qualification <span className="text-gray-400">(Fachhochschulreife)</span></h3>
                <p className="text-green-400">Max Eyth Schule, Kassel</p>
                <p className="text-gray-400">2016 - 2018</p>
              </div>
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
