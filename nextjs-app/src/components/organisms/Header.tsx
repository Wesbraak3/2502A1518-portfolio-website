'use client'

import React, { useState } from "react";

import { HeaderButtons } from '../molecules/HeaderButtons';
import ThemeSwitch from "../molecules/ThemeSwitch";
import { LinkedIn, Github } from '../atoms/Socials';

interface HeaderProps {
  buttons?: { content: React.ReactNode; href?: string }[];
}

export function Header({
  buttons = []
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 bg-background text-text shadow-md">
      <div className="max-w-7xl mx-auto w-full">
        {/* Desktop layout */}
        <div className="hidden sm:flex items-center justify-between w-full">
          {/* Logo */}
          <h1 className="text-2xl font-bold flex-shrink-0">Wes Portfolio</h1>

          {/* Centered navigation */}
          <div className="flex-grow flex justify-center">
            <HeaderButtons buttons={buttons} />
          </div>

          {/* Right-side actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <LinkedIn href="https://www.linkedin.com/in/wes-te-braak" />
            <Github href="https://github.com/Wesbraak3" />

            <div className="w-px h-6 bg-text/30" />

            <ThemeSwitch />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex sm:hidden items-center justify-between w-full">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Wes Portfolio</h1>

          <div className="flex items-center gap-4">
            <LinkedIn href="https://www.linkedin.com/in/wes-te-braak" />
            <Github href="https://github.com/Wesbraak3" />

            <ThemeSwitch />

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
            >
              <span className={`block h-0.5 w-full bg-text transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block h-0.5 w-full bg-text transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`block h-0.5 w-full bg-text transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <nav className="sm:hidden mt-4 flex flex-col gap-3 px-2">
            <HeaderButtons buttons={buttons} />
          </nav>
        )}
      </div>
    </header>
  );
}
