import React from "react";

import { HeaderButtons } from '../molecules/HeaderButtons';
import ThemeSwitch from "../molecules/ThemeSwitch";

interface HeaderProps {
  buttons?: { content: React.ReactNode; href?: string }[];
}

export function Header({
  buttons = [
    { content: "Home", href: "/" },
    { content: "About", href: "/about" },
    { content: "Projects", href: "/projects" },
    { content: "Contact", href: "/contact" }
  ]
}: HeaderProps) {
  return (
    <header className="w-full px-6 py-8 bg-background text-text shadow-md mb-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Logo or site title */}
        <h1 className="text-2xl font-bold">Wes Portfolio</h1>

        {/* Navigation buttons */}
        <HeaderButtons buttons={buttons} />

        {/* Dark/light theme toggle */}
        <ThemeSwitch />
      </div>
    </header>
  );
}
