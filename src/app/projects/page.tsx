"use client"

import { useState } from 'react';
import ImageModal from '../components/ImageModal';
import Navbar from '../components/Navbar';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({
    src: "",
    alt: ""
  });

  const handleImageClick = (src: string, alt: string) => {
    setModalImage({ src, alt });
    setIsModalOpen(true);
  };

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
                onClick={() => handleImageClick("/work.suellner.dev-example.png", "Work Time Tracker Screenshot")}
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
              <div 
                className="mb-4 cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => handleImageClick("/portfolio-example.png", "Portfolio Screenshot")}
              >
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
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div 
                className="mb-4 cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => handleImageClick("/card-trainer-example.png", "Card Trainer Screenshot")}
              >
                <img
                  src="/card-trainer-example.png"
                  alt="Card Trainer Screenshot"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">Card Trainer</h2>
              <p className="text-gray-300 mb-4">
                An interactive flashcard learning platform with achievements and progress tracking. Built with a microservice architecture for scalability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Angular</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Bootstrap</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">PostgreSQL</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/EikeMenzel/card-trainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div 
                className="mb-4 cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => handleImageClick("/sudoku-app-logo.png", "Sudoku App Screenshot")}
              >
                <img
                  src="/sudoku-app-logo.png"
                  alt="Sudoku App Screenshot"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">Sudoku App</h2>
              <p className="text-gray-300 mb-4">
                A clean, ad-free Sudoku game for Android with customizable themes, dark mode, and optional hints. Built with Flutter for a smooth cross-platform experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Flutter</span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Dart</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Material Design</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=de.invertgaming.sodoku_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
                >
                  Play Store
                </a>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div 
                className="mb-4 cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => handleImageClick("/fitness-tracker-app-example.png", "Fitness Tracker App Screenshot")}
              >
                <img
                  src="/fitness-tracker-app-example.png"
                  alt="Fitness Tracker App Screenshot"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">Fitness Tracker</h2>
              <p className="text-gray-300 mb-4">
                A comprehensive fitness tracking app that helps users monitor workouts, track progress, and achieve fitness goals. Features include exercise logging, progress charts, and workout planning.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Flutter</span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Dart</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Material Design</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 bg-gray-700 cursor-not-allowed px-4 py-2 rounded-lg"
                >
                  Play Store (Coming Soon)
                </a>
              </div>
            </div>
          </div>
        </div>

        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageSrc={modalImage.src}
          alt={modalImage.alt}
        />
      </div>
    </main>
  );
} 