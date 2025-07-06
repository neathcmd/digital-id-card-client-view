// const DocGrid = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {docSections
//         .find((s) => s.id === activeSection)
//         ?.items.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer group"
//           >
//             <div className="flex items-start justify-between mb-3">
//               <div className="flex items-center space-x-3">
//                 <span className="text-2xl">{getTypeIcon(item.type)}</span>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
//                     {item.title}
//                   </h3>
//                   {item.difficulty && (
//                     <span
//                       className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getDifficultyColor(
//                         item.difficulty
//                       )}`}
//                     >
//                       {item.difficulty}
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
//             </div>
//             <p className="text-gray-600 mb-3">{item.description}</p>
//             {item.readTime && (
//               <div className="flex items-center text-sm text-gray-500">
//                 <span>📖 {item.readTime} read</span>
//               </div>
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };
