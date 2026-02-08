import { ProjectsProvider } from "./ProjectsContext";
import CategorySidebar from "./CategorySidebar";
import { ReactNode } from "react";

import { Header_1 } from "@/components/atoms/Titles";
export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <ProjectsProvider>
      <Header_1>Projects</Header_1>
      <div className="flex h-screen">
        <aside className="w-64 shrink-0 px-4">
          <div className="sticky top-24">
            <CategorySidebar />
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto px-6">
          {children}
        </main>
      </div>
    </ProjectsProvider>
  );
}