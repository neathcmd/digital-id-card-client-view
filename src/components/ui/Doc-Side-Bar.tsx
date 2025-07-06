// "use client";

// import React from "react";
// import { SidebarProps } from "@/types/doc-types";

// const Sidebar: React.FC<SidebarProps> = ({ sections, activeId, onSelect }) => {
//   return (
//     <aside className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
//       <h3 className="text-lg font-semibold text-gray-900 mb-4">
//         Documentation
//       </h3>
//       <nav className="space-y-2">
//         {sections.map((section) => (
//           <button
//             key={section.id}
//             onClick={() => onSelect(section.id)}
//             className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
//               activeId === section.id
//                 ? "bg-blue-50 text-blue-700 border border-blue-200"
//                 : "text-gray-600 hover:bg-gray-50"
//             }`}
//           >
//             {<section.icon />}
//             <span className="font-medium">{section.title}</span>
//           </button>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Introduction", link: "/doc" },
  { label: "Feature", link: "/feature" },
  { label: "Security", link: "/security" },
];

const DocSidebar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleMobileSidebar = () => setMobileOpen((prev) => !prev);
  const toggleCollapse = () => setCollapsed((prev) => !prev);

  const isActiveLink = (link: string) => pathname === link;

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={toggleMobileSidebar}
        aria-label="Toggle Sidebar"
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg shadow-lg lg:hidden hover:bg-gray-700 transition-colors duration-300"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm animate-fade-in lg:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-white border-r border-gray-200 z-40
          shadow-lg transition-all duration-500 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          ${isCollapsed ? "w-16" : "w-64"}
          lg:translate-x-0 lg:static lg:shadow-none
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div
            className={`text-xl font-bold text-gray-800 transition-opacity duration-300 ${
              isCollapsed ? "opacity-0 w-0" : "opacity-100"
            }`}
          >
            Documentation
          </div>
          {/* <button
            onClick={toggleCollapse}
            aria-label="Toggle Collapse"
            className="hidden lg:flex p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button> */}
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 relative">
          {NAV_ITEMS.map(({ label, link }) => {
            const active = isActiveLink(link);

            return (
              <Link
                key={link}
                href={link}
                className={`
                  group relative flex items-center gap-3 p-3 rounded-lg
                  transition-all duration-300 ease-in-out
                  ${
                    active
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }
                  ${isCollapsed ? "justify-center" : ""}
                `}
              >
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    isCollapsed
                      ? "opacity-0 scale-95 w-0"
                      : "opacity-100 scale-100"
                  }`}
                >
                  {label}
                </span>

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default DocSidebar;
