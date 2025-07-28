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
        <div className={`${!open ? 'hidden sm:block' : ''} h-full z-30`}>
          <AppSidebar open={open} setOpen={setOpen} />
        </div>

        {/* Main content with toggle button and scrollable page */}
        <main className="flex-1 relative flex flex-col h-full">
          {/* Toggle button - positioned to align with sidebar icons when closed */}
          <div className={`absolute z-40 ${!open ? 'top-[20px] xs:top-[25px] sm:top-[30px] left-[10px] xs:left-[15px] sm:left-[18px]' : 'top-2 xs:top-3 left-2 xs:left-3'} transition-all duration-300`}>
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
                <IconLayoutSidebarLeftCollapse size={20} className="w-5 h-5 xs:w-6 xs:h-6 sm:w-auto sm:h-auto" />
              ) : (
                <IconLayoutSidebarLeftExpand size={20} className="w-5 h-5 xs:w-6 xs:h-6 sm:w-auto sm:h-auto" />
              )}
            </Button>
          </div>

          {/* Scrollable EntirePage */}
          <div className="flex-1 overflow-y-auto px-0 xs:px-1 sm:px-2 md:px-4">
            <EntirePage />
            {/*Outlet*/}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default MainPage;
