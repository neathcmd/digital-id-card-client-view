import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import "../styles/globals.css";
import Link from "next/link";
import { BaseButton } from "./BaseButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItems = [
    { label: "Doc", href: "/Doc/doc" },
    { label: "Features", href: "/features" },
    { label: "Security", href: "/security" },
    { label: "Pricing", href: "/pricing" },
  ];

  const Logo = {
    label: "Digital ID Card",
    src: "",
    alt: "Digital ID Card Logo",
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
      <nav className="flex items-center justify-between h-16 px-4 md:px-8">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
              <User className="text-white text-xl" />
            </span>

            <span className="text-2xl font-bold text-blue-500">
              {Logo.label}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 ml-8">
            {NavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative group font-bold text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <BaseButton variant="primary" className="px-6 py-2">
            Get Started
          </BaseButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Slide-In Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-gray-900/95 backdrop-blur-md z-40 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button
            className="text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          {NavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="relative group text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item.label}
              <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full" />
            </a>
          ))}
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
