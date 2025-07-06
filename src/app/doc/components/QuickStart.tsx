// import React, {useState} from "react";
// import { Copy, Check } from "lucide-react";
// import { QuickStartProps } from "@/types/doc-types";

// const QuickStart: React.FC<QuickStartProps> = ({ code, copied, onCopy }) => (
//       const [copiedCode, setCopiedCode] = useState<string>("");

//         const copyToClipboard = (text: string, id: string) => {
//     navigator.clipboard.writeText(text);
//     setCopiedCode(id);
//     setTimeout(() => setCopiedCode(""), 2000);
//   };

//   <div className="bg-gray-900 rounded-lg p-6 mb-8">
//     <div className="flex items-center justify-between mb-4">
//       <h3 className="text-lg font-semibold text-white">Quick Start</h3>
//       <button
//         onClick={onCopy}
//         className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
//       >
//         {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
//         <span className="text-sm">{copied ? "Copied!" : "Copy"}</span>
//       </button>
//     </div>
//     <pre className="text-sm text-gray-300 overflow-x-auto">
//       <code>{code}</code>
//     </pre>
//   </div>
// );

// export default QuickStart;

// import React, { useState } from "react";
// import { Copy, Check } from "lucide-react";
// import { QuickStartProps } from "@/types/doc-types";

// const QuickStart: React.FC<QuickStartProps> = ({}) => {
//   const [activeSection, setActiveSection] = useState<string>("getting-started");
//   return (
// <div className="bg-gray-900 rounded-lg p-6 mb-8">
//   <div className="flex items-center justify-between mb-4">
//     <h3 className="text-lg font-semibold text-white">Quick Start</h3>
//     <button
//       onClick={onCopy}
//       className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
//     >
//       {copied ? (
//         <Check className="w-4 h-4" />
//       ) : (
//         <Copy className="w-4 h-4" />
//       )}
//       <span className="text-sm">{copied ? "Copied!" : "Copy"}</span>
//     </button>
//   </div>
//   <pre className="text-sm text-gray-300 overflow-x-auto">
//     <code>{code}</code>
//   </pre>
// </div>
//     <div>
//       {activeSection === "getting-started" && (
//         <div className="bg-gray-900 rounded-lg p-6 mb-8">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold text-white">Quick Start</h3>
//             <button
//               onClick={() => copyToClipboard(codeExample, "quickstart")}
//               className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
//             >
//               {copiedCode === "quickstart" ? (
//                 <Check className="w-4 h-4" />
//               ) : (
//                 <Copy className="w-4 h-4" />
//               )}
//               <span className="text-sm">
//                 {copiedCode === "quickstart" ? "Copied!" : "Copy"}
//               </span>
//             </button>
//           </div>
//           <pre className="text-sm text-gray-300 overflow-x-auto">
//             <code>{codeExample}</code>
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuickStart;
