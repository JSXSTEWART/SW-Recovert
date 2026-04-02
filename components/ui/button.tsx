import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#1e3a5f] text-white hover:bg-[#152b47] focus-visible:ring-[#1e3a5f]",
        secondary:
          "bg-[#c8962c] text-white hover:bg-[#a87820] focus-visible:ring-[#c8962c]",
        outline:
          "border-2 border-[#1e3a5f] text-[#1e3a5f] bg-transparent hover:bg-[#1e3a5f] hover:text-white focus-visible:ring-[#1e3a5f]",
        ghost:
          "bg-transparent text-[#1e3a5f] hover:bg-[#1e3a5f]/10 focus-visible:ring-[#1e3a5f]",
        link: "text-[#1e3a5f] underline-offset-4 hover:underline focus-visible:ring-[#1e3a5f] p-0 h-auto",
        default:
          "bg-[#1e3a5f] text-white hover:bg-[#152b47] focus-visible:ring-[#1e3a5f]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-13 px-8 text-lg",
        default: "h-11 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
