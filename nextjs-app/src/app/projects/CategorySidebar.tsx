"use client";

import { useProjects } from "./ProjectsContext";

const categories = ["All", "Game dev", "Industrial", "Personal", "Misc"];

export default function CategorySidebar() {
  const { selectedCategory, setSelectedCategory } = useProjects();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full border-2 text-sm text-left ${
              selectedCategory === category
                ? "border-accent bg-accent text-background font-bold"
                : "border-primary bg-background text-text hover:bg-primary hover:text-background"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
