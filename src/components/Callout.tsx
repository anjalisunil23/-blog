import { Info, AlertTriangle, Lightbulb, ShieldAlert } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "tip" | "warning" | "info" | "danger";

const config: Record<Variant, { icon: typeof Info; label: string; color: string; bg: string }> = {
  tip:     { icon: Lightbulb,    label: "Pro Tip",  color: "oklch(0.80 0.16 145)", bg: "oklch(0.30 0.10 145 / 0.18)" },
  warning: { icon: AlertTriangle, label: "Warning",  color: "oklch(0.82 0.15 60)",  bg: "oklch(0.30 0.10 60 / 0.18)" },
  info:    { icon: Info,         label: "Note",     color: "oklch(0.78 0.14 220)", bg: "oklch(0.30 0.10 220 / 0.18)" },
  danger:  { icon: ShieldAlert,  label: "Critical", color: "oklch(0.72 0.20 25)",  bg: "oklch(0.30 0.10 25 / 0.18)" },
};

export function Callout({ variant = "info", title, children }: { variant?: Variant; title?: string; children: ReactNode }) {
  const c = config[variant];
  const Icon = c.icon;
  return (
    <div
      className="my-6 rounded-xl border border-white/8 p-4 flex gap-3"
      style={{ background: c.bg, borderColor: c.color + "33" }}
    >
      <Icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: c.color }} />
      <div className="flex-1">
        <div className="font-display font-semibold text-sm tracking-wide mb-1" style={{ color: c.color }}>
          {title ?? c.label}
        </div>
        <div className="text-[15px] text-foreground/85 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
