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

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useProjects();

  return (
        <div className="md:flex justify-center">
          <CategoryList
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
  );
}
