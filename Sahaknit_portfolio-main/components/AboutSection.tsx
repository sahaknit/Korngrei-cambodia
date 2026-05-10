import React from "react";
import Image from "next/image";
import {
  BeakerIcon, // For Game Development
  CodeBracketIcon, // For Front-End Development
  CommandLineIcon, // For Software Engineering Practices
  PaintBrushIcon, // For User Interface Design
  PuzzlePieceIcon, // For User Experience (UX)
  CogIcon, // For Critical Thinking
  GlobeAltIcon, // For WordPress Website
  Squares2X2Icon, // For Figma (Software)
} from "@heroicons/react/24/solid"; // Import icons

const skills = [
  { name: "Figma (Software)", icon: Squares2X2Icon },
  { name: "User Interface Design", icon: PaintBrushIcon },
  { name: "User Experience (UX)", icon: PuzzlePieceIcon },
  { name: "Front-End Development", icon: CodeBracketIcon },
  { name: "Critical Thinking", icon: CogIcon },
  { name: "Software Engineering Practices", icon: CommandLineIcon },
  { name: "Game Development", icon: BeakerIcon },
  { name: "WordPress Website", icon: GlobeAltIcon },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-8 md:pb-24"> {/* Reduced padding */}
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-yellow-600 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello! I’m{" "}
              <span className="font-bold">{"Sahaknit"}</span>, a passionate and driven
              <span className="font-bold">{" Information Technology Engineer"}</span>, with a Bachelor’s degree from the 
              <span className="font-bold">{" Royal University of Phnom Penh (RUPP)"}</span>. Over the past few years, I’ve dedicated 
              myself to exploring the ever-evolving world of technology, combining theoretical knowledge with hands-on experience to create meaningful and innovative solutions.
              My journey in IT has been shaped by a deep curiosity for problem-solving and a desire to make an impact through technology. During my studies, I specialized in areas such as
              <span className="font-bold">{"software development, network design, system analysis, and user-centered design,"}</span> which have equipped me with a versatile skill set to tackle diverse challenges in the tech industry.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-yellow-600">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                const Icon = item.icon; // Dynamically assign the icon component
                return (
                  <div
                    key={idx}
                    className="flex items-center bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    <Icon className="w-5 h-5 mr-2" /> {/* Render the icon */}
                    <span>{item.name}</span> {/* Display the skill name */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;