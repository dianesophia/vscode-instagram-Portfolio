import React from 'react';
import { Card, CardContent } from './ui/card';
import { useTheme } from '@/context/ThemeContext';

function SkillSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', color: 'text-cyan-400' },
        { name: 'TypeScript', color: 'text-blue-400' },
        { name: 'Next.js', color: 'text-black' },
        { name: 'Tailwind CSS', color: 'text-teal-400' },
        { name: 'React Native', color: 'text-cyan-400' },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', color: 'text-green-400' },
        { name: 'Python', color: 'text-yellow-400' },
        { name: 'PostgreSQL', color: 'text-blue-400' },
        { name: 'MongoDB', color: 'text-green-400' },
        { name: 'Express.js', color: 'text-black' },
      ],
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Git', color: 'text-orange-400' },
        { name: 'Docker', color: 'text-blue-400' },
        { name: 'AWS', color: 'text-orange-400' },
        { name: 'V Amongst', color: 'text-black' },
        { name: 'VS Code', color: 'text-blue-400' },
      ],
    },
    {
      name: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', color: 'text-orange-400' },
        { name: 'PyTorch', color: 'text-red-400' },
        { name: 'scikit-learn', color: 'text-blue-400' },
        { name: 'Pandas', color: 'text-purple-400' },
        { name: 'NumPy', color: 'text-blue-300' },
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
          className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5)]"
          style={{
            backgroundColor: isDark ? '#22272e' : 'white',
            borderColor: isDark ? '#374151' : '#e5e7eb',
            borderWidth: '1px',
            color: isDark ? '#e2e8f0' : '#1a202c',
          }}
        >
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
            <div className=" dark:bg-gray-900/50 border  rounded-lg p-6 font-mono text-sm mb-10 shadow-inner">
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
                  className="border border-gray-700/50  dark:bg-gray-900/30  transition-all duration-300 rounded-lg"
                >
                  <CardContent className="p-6">
                    <h3 className="font-mono font-semibold text-xl text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                      {category.name}
                    </h3>
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="group">
                          <span className={`font-mono text-sm ${skill.color} group-hover:scale-105 transition-transform duration-200 block text-center`}>
                            {skill.name}
                          </span>
                        </div>
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