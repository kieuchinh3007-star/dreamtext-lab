import { FileJson, FileSearch, GitCompare } from "lucide-react";

const tools = [
  {
    icon: FileJson,
    title: "Robots.txt Analyzer",
    description: "Check and validate any website's robots.txt configuration for SEO compliance.",
    href: "#",
  },
  {
    icon: FileSearch,
    title: "Sitemap Generator",
    description: "Crawl a website and generate a comprehensive XML sitemap automatically.",
    href: "#",
  },
  {
    icon: GitCompare,
    title: "Content Diff Checker",
    description: "Compare two versions of a page to track content changes over time.",
    href: "#",
  },
];

const MoreTools = () => (
  <section className="bg-background">
    <div className="container max-w-4xl py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">More Tools Like This</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <a
            key={tool.title}
            href={tool.href}
            className="group block p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <tool.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">{tool.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default MoreTools;
