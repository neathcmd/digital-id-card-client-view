"use client";

import React from "react";
import { SidebarProps } from "@/types/doc-types";

const Sidebar: React.FC<SidebarProps> = ({ sections, activeId, onSelect }) => {
  return (
    <aside className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Documentation
      </h3>
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
              activeId === section.id
                ? "bg-blue-50 text-blue-700 border border-blue-200"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {<section.icon />}
            <span className="font-medium">{section.title}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
