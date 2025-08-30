import React, { useState } from "react";
import { Linkedin, Mail } from "lucide-react";
import { Tabs, Tab, Box } from "@mui/material";

import { URLS } from "./consts/urls.ts";
import { PHOTOS } from "./consts/photos.ts";
import { PROJECTS } from "./consts/projects.ts";

const tabs = [
  { id: "about", label: "About Me" },
  { id: "highlights", label: "Highlights" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Where to find me" },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <Box className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="text-center mb-8">
        <div className="flex flex-col items-center mb-4">
          <img 
             src={PHOTOS.profileImage} 
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
            <img height="24" width="24" style={{ padding: '4px' }} src="https://cdn.simpleicons.org/github/blue" />
          </a>
          <a href={URLS.LINKEDIN} target="_blank" rel="noreferrer">
            <Linkedin style={{ padding: '4px' }} className="w-6 h-6 hover:text-blue-600">LinkedIn</Linkedin>
          </a>
          <a href={`mailto:${URLS.EMAIL}`}>
            <Mail style={{ padding: '4px' }} className="w-6 h-6 hover:text-blue-600">Email</Mail>
          </a>
        </div>
      </header>

       <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
         <Tabs 
           value={activeTab} 
           onChange={(event, newValue) => setActiveTab(newValue)}
           centered
           sx={{
             '& .MuiTab-root': {
               textTransform: 'none',
               fontSize: '1rem',
               fontWeight: 500,
             },
             '& .Mui-selected': {
               color: '#2563eb !important',
             },
             '& .MuiTabs-indicator': {
               backgroundColor: '#2563eb',
             }
           }}
         >
           {tabs.map((tab) => (
             <Tab key={tab.id} label={tab.label} value={tab.id} />
           ))}
         </Tabs>
       </Box>

      <main className="max-w-4xl mx-auto">
        {activeTab === "about" && (
          <Box className="bg-white rounded-lg shadow-md mb-6 p-6">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p style={{ width: '700px', justifySelf: 'center' }}>
              I'm a full-stack software engineer with experience in C#, .NET, React, Python, and PostgreSQL. 
              I also hold a Graduate Certificate in Artificial Intelligence and desire to build innovative solutions 
              at the intersection of software engineering and AI.
            </p>
            <img 
             src={PHOTOS.teamPhoto} 
             alt="Nebulous Dingo 2019" 
             className="rounded-full object-contain border-2 border-blue-600 shadow-md mb-4"
             style={{ width: '500px', backgroundColor: '#f3f4f6' }}
            />
          </Box>
        )}

        {activeTab === "highlights" && (
          PROJECTS
          .filter((proj) => proj.highlight)
          .map((proj, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p style={{ width: '700px', justifySelf: 'center' }} className="text-gray-600 mb-2">{proj.desc}</p>
              {proj.projectLink && (
                <a
                  href={proj.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ padding: '4px' }}
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
              )}
              {proj.websiteLink && (
                <a
                  href={proj.websiteLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ padding: '4px' }}
                  className="text-blue-600 hover:underline"
                >
                  View Website
                </a>
              )}
            </div>
          ))
        )}

        {activeTab === "projects" && (
          <Box className="grid md:grid-cols-2 gap-6">
            {
              PROJECTS
              .filter((proj) => !proj.highlight)
              .map((proj, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                  <p style={{ width: '700px', justifySelf: 'center' }} className="text-gray-600 mb-2">{proj.desc}</p>
                  {proj.projectLink && (
                    <a
                      href={proj.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ padding: '4px' }}
                      className="text-blue-600 hover:underline"
                    >
                      View Project
                    </a>
                  )}
                  {proj.websiteLink && (
                    <a
                      href={proj.websiteLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ padding: '4px' }}
                      className="text-blue-600 hover:underline"
                    >
                      View Website
                    </a>
                  )}
                </div>
              ))
            }
          </Box>
        )}

        {activeTab === "skills" && (
          <Box className="bg-white rounded-lg shadow-md mb-6 p-6">
            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
              <li>C#, .NET, Python, C++, Java</li>
              <li>React, TypeScript, Node.js</li>
              <li>AWS (RDS, ECS, Lambda, CloudFront, SQS)</li>
              <li>Databases: PostgreSQL, MySQL</li>
              <li>Unity (Game Dev, Shaders, Tools)</li>
              <li>AI/ML: Scikit-learn, TensorFlow</li>
            </ul>
          </Box>
        )}

        {activeTab === "contact" && (
          <Box className="bg-white rounded-lg shadow-md mb-6 p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Where to find me</h2>
            <p>Discord: <a href={URLS.DISCORD} target="_blank" rel="noreferrer">BreadfastTea Discord Server</a></p>
            <p>Youtube: <a href={URLS.YOUTUBE} target="_blank" rel="noreferrer">Mr. Chocolate Salmon</a></p>
            <p>Twitter: <a href={URLS.TWITTER} target="_blank" rel="noreferrer">@mr_chocsalmon</a></p>
            <p>Soundcloud: <a href={URLS.SOUNDCLOUD} target="_blank" rel="noreferrer">Piano de Mateo</a></p>
            <p>CodinGame: <a href={URLS.CODINGAME} target="_blank" rel="noreferrer">@mr_chocsalmon</a></p>
            <p>LinkedIn: <a href={URLS.LINKEDIN} target="_blank" rel="noreferrer">Matthew Ward</a></p>
            <p>GitHub: <a href={URLS.GITHUB} target="_blank" rel="noreferrer">MrChocolateSalmon</a></p>
          </Box>
        )}
      </main>
    </Box>
  );
}
