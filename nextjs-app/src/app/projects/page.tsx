"use client";

import { Header_1 } from "@/components/atoms/Titles";
import { ProjectsGrid } from "@/components/organisms/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <div className="w-[80%] mx-auto space-y-6 text-center">
      <Header_1>Projects</Header_1>
      <ProjectsGrid />
    </div>
  );
}
