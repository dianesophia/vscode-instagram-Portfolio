import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { Pointer } from './ui/pointer';
import { ShineBorder } from './ui/shine-border';

function WelcomeSection() {
  const fullName = "Diane Sophia Fuentes";
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      id="welcome"
      className="min-h-screen flex items-center justify-center w-full px-4 py-8 dark:bg-[22272e]"
    >
      <div
        className="p-4 sm:p-8 md:p-12 rounded-2xl shadow-lg max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-6xl w-full flex flex-col items-start"
        style={{
          backgroundColor: isDark ? '#22272e' : 'white',
          boxShadow: isDark ? '0 10px 15px -3px rgba(0, 0, 0, 0.5)' : ''
        }}
      >


        <Pointer>
          <div className="text-2xl">👆</div>
        </Pointer>
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        {/* Filename */}
        <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-2">
          // Welcome.jsx
        </p>

        {/* Name and Emoji */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full">
          <h1 className="font-bold font-mono text-left text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight break-words">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {fullName}
            </span>
          </h1>
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">👩‍💻</span>
        </div>

        {/* Developer Info */}
        <div className="space-y-1 sm:space-y-2 font-mono text-sm sm:text-base mt-6 text-left w-full">
          <p className="text-muted-foreground dark:text-gray-400">
            <span className="text-purple-500">const</span>{' '}
            <span className="text-blue-500">developer</span> = {'{'}
          </p>
          <p className="text-muted-foreground dark:text-gray-400 pl-4">
            <span className="text-orange-500">role</span>: <span className="text-green-600">"Software Engineer"</span>,
          </p>
          <p className="text-muted-foreground dark:text-gray-400 pl-4">
            <span className="text-orange-500">passion</span>: <span className="text-green-600">"Full Stack Developer && AI Learner"</span>,
          </p>
          <p className="text-muted-foreground dark:text-gray-400 pl-4">
            <span className="text-orange-500">status</span>: <span className="text-green-600">"Available for hire"</span>
          </p>
          <p className="text-muted-foreground dark:text-gray-400">{'};'}</p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full flex-wrap">
         

          {/* Resume Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-[#2C6C82] font-semibold hover:bg-gray-100"
                style={{
                  background: 'linear-gradient(to right, hsl(320 100% 70%), hsl(270 95% 75%), hsl(180 100% 70%))',
                  color: 'white'
                }}
              >
                View Resume
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>


          {/* Social Icons */}
          <div className="flex gap-3 justify-center sm:justify-start mt-2 sm:mt-0">
            {[<Github />, <Linkedin />, <Mail />].map((Icon, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="icon"
                className="rounded-full border shadow-sm"
                style={{
                  backgroundColor: isDark ? '#1f2937' : 'white',
                  borderColor: isDark ? '#374151' : '#e5e7eb',
                  color: isDark ? '#e5e7eb' : 'inherit',
                }}
              >
                <Icon.type className="w-5 h-5" />
              </Button>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="mt-10 flex justify-start w-full">
          <a href="#about" className="cursor-pointer">
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500 animate-bounce" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default WelcomeSection;
