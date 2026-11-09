import { cn } from "../../../lib/utils";
import "./Logo.css";

interface LogoProps {
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, onClick, size = "md" }: LogoProps) {
  return (
    <a
      href="#top"
      onClick={onClick}
      aria-label="РТК — на главную"
      className={cn("logo", `logo--${size}`, className)}
    >
      <img
        src="/brand/rtk-logo.png"
        alt="РТК"
        width={702}
        height={314}
        className="logo__image"
        draggable={false}
      />
    </a>
  );
}
