"use client";

import { Header_1 } from "@/components/atoms/Titles";
import { ProjectsGrid } from "@/components/organisms/ProjectsGrid";
import CategoryFilter from "@/components/organisms/CategoryFilter";
import { ProjectsProvider } from "@/context/ProjectsContext";

export default function ProjectsPage() {
  return ( 
    <div className="mx-auto max-w-7xl px-4 pt-6 space-y-8">
      <Header_1 className="text-center">Projects</Header_1>

      <ProjectsProvider>
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit lg:w-64">
            <CategoryFilter />
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <ProjectsGrid />
          </main>
        </div>
      </ProjectsProvider>
    </div>
  );
}
