"use client";

import React from "react";

interface ProjectCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  techs: string[];
  techColors?: string[]; // Optional: for custom colors
  links: { label: string; href: string; className?: string }[];
  onImageClick?: () => void;
}

export default function ProjectCard({
  image,
  imageAlt,
  title,
  description,
  techs,
  techColors,
  links,
  onImageClick,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
      <div
        className={`mb-4 ${onImageClick ? "cursor-pointer transform transition-transform hover:scale-[1.02]" : ""}`}
        onClick={onImageClick}
      >
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((tech, i) => (
          <span
            key={tech}
            className={
              techColors && techColors[i]
                ? techColors[i]
                : "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
            }
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              link.className ||
              "text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
