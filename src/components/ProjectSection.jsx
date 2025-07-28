import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import sopiya from '@/assets/sopiya2.jpg'; // Update this path and filename as needed
import fruitveg from '@/assets/fruitveg.png';
import { Github, ExternalLink, Play } from 'lucide-react';

function ProjectSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const projects = [
    {
      id: '1',
      title: 'InspectorBill',
      image: sopiya, // Replace with actual project image
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
      image: sopiya, // Replace with actual project image
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
      image: sopiya, // Replace with actual project image
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
      image: sopiya, // Replace with actual project image
      description: 'ML-based recipe recommender that provides nutrition facts tailored to dietary needs.',
      longDescription: 'Recommends recipes based on user dietary preferences using machine learning. Provides detailed nutrition facts for each recipe. Built with React Native for cross-platform mobile support. Integrates with a backend API for recipe data and user profiles.',
      tags: ['React Native', 'Machine Learning', 'API'],
      techStack: ['React Native', 'Python', 'Machine Learning', 'API'],
      githubUrl: 'https://github.com/dianesophia/React_Native_Cooktrition_Facts',
      demoUrl: 'https://github.com/dianesophia/React_Native_Cooktrition_Facts',
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
                // projects.json
              </p>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Featured Projects
              </h2>
              <p className="font-mono text-sm text-gray-500 dark:text-gray-400 mt-2">
                Here are some of my projects that showcase my skills
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="group cursor-pointer border  dark:bg-gray-900/30  transition-all duration-300 rounded-lg overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="font-mono text-xs bg-white dark:bg-black  text-black"
                      >
                        {project.type === 'mobile' ? '📱' : project.type === 'web' ? '💻' : '🔌'} {project.type}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-mono font-semibold text-lg text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="font-mono text-sm text-gray-600 dark:text-white mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="font-mono text-xs border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
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
            className="w-full max-w-[95%] max-h-[90vh] overflow-y-auto  dark:bg-[#22272e] bg-white border border-gray-700/50 px-8 py-6"
            style={{ maxWidth: '95% !important', width: '100% !important' }}
          >
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 w-full">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover rounded-lg shadow-xl"
                  />
                  <div>
                    <h4 className="font-mono font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                      Description
                    </h4>
                    <p className="font-mono text-sm text-gray-900 dark:text-gray-100">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="font-mono text-xs bg-gray-800/50 dark:bg-gray-900/50 text-gray-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      className="font-mono bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition-opacity w-full sm:w-auto"
                    >
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    {selectedProject.demoUrl && (
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="font-mono border-gray-700/50 bg-gray-800/30 dark:bg-gray-900/30 hover:bg-gray-800/50 transition-all w-full sm:w-auto"
                      >
                        <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
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