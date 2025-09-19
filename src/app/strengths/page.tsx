"use client"

import Navbar from "../components/Navbar"
import StrengthEvaluation from "@/app/components/StrengthEvaluation";

export default function Strengths() {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <div className="md:pl-8 mx-5 md:mx-40 my-30">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-12">My Strengths</h1>

                    <div className="max-w-3xl space-y-8">
                        <StrengthEvaluation title={"Backend Development"} percentage={90}/>
                        <StrengthEvaluation title={"System Integration"} percentage={80}/>
                        <StrengthEvaluation title={"DevOps"} percentage={80}/>
                        <StrengthEvaluation title={"Database Design"} percentage={80}/>
                        <StrengthEvaluation title={"Frontend Development"} percentage={70}/>
                        <StrengthEvaluation title={"Cloud Services"} percentage={60}/>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mt-20 mb-12">Tool Proficiency</h2>

                    <div className="space-y-12">
                        {/* Operating Systems */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Operating Systems</h3>
                            <div className="max-w-3xl space-y-4">
                                <StrengthEvaluation icon={"windows11-original"} iconArgs={"colored"} title={"Windows"} percentage={90}/>
                                <StrengthEvaluation icon={"linux-plain"} title={"Linux"} percentage={80}/>
                                <StrengthEvaluation icon={"apple-original"} title={"MacOS"} percentage={40}/>
                            </div>
                        </div>

                        {/* Programming Languages */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Programming Languages</h3>
                            <div className="max-w-3xl space-y-4">
                                <StrengthEvaluation icon={"java-plain"} iconArgs={"colored"} title={"Java"} percentage={90} />
                                <StrengthEvaluation icon={"python-plain"} iconArgs={"colored"} title={"Python"} percentage={85}/>
                                <StrengthEvaluation icon={"typescript-plain"} iconArgs={"colored"} title={"TypeScript"} percentage={80}/>
                                <StrengthEvaluation icon={"csharp-plain"} iconArgs={"colored"} title={"C#"} percentage={75}/>
                                <StrengthEvaluation icon={"go-original-wordmark"} iconArgs={"colored"} title={"Go"} percentage={70}/>
                                <StrengthEvaluation icon={"dart-plain"} iconArgs={"colored"} title={"Dart"} percentage={70}/>
                                <StrengthEvaluation icon={"javascript-plain"} iconArgs={"colored"} title={"JavaScript"} percentage={60}/>
                                <StrengthEvaluation icon={"php-plain"} iconArgs={"colored"} title={"PHP"} percentage={60}/>
                                <StrengthEvaluation icon={"cplusplus-plain"} iconArgs={"colored"} title={"C++"} percentage={40}/>
                                <StrengthEvaluation icon={"c-plain"} iconArgs={"colored"} title={"C"} percentage={40}/>
                            </div>
                        </div>

                        {/* Frameworks & Libraries */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Frameworks & Libraries</h3>
                            <div className="max-w-3xl space-y-4">
                                <StrengthEvaluation icon={"spring-plain"} iconArgs={"colored"} title={"Spring"} percentage={90}/>
                                <StrengthEvaluation icon={"react-original"} iconArgs={"colored"} title={"React"} percentage={80}/>
                                <StrengthEvaluation icon={"flutter-plain"} iconArgs={"colored"} title={"Flutter"} percentage={80}/>
                                <StrengthEvaluation icon={"tailwindcss-plain"} iconArgs={"colored"} title={"Tailwind CSS"} percentage={80}/>
                                <StrengthEvaluation icon={"angularjs-plain"} iconArgs={"colored"} title={"Angular"} percentage={70}/>
                                <StrengthEvaluation icon={"vuejs-plain"} iconArgs={"colored"} title={"Vue"} percentage={70}/>
                                <StrengthEvaluation icon={"nodejs-plain"} iconArgs={"colored"} title={"Node.js"} percentage={70}/>
                                <StrengthEvaluation icon={"express-original"} title={"Express"} percentage={70}/>
                                <StrengthEvaluation icon={"nestjs-plain"} iconArgs={"colored"} title={"NestJS"} percentage={60}/>
                                <StrengthEvaluation icon={"socketio-original"} title={"Socket.io"} percentage={60}/>
                            </div>
                        </div>

                        {/* DevOps & Cloud */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">DevOps & Cloud</h3>
                            <div className="max-w-3xl space-y-4">
                                <StrengthEvaluation icon={"docker-plain"} iconArgs={"colored"} title={"Docker"} percentage={90}/>
                                <StrengthEvaluation icon={"github-original"} iconArgs={"colored"} title={"GitHub"} percentage={90}/>
                                <StrengthEvaluation icon={"gitlab-plain"} iconArgs={"colored"} title={"GitLab"} percentage={80}/>
                                <StrengthEvaluation icon={"apache-plain"} iconArgs={"colored"} title={"Apache"} percentage={80}/>
                                <StrengthEvaluation icon={"grafana-plain"} iconArgs={"colored"} title={"Grafana"} percentage={70}/>
                                <StrengthEvaluation icon={"kubernetes-plain"} iconArgs={"colored"} title={"Kubernetes"} percentage={65}/>
                                <StrengthEvaluation icon={"jenkins-plain"} iconArgs={"colored"} title={"Jenkins"} percentage={65}/>
                                <StrengthEvaluation icon={"googlecloud-plain"} iconArgs={"colored"} title={"Google Cloud"} percentage={60}/>
                                <StrengthEvaluation icon={"nginx-original"} iconArgs={"colored"} title={"Nginx"} percentage={60}/>
                            </div>
                        </div>

                        {/* Databases */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Databases</h3>
                            <div className="max-w-3xl space-y-4">
                                <StrengthEvaluation icon={"postgresql-plain"} iconArgs={"colored"} title={"PostgreSQL"} percentage={95}/>
                                <StrengthEvaluation icon={"mongodb-plain"} iconArgs={"colored"} title={"MongoDB"} percentage={90}/>
                                <StrengthEvaluation icon={"mysql-plain"} iconArgs={"colored"} title={"MySQL"} percentage={80}/>
                                <StrengthEvaluation icon={"sqlite-plain"} iconArgs={"colored"} title={"SQLite"} percentage={80}/>
                                <StrengthEvaluation icon={"mariadb-plain"} iconArgs={"colored"} title={"MariaDB"} percentage={80}/>
                                <StrengthEvaluation icon={"redis-plain"} iconArgs={"colored"} title={"Redis"} percentage={70}/>
                                <StrengthEvaluation icon={"ravendb-original"} iconArgs={"colored"} title={"RavenDB"} percentage={70}/>
                            </div>
                        </div>

                        {/* IDEs & Tools */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">IDEs & Tools</h3>
                            <div className="max-w-3xl space-y-4">
                                <StrengthEvaluation icon={"intellij-plain"} iconArgs={"colored"} title={"IntelliJ"} percentage={95}/>
                                <StrengthEvaluation icon={"vscode-plain"} iconArgs={"colored"} title={"VS Code"} percentage={90}/>
                                <StrengthEvaluation icon={"visualstudio-plain"} iconArgs={"colored"} title={"Visual Studio"} percentage={65}/>
                                <StrengthEvaluation icon={"cursor-plain"} iconArgs={"colored"} title={"Cursor"} percentage={60}/>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-gray-300">
                        <p className="text-xl">
                            These percentages represent my relative comfort and expertise level with each area.
                            Backend development and system integration are my core strengths, while I maintain
                            solid capabilities in DevOps, database design, and cloud services. Though frontend
                            development isn't my primary focus, I have a good working knowledge and continue
                            to improve in this area. <span className="text-gray-700 text-sm">*These values are purely my own evaluation ;)</span>
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}