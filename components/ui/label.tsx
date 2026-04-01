import { cn } from "@/lib/utils";
import { LabelHTMLAttributes, forwardRef } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "block text-sm font-medium text-[#0f1c2e] mb-1.5",
          className
        )}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";

export { Label };
