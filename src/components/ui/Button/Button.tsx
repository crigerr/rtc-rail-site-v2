import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../../lib/utils";
import "./Button.css";

export type ButtonVariant = "primary" | "outline" | "dark" | "light" | "white";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
