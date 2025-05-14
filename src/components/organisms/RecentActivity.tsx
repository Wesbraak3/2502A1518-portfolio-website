import React from "react";

import { ProjectCard } from '../molecules/ProjectCard';

interface RecentActivityProp {
    
}

export function RecentActivity({ }: RecentActivityProp) {
  return (
    <section className="flex flex-col items-center space-y-6 w-[80%] mx-auto">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
}