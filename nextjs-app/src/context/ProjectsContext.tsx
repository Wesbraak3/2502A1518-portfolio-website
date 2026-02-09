"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Category =
  | "All"
  | "Game dev"
  | "Industrial"
  | "Personal"
  | "Misc";

type ProjectsContextType = {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
};

const ProjectsContext = createContext<ProjectsContextType | null>(null);

export function ProjectsProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("All");

  return (
    <ProjectsContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error(
      "useProjects must be used within a ProjectsProvider"
    );
  }
  return context;
}
