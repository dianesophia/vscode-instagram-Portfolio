import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';

function WelcomeSection() {
  const fullName = "Diane Sophia Fuentes";
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      id="welcome"
      className="flex-1 flex justify-center items-center w-full px-4 pt-3  dark:bg-[22272e]"
    >
      <div
        className="p-4 sm:p-8 md:p-12 rounded-2xl shadow-lg max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-6xl w-full flex flex-col items-start"
        style={{
          backgroundColor: isDark ? '#22272e' : 'white',
          boxShadow: isDark ? '0 10px 15px -3px rgba(0, 0, 0, 0.5)' : ''
        }}
      >
        {/* Filename */}
        <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-2">
                // Welcome.jsx
        </p>

        {/* Name and Emoji */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
          <h1 className="font-bold font-mono text-left text-4xl sm:text-5xl md:text-6xl lg:text-9xl leading-tight break-words">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {fullName}
            </span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl leading-tight">👩‍💻</h1>
        </div>

        {/* Developer Info */}
        <div className="space-y-1 sm:space-y-2 font-mono text-base sm:text-lg mt-6 text-left w-full">
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
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full">
          <Button
            size="lg"
            className="px-6 py-3 font-semibold hover:opacity-90 transition w-full sm:w-auto"
            style={{
              background: 'linear-gradient(to right, hsl(320 100% 70%), hsl(270 95% 75%), hsl(180 100% 70%))',
              color: 'white'
            }}
          >
            <Github className="w-5 h-5 mr-2" style={{ color: 'white' }} />
            View My Work
          </Button>
          <Button
            size="lg"
            className="px-6 py-3 font-semibold hover:opacity-90 transition w-full sm:w-auto"
            style={{
              background: 'linear-gradient(to right, hsl(320 100% 70%), hsl(270 95% 75%), hsl(180 100% 70%))',
              color: 'white'
            }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border shadow-sm"
              style={{
                backgroundColor: isDark ? '#1f2937' : 'white', // dark:bg-gray-800
                borderColor: isDark ? '#374151' : '#e5e7eb', // dark:border-gray-700
                color: isDark ? '#e5e7eb' : 'inherit', // dark:text-gray-200
              }}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border shadow-sm"
              style={{
                backgroundColor: isDark ? '#1f2937' : 'white', // dark:bg-gray-800
                borderColor: isDark ? '#374151' : '#e5e7eb', // dark:border-gray-700
                color: isDark ? '#e5e7eb' : 'inherit', // dark:text-gray-200
              }}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border shadow-sm"
              style={{
                backgroundColor: isDark ? '#1f2937' : 'white', // dark:bg-gray-800
                borderColor: isDark ? '#374151' : '#e5e7eb', // dark:border-gray-700
                color: isDark ? '#e5e7eb' : 'inherit', // dark:text-gray-200
              }}
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Arrow */}
        <div className="mt-10 flex justify-start w-full">
          <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500 animate-bounce" />
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;