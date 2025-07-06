export interface DocItem {
  title: string;
  description: string;
  type: "guide" | "reference" | "tutorial" | "sdk";
  readTime?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
}

export interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  items: any[];
}

export interface SidebarProps {
  sections: DocSection[];
  activeId: string;
  onSelect: (id: string) => void;
}

export interface SDKInstallerProps {
  copied: string;
  onCopy: (text: string, id: string) => void;
}

export interface QuickStartProps {
  code: string;
  copied: boolean;
  onCopy: () => void;
}

export interface DocCardProps {
  item: DocItem;
}
