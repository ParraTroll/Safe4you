import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/feature", label: "Feature Article" },
  { to: "/advice", label: "Advice Column" },
  { to: "/creative", label: "Creative Corner" },
  { to: "/reflection", label: "Reflection" },
  { to: "/quiz", label: "Safety Quiz" },
] as const;

function ScrollBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent">
      <div
        className="h-full bg-[image:var(--gradient-brand)] transition-[width] duration-150"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <ScrollBar />
      

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/40 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
              <ShieldCheck className="size-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Safe<span className="text-gradient">4Cyber</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{ className: "text-primary bg-secondary/70" }}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid size-10 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        <div
          className={cn(
            "overflow-hidden border-t border-border/60 transition-[max-height] duration-300 lg:hidden",
            open ? "max-h-96" : "max-h-0",
          )}
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 mt-24 border-t border-border/60 bg-background/30 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Safe4you — Year 9 Digital Wellbeing Project, 2026.</p>
          <p>
            Need help now? <span className="text-primary">eSafety.gov.au</span> ·{" "}
            <span className="text-primary">Kids Helpline 1800 55 1800</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16 pb-10 text-center">
      <span className="animate-rise inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
        {eyebrow}
      </span>
      <h1 className="animate-rise mt-5 text-4xl font-extrabold text-balance sm:text-5xl">{title}</h1>
      {subtitle && (
        <p className="animate-rise mt-4 text-lg text-pretty text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
