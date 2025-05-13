import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function Text({ children, className = "" }: ParagraphProps) {
  return (
    <p className={`text-base text-text whitespace-normal break-words ${className}`}>
      {children}
    </p>
  );
}