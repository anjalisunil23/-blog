import type { ReactNode } from "react";

export function MockScreenshot({
  title,
  url,
  caption,
  children,
}: {
  title: string;
  url?: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-8">
      <div className="rounded-2xl overflow-hidden glow-shadow border-gradient glass">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-black/40 border-b border-white/5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[oklch(0.65_0.20_25)]" />
            <span className="w-3 h-3 rounded-full bg-[oklch(0.80_0.15_85)]" />
            <span className="w-3 h-3 rounded-full bg-[oklch(0.70_0.18_150)]" />
          </div>
          <div className="mx-auto px-3 py-1 rounded-md bg-white/5 text-xs font-mono text-muted-foreground truncate max-w-[60%]">
            {url ?? title}
          </div>
        </div>
        <div className="bg-gradient-to-br from-[oklch(0.16_0.03_270)] to-[oklch(0.20_0.04_290)] p-6 min-h-[260px]">
          {children}
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
        {caption}
      </figcaption>
    </figure>
  );
}
