import { cn } from "../../lib/utils";

interface LogoProps {
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-9",
  md: "h-9 sm:h-10 lg:h-11",
  lg: "h-12 lg:h-14",
} as const;

export function Logo({ className, onClick, size = "md" }: LogoProps) {
  return (
    <a
      href="#top"
      onClick={onClick}
      aria-label="РТК — на главную"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <img
        src="/brand/rtk-logo.png"
        alt="РТК"
        width={702}
        height={314}
        className={cn("w-auto", sizes[size])}
        draggable={false}
      />
    </a>
  );
}
