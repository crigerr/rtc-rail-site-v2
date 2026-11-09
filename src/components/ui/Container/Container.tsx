import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";
import "./Container.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("container", className)}>
      {children}
    </div>
  );
}
