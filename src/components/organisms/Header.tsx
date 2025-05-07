import React from "react";

import { HButtonList } from '../molecules/ButtonList';
import ThemeSwitch from "../molecules/ThemeSwitch";

const NavigationButtons = [
  { content: "Home", href: "/home" },
  { content: "About", href: "/about" },
  { content: "Projects", href: "/projects" },
  { content: "Contact", href: "/contact" },
  { content: "FAQ", href: "/faq" },
  { content: "Portal", href: "/portal" },
];

export function Header() {
  return (
    <header className="w-full px-6 py-8 bg-background text-text shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Intro or Logo */}
        <h1 className="text-2xl font-bold">Wes Portfolio</h1>

        {/* Navigation */}
        <HButtonList buttons={NavigationButtons} />

        {/* Theme switch */}
        <ThemeSwitch/>
      </div>
    </header>
  );
}