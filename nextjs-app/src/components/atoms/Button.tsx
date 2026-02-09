// components/atoms/Button.tsx

"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  label: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  href,
  type = "button",
  onClick,
  className,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 select-none font-bold text-text rounded";
  const combinedClasses = `${baseClasses} ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {label}
    </button>
  );
};


type Props = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export function CategoryButton({
  label,
  active,
  onClick,
}: Props) {
  return (
    <button
      aria-pressed={active}
      onClick={onClick}
      className={`px-4 py-2 rounded-full border-2 text-sm text-left transition-colors
        ${
          active
            ? "border-accent bg-accent text-background font-bold"
            : "border-primary bg-background text-text hover:bg-primary hover:text-background"
        }`}
    >
      {label}
    </button>
  );
}