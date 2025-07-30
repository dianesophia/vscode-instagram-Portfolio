import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  IconLayoutSidebarLeftExpand,
  IconLayoutSidebarLeftCollapse,
  IconMenu2
} from "@tabler/icons-react";
import EntirePage from "./EntirePage";
import { useTheme } from "@/context/ThemeContext";

export function MainPage() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SidebarProvider open={open} setOpen={setOpen}>
      <div
        className="flex h-screen overflow-hidden font-inter"
        style={{ backgroundColor: isDark ? '#2d333b' : 'white' }}
      >
        {/* ✅ Hide sidebar on small screens, show only on md+ */}
        <div className="hidden md:block">
          <AppSidebar open={open} />
        </div>

        <main className="flex-1 relative flex flex-col h-full overflow-hidden">
          {/* You can still use a toggle button on larger screens if needed */}
          <div className={`absolute z-10 hidden md:block ${!open ? 'top-[30px] left-[18px]' : 'top-3 left-3'} transition-all duration-300`}>
            {/* Sidebar toggle button (optional) */}
            {/* <Button ...>...</Button> */}
          </div>

          {/* Entire page content */}
          <div className={`flex-1 overflow-y-auto ${open ? 'md:pl-[250px]' : 'md:pl-[60px]'} transition-all duration-300`}>
            <EntirePage />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default MainPage;
