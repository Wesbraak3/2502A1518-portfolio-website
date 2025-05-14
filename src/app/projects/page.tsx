import React from "react";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/projectsData";

export default function ProjectsPage() {
  // Sort the projects by date in descending order
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="w-[80%] max-w-full mx-auto mb-8">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {sortedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}