import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  theme = "light"
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <div className={cn(
          "label-eyebrow mb-4",
          isDark && "text-gold"
        )}>
          {eyebrow}
        </div>
      ) : null}
      <h2 className={cn(
        "font-serif text-3xl md:text-5xl leading-tight",
        isDark ? "text-cream-50" : "text-coffee-900"
      )}>
        {title}
      </h2>
      {description ? (
        <p className={cn(
          "mt-6 leading-relaxed text-base",
          isDark ? "text-cream-100/70" : "text-coffee-700",
          align === "center" ? "mx-auto max-w-xl" : ""
        )}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
