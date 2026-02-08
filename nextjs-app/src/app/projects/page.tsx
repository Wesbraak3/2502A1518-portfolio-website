"use client";

import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/projectsData";
import { useProjects } from "./ProjectsContext";

export default function ProjectsPage() {
  const { selectedCategory } = useProjects();

  const filteredProjects = [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter(project =>
      selectedCategory === "All"
        ? true
        : project.category === selectedCategory
    );

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {filteredProjects.map(project => (
        <ProjectCard
          key={project.id || project.title}
          title={project.title}
          image={project.image}
          description={project.description}
          link={project.link}
        />
      ))}
    </section>
  );
}
