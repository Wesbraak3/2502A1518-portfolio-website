import { ReactNode } from "react";
import { ProjectsProvider } from "@/context/ProjectsContext";
import CategorySidebar from "@/components/organisms/CategorySidebar";

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ProjectsProvider>
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
