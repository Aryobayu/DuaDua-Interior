import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  return (
    <div
      data-scroll-reveal
      data-direction={direction}
      style={{ transitionDelay: `${delay}ms` } as React.CSSProperties}
      className={cn(
        "opacity-0 translate-y-6 data-[direction=down]:-translate-y-6 data-[direction=left]:translate-x-6 data-[direction=right]:-translate-x-6",
        "transition-all duration-700 ease-out",
        "[&.revealed]:opacity-100 [&.revealed]:translate-x-0 [&.revealed]:translate-y-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
