import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import cooktri from '@/assets/Cooktrition.png';
import inspector from '@/assets/inspectorbill.png';
import golden from '@/assets/goldenHaven.png';
import fruitveg from '@/assets/fruitveg.png';
import rasp from '@/assets/rasp.png';
import { Github, ExternalLink, Play } from 'lucide-react';
import { Lens } from './ui/lens';
import { ShineBorder } from './ui/shine-border';
import { Pointer } from './ui/pointer';
import { X } from 'lucide-react';
import { DialogClose } from '@/components/ui/dialog';

function ProjectSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const projects = [
    {
      id: '1',
      title: 'InspectorBill',
      image: inspector,
      description: 'A Machine Learning-based model for recognizing Philippine bill denominations.',
      longDescription: 'Automatically recognizes Philippine currency through image classification. Utilizes a custom-trained ML model powered by OpenCV. Provides an API layer using Flask for model deployment. Performs real-time predictions using camera input.',
      tags: ['Python', 'Machine Learning', 'YOLOv8'],
      techStack: ['Python', 'Machine Learning', 'YOLOv8', 'OpenCV'],
      githubUrl: 'https://github.com/dianesophia/Thesis---Inspector-Bill',
      demoUrl: '',
      type: 'API',
    },
    {
      id: '2',
      title: 'Raspberry Pi Currency Detector',
      image: rasp,
      description: 'YOLOv8-powered Philippine currency recognition system with Raspberry Pi 4 and audio assistance.',
      longDescription: 'Detects Philippine currency in real time using YOLOv8. Provides audio feedback for visually impaired users. Runs offline and is optimized for Raspberry Pi 4. Includes a React.js web dashboard with Firebase integration. Uses a camera for continuous and efficient currency detection.',
      tags: ['Raspberry Pi4', 'Python', 'Machine Learning'],
      techStack: ['Raspberry Pi4', 'Python', 'Machine Learning', 'YOLOv8', 'OpenCV', 'Reactjs', 'Firebase'],
      githubUrl: 'https://github.com/dianesophia/InspectorBill-Live',
      demoUrl: 'https://inspector-bill-live.vercel.app/',
      type: 'web',
    },
    {
      id: '3',
      title: 'Golden Haven Community Portal',
      image: golden,
      description: 'A .NET-based portal for local communication, billing, and facility reservations.',
      longDescription: 'Enables residents to receive local announcements and respond to polls. Tracks billing records and payment histories. Allows users to reserve community facilities seamlessly. Implements role-based access for homeowners and administrators. Features a chat system and discussion forum for neighborhood engagement.',
      tags: ['ASP.NET', 'C#', 'MySQL'],
      techStack: ['ASP.NET', 'C#', 'MySQL', 'Razor'],
      githubUrl: 'https://github.com/dianesophia/Homeowner-App',
      demoUrl: '',
      type: 'web',
    },
    {
      id: '4',
      title: 'Cooktrition Facts',
      image: cooktri,
      description: 'ML-based recipe recommender that provides nutrition facts tailored to dietary needs.',
      longDescription: 'Recommends recipes based on user dietary preferences using machine learning. Provides detailed nutrition facts for each recipe. Built with React Native for cross-platform mobile support. Integrates with a backend API for recipe data and user profiles.',
      tags: ['React Native', 'Machine Learning', 'API'],
      techStack: ['React Native', 'Python', 'Machine Learning', 'API'],
      githubUrl: 'https://github.com/dianesophia/React_Native_Cooktrition_Facts',
      demoUrl: '',
      type: 'mobile',
    },
    {
      id: '5',
      title: 'Fruit and Vegetables Image Recognition',
      image: fruitveg,
      description: 'Streamlit app using TensorFlow AI for real-time fruit and vegetable classification.',
      longDescription: 'Classifies fruits and vegetables in real time using TensorFlow and OpenCV. Built as a Streamlit web app for easy user interaction. Supports camera input for live image recognition. Optimized for performance and user-friendly interface.',
      tags: ['Python', 'Streamlit', 'Machine Learning'],
      techStack: ['Python', 'Streamlit', 'Machine Learning', 'TensorFlow', 'OpenCV'],
      githubUrl: 'https://github.com/dianesophia/Fruit-Veg-Recognition-Website',
      demoUrl: 'https://dsophiafruitvegrecognition.streamlit.app/',
      type: 'web',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6  "
    >
      <div className="w-full max-w-[95%] sm:max-w-4xl lg:max-w-6xl">
        <Card
          className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.3)]"
          style={{
            backgroundColor: isDark ? '#22272e' : 'white',
            borderColor: isDark ? '#374151' : '#e5e7eb',
            borderWidth: '1px',
            color: isDark ? '#e2e8f0' : '#1a202c',
          }}
        >
          <Pointer className="fill-blue-500" />
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col items-start text-left mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-400 mb-2">
                // projects.json
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Featured Projects
              </h2>
              <p className="font-mono text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
                Here are some of my projects that showcase my skills
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-700"
                  onClick={() => setSelectedProject(project)}
                >
                  <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="secondary"
                        className="font-mono text-xs !bg-white dark:!bg-black !text-black dark:!text-white"
                      >
                        {project.type === 'mobile' ? '📱' : project.type === 'web' ? '💻' : '🔌'} {project.type}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-mono font-semibold text-base sm:text-lg text-cyan-500 mb-2">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-gray-600 dark:text-white mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="font-mono text-xs border-gray-300 dark:border-gray-700 dark:text-white"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent
            className="w-full max-w-[95%] sm:max-w-lg md:max-w-2xl max-h-[85vh] overflow-y-auto dark:bg-[#22272e] border border-gray-200 dark:border-[#36ffff] rounded-2xl shadow-xl transition-all duration-300"
            style={{
              backgroundColor: isDark ? '#22272e' : 'white',
              borderColor: isDark ? '#36ffff' : '#e5e7eb',
              boxShadow: isDark ? '0 10px 15px -3px rgba(54, 255, 255, 0.2)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <DialogClose asChild>
              <button
                className={`absolute top-4 right-4 ${isDark ? 'text-pink-500 hover:text-purple-500' : 'text-white !important hover:text-gray-200 !important'} transition-colors`}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </DialogClose>

            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 sm:space-y-6">
                  <Lens
                    zoomFactor={2}
                    lensSize={150}
                    isStatic={false}
                    ariaLabel="Zoom Area"
                  >
                    <img
                      src={selectedProject.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow-xl"
                    />
                  </Lens>
                  <div>
                    <h4 className="font-mono font-semibold text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                      Description
                    </h4>
                    <p className="font-mono text-xs sm:text-sm dark:text-white">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono font-semibold text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="font-mono text-xs !bg-gray-800/50 dark:!bg-gray-900/50 !text-gray-100 dark:!text-white"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {/* View Code Button */}
                    <Button
                      size="lg"
                      className="font-mono bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all w-full sm:w-auto text-sm sm:text-base"
                    >
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        View Code
                      </a>
                    </Button>

                    {/* Live Demo Button */}
                    {selectedProject.demoUrl && (
                      <Button
                        variant="outline"
                        size="lg"
                        className="font-mono bg-white dark:bg-[#22272e] border border-blue-400 dark:border-teal-400 text-blue-400 dark:text-teal-400 hover:bg-blue-400 hover:text-white dark:hover:bg-teal-400 dark:hover:text-black transition-all w-full sm:w-auto text-sm sm:text-base"
                      >
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

export default ProjectSection;