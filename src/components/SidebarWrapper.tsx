"use client";

import { useState, ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Menu, X } from "lucide-react";

interface SidebarWrapperProps {
  children: ReactNode;
}

export function SidebarWrapper({ children }: SidebarWrapperProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="grid min-h-screen grid-cols-app">
      <aside
        className={`border-r border-zinc-200 bg-white transition-all duration-300
          ${sidebarOpen ? "max-w-64" : "max-w-0 overflow-hidden"}
          md:max-w-none md:w-64 md:overflow-visible
        `}
      >
        <Sidebar
          activeMenu={""}
          onSelectMenu={() => {
            throw new Error("Function not implemented.");
          }}
        />
      </aside>

      <main className="px-8 pb-12 pt-8 relative flex flex-col">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mb-4 md:hidden text-zinc-600 hover:text-zinc-900"
          aria-label="Toggle Sidebar"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {children}
      </main>
    </div>
  );
}
