import React from "react";

interface TextProps {
  children: React.ReactNode;

  className?: string;
}

export function Text({ children, className = "" }: TextProps) {
  return (
    <p className={`text-base text-text whitespace-normal break-words ${className}`}>
      {children}
    </p>
  );
}