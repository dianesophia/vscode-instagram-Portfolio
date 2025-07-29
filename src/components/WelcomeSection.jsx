import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { Pointer } from './ui/pointer';
import { ShineBorder } from './ui/shine-border';
import { Card, CardContent } from './ui/card';
import { motion } from "framer-motion";

function WelcomeSection() {
  const fullName = "Diane Sophia Fuentes";
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="welcome"
      className="min-h-screen flex items-center justify-center w-full px-4 py-10"
    >
      <Card
        className="relative w-full max-w-6xl p-6 sm:p-10 md:p-14 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
        style={{
          backgroundColor: isDark ? '#22272e' : 'white',
          borderColor: isDark ? '#374151' : '#e5e7eb',
          borderWidth: '1px',
        }}
      >
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <Pointer>
          <motion.div
            animate={{ scale: [0.8, 1, 0.8], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <motion.path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
                className="text-pink-600"
              />
            </svg>
          </motion.div>
        </Pointer>

        <CardContent>
          {/* Filename */}
          <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-3">// Welcome.jsx</p>

          {/* Name and Emoji */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            <h1 className="font-bold font-mono text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight break-words">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                {fullName}
              </span>
            </h1>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">👩‍💻</span>
          </div>

          {/* Developer Info */}
          <div className="space-y-1 sm:space-y-2 font-mono text-sm sm:text-base mt-6 text-left w-full">
            <p className="text-muted-foreground dark:text-gray-400">
              <span className="text-purple-500">const</span>{' '}
              <span className="text-blue-500">developer</span> = {'{'}
            </p>
            <p className="text-muted-foreground dark:text-gray-400 pl-6">
              <span className="text-orange-500">role</span>: <span className="text-green-500">"Software Engineer"</span>,
            </p>
            <p className="text-muted-foreground dark:text-gray-400 pl-6">
              <span className="text-orange-500">passion</span>: <span className="text-green-500">"Full Stack Developer && AI Learner"</span>,
            </p>
            <p className="text-muted-foreground dark:text-gray-400 pl-6">
              <span className="text-orange-500">status</span>: <span className="text-green-500">"Available for hire"</span>
            </p>
            <p className="text-muted-foreground dark:text-gray-400">{'};'}</p>
          </div>

          {/* Buttons + Socials */}
          <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between w-full">
            {/* Resume Button */}
            <a href="/Fuentes_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="font-semibold hover:opacity-90"
                style={{
                  background: 'linear-gradient(to right, hsl(320 100% 70%), hsl(270 95% 75%), hsl(180 100% 70%))',
                  color: 'white'
                }}
              >
                View Resume
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 sm:mt-0">
              {[
                { icon: <Github />, url: "https://github.com/dianesophia" },
                { icon: <Linkedin />, url: "https://www.linkedin.com/in/diane-sophia-fuentes-2913b6232/" },
                { icon: <Mail />, url: "mailto:dianefuentes2002.com" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border shadow-sm hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: isDark ? '#1f2937' : 'white',
                      borderColor: isDark ? '#374151' : '#e5e7eb',
                      color: isDark ? '#e5e7eb' : '#1a202c',
                    }}
                  >
                    {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                  </Button>
                </a>
              ))}
            </div>

          </div>

          {/* Scroll Down Arrow */}
          <div className="mt-12 flex justify-start">
            <a href="#about" className="cursor-pointer">
              <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500 animate-bounce" />
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default WelcomeSection;
