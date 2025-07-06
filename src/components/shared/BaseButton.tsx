"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const baseStyles =
  "rounded-full font-medium px-6 py-2 transition-all duration-300 transform motion-reduce:transform-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white shadow-2xl hover:scale-105 hover:shadow-lg",
  secondary:
    "border border-blue-600 text-blue-600 bg-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-blue-500 hover:to-cyan-500 hover:text-white hover:shadow-xl hover:scale-105",
};

export const BaseButton: React.FC<BaseButtonProps> = ({
  variant = "primary",
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        className,
        disabled && "opacity-50 cursor-not-allowed"
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
