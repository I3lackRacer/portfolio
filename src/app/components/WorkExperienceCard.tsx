import React from "react";

interface WorkExperienceCardProps {
  title: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
  align: "left" | "right";
}

export default function WorkExperienceCard({
  title,
  company,
  location,
  date,
  bullets,
  align,
}: WorkExperienceCardProps) {
  // Determine alignment classes
  const isLeft = align === "left";
  return (
    <div className={`flex justify-${isLeft ? "start md:w-1/2" : "end md:w-1/2 ml-auto"} relative`}>
      {/* Timeline Dot */}
      <div
        className={`w-4 h-4 absolute ${
          isLeft
            ? "right-0 top-5 transform translate-x-1/2"
            : "left-0 top-5 transform -translate-x-1/2"
        } bg-green-500 rounded-full md:visible invisible`}
      ></div>
      <div
        className={`bg-gray-800 rounded-lg p-6 ${
          isLeft ? "ml-6" : "ml-6"
        } ${!isLeft ? "mr-6" : ""}`}
      >
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-green-400">{company}{location ? `, ${location}` : ""}</p>
        <p className="text-gray-400">{date}</p>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}