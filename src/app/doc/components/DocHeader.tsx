"use client";

import React from "react";
import { docSections } from "@/constants/doc-constants";

type DocHeaderProps = {
  activeSection: string;
};

const DocHeader: React.FC<DocHeaderProps> = ({ activeSection }) => {
  const current = docSections.find((section) => section.id === activeSection);

  if (!current) return null;

  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{current.title}</h1>
      <p className="text-xl text-gray-600">{current.description}</p>
    </div>
  );
};

export default DocHeader;
