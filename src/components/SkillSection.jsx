import React from 'react';
import { Card, CardContent } from './ui/card';
import { useTheme } from '@/context/ThemeContext';
import { ShineBorder } from './ui/shine-border';
import { Pointer } from './ui/pointer';

function SkillSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const skillCategories = [
    {
      name: 'Languages',
      skills: [
        { name: 'Java', color: 'text-orange-400' },
        { name: 'C', color: 'text-blue-400' },
        { name: 'C#', color: 'text-purple-400' },
        { name: 'JavaScript', color: 'text-yellow-400' },
        { name: 'PHP', color: 'text-indigo-400' },
        { name: 'SQL', color: 'text-pink-400' },
        { name: 'Python', color: 'text-green-400' },
      ],
    },
    {
      name: 'Frameworks & Libraries',
      skills: [
        { name: 'React', color: 'text-cyan-400' },
        { name: 'Expo (React Native)', color: 'text-blue-400' },
        { name: 'Laravel', color: 'text-red-400' },
        { name: 'Next.js', color: 'text-black' },
        { name: 'ASP.NET', color: 'text-purple-400' },
        { name: 'Node.js', color: 'text-green-400' },
        { name: 'Express', color: 'text-gray-600' },
        { name: 'Bootstrap', color: 'text-purple-300' },
        { name: 'Tailwind CSS', color: 'text-teal-400' },
        { name: 'Vite', color: 'text-yellow-400' },
      ],
    },
    {
      name: 'Tools & Platforms',
      skills: [
        { name: 'Git', color: 'text-orange-400' },
        { name: 'Firebase', color: 'text-yellow-500' },
        { name: 'Figma', color: 'text-pink-400' },
        { name: 'Raspberry Pi 4', color: 'text-red-400' },
        { name: 'Google Cloud', color: 'text-blue-400' },
        { name: 'Supabase', color: 'text-green-400' },
        { name: 'MySQL', color: 'text-blue-400' },
        { name: 'MongoDB', color: 'text-green-500' },
      ],
    },
    {
      name: 'Machine Learning',
      skills: [
        { name: 'YOLOv8', color: 'text-red-400' },
        { name: 'OpenCV', color: 'text-blue-300' },
        { name: 'TensorFlow (basic)', color: 'text-orange-400' },
        { name: 'scikit-learn (basic)', color: 'text-blue-400' },
        { name: 'pyttsx3', color: 'text-gray-400' },
        { name: 'LabelImg', color: 'text-purple-400' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-12 px-4 dark:bg-[#22272e]"
    >
      <div className="max-w-6xl w-full">
        <Card
          className="relative overflow-hidden rounded-2xl shadow-lg  hover:shadow-2xl"
          style={{
            backgroundColor: isDark ? '#22272e' : 'white',
            borderColor: isDark ? '#374151' : '#e5e7eb',
            borderWidth: '1px',
            color: isDark ? '#e2e8f0' : '#1a202c',
          }}
        >
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col items-start text-left mb-8">
              <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-2">
                // skills.json
              </p>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Technical Skills
              </h2>
            </div>

            {/* Code-style skills display */}
            <div className="dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700/50 rounded-lg p-6 font-mono text-sm mb-10 shadow-inner">
            <Pointer>
          <div className="text-2xl">👆</div>
        </Pointer>
              <div className="text-gray-400 mb-4">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-cyan-400">skills</span> = {'{'}
              </div>
              {skillCategories.map((category, categoryIndex) => (
                <div key={category.name} className="pl-4 mb-4">
                  <div className="text-gray-400 mb-2">
                    <span className="text-orange-400">"{category.name.toLowerCase()}"</span>: [
                  </div>
                  <div className="pl-4 flex flex-wrap gap-x-3 gap-y-1 text-gray-400">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="inline">
                        <span className="text-green-400 hover:text-green-300 transition-colors">
                          "{skill.name}"
                        </span>
                        {skillIndex < category.skills.length - 1 ? ',' : ''}
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-400">
                    ]{categoryIndex < skillCategories.length - 1 ? ',' : ''}
                  </div>
                </div>
              ))}
              <div className="text-gray-400">{'};'}</div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {skillCategories.map((category) => (
                <Card
                  key={category.name}
                  className="border border-gray-300 dark:border-gray-700/50 dark:bg-gray-900/30 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  
                  
                  <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                  <CardContent className="p-6">
                    <h3 className="font-mono font-semibold text-xl text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-2 items-start">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`font-mono text-sm ${skill.color} border dark:bg-white/10 px-3 py-1 rounded-full transition-transform hover:scale-105`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default SkillSection;
