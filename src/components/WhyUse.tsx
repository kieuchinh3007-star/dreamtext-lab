import { Zap, ShieldCheck, BarChart3, Bot } from "lucide-react";

const reasons = [
  {
    icon: Bot,
    title: "Optimized for LLMs",
    description: "Generate clean, structured text that large language models can ingest efficiently without hallucinations.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in seconds. Our crawler processes pages in parallel for maximum speed.",
  },
  {
    icon: ShieldCheck,
    title: "Noise-Free Content",
    description: "Automatically strips headers, footers, scripts, and ads — leaving only the content that matters.",
  },
  {
    icon: BarChart3,
    title: "SEO-Aware Extraction",
    description: "Leverages site structure, headings, and metadata to produce contextually rich output.",
  },
];

const WhyUse = () => (
  <section className="bg-section-alt border-b border-border">
    <div className="container max-w-4xl py-16">
      <h2 className="text-2xl font-bold mb-10 text-center">Why Use LLMs.txt Generator?</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4 p-5 rounded-lg border border-border bg-card">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <r.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUse;
