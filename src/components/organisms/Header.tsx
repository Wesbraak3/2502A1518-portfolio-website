import React from "react";

import { HButtonList } from '../molecules/ButtonList';
import ThemeSwitch from "../molecules/ThemeSwitch";

interface HeaderProps {
  buttons?: { content: React.ReactNode; href?: string }[];
}

const defaultButtons = [
  { content: "Home", href: "/" },
  { content: "Projects", href: "/projects" },
  { content: "Contact", href: "/contact" }
];

export function Header({ buttons = defaultButtons }: HeaderProps){  
  return (
    <header className="w-full px-6 py-8 bg-background text-text shadow-md mb-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Intro or Logo */}
        <h1 className="text-2xl font-bold">Wes Portfolio</h1>

        {/* Navigation */}
        <HButtonList buttons={buttons} />

        {/* Theme switch */}
        <ThemeSwitch/>
      </div>
    </header>
  );
}