import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants: Record<string, string> = {
      primary:
        "bg-[#1e3a5f] text-white hover:bg-[#152b47] focus-visible:ring-[#1e3a5f]",
      secondary:
        "bg-[#c8962c] text-white hover:bg-[#a87820] focus-visible:ring-[#c8962c]",
      outline:
        "border-2 border-[#1e3a5f] text-[#1e3a5f] bg-transparent hover:bg-[#1e3a5f] hover:text-white focus-visible:ring-[#1e3a5f]",
      ghost:
        "bg-transparent text-[#1e3a5f] hover:bg-[#1e3a5f]/10 focus-visible:ring-[#1e3a5f]",
      link: "text-[#1e3a5f] underline-offset-4 hover:underline focus-visible:ring-[#1e3a5f] p-0 h-auto",
    };

    const sizes: Record<string, string> = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-13 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
