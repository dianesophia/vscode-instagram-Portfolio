import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  IconLayoutSidebarLeftExpand,
  IconLayoutSidebarLeftCollapse
} from "@tabler/icons-react";
import EntirePage from "./EntirePage";
import { useTheme } from "@/context/ThemeContext";

export function MainPage() {
  const [open, setOpen] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SidebarProvider open={open} setOpen={setOpen}>
      <div
        className="flex h-screen overflow-hidden"
        style={{ backgroundColor: isDark ? '#2d333b' : 'white' }} // Match EntirePage background color
      >
        {/* Sidebar (fixed) */}
        <div className={`${!open ? 'hidden md:block' : ''} h-full`}>
          <AppSidebar open={open} setOpen={setOpen} />
        </div>

        {/* Main content with toggle button and scrollable page */}
        <main className="flex-1 relative flex flex-col h-full">
          {/* Toggle button - positioned to align with sidebar icons when closed */}
          <div className={`absolute z-10 ${!open ? 'top-[30px] left-[18px]' : 'top-3 left-3'} transition-all duration-300`}>
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

          {/* Scrollable EntirePage */}
          <div className="flex-1 overflow-y-auto px-2 sm:px-4">
            <EntirePage />
            {/*Outlet*/}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default MainPage;
