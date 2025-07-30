import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import WelcomeSection from './WelcomeSection';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import SkillSection from './SkillSection';
import ResumeSection from './ResumeSection';   
import ContactSection from './ContactSection';

function EntirePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div
      className="flex flex-col justify-center items-center w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 gap-12 sm:gap-16 md:gap-20 lg:gap-24 py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: isDark ? '#2d333b' : 'white' }}
    >
      <section id="welcome" className="w-full max-w-7xl"><WelcomeSection /></section>
      <section id="about" className="w-full max-w-7xl"><AboutSection /></section>
      <section id="project" className="w-full max-w-7xl"><ProjectSection /></section>
      <section id="skills" className="w-full max-w-7xl"><SkillSection /></section>
      <section id="contact" className="w-full max-w-7xl"><ContactSection /></section>
    </div>
  );
}

export default EntirePage;