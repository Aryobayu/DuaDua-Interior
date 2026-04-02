import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";
import Link, { type LinkProps } from "next/link";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export interface LinkButtonProps extends LinkProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}

const buttonClasses = (
  variant: string = "primary",
  size: string = "md",
  className?: string,
) =>
  cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-full font-medium transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    {
      primary:
        "bg-primary-500 text-white hover:bg-primary-600 shadow-soft hover:shadow-soft-lg active:scale-95",
      secondary:
        "bg-accent-gold text-neutral-900 hover:bg-accent-gold/90 shadow-soft hover:shadow-soft-lg active:scale-95",
      outline:
        "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 active:scale-95",
      ghost: "text-neutral-700 hover:bg-neutral-100 active:scale-95",
    }[variant],
    {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }[size],
    className,
  );

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button ref={ref} className={buttonClasses(variant, size, className)} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

function LinkButton({ className, variant = "primary", size = "md", children, ...props }: LinkButtonProps) {
  return (
    <Link className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}

export { Button, LinkButton };
