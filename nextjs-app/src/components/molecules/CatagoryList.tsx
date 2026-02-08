"use client";

import { CategoryButton } from "@/components/atoms/Button";
import { Category } from "@/context/ProjectsContext";

type Props = {
  categories: Category[];
  selected: Category;
  onSelect: (category: Category) => void;
};

export function CategoryList({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      {categories.map(category => (
        <CategoryButton
          key={category}
          label={category}
          active={selected === category}
          onClick={() => onSelect(category)}
        />
      ))}
    </div>
  );
}
