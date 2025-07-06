export const getDifficultyColor = (level?: string) => {
  const colors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800",
  };
  return colors[level as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

export const getTypeIcon = (type: string) => {
  const icons = {
    guide: "📖",
    reference: "📋",
    tutorial: "🎯",
    sdk: "📦",
  };
  return icons[type as keyof typeof icons] || "📄";
};
