import { Sparkles, Shield } from "lucide-react";

const TAGS = ["Firebase", "Authentication", "React", "WebDev", "Tutorial", "Security"];

const TOC = [
  "Introduction",
  "What is Firebase Authentication?",
  "Features of Firebase Auth",
  "Project Setup Guide",
  "Complete Implementation Tutorial",
  "Folder Structure",
  "Security Best Practices",
  "Performance Optimization",
  "Real-World Use Cases",
  "Common Errors & Fixes",
  "Advantages & Disadvantages",
  "Firebase Auth vs Alternatives",
  "Applications & Benefits",
  "Challenges Faced",
  "Trends & Future Scope",
  "References & Resources",
  "FAQs",
  "Conclusion",
];

export function Hero() {
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 hero-bg">
      <div className="mx-auto max-w-6xl px-4 anim-fade-up">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[var(--brand)]" />
              Updated for Firebase v10 · React 19 · 2026
            </div>

            <h1 className="font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl leading-[1.02]">
              Firebase Authentication:
              <br />
              <span className="text-gradient">The Complete Guide</span>
              <br />
              <span className="text-foreground/80 text-lg font-normal">for Modern Developers</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A production-grade walkthrough of Firebase Auth — from your first createUserWithEmailAndPassword call to protected routes, session persistence, and security rules you can ship with confidence.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-4 justify-center lg:justify-start">
              <div className="text-sm text-muted-foreground">
                <div className="font-mono">May 21, 2026</div>
                <div className="mt-1">22 min read</div>
              </div>

              <div className="flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-muted border border-border text-[11px] font-mono text-muted-foreground">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-64 h-44 rounded-xl bg-gradient-to-br from-muted/30 to-card/40 border border-border flex items-center justify-center shadow-lg">
              <Shield className="w-16 h-16 text-[var(--brand)]" />
              <span className="sr-only">Firebase Authentication shield emblem floating over a developer environment</span>
            </div>
          </div>

          <div className="lg:col-span-2 mt-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-semibold text-lg">Table of contents</h3>
              <div className="text-sm text-muted-foreground">Meta description: Learn how to implement Firebase Authentication in React with email/password, Google Sign-In, protected routes, security rules, and production best practices — complete code included.</div>
            </div>

            <ol className="mt-4 grid sm:grid-cols-3 gap-3 list-none">
              {TOC.map((item, i) => (
                <li key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-3">
                  <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center font-mono text-sm text-foreground/90">{String(i + 1).padStart(2, "0")}</div>
                  <div className="text-sm text-foreground/90">{item}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
