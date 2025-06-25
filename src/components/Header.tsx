import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur shadow-md">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero" className="text-2xl font-bold tracking-tight">Rabani</a>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-blue-400 hover:underline transition-colors duration-200 rounded-md px-2 py-1"
            >
              {link.name}
            </a>
          ))}
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`$ {
              darkMode ? "bg-gray-700" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
          >
            <span className="sr-only">Toggle dark mode</span>
            <span className="inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform" />
            {darkMode ? (
              <MoonIcon className="w-5 h-5 text-yellow-400 absolute right-1" />
            ) : (
              <SunIcon className="w-5 h-5 text-yellow-500 absolute left-1" />
            )}
          </Switch>
        </div>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 px-4 pb-4 shadow">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium hover:text-primary transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`$ {
                darkMode ? "bg-gray-700" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span className="sr-only">Toggle dark mode</span>
              <span className="inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform" />
              {darkMode ? (
                <MoonIcon className="w-5 h-5 text-yellow-400 absolute right-1" />
              ) : (
                <SunIcon className="w-5 h-5 text-yellow-500 absolute left-1" />
              )}
            </Switch>
          </div>
        </div>
      )}
    </header>
  );
} 