import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "./assets/matt-profile.jpg";
import { URLS } from "./consts/urls.ts";

const tabs = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Where to find me" },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <div className="flex flex-col items-center mb-4">
                     <img 
             src={profileImage} 
             alt="Matthew Ward" 
             className="rounded-full object-contain border-2 border-blue-600 shadow-md mb-4"
             style={{ height: '256px', backgroundColor: '#f3f4f6' }}
           />
          <h1 className="text-4xl font-bold mb-2">
            Matthew Ward
          </h1>
          <p className="text-lg text-gray-600">Software Engineer | AI Enthusiast</p>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a href={URLS.GITHUB} target="_blank" rel="noreferrer">
            <Github className="w-6 h-6 hover:text-blue-600">GitHub</Github>
          </a>
          <a href={URLS.LINKEDIN} target="_blank" rel="noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-600">LinkedIn</Linkedin>
          </a>
          <a href={`mailto:${URLS.EMAIL}`}>
            <Mail className="w-6 h-6 hover:text-blue-600">Email</Mail>
          </a>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-2xl border ${
              activeTab === tab.id 
                ? "bg-blue-600 text-white" 
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto">
        {activeTab === "about" && (
          <div className="bg-white rounded-lg shadow-md mb-6 p-6">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p>
              I'm a full-stack software engineer with experience in C#, .NET, React, and PostgreSQL. 
              I also hold a Graduate Certificate in Artificial Intelligence and enjoy building innovative solutions 
              at the intersection of software engineering and AI.
            </p>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Battle Snakes (Steam)",
                desc: "A co-op multiplayer game built in Unity, released on Steam.",
                link: "https://store.steampowered.com/app/1610310/Battle_Snakes/",
              },
              {
                title: "Android Games Portfolio",
                desc: "7+ mobile games developed and published on Google Play.",
                link: "https://play.google.com/store/apps/dev?id=5817392692590133649",
              },
              {
                title: "React Native Church App",
                desc: "In-progress app built with React Native for community engagement.",
              },
              {
                title: "Portfolio Website",
                desc: "This portfolio hosted via GitHub Pages.",
              },
            ].map((proj, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-gray-600 mb-2">{proj.desc}</p>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "skills" && (
          <div className="bg-white rounded-lg shadow-md mb-6 p-6">
            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
              <li>C#, .NET, Python, C++, Java</li>
              <li>React, TypeScript, Node.js</li>
              <li>AWS (RDS, ECS, Lambda, CloudFront, SQS)</li>
              <li>Databases: PostgreSQL, MySQL</li>
              <li>Unity (Game Dev, Shaders, Tools)</li>
              <li>AI/ML: Scikit-learn, TensorFlow</li>
            </ul>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="bg-white rounded-lg shadow-md mb-6 p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Where to find me</h2>
            <p>Discord: <a href={URLS.DISCORD} target="_blank" rel="noreferrer">BreadfastTea Discord Server</a></p>
            <p>Youtube: <a href={URLS.YOUTUBE} target="_blank" rel="noreferrer">Mr. Chocolate Salmon</a></p>
            <p>Twitter: <a href={URLS.TWITTER} target="_blank" rel="noreferrer">@mr_chocsalmon</a></p>
            <p>Soundcloud: <a href={URLS.SOUNDCLOUD} target="_blank" rel="noreferrer">Piano de Mateo</a></p>
            <p>CodinGame: <a href={URLS.CODINGAME} target="_blank" rel="noreferrer">@mr_chocsalmon</a></p>
            <p>LinkedIn: <a href={URLS.LINKEDIN} target="_blank" rel="noreferrer">Matthew Ward</a></p>
            <p>GitHub: <a href={URLS.GITHUB} target="_blank" rel="noreferrer">MrChocolateSalmon</a></p>
          </div>
        )}
      </main>
    </div>
  );
}
