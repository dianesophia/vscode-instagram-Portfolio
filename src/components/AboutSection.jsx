import React from 'react';
import sopiya from "@/assets/sopiya2.jpg" // Update this path and filename
import { useTheme } from '@/context/ThemeContext';

function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="w-full px-2 xs:px-4 py-8 xs:py-10 sm:py-12 flex justify-center items-center">

      <div
        className="p-4 xs:p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg max-w-5xl w-full grid lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 items-center"
        style={{
          backgroundColor: isDark ? '#22272e' : 'white',
          borderColor: isDark ? '#1f2937' : 'transparent',
          borderWidth: isDark ? '1px' : '0',
          boxShadow: isDark ? '0 10px 15px -3px rgba(0, 0, 0, 0.5)' : ''
        }}
      >


        <div className="flex-column">
          <div>
            <p className="dark:text-gray-400 text-xs xs:text-sm font-mono mb-2 pb-3 xs:pb-5 sm:pb-7 text-center lg:text-left">// About.js</p>
          </div>
          {/* Image Section */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <img
                src={sopiya}
                alt="Diane Sophia Fuentes"
                className="w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

        </div>

        {/* Text Section */}
        <div className="order-1 lg:order-2 space-y-4 xs:space-y-5 sm:space-y-6">
          <div>
            <h2 className="text-3xl xs:text-3xl sm:text-4xl font-mono font-bold mb-3 xs:mb-4 text-[#36ffff] text-center lg:text-left">
              About Me
            </h2>

            {/*Code Style*/}
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
                  <span className="text-green-500"> "Cum Laude"</span>
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

          </div>
          {/*Short description*/}
          <div className="prose prose-xs xs:prose-sm dark:prose-invert font-sans">
            <p className="dark:text-white/90 text-center lg:text-left text-sm xs:text-base">
              Driven to learn and innovate using modern technologies—particularly AI and
              full-stack development—as tools for building practical, real-life applications.
            </p>
          </div>

          {/*Experience*/}
          <div>
            <p>Work Experience</p>
            <p>
              <span>MYT Softdev Solution Inc.</span>
              <span>Full Stack Software Developer</span>
              <span>Sept 2024 - Nov 2024</span>
            </p>

            <p>Affliations and Volunteering</p>
            <p>
              
              <span>Computing Society of the Philippines - Students</span>
              <span>Vice President - Expernal</span>
              <span>Aug 2024 - May 2025</span>
            </p>

            <p>
                 {/*picture*/}
              <span>Computing Society of the Philippines - Students</span>
              <span>Assistant Secretary / Volunteer</span>
              <span>Aug 2023 - June 2024</span>
            </p>

            <p>
              {/*picture*/}
              <span>Boys and Girls Brigade - Philippines</span>
              <span>Young Leader</span>
              <span>June 2015 - Aug 2019</span>
            </p>
          </div>

        </div>


      </div>

    </div>
  );
}

export default AboutSection;
