'use client'

import React, { useState } from "react";

import { Header_1 } from "@/components/atoms/Titles"

import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/projectsData";

const categories = ["All", "Game dev", "Industrial", "Home", "Misc"]; 

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter(project =>
      selectedCategory === "All" ? true : project.category === selectedCategory
    );

  return (
    <div className="w-[80%] mx-auto">
      {/* Header and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <Header_1 className="text-center md:text-left">Projects</Header_1>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border-2 text-sm ${
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

      {/* Projects Grid */}
      <section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id || project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}