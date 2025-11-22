import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
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
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-black/20 border-b border-white/20 shadow-2xl">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero" className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-cyan-600 to-purple-600 dark:from-white dark:via-cyan-200 dark:to-purple-200 bg-clip-text text-transparent drop-shadow-lg">TALHA ISHAQ</a>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-900 dark:text-white/90 hover:text-cyan-600 dark:hover:text-cyan-300 hover:underline transition-colors duration-200 rounded-md px-2 py-1 drop-shadow-md"
            >
              {link.name}
            </a>
          ))}
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
          >
            <span className="sr-only">Toggle dark mode</span>
            <span className={`inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform ${
              darkMode ? "translate-x-6" : "translate-x-1"
            }`} />
            {darkMode ? (
              <MoonIcon className="w-5 h-5 text-yellow-400 absolute right-1" />
            ) : (
              <SunIcon className="w-5 h-5 text-yellow-500 absolute left-1" />
            )}
          </Switch>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
          >
            <span className="sr-only">Toggle dark mode</span>
            <span className={`inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform ${
              darkMode ? "translate-x-6" : "translate-x-1"
            }`} />
          </Switch>
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XMarkIcon className="w-6 h-6 text-gray-900 dark:text-white" /> : <Bars3Icon className="w-6 h-6 text-gray-900 dark:text-white" />}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden backdrop-blur-xl bg-white/95 dark:bg-gray-950/95 px-4 pb-4 shadow-2xl border-t border-gray-200 dark:border-white/20"
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
} 