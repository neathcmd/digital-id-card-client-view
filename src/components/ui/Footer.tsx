"use client";

import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { APP_NAME, CURRENT_YEAR } from "@/constants/app-constants";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Support Center", href: "/support" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/digitalid", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/digitalid", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/digitalid",
    label: "LinkedIn",
  },
];

const CONTACT_ITEMS = [
  {
    icon: Mail,
    text: "support@digitalid.com",
    href: "mailto:support@digitalid.com",
  },
  { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, text: "San Francisco, CA", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative z-10 w-full  bg-gray-100 shadow-md ">
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Shield className="h-10 w-10 text-purple-400 drop-shadow-lg" />
                <div className="absolute inset-0 h-10 w-10 bg-purple-400/20 rounded-full blur-xl" />
              </div>
              <span className="text-3xl font-bold text-blue-500">
                {APP_NAME}
              </span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-md">
              Secure, seamless digital identity solutions for the modern world.
              Protecting your privacy while simplifying your digital life.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300"
                >
                  <Icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-blue-500 mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500" />
            </h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-blue-500 mb-6 relative">
              Get in Touch
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500" />
            </h3>
            <ul className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-3 group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-white/5 rounded-lg group-hover:bg-blue-600/10 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {CURRENT_YEAR} {APP_NAME}. All rights reserved WMAD Team.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>All systems operational</span>
              </span>
              <span>Version 2.1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
