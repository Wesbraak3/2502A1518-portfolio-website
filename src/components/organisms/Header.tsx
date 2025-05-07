import React from "react";

import { HButtonList } from '../molecules/ButtonList';
import ThemeSwitch from "../molecules/ThemeSwitch";

const NavigationButtons = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Portal", href: "/portal" },
];

export function Header() {
  return (
    <header className="w-full px-6 py-4 bg-background text-text shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Intro or Logo */}
        <h1 className="text-2xl font-bold">Wes Portfolio</h1>

        {/* Navigation */}
        <HButtonList buttons={NavigationButtons} />
        <ThemeSwitch/>
      </div>
    </header>
  );
}