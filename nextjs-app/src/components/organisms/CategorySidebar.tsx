"use client";

import { CategoryList } from "@/components/molecules/CatagoryList";
import { useProjects, Category } from "@/context/ProjectsContext";

const categories: Category[] = [
  "All",
  "Game dev",
  "Industrial",
  "Personal",
  "Misc",
];

export default function CategorySidebar() {
  const { selectedCategory, setSelectedCategory } = useProjects();

  return (
    <aside className="space-y-6">
      <CategoryList
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
    </aside>
  );
}
