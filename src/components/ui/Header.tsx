"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { BaseButton } from "../shared/BaseButton";
import "@/style/globals.css";
import { APP_NAME } from "@/constants/app-constants";

const NAV_ITEMS = [
  { label: "Doc", href: "/doc" },
  { label: "Features", href: "/features" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-100 shadow-md">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
            <User className="text-white text-xl" />
          </span>
          <span className="text-2xl font-bold text-blue-500">{APP_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`relative px-3 py-1 rounded-md font-semibold transition-colors duration-200 group ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {label}
                <span
                  className={`absolute left-1/2 -bottom-1 h-0.5 bg-blue-600 transform -translate-x-1/2 transition-all duration-300 ${
                    isActive ? "w-2/3" : "w-0 group-hover:w-2/3"
                  }`}
                />
              </Link>
            );
          })}

          {/* Desktop Call-to-Action */}
          <div className="hidden md:block">
            <BaseButton variant="primary" className="px-6 py-2">
              Get Started
            </BaseButton>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-md transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Mobile Nav Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="relative group text-gray-300 hover:text-white transition-colors duration-200"
            >
              {label}
              <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full" />
            </Link>
          ))}

          {/* Optional: CTA Button for Mobile */}
          <BaseButton
            variant="primary"
            className="px-8 py-3 mt-6"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </BaseButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
