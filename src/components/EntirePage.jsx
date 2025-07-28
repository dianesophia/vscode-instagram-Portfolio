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
      className="flex flex-col justify-center items-center w-full px-2 sm:px-4 gap-24 py-20"
      style={{ backgroundColor: isDark ? '#2d333b' : 'white' }}
    >
      <section id="welcome" className="pt-5"><WelcomeSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="project"><ProjectSection /></section>
      <section id="skills"><SkillSection /></section>
      <section id="resume"><ResumeSection /></section>
      <section id="contact"><ContactSection /></section>
    </div>
  );
}

export default EntirePage;
