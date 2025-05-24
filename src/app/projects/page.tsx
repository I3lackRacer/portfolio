"use client"

import { useState } from 'react';
import ImageModal from '../components/ImageModal';
import Navbar from '../components/Navbar';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div 
                className="mb-4 cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => setIsModalOpen(true)}
              >
                <img 
                  src="/work.suellner.dev-example.png" 
                  alt="Work Time Tracker Screenshot" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">Work Time Tracker</h2>
              <p className="text-gray-300 mb-4">
                A modern web application for tracking work hours with a clean, user-friendly interface.
                Built with React, TypeScript, Spring Boot, and SQLite.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">SQLite</span>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://work.suellner.dev/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  Live Demo
                </a>
                <a 
                  href="https://github.com/I3lackRacer/work-tracker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div className="mb-4">
                <img
                  src="/portfolio-example.png"
                  alt="Portfolio Screenshot"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">Personal Portfolio</h2>
              <p className="text-gray-300 mb-4">
                This is my personal portfolio website, built with Next.js, React, and Tailwind CSS. It showcases my skills, projects, and experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">TypeScript</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/I3lackRacer/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageSrc="/work.suellner.dev-example.png"
          alt="Work Time Tracker Screenshot"
        />
      </div>
    </main>
  );
} 