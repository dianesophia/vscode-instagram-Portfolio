import React from 'react'
import { Card, CardContent } from './ui/card';
import { useTheme } from '@/context/ThemeContext';
import { Button } from './ui/button';
import { Download, MapPin, Calendar, Building, GraduationCap } from 'lucide-react';

function ResumeSection() {
  const handleDownloadResume = () => {
    // In a real application, this would download the actual resume file
    window.open('/resume-diane-chen.pdf', '_blank');
  };
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="resume" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">

        <Card
          className="p-11 py-9 rounded-lg shadow text-center w-full max-w-screen-xl"
          style={{
            backgroundColor: isDark ? '#22272e' : '#ffffff',
            borderColor: isDark ? '#1f2937' : 'transparent',
            borderWidth: isDark ? '1px' : '0',
            boxShadow: isDark ? '0 10px 15px -3px rgba(0, 0, 0, 0.5)' : '',
            color: isDark ? 'rgba(255, 255, 255, 0.9)' : 'inherit',
            padding: '2.75rem',
          }}
        >
           <CardContent className="p-8">

           <div className="mb-8">
              <span className="text-sm font-mono text-muted-foreground">// Resume.pdf</span>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 mb-6">
                <h2 className="text-3xl font-mono font-bold text-[#ff36b3] bg-clip-text ">
                  Experience & Education
                </h2>
                <Button 
                  onClick={handleDownloadResume}
                  className="bg-gradient-instagram text-white hover:opacity-90 transition-opacity mt-4 sm:mt-0"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
           </CardContent>

        </Card>

      </div>
    </section>
  )
}

export default ResumeSection