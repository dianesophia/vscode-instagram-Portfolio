import { SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { useEffect, useState, useCallback } from "react";
import sopiyaE from "@/assets/sopiya2.jpg";
import { Button } from "./ui/button";
import { useTheme } from "@/context/ThemeContext";
import {
  FileText,
  User,
  Briefcase,
  Settings,
  FileCode,
  Phone,
  Sun,
  Moon,
} from "lucide-react";

// Define icon colors based on theme
const getIconColors = (isDark) => ({
  welcome: isDark ? '#93c5fd' : '#3b82f6',
  about: isDark ? '#86efac' : '#22c55e',
  projects: isDark ? '#d8b4fe' : '#a855f7',
  skills: isDark ? '#fde047' : '#eab308',
  
  contact: isDark ? '#67e8f9' : '#06b6d4',
});

// Define items function
const getItems = (isDark) => {
  const iconColors = getIconColors(isDark);
  return [
    {
      title: "Welcome.jsx",
      url: "#welcome",
      icon: <FileCode className="h-4 w-4 xs:h-5 xs:w-5" style={{ color: iconColors.welcome }} />,
    },
    {
      title: "About.js",
      url: "#about",
      icon: <User className="h-4 w-4 xs:h-5 xs:w-5" style={{ color: iconColors.about }} />,
    },
    {
      title: "Projects.tsx",
      url: "#projects",
      icon: <Briefcase className="h-4 w-4 xs:h-5 xs:w-5" style={{ color: iconColors.projects }} />,
    },
    {
      title: "Skills.json",
      url: "#skills",
      icon: <Settings className="h-4 w-4 xs:h-5 xs:w-5" style={{ color: iconColors.skills }} />,
    },
    
    {
      title: "Contact.json",
      url: "#contact",
      icon: <Phone className="h-4 w-4 xs:h-5 xs:w-5" style={{ color: iconColors.contact }} />,
    },
  ];
};

export function AppSidebar({ open }) {
  const { theme, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState("welcome");
  const isDark = theme === 'dark';
  const items = getItems(isDark);

  // Debounce activeId updates
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  // Handle section visibility with IntersectionObserver
  useEffect(() => {
    const sectionIds = ["welcome", "about", "projects", "skills", "resume", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (sections.length === 0) {
      console.warn("No sections found. Check if section IDs exist in the DOM.");
      return;
    }

    const setActiveSection = debounce((sectionId) => {
      if (sectionId !== activeId) {
        setActiveId(sectionId);
        window.history.replaceState(null, null, `#${sectionId}`);
        console.log(`Active section updated to: ${sectionId}`);
      }
    }, 150);

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target;
          }
        });

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection.id);
          console.log(`Detected section: ${mostVisibleSection.id} (ratio: ${maxRatio})`);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
      console.log(`Observing section: ${section.id}, height: ${section.offsetHeight}px`);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [activeId]);

  // Handle link clicks with smooth scrolling
  const handleLinkClick = useCallback((e, url) => {
    e.preventDefault();
    const sectionId = url.substring(1);
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      setActiveId(sectionId);
      window.history.pushState(null, null, url);
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: "smooth" });
        console.log(`Navigated to: ${sectionId}`);
      }, 100);
    } else {
      console.warn(`Section with ID ${sectionId} not found. Falling back to welcome.`);
      setActiveId("welcome");
      window.history.replaceState(null, null, "#welcome");
      document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Handle hash changes and initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && document.getElementById(hash)) {
        setActiveId(hash);
        setTimeout(() => {
          document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
          console.log(`Hash changed to: ${hash}`);
        }, 100);
      } else {
        setActiveId("welcome");
        window.history.replaceState(null, null, "#welcome");
        setTimeout(() => {
          document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" });
          console.log("No valid hash, defaulted to welcome");
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <SidebarBody
      role="navigation"
      className="flex flex-col gap-1 xs:gap-2 sm:gap-4 p-1 xs:p-2 sm:p-4 text-gray-900 min-h-screen w-full max-w-[240px] xs:max-w-[280px] sm:max-w-none"
      style={{
        backgroundColor: isDark ? '#22272e' : '#f3f4f6',
        color: isDark ? '#f3f4f6' : '#111827',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-1 xs:gap-2 py-1 xs:py-2">
        <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 p-0.5 bg-gradient-to-tr from-pink-400 via-pink-500 to-pink-600 rounded-full">
          <img
            src={sopiyaE}
            alt="Profile"
            className="w-full h-full rounded-full object-cover bg-white"
          />
          
        </div>
        {open && (
          <div className="ml-1 xs:ml-2">
            <span
              className="block text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-medium whitespace-nowrap"
              style={{ color: isDark ? 'white' : '#1f2937' }}
            >
              Diane Sophia Fuentes
            </span>
            <span
              className="block text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs"
              style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
            >
              Software Engineer
            </span>
          </div>
          
        )}
      </div>
      <div className="border-b mx-0 mb-1" style={{ borderColor: isDark ? '#374151' : '#d1d5db' }}></div>
      {open && (
        <div className="mb-1 xs:mb-2 sm:mb-4">
          <div className="flex items-center gap-1 xs:gap-2 px-1 xs:px-2 text-[8px] xs:text-[10px] sm:text-xs font-mono">
            <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-orange-300 rounded-full animate-pulse"></div>
            <span style={{ color: isDark ? '#6b7280' : '#9ca3af' }}>EXPLORER</span>
          </div>
        </div>
      )}
      {/* Sidebar Links */}
      <div className={`flex flex-col ${open ? "gap-0.5 xs:gap-1 sm:gap-2" : "gap-2 xs:gap-3 sm:gap-4 md:gap-6"} transition-all duration-300`}>
        {items.map((item) => {
          const isActive = item.url === `#${activeId}`;
          return open ? (
            <SidebarLink
              key={item.title}
              link={{ label: item.title, href: item.url, icon: item.icon }}
              onClick={(e) => handleLinkClick(e, item.url)}
              className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm"
              style={{
                position: 'relative',
                backgroundColor: isActive ? (isDark ? 'rgba(30, 58, 138, 0.8)' : 'rgba(219, 234, 254, 0.8)') : 'transparent',
                color: isActive ? (isDark ? '#93c5fd' : '#2563eb') : 'inherit',
                fontWeight: isActive ? 'bold' : 'normal',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                padding: '0.25rem 0.375rem xs:0.375rem xs:0.5rem sm:0.5rem sm:0.75rem',
                ...(isActive && {
                  boxShadow: isDark ? '0 0 10px rgba(147, 197, 253, 0.2)' : '0 0 10px rgba(37, 99, 235, 0.2)',
                  transform: 'scale(1.02)',
                }),
              }}
            />
          ) : (
            <a
              key={item.title}
              href={item.url}
              onClick={(e) => handleLinkClick(e, item.url)}
              className={`flex items-center justify-center px-1 xs:px-2 py-1 xs:py-2 rounded-md transition-all duration-300 relative`}
              style={{
                backgroundColor: isActive ? (isDark ? 'rgba(30, 58, 138, 0.6)' : 'rgba(239, 246, 255, 0.8)') : 'transparent',
                color: isActive ? (isDark ? '#bfdbfe' : '#1e3a8a') : (isDark ? '#d1d5db' : '#1f2937'),
                transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                ...(isActive && {
                  boxShadow: isDark ? '0 0 10px rgba(147, 197, 253, 0.3)' : '0 0 10px rgba(37, 99, 235, 0.3)',
                  transform: 'scale(1.02)',
                }),
              }}
            >
              <div
                className={`transition-all duration-300 ${isActive ? "scale-110" : "scale-100"}`}
                style={{
                  filter: isActive ? `drop-shadow(0 0 3px ${isDark ? 'rgba(191, 219, 254, 0.5)' : 'rgba(37, 99, 235, 0.5)'})` : 'none',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                }}
              >
                <div className="h-4 w-4 xs:h-5 xs:w-5">{item.icon}</div>
              </div>
              {isActive && (
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 xs:w-1.5 xs:h-1.5 rounded-full"
                  style={{
                    backgroundColor: isDark ? '#93c5fd' : '#3b82f6',
                    boxShadow: `0 0 5px ${isDark ? 'rgba(147, 197, 253, 0.8)' : 'rgba(59, 130, 246, 0.8)'}`,
                    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                ></div>
              )}
            </a>
          );
        })}
      </div>
      {/* Status */}
      {open && (
        <div className="mt-2 xs:mt-3 sm:mt-4 md:mt-6 px-1 xs:px-2">
          <div
            className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-mono mb-0.5 xs:mb-1 sm:mb-2"
            style={{ color: isDark ? '#9ca3af' : '#9ca3af' }}
          >
            STATUS
          </div>
          <div className="flex items-center gap-1 xs:gap-2 text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-mono">
            <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
            <span style={{ color: isDark ? '#e5e5e5' : 'inherit' }}>Available for hire</span>
          </div>
        </div>
      )}
      {/* Theme Toggle Button */}
      {open ? (
        <div className="mt-2 xs:mt-4 sm:mt-6 md:mt-10 px-1 xs:px-2 pr-2 xs:pr-3 sm:pr-5">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 transition-colors"
            style={{
              backgroundColor: 'transparent',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? '#374151' : '#e5e7eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {theme === "dark" ? (
              <Sun className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" style={{ color: '#facc15' }} />
            ) : (
              <Moon className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" style={{ color: '#1f2937' }} />
            )}
          </Button>
        </div>
      ) : (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleTheme();
          }}
          className="flex items-center justify-center px-1 xs:px-2 py-1 xs:py-2 rounded-md transition-all duration-200"
          style={{
            backgroundColor: 'transparent',
            color: isDark ? '#d1d5db' : '#1f2937',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
        >
          <div className="transition-transform duration-200">
            {theme === "dark" ? (
              <Sun className="h-4 w-4 xs:h-5 xs:w-5" style={{ color: '#facc15' }} />
            ) : (
              <Moon className="h-4 w-4 xs:h-5 xs:w-5" style={{ color: '#1f2937' }} />
            )}
          </div>
        </a>
      )}
    </SidebarBody>
  );
}