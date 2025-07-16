"use client"

import { useState } from 'react';
import ImageModal from '../components/ImageModal';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

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

  const projects = [
    {
      image: "/work.suellner.dev-example.png",
      imageAlt: "Work Time Tracker Screenshot",
      title: "Work Time Tracker",
      description:
        "A modern web application for tracking work hours with a clean, user-friendly interface. Built with React, TypeScript, Spring Boot, and SQLite.",
      techs: ["React", "TypeScript", "Spring Boot", "SQLite"],
      techColors: [
        "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
        "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
        "px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm",
        "px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm",
      ],
      links: [
        {
          label: "Live Demo",
          href: "https://work.suellner.dev/login",
          className: "text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors",
        },
        {
          label: "GitHub",
          href: "https://github.com/I3lackRacer/work-tracker",
        },
      ],
      onImageClick: () => handleImageClick("/work.suellner.dev-example.png", "Work Time Tracker Screenshot"),
    },
    {
      image: "/portfolio-example.png",
      imageAlt: "Portfolio Screenshot",
      title: "Personal Portfolio",
      description:
        "This is my personal portfolio website, built with Next.js, React, and Tailwind CSS. It showcases my skills, projects, and experience.",
      techs: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      techColors: [
        "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
        "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
        "px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm",
        "px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/I3lackRacer/portfolio",
        },
      ],
      onImageClick: () => handleImageClick("/portfolio-example.png", "Portfolio Screenshot"),
    },
    {
      image: "/card-trainer-example.png",
      imageAlt: "Card Trainer Screenshot",
      title: "Card Trainer",
      description:
        "An interactive flashcard learning platform with achievements and progress tracking. Built with a microservice architecture for scalability.",
      techs: ["Angular", "Spring Boot", "Bootstrap", "PostgreSQL"],
      techColors: [
        "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
        "px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm",
        "px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm",
        "px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/EikeMenzel/card-trainer",
        },
      ],
      onImageClick: () => handleImageClick("/card-trainer-example.png", "Card Trainer Screenshot"),
    },
    {
      image: "/sudoku-app-logo.png",
      imageAlt: "Sudoku App Screenshot",
      title: "Sudoku App",
      description:
        "A clean, ad-free Sudoku game for Android with customizable themes, dark mode, and optional hints. Built with Flutter for a smooth cross-platform experience.",
      techs: ["Flutter", "Dart", "Material Design"],
      techColors: [
        "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
        "px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm",
        "px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm",
      ],
      links: [
        {
          label: "Play Store",
          href: "https://play.google.com/store/apps/details?id=de.invertgaming.sodoku_app",
          className: "text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors",
        },
      ],
      onImageClick: () => handleImageClick("/sudoku-app-logo.png", "Sudoku App Screenshot"),
    },
    {
      image: "/fitness-tracker-app-example.png",
      imageAlt: "Fitness Tracker App Screenshot",
      title: "Fitness Tracker",
      description:
        "A comprehensive fitness tracking app that helps users monitor workouts, track progress, and achieve fitness goals. Features include exercise logging, progress charts, and workout planning.",
      techs: ["Flutter", "Dart", "Material Design"],
      techColors: [
        "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",
        "px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm",
        "px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm",
      ],
      links: [
        {
          label: "Play Store (Coming Soon)",
          href: "#",
          className: "text-gray-400 bg-gray-700 cursor-not-allowed px-4 py-2 rounded-lg",
        },
      ],
      onImageClick: () => handleImageClick("/fitness-tracker-app-example.png", "Fitness Tracker App Screenshot"),
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 mt-10">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} {...project} />
            ))}
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