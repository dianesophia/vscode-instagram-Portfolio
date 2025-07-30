import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  IconLayoutSidebarLeftExpand,
  IconLayoutSidebarLeftCollapse,
  IconMenu2 // Import for mobile open button
} from "@tabler/icons-react";
import EntirePage from "./EntirePage";
import { useTheme } from "@/context/ThemeContext";

export function MainPage() {
  // `open` state controls whether the sidebar is expanded (desktop) or visible (mobile overlay)
  // Default to true for desktop, but the MobileSidebar component handles its initial hidden state
  const [open, setOpen] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SidebarProvider open={open} setOpen={setOpen}>
      <div
        className="flex h-screen overflow-hidden font-inter" // Added font-inter for consistency
        style={{ backgroundColor: isDark ? '#2d333b' : 'white' }} // Match EntirePage background color
      >
        {/* AppSidebar component, which internally handles desktop vs. mobile rendering */}
        {/* The SidebarBody within AppSidebar manages the `hidden md:flex` and `md:hidden` classes */}
        <AppSidebar open={open} />

        {/* Main content area, takes up remaining space */}
        <main className="flex-1 relative flex flex-col h-full overflow-hidden">
          {/* Desktop Sidebar Toggle Button (visible only on medium screens and up) */}
          <div className={`absolute z-10 hidden md:block ${!open ? 'top-[30px] left-[18px]' : 'top-3 left-3'} transition-all duration-300`}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen((prev) => !prev)}
              className="p-0 border-none outline-none focus:outline-none ring-0 focus:ring-0 shadow-none"
              style={{
                backgroundColor: 'transparent',
                color: isDark ? '#e5e7eb' : '#1f2937', // text color based on theme
              }}
            >
              {open ? (
                <IconLayoutSidebarLeftCollapse size={22} />
              ) : (
                <IconLayoutSidebarLeftExpand size={22} />
              )}
            </Button>
          </div>

          {/* Mobile Sidebar Open Button (visible only on small screens) */}
          <div className="absolute z-10 top-3 left-3 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(true)} // Set open to true to show mobile sidebar
              className="p-0 border-none outline-none focus:outline-none ring-0 focus:ring-0 shadow-none"
              style={{
                backgroundColor: 'transparent',
                color: isDark ? '#e5e7eb' : '#1f2937',
              }}
            >
              <IconMenu2 size={22} /> {/* Menu icon for opening sidebar */}
            </Button>
          </div>

          {/* Scrollable EntirePage content */}
          {/* Adjust padding-left based on sidebar open state for desktop.
              On mobile, the sidebar overlays, so no padding adjustment is needed here. */}
          <div className={`flex-1 overflow-y-auto ${open ? 'md:pl-[250px]' : 'md:pl-[60px]'} transition-all duration-300`}>
            <EntirePage />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default MainPage;
