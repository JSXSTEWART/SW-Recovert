import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "accent";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants: Record<string, string> = {
    default:
      "bg-[#1e3a5f] text-white",
    secondary:
      "bg-[#f4f6f9] text-[#1e3a5f]",
    outline:
      "border border-[#1e3a5f] text-[#1e3a5f] bg-transparent",
    accent:
      "bg-[#c8962c] text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
