import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "full";
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          {
            sm: "max-w-screen-sm",
            md: "max-w-screen-md",
            lg: "max-w-screen-xl",
            full: "max-w-full",
          }[size],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";

export { Container };
