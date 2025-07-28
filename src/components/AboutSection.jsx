import React from 'react';
import sopiya from "@/assets/sopiya2.jpg";
import blur from "@/assets/blur.png";
import { useTheme } from '@/context/ThemeContext';
import { PixelImage } from './ui/pixel-image';
import { Card, CardContent } from './ui/card';
import { ShineBorder } from './ui/shine-border';

function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const funFacts = [
    "🎓 Computer Science Graduate from UC Berkeley",
    "☕ Coffee enthusiast (definitely powered by caffeine)",
    "🎮 Gaming aficionado in my spare time",
    "🌱 Always learning new technologies",
    "🎨 Love combining creativity with code"
  ];

  return (
    <section className="w-full px-4 py-12 flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <Card
          className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
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
                  // About.js
              </p>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                About Me
              </h2>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-7 p-5">
                {/* Image on the left */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src={blur}
                      alt="Profile"
                      className="w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>

                <div className="flex flex-col max-w-md w-full mx-auto space-y-4 gap-2">
                  {/* Card with code-styled aboutMe */}
                  <Card className="border-0 p-5">
                    <div className="space-y-3 xs:space-y-4 font-mono text-xs xs:text-sm">
                      <p className="text-muted-foreground dark:text-gray-400">
                        <span className="text-purple-500">const</span>{' '}
                        <span className="text-blue-500">aboutMe</span> = {'{'}
                      </p>
                      <div className="pl-4 space-y-2">
                        <p className="text-muted-foreground dark:text-gray-400">
                          <span className="text-orange-500">name</span>:
                          <span className="text-green-500"> "Diane Sophia Fuentes"</span>,
                        </p>
                        <p className="text-muted-foreground dark:text-gray-400">
                          <span className="text-orange-500">education</span>:
                          <span className="text-green-500"> "B.S. Computer Science"</span>,
                        </p>
                        <p className="text-muted-foreground dark:text-gray-400">
                          <span className="text-orange-500">university</span>:
                          <span className="text-green-500"> "University of Cebu"</span>,
                        </p>
                        <p className="text-muted-foreground dark:text-gray-400">
                          <span className="text-orange-500">honors</span>:
                          <span className="text-green-500"> "Cum Laude"</span>,
                        </p>
                        <p className="text-muted-foreground dark:text-gray-400">
                          <span className="text-orange-500">specialization</span>:
                          <span className="text-green-500"> "Full Stack Development"</span>,
                        </p>
                        <p className="text-muted-foreground dark:text-gray-400">
                          <span className="text-orange-500">yearGraduated</span>:
                          <span className="text-blue-500"> 2025</span>
                        </p>
                      </div>
                      <p className="text-muted-foreground dark:text-gray-400">{'};'}</p>
                    </div>
                  </Card>

                  {/* Description card */}
                  <Card className="border-0 p-5">
                    <div className="prose prose-sm dark:prose-invert font-sans">
                      <p className="dark:text-white/90 text-center lg:text-left text-sm xs:text-base">
                        Driven to learn and innovate using modern technologies—particularly AI and
                        full-stack development—as tools for building practical, real-life applications.
                      </p>
                    </div>
                  </Card>


                </div>




              </div>

              <div className="flex gap-5">

              

                <div>
              <p className="font-semibold">Affiliations & Volunteering</p>
              <p>Computing Society of the Philippines - Students — <span className="italic">Vice President - External</span></p>
              <p className="text-xs">Aug 2024 - May 2025</p>
              <p>Computing Society of the Philippines - Students — <span className="italic">Assistant Secretary / Volunteer</span></p>
              <p className="text-xs">Aug 2023 - June 2024</p>
              <p>Boys and Girls Brigade - Philippines — <span className="italic">Young Leader</span></p>
              <p className="text-xs">June 2015 - Aug 2019</p>
            </div>
            <div>
                  <p className="font-semibold">Work Experience</p>
                  <p className="text-muted-foreground">MYT Softdev Solution Inc. — <span className="italic">Full Stack Software Developer</span></p>
                  <p className="text-xs">Sept 2024 - Nov 2024</p>
                </div>
              </div>

              <p>hii</p>


            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default AboutSection;
