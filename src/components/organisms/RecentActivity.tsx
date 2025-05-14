import React from "react";

import { Header_1 } from "@/components/atoms/Titles";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/projectsData";

export function RecentActivity() {
  const recentProjects = [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <section className="mb-8">
      
      <Header_1 className="text-center mb-6">Recent Activity</Header_1>
      
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6`}>
        {recentProjects.map((project, index) => (
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