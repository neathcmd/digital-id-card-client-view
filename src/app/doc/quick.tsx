// "use client";

// import React, { useState } from "react";
// import DocLayout from "@/components/layouts/DocLayout";
// import {
//   ChevronRight,
//   Book,
//   Code,
//   Shield,
//   Zap,
//   Download,
//   ExternalLink,
//   Copy,
//   Check,
// } from "lucide-react";

// interface DocSection {
//   id: string;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   items: DocItem[];
// }

// interface DocItem {
//   title: string;
//   description: string;
//   type: "guide" | "reference" | "tutorial" | "sdk";
//   readTime?: string;
//   difficulty?: "beginner" | "intermediate" | "advanced";
// }

// const Doc: React.FC = () => {
//   const [activeSection, setActiveSection] = useState<string>("getting-started");
//   const [copiedCode, setCopiedCode] = useState<string>("");

//   const docSections: DocSection[] = [
//     {
//       id: "getting-started",
//       title: "Getting Started",
//       description: "Everything you need to begin integrating Digital ID Card",
//       icon: <Zap className="w-6 h-6" />,
//       items: [
//         {
//           title: "Quick Start Guide",
//           description:
//             "Get up and running in 5 minutes with our step-by-step guide",
//           type: "guide",
//           readTime: "5 min",
//           difficulty: "beginner",
//         },
//         {
//           title: "Authentication Setup",
//           description:
//             "Configure API keys and authentication for your application",
//           type: "tutorial",
//           readTime: "10 min",
//           difficulty: "beginner",
//         },
//         {
//           title: "Basic Integration",
//           description: "Implement core verification functionality",
//           type: "tutorial",
//           readTime: "15 min",
//           difficulty: "intermediate",
//         },
//       ],
//     },
//     {
//       id: "api-reference",
//       title: "API Reference",
//       description: "Complete API documentation with endpoints and examples",
//       icon: <Book className="w-6 h-6" />,
//       items: [
//         {
//           title: "Verification API",
//           description: "Endpoints for identity verification and validation",
//           type: "reference",
//           difficulty: "intermediate",
//         },
//         {
//           title: "User Management API",
//           description:
//             "Create, update, and manage user profiles and credentials",
//           type: "reference",
//           difficulty: "intermediate",
//         },
//         {
//           title: "Webhook Events",
//           description:
//             "Real-time notifications for verification status changes",
//           type: "reference",
//           difficulty: "advanced",
//         },
//       ],
//     },
//     {
//       id: "sdks",
//       title: "SDKs & Libraries",
//       description: "Official libraries and community tools",
//       icon: <Code className="w-6 h-6" />,
//       items: [
//         {
//           title: "JavaScript SDK",
//           description:
//             "Official JavaScript/TypeScript SDK for web applications",
//           type: "sdk",
//           difficulty: "beginner",
//         },
//         {
//           title: "Python SDK",
//           description: "Python library for server-side integrations",
//           type: "sdk",
//           difficulty: "beginner",
//         },
//         {
//           title: "React Components",
//           description: "Pre-built React components for quick integration",
//           type: "sdk",
//           difficulty: "beginner",
//         },
//       ],
//     },
//     {
//       id: "security",
//       title: "Security & Compliance",
//       description: "Security best practices and compliance information",
//       icon: <Shield className="w-6 h-6" />,
//       items: [
//         {
//           title: "Security Overview",
//           description: "Understanding our quantum-secured verification system",
//           type: "guide",
//           readTime: "8 min",
//           difficulty: "intermediate",
//         },
//         {
//           title: "Data Protection",
//           description: "How we protect user data and ensure privacy",
//           type: "guide",
//           readTime: "6 min",
//           difficulty: "beginner",
//         },
//         {
//           title: "Compliance Standards",
//           description: "GDPR, SOC2, and other compliance certifications",
//           type: "reference",
//           difficulty: "intermediate",
//         },
//       ],
//     },
//   ];

//   const codeExample = `import { DigitalIDCard } from '@digitalid/sdk';

// const client = new DigitalIDCard({
//   apiKey: 'your_api_key_here',
//   environment: 'production' // or 'sandbox'
// });

// // Verify an identity
// const verification = await client.verify({
//   documentType: 'passport',
//   documentImage: imageFile,
//   selfieImage: selfieFile
// });

// console.log(verification.status); // 'verified' | 'rejected' | 'pending'`;

//   const copyToClipboard = (text: string, id: string) => {
//     navigator.clipboard.writeText(text);
//     setCopiedCode(id);
//     setTimeout(() => setCopiedCode(""), 2000);
//   };

//   const getDifficultyColor = (difficulty?: string) => {
//     switch (difficulty) {
//       case "beginner":
//         return "bg-green-100 text-green-800";
//       case "intermediate":
//         return "bg-yellow-100 text-yellow-800";
//       case "advanced":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case "guide":
//         return "📖";
//       case "reference":
//         return "📋";
//       case "tutorial":
//         return "🎯";
//       case "sdk":
//         return "📦";
//       default:
//         return "📄";
//     }
//   };

//   return (
//     <DocLayout>
//       <div className="min-h-screen bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* Sidebar */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Documentation
//                 </h3>
//                 <nav className="space-y-2">
//                   {docSections.map((section) => (
//                     <button
//                       key={section.id}
//                       onClick={() => setActiveSection(section.id)}
//                       className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
//                         activeSection === section.id
//                           ? "bg-blue-50 text-blue-700 border border-blue-200"
//                           : "text-gray-600 hover:bg-gray-50"
//                       }`}
//                     >
//                       {section.icon}
//                       <span className="font-medium">{section.title}</span>
//                     </button>
//                   ))}
//                 </nav>
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="lg:col-span-3">
//               {/* Header */}
//               <div className="mb-8">
//                 <h1 className="text-4xl font-bold text-gray-900 mb-4">
//                   {docSections.find((s) => s.id === activeSection)?.title}
//                 </h1>
//                 <p className="text-xl text-gray-600">
//                   {docSections.find((s) => s.id === activeSection)?.description}
//                 </p>
//               </div>

//               {/* Quick Start Code Example */}
//               {activeSection === "getting-started" && (
//                 <div className="bg-gray-900 rounded-lg p-6 mb-8">
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-lg font-semibold text-white">
//                       Quick Start
//                     </h3>
//                     <button
//                       onClick={() => copyToClipboard(codeExample, "quickstart")}
//                       className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
//                     >
//                       {copiedCode === "quickstart" ? (
//                         <Check className="w-4 h-4" />
//                       ) : (
//                         <Copy className="w-4 h-4" />
//                       )}
//                       <span className="text-sm">
//                         {copiedCode === "quickstart" ? "Copied!" : "Copy"}
//                       </span>
//                     </button>
//                   </div>
//                   <pre className="text-sm text-gray-300 overflow-x-auto">
//                     <code>{codeExample}</code>
//                   </pre>
//                 </div>
//               )}

//               {/* Documentation Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {docSections
//                   .find((s) => s.id === activeSection)
//                   ?.items.map((item, index) => (
//                     <div
//                       key={index}
//                       className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer group"
//                     >
//                       <div className="flex items-start justify-between mb-3">
//                         <div className="flex items-center space-x-3">
//                           <span className="text-2xl">
//                             {getTypeIcon(item.type)}
//                           </span>
//                           <div>
//                             <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
//                               {item.title}
//                             </h3>
//                             {item.difficulty && (
//                               <span
//                                 className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getDifficultyColor(
//                                   item.difficulty
//                                 )}`}
//                               >
//                                 {item.difficulty}
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                         <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
//                       </div>
//                       <p className="text-gray-600 mb-3">{item.description}</p>
//                       {item.readTime && (
//                         <div className="flex items-center text-sm text-gray-500">
//                           <span>📖 {item.readTime} read</span>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//               </div>

//               {/* SDK Downloads */}
//               {activeSection === "sdks" && (
//                 <div className="mt-8 bg-white rounded-lg border p-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                     Installation
//                   </h3>
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-medium text-gray-900 mb-2">npm</h4>
//                       <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between">
//                         <code className="text-sm text-gray-800">
//                           npm install @digitalid/sdk
//                         </code>
//                         <button
//                           onClick={() =>
//                             copyToClipboard("npm install @digitalid/sdk", "npm")
//                           }
//                           className="text-gray-500 hover:text-gray-700"
//                         >
//                           {copiedCode === "npm" ? (
//                             <Check className="w-4 h-4" />
//                           ) : (
//                             <Copy className="w-4 h-4" />
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-gray-900 mb-2">yarn</h4>
//                       <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between">
//                         <code className="text-sm text-gray-800">
//                           yarn add @digitalid/sdk
//                         </code>
//                         <button
//                           onClick={() =>
//                             copyToClipboard("yarn add @digitalid/sdk", "yarn")
//                           }
//                           className="text-gray-500 hover:text-gray-700"
//                         >
//                           {copiedCode === "yarn" ? (
//                             <Check className="w-4 h-4" />
//                           ) : (
//                             <Copy className="w-4 h-4" />
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Stats for Security Section */}
//               {activeSection === "security" && (
//                 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="bg-white rounded-lg border p-6 text-center">
//                     <div className="text-3xl font-bold text-blue-600 mb-2">
//                       256-bit
//                     </div>
//                     <div className="text-gray-600">Quantum Encryption</div>
//                   </div>
//                   <div className="bg-white rounded-lg border p-6 text-center">
//                     <div className="text-3xl font-bold text-green-600 mb-2">
//                       99.9%
//                     </div>
//                     <div className="text-gray-600">Uptime SLA</div>
//                   </div>
//                   <div className="bg-white rounded-lg border p-6 text-center">
//                     <div className="text-3xl font-bold text-purple-600 mb-2">
//                       SOC 2
//                     </div>
//                     <div className="text-gray-600">Type II Certified</div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </DocLayout>
//   );
// };

// export default Doc;
