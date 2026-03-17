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
  <section className="bg-section-alt">
    <div className="container max-w-5xl py-20">
      <h2 className="text-3xl font-extrabold mb-3 text-center">More Tools</h2>
      <p className="text-muted-foreground text-center mb-12">Explore other free tools from Letsmetrix</p>
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <a
            key={tool.title}
            href={tool.href}
            className="group block p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <tool.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">{tool.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default MoreTools;
