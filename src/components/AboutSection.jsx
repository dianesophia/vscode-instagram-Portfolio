import React from 'react';
import sopiya from "@/assets/sopiya2.jpg";
import blur from "@/assets/blur.png";
import { useTheme } from '@/context/ThemeContext';
import { PixelImage } from './ui/pixel-image';

function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="w-full px-4 py-12 flex justify-center items-center">
      <div
        className="p-4 sm:p-8 md:p-12 rounded-2xl shadow-lg max-w-5xl w-full grid lg:grid-cols-2 gap-6 items-center"
        style={{
          backgroundColor: isDark ? '#22272e' : 'white',
          borderColor: isDark ? '#1f2937' : 'transparent',
          borderWidth: isDark ? '1px' : '0',
          boxShadow: isDark ? '0 10px 15px -3px rgba(0, 0, 0, 0.5)' : '',
        }}
      >
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative">
            <img
              src={blur}
              alt="Profile"
              className="w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-xl"
            />
            
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-4 xs:space-y-5 sm:space-y-6">
          <div>
            <p className="dark:text-gray-400 text-xs xs:text-sm font-mono mb-2">// About.js</p>
            <h2 className="text-3xl xs:text-3xl sm:text-4xl font-mono font-bold text-[#36ffff] text-center lg:text-left">
              About Me
            </h2>
          </div>

          <div className="space-y-3 xs:space-y-4 font-mono text-xs xs:text-sm">
            <p className="text-muted-foreground dark:text-gray-400">
              <span className="text-purple-500">const</span>{' '}
              <span className="text-blue-500">aboutMe</span> = {'{'}
            </p>
            <div className="pl-4 space-y-2">
              <p className="text-muted-foreground dark:text-gray-400">
                <span className="text-orange-500">name</span>:<span className="text-green-500"> "Diane Sophia Fuentes"</span>,
              </p>
              <p className="text-muted-foreground dark:text-gray-400">
                <span className="text-orange-500">education</span>:<span className="text-green-500"> "B.S. Computer Science"</span>,
              </p>
              <p className="text-muted-foreground dark:text-gray-400">
                <span className="text-orange-500">university</span>:<span className="text-green-500"> "University of Cebu"</span>,
              </p>
              <p className="text-muted-foreground dark:text-gray-400">
                <span className="text-orange-500">honors</span>:<span className="text-green-500"> "Cum Laude"</span>,
              </p>
              <p className="text-muted-foreground dark:text-gray-400">
                <span className="text-orange-500">specialization</span>:<span className="text-green-500"> "Full Stack Development"</span>,
              </p>
              <p className="text-muted-foreground dark:text-gray-400">
                <span className="text-orange-500">yearGraduated</span>:<span className="text-blue-500"> 2025</span>
              </p>
            </div>
            <p className="text-muted-foreground dark:text-gray-400">{'};'}</p>
          </div>

          <div className="prose prose-sm dark:prose-invert font-sans">
            <p className="dark:text-white/90 text-center lg:text-left text-sm xs:text-base">
              Driven to learn and innovate using modern technologies—particularly AI and
              full-stack development—as tools for building practical, real-life applications.
            </p>
          </div>

          <div className="space-y-2 text-sm dark:text-gray-300">
            <div>
              <p className="font-semibold">Work Experience</p>
              <p className="text-muted-foreground">MYT Softdev Solution Inc. — <span className="italic">Full Stack Software Developer</span></p>
              <p className="text-xs">Sept 2024 - Nov 2024</p>
            </div>
            <div>
              <p className="font-semibold">Affiliations & Volunteering</p>
              <p>Computing Society of the Philippines - Students — <span className="italic">Vice President - External</span></p>
              <p className="text-xs">Aug 2024 - May 2025</p>
              <p>Computing Society of the Philippines - Students — <span className="italic">Assistant Secretary / Volunteer</span></p>
              <p className="text-xs">Aug 2023 - June 2024</p>
              <p>Boys and Girls Brigade - Philippines — <span className="italic">Young Leader</span></p>
              <p className="text-xs">June 2015 - Aug 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
