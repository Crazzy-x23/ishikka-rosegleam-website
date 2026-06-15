import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type NewsletterSectionProps = {
  variant?: "light" | "dark";
};

export function NewsletterSection({ variant = "light" }: NewsletterSectionProps) {
  const isDark = variant === "dark";

  return (
    <section className={cn(isDark ? "bg-espresso text-white" : "bg-ivory text-ink")}>
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-10">
        <div>
          <p className={cn("text-xs font-semibold uppercase tracking-[0.28em]", isDark ? "text-gold" : "text-coffee")}>
            Private List
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Receive first access to new RoseGleam edits.
          </h2>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row" aria-label="Newsletter signup">
          <label className="sr-only" htmlFor={`newsletter-email-${variant}`}>
            Email address
          </label>
          <div
            className={cn(
              "flex min-h-14 flex-1 items-center gap-3 rounded-full border px-5",
              isDark ? "border-white/15 bg-white/8" : "border-coffee/15 bg-white"
            )}
          >
            <Mail size={18} className={isDark ? "text-gold" : "text-coffee"} />
            <input
              id={`newsletter-email-${variant}`}
              type="email"
              placeholder="Email address"
              className={cn(
                "w-full bg-transparent text-sm outline-none placeholder:text-current/45",
                isDark ? "text-white" : "text-ink"
              )}
            />
          </div>
          <button
            type="button"
            className={cn(
              "min-h-14 rounded-full px-7 text-sm font-semibold transition focus-luxury",
              isDark
                ? "bg-gold text-espresso hover:bg-white"
                : "bg-espresso text-white hover:bg-coffee"
            )}
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
