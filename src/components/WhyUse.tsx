import { Zap, ShieldCheck, BarChart3, Bot } from "lucide-react";

const reasons = [
  {
    icon: Bot,
    title: "Optimized for LLMs",
    description: "Generate clean, structured text that large language models can ingest efficiently.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in seconds. Pages are processed in parallel for maximum speed.",
  },
  {
    icon: ShieldCheck,
    title: "Noise-Free Content",
    description: "Strips headers, footers, scripts, and ads — leaving only what matters.",
  },
  {
    icon: BarChart3,
    title: "SEO-Aware Extraction",
    description: "Leverages headings and metadata to produce contextually rich output.",
  },
];

const WhyUse = () => (
  <section id="why-use" className="bg-section-alt">
    <div className="container max-w-5xl py-20">
      <h2 className="text-3xl font-extrabold mb-3 text-center">
        Why Use <span className="text-primary">LLMs.txt Generator</span>?
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
        The fastest way to prepare website content for AI consumption
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:shadow-primary/5 transition-shadow">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <r.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUse;
