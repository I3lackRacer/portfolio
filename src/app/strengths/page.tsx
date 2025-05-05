"use client"

import Navbar from "../components/Navbar"

export default function Strengths() {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <div className="pl-8 mx-70 my-30">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-12">My Strengths</h1>
                    
                    <div className="max-w-3xl space-y-8">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl text-white">Backend Development</h3>
                                <span className="text-white">95%</span>
                            </div>
                            <div className="h-4 bg-gray-700 rounded-full">
                                <div className="h-full w-[95%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl text-white">System Integration</h3>
                                <span className="text-white">90%</span>
                            </div>
                            <div className="h-4 bg-gray-700 rounded-full">
                                <div className="h-full w-[90%] animate-[slideIn_1s_ease-out] delay-100 bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl text-white">DevOps</h3>
                                <span className="text-white">85%</span>
                            </div>
                            <div className="h-4 bg-gray-700 rounded-full">
                                <div className="h-full w-[85%] animate-[slideIn_1s_ease-out] delay-200 bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl text-white">Frontend Development</h3>
                                <span className="text-white">75%</span>
                            </div>
                            <div className="h-4 bg-gray-700 rounded-full">
                                <div className="h-full w-[75%] animate-[slideIn_1s_ease-out] delay-300 bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl text-white">Database Design</h3>
                                <span className="text-white">85%</span>
                            </div>
                            <div className="h-4 bg-gray-700 rounded-full">
                                <div className="h-full w-[85%] animate-[slideIn_1s_ease-out] delay-400 bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl text-white">Cloud Services</h3>
                                <span className="text-white">80%</span>
                            </div>
                            <div className="h-4 bg-gray-700 rounded-full">
                                <div className="h-full w-[80%] animate-[slideIn_1s_ease-out] delay-500 bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-gray-300">
                        <p className="text-xl">
                            These percentages represent my relative comfort and expertise level with each area. 
                            Backend development and system integration are my core strengths, while I maintain 
                            solid capabilities in DevOps, database design, and cloud services. Though frontend 
                            development isn't my primary focus, I have a good working knowledge and continue 
                            to improve in this area.
                        </p>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mt-20 mb-12">Tool Proficiency</h2>

                    <div className="space-y-12">
                        {/* Operating Systems */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Operating Systems</h3>
                            <div className="max-w-3xl space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-windows11-original colored text-4xl"></i>
                                            <h3 className="text-xl text-white">Windows</h3>
                                        </div>
                                        <span className="text-white">95%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[95%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-linux-plain text-4xl"></i>
                                            <h3 className="text-xl text-white">Linux</h3>
                                        </div>
                                        <span className="text-white">90%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[90%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-apple-original text-4xl"></i>
                                            <h3 className="text-xl text-white">macOS</h3>
                                        </div>
                                        <span className="text-white">85%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[85%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Programming Languages */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Programming Languages</h3>
                            <div className="max-w-3xl space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-java-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">Java</h3>
                                        </div>
                                        <span className="text-white">95%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[95%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-csharp-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">C#</h3>
                                        </div>
                                        <span className="text-white">90%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[90%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-python-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">Python</h3>
                                        </div>
                                        <span className="text-white">85%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[85%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-go-original-wordmark colored text-4xl"></i>
                                            <h3 className="text-xl text-white">Go</h3>
                                        </div>
                                        <span className="text-white">80%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[80%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-javascript-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">JavaScript</h3>
                                        </div>
                                        <span className="text-white">85%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[85%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-typescript-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">TypeScript</h3>
                                        </div>
                                        <span className="text-white">80%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[80%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Frameworks & Libraries */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Frameworks & Libraries</h3>
                            <div className="max-w-3xl space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-spring-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">Spring</h3>
                                        </div>
                                        <span className="text-white">95%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[95%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-react-original colored text-4xl"></i>
                                            <h3 className="text-xl text-white">React</h3>
                                        </div>
                                        <span className="text-white">85%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[85%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-angularjs-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">Angular</h3>
                                        </div>
                                        <span className="text-white">80%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[80%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DevOps & Cloud */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">DevOps & Cloud</h3>
                            <div className="max-w-3xl space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-docker-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">Docker</h3>
                                        </div>
                                        <span className="text-white">90%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[90%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-kubernetes-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">Kubernetes</h3>
                                        </div>
                                        <span className="text-white">85%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[85%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-jenkins-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">Jenkins</h3>
                                        </div>
                                        <span className="text-white">85%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[85%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Databases */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Databases</h3>
                            <div className="max-w-3xl space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-postgresql-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">PostgreSQL</h3>
                                        </div>
                                        <span className="text-white">95%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[95%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-mysql-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">MySQL</h3>
                                        </div>
                                        <span className="text-white">90%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[90%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-mongodb-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">MongoDB</h3>
                                        </div>
                                        <span className="text-white">85%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[85%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* IDEs & Tools */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">IDEs & Tools</h3>
                            <div className="max-w-3xl space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-intellij-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">IntelliJ</h3>
                                        </div>
                                        <span className="text-white">95%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[95%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-vscode-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">VS Code</h3>
                                        </div>
                                        <span className="text-white">90%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[90%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <i className="devicon-visualstudio-plain colored text-4xl"></i>
                                            <h3 className="text-xl text-white">Visual Studio</h3>
                                        </div>
                                        <span className="text-white">85%</span>
                                    </div>
                                    <div className="h-4 bg-gray-700 rounded-full">
                                        <div className="h-full w-[85%] animate-[slideIn_1s_ease-out] bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}