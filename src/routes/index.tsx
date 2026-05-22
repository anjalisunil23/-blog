import { createFileRoute, Link } from "@tanstack/react-router";
import firebaseUrl from "@/assets/firebase.svg";
import { ReadingProgress } from "@/components/ReadingProgress";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevForge — Home" },
      { name: "description", content: "DevForge — personal engineering blog and tutorials." },
    ],
  }),
  component: Home,
});

const posts = [
  {
    to: "/blog1",
    title: "Firebase Authentication — The Complete Guide",
    date: "May 21, 2026",
    readTime: "22 min read",
  },
  {
    to: "/blog2",
    title: "Code Break Analysis — The useDebounce React Hook",
    date: "May 22, 2026",
    readTime: "9 min read",
  },
];

function Home() {
  return (
    <div id="top" className="relative min-h-screen">
      <ReadingProgress />
      <SiteNav />

      <main className="mx-auto max-w-6xl px-4 pt-28 pb-16">
        <section className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-mono text-[var(--brand)] mb-3">Updated for Firebase v10 · React 19 · 2026</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-4">Firebase Authentication: The Complete Guide for Modern Developers</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">A production-grade walkthrough of Firebase Auth — from your first createUserWithEmailAndPassword call to protected routes, session persistence, and security rules you can ship with confidence.</p>

            <div className="flex items-center gap-6">
              <div className="text-sm text-muted-foreground">
                <div>May 21, 2026</div>
                <div className="mt-1">22 min read</div>
              </div>
              <Link to="/blog1" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--brand)] text-white">Read full post</Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['#Firebase','#Authentication','#React','#WebDev','#Tutorial','#Security'].map(t => (
                <span key={t} className="px-2 py-0.5 rounded-md bg-muted border border-border text-[11px] font-mono text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img src={firebaseUrl} alt="Firebase emblem" className="w-64 h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display font-semibold text-2xl mb-4">Featured posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map(p => (
              <Link key={p.to} to={p.to} className="block rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
                <h3 className="font-display font-semibold text-xl mb-2">{p.title}</h3>
                <div className="text-xs text-muted-foreground">{p.date} · {p.readTime}</div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <span>© 2026 DevForge Engineering Blog</span>
        </div>
      </footer>
    </div>
  );
}
