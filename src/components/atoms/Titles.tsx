import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export function Header_1({ children, className = "" }: TitleProps) {
  return (
    <h1 className={`${className} font-bold text-text text-4xl`}>
      {children}
    </h1>
  );
}

export function Header_2({ children, className = "" }: TitleProps) {
  return (
    <h2 className={`${className} font-bold text-text text-3xl`}>
      {children}
    </h2>
  );
}

export function Header_3({ children, className = "" }: TitleProps) {
  return (
    <h2 className={`${className} font-bold text-text text-2xl`}>
      {children}
    </h2>
  );
}