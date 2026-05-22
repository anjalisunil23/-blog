import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Code2, Calendar, Clock, Sparkles, Github, Twitter, Linkedin } from "lucide-react";
import { ReadingProgress } from "@/components/ReadingProgress";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevForge — Technical Blog Portfolio" },
      { name: "description", content: "A two-part technical blog portfolio: an implementation guide on Firebase Authentication and a code break analysis of the useDebounce React hook." },
      { property: "og:title", content: "DevForge — Technical Blog Portfolio" },
      { property: "og:description", content: "A two-part technical blog portfolio: implementation guide on Firebase Authentication and code break analysis of the useDebounce React hook." },
    ],
  }),
  component: Landing,
});

interface PostCard {
  to: "/blog1" | "/blog2";
  kind: string;
  Icon: typeof BookOpen;
  title: string;
  description: string;
  topics: string[];
  date: string;
  readTime: string;
}

const posts: PostCard[] = [
  {
    to: "/blog1",
    kind: "Blog 1 · Tech Tool Implementation",
    Icon: BookOpen,
    title: "Firebase Authentication — Complete Implementation Guide",
    description:
      "An end-to-end walkthrough of Firebase Auth in React: project setup, email/password, Google Sign-In, protected routes, security rules, performance tips, applications & benefits, real-world challenges, and future scope.",
    topics: ["Introduction", "Setup", "Code Snippets", "Screenshots", "Applications", "Challenges", "References", "Future Scope"],
    date: "May 21, 2026",
    readTime: "22 min read",
  },
  {
    to: "/blog2",
    kind: "Blog 2 · Code Break Analysis",
    Icon: Code2,
    title: "Code Break Analysis — The useDebounce React Hook",
    description:
      "A line-by-line breakdown of a small but high-impact module discussed in our seminar: objective, logic flow, function explanation, debugging & optimization notes, observed output, and a personal learning reflection.",
    topics: ["Objective", "Logic Flow", "Function Explanation", "Debugging", "Output", "Reflection", "References"],
    date: "May 22, 2026",
    readTime: "9 min read",
  },
];

function Landing() {
  return (
    <div id="top" className="relative min-h-screen">
      <ReadingProgress />
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 hero-bg">
        <div className="mx-auto max-w-4xl px-4 text-center anim-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand)]" />
            MCA Technical Blog Activity · 2026
          </div>
          <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            <span className="text-foreground">A Two-Part</span> <br />
            <span className="text-gradient">Technical Blog Portfolio</span>
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Built as part of the technical blog activity — one implementation-focused post on a modern developer tool, and one code break analysis of a module discussed during the seminar.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group block rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--brand)] uppercase tracking-widest mb-4">
                <p.Icon className="w-4 h-4" /> {p.kind}
              </div>
              <h2 className="font-display font-bold text-2xl leading-tight mb-3 group-hover:text-[var(--brand)] transition-colors">
                {p.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.topics.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-muted border border-border text-[11px] font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {p.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {p.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand)]">
                  Read post <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About activity */}
      <section className="mx-auto max-w-4xl px-4 pb-24">
        <div className="glass border-gradient rounded-2xl p-6 md:p-8">
          <h2 className="font-display font-semibold text-xl mb-4">About this activity</h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            This technical blog profile is part of an MCA coursework activity designed to build a public engineering portfolio. Each post follows a defined structure — implementation walkthroughs and code break analyses — so the work can later serve as:
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            {[
              "A professional portfolio for placements",
              "A showcase of technical and writing skills",
              "A supporting profile for internships and projects",
              "A platform for continuous technical learning",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-foreground/85">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--brand)] shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 DevForge Engineering Blog</span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-foreground"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-foreground"><Github className="w-4 h-4" /></a>
            <a href="#" className="hover:text-foreground"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
