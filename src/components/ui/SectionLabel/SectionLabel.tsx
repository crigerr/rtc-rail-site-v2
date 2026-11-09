import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";
import "./SectionLabel.css";

interface SectionLabelProps {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

export function SectionLabel({
  children,
  tone = "light",
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "section-label",
        `section-label--${tone}`,
        className,
      )}
    >
      <span className="section-label__line" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
