import { Book, Code, Shield, Zap } from "lucide-react";
import { DocItem } from "@/types/doc-types";
import { LucideIcon } from "lucide-react";

export type DocSection = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon; // not JSX
  items: DocItem[];
};

export const docSections: DocSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Everything you need to begin integrating Digital ID Card",
    icon: Zap,
    items: [
      {
        title: "Quick Start Guide",
        description:
          "Get up and running in 5 minutes with our step-by-step guide",
        type: "guide",
        readTime: "5 min",
        difficulty: "beginner",
      },
      {
        title: "Authentication Setup",
        description:
          "Configure API keys and authentication for your application",
        type: "tutorial",
        readTime: "10 min",
        difficulty: "beginner",
      },
      {
        title: "Basic Integration",
        description: "Implement core verification functionality",
        type: "tutorial",
        readTime: "15 min",
        difficulty: "intermediate",
      },
    ],
  },
  {
    id: "api-reference",
    title: "API Reference",
    description: "Complete API documentation with endpoints and examples",
    icon: Book,
    items: [
      {
        title: "Verification API",
        description: "Endpoints for identity verification and validation",
        type: "reference",
        difficulty: "intermediate",
      },
      {
        title: "User Management API",
        description: "Create, update, and manage user profiles and credentials",
        type: "reference",
        difficulty: "intermediate",
      },
      {
        title: "Webhook Events",
        description: "Real-time notifications for verification status changes",
        type: "reference",
        difficulty: "advanced",
      },
    ],
  },
  {
    id: "sdks",
    title: "SDKs & Libraries",
    description: "Official libraries and community tools",
    icon: Code,
    items: [
      {
        title: "JavaScript SDK",
        description: "Official JavaScript/TypeScript SDK for web applications",
        type: "sdk",
        difficulty: "beginner",
      },
      {
        title: "Python SDK",
        description: "Python library for server-side integrations",
        type: "sdk",
        difficulty: "beginner",
      },
      {
        title: "React Components",
        description: "Pre-built React components for quick integration",
        type: "sdk",
        difficulty: "beginner",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Compliance",
    description: "Security best practices and compliance information",
    icon: Shield,
    items: [
      {
        title: "Security Overview",
        description: "Understanding our quantum-secured verification system",
        type: "guide",
        readTime: "8 min",
        difficulty: "intermediate",
      },
      {
        title: "Data Protection",
        description: "How we protect user data and ensure privacy",
        type: "guide",
        readTime: "6 min",
        difficulty: "beginner",
      },
      {
        title: "Compliance Standards",
        description: "GDPR, SOC2, and other compliance certifications",
        type: "reference",
        difficulty: "intermediate",
      },
    ],
  },
];
