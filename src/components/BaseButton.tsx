import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

const variantClasses = {
  primary:
    "bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl motion-reduce:transform-none cursor-pointer",

  secondary:
    "text-blue-600 px-6 py-2 rounded-full font-medium border border-blue-600" +
    "bg-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-blue-500 hover:to-cyan-500 hover:text-white " +
    "transition-all duration-300 transform hover:scale-105 hover:shadow-xl " +
    "motion-reduce:transform-none cursor-pointer",
};

export const BaseButton: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  const baseClass = variantClasses[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClass}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};
