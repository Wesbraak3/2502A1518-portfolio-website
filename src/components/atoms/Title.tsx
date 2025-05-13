import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
}

const sizeMap: Record<NonNullable<TitleProps["size"]>, string> = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-4xl",
  xxl: "text-5xl"
};

export function Title({ children, className = "", size = "md" }: TitleProps) {
  const sizeClass = sizeMap[size];

  return (
    <h1 className={`font-bold text-text ${sizeClass} ${className}`}>
      {children}
    </h1>
  );
}