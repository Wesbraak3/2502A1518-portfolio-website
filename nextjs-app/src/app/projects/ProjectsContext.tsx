"use client";

import { createContext, useContext, useState } from "react";

type ProjectsContextType = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const ProjectsContext = createContext<ProjectsContextType | null>(null);

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <ProjectsContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within ProjectsProvider");
  }
  return context;
}
