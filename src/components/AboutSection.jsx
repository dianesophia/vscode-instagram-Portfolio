import React from 'react';
import sopiya from "@/assets/sopiya2.jpg";
import blur from "@/assets/blur.png";
import mytLogo from "@/assets/myt.png"; // Placeholder for MYT Softdev logo
import cspsLogo from "@/assets/csps.png"; // Placeholder for CSPS logo
import bgbLogo from "@/assets/bgb.png";
import { useTheme } from '@/context/ThemeContext';
import { PixelImage } from './ui/pixel-image';
import { Card, CardContent } from './ui/card';
import { ShineBorder } from './ui/shine-border';
import { Pointer } from './ui/pointer';
import { motion } from "motion/react";
function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const funFacts = [
    "🎓 Computer Science Graduate from UC Berkeley",
    "☕ Coffee enthusiast (definitely powered by caffeine)",
    "🎮 Gaming aficionado in my spare time",
    "🌱 Always learning new technologies",
    "🎨 Love combining creativity with code"
  ];

  return (
    <section id="about" className="w-full px-4 py-1 flex justify-center items-center">
      <div className="max-w-5xl w-full">
        <Card
          className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl "
          style={{
            backgroundColor: isDark ? '#22272e' : 'white',
            borderColor: isDark ? '#374151' : '#e5e7eb',
            borderWidth: '1px',
            color: isDark ? '#e2e8f0' : '#1a202c',
          }}
        >
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <Pointer>
          <motion.div
            animate={{
              scale: [0.8, 1, 0.8],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-600"
            >
              <motion.path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        </Pointer>
          <CardContent className="p-6 md:p-8 lg:p-10">
            {/* Header */}
            <div className="mb-8 text-left">
              <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-3 tracking-wider">// About.js</p>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                About Me
              </h2>
            </div>

            {/* Main Info Section */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Image */}
              <div className="flex-shrink-0 relative group">
                <img
                  src={blur}
                  alt="Profile"
                  className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-3xl shadow-inner opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)' }} />
              </div>

              {/* Info Cards */}
              <div className="flex flex-col space-y-4 w-full max-w-2xl">
                {/* Code-style Info */}
                <Card className="border-0 p-6 bg-muted dark:bg-muted/40 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="space-y-2 font-mono text-sm md:text-base">
                    <p className="text-muted-foreground dark:text-gray-400">
                      <span className="text-purple-500">const</span>{' '}
                      <span className="text-blue-500">aboutMe</span> = {'{'}
                    </p>
                    <div className="pl-6 space-y-1">
                      <p><span className="text-orange-500">name</span>: <span className="text-green-500">"Diane Sophia Fuentes"</span>,</p>
                      <p><span className="text-orange-500">education</span>: <span className="text-green-500">"B.S. Computer Science"</span>,</p>
                      <p><span className="text-orange-500">university</span>: <span className="text-green-500">"University of Cebu"</span>,</p>
                      <p><span className="text-orange-500">honors</span>: <span className="text-green-500">"Cum Laude"</span>,</p>
                      <p><span className="text-orange-500">specialization</span>: <span className="text-green-500">"Full Stack Development"</span>,</p>
                      <p><span className="text-orange-500">yearGraduated</span>: <span className="text-blue-500">2025</span></p>
                    </div>
                    <p className="text-muted-foreground dark:text-gray-400">{'};'}</p>
                  </div>
                </Card>

                {/* Description */}
                <Card className="border-0 p-6 bg-muted dark:bg-muted/40 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <p className="dark:text-white/90 text-center lg:text-left text-base md:text-lg font-light leading-relaxed">
                    Driven to learn and innovate using modern technologies—particularly AI and
                    full-stack development—as tools for building practical, real-life applications.
                  </p>
                </Card>
              </div>
            </div>

            {/* Extra Info: Experience + Volunteering */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Affiliations */}
              <div>
                <p className="font-semibold text-xl mb-4 text-cyan-500">Affiliations & Volunteering</p>
                <div className="text-sm space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <img
                      src={cspsLogo}
                      alt="CSPS Logo"
                      className="w-10 h-10 object-contain rounded-full shadow-md transition-transform duration-300 group-hover:scale-110"
                    />
                    <div>
                      <p>Computing Society of the Philippines - Students — <span className="italic">Vice President - External</span></p>
                      <p className="text-xs text-gray-500">Aug 2024 - May 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <img
                      src={cspsLogo}
                      alt="CSPS Logo"
                      className="w-10 h-10 object-contain rounded-full shadow-md transition-transform duration-300 group-hover:scale-110"
                    />
                    <div>
                      <p>Computing Society of the Philippines - Students — <span className="italic">Assistant Secretary / Volunteer</span></p>
                      <p className="text-xs text-gray-500">Aug 2023 - June 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 group">
                  <img
                      src={bgbLogo}
                      alt="BGB Logo"
                      className="w-10 h-10 object-contain shadow-md transition-transform duration-300 group-hover:scale-110"
                    /> 
                    <div>
                      <p>Boys and Girls Brigade - Philippines — <span className="italic">Young Leader</span></p>
                      <p className="text-xs text-gray-500">June 2015 - Aug 2019</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <p className="font-semibold text-xl mb-4 text-cyan-500">Work Experience</p>
                <div className="text-sm space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <img
                      src={mytLogo}
                      alt="MYT Softdev Logo"
                      className="w-10 h-10 object-contain rounded-full bg-white shadow-md transition-transform duration-300 group-hover:scale-110"
                    />
                    <div>
                      <p>MYT Softdev Solution Inc. — <span className="italic">Full Stack Software Developer</span></p>
                      <p className="text-xs text-gray-500">Sept 2024 - Nov 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default AboutSection;