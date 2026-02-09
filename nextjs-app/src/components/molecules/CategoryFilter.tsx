"use client";

import { useProjects, Category } from "@/context/ProjectsContext";
import {
  Gamepad2,
  Factory,
  User,
  Shapes,
  LayoutGrid,
} from "lucide-react";

const categories: { label: Category; icon: React.ReactNode }[] = [
  { label: "All", icon: <LayoutGrid size={20} /> },
  { label: "Game dev", icon: <Gamepad2 size={20} /> },
  { label: "Industrial", icon: <Factory size={20} /> },
  { label: "Personal", icon: <User size={20} /> },
  { label: "Misc", icon: <Shapes size={20} /> },
];

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useProjects();

  return (
    <div className="flex gap-2 md:flex-col md:items-start justify-center">
      {categories.map(({ label, icon }) => {
        const isActive = selectedCategory === label;

        return (
          <button
            key={label}
            onClick={() => setSelectedCategory(label)}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition border-2 border-primary justify-center 
              ${isActive ? "text-background bg-accent font-bold" : "bg-background font-medium hover:bg-primary hover:text-background"}`}
            title={label} 
          >
            {/* Icon: always visible */}
            {icon}

            {/* Label: hidden on mobile, shown on desktop */}
            <span className="hidden md:inline w-32">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
