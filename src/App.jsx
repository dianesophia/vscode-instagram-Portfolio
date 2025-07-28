import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import SkillSection from './components/SkillSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import EntirePage from './components/EntirePage';
import './index.css';
import { ThemeProvider } from "@/context/ThemeContext"; // ✅ Make sure this matches your actual file name

function App() {
  return (
    <ThemeProvider> {/* ✅ Correct provider name and wraps the Router */}
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<EntirePage />} />
            <Route path="AboutSection" element={<AboutSection />} />
            <Route path="ProjectSection" element={<ProjectSection />} />
            <Route path="SkillSection" element={<SkillSection />} />
            <Route path="ResumeSection" element={<ResumeSection />} />
            <Route path="ContactSection" element={<ContactSection />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
