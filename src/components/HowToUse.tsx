import { Globe, Cpu, FileText } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Enter Your URL",
    description: "Paste the website URL you want to convert into an LLM-friendly text file.",
    step: "01",
  },
  {
    icon: Cpu,
    title: "We Crawl & Process",
    description: "Our engine crawls the site, extracts meaningful content, and removes noise.",
    step: "02",
  },
  {
    icon: FileText,
    title: "Download Your File",
    description: "Get a clean llms.txt file ready for LLM training, fine-tuning, or inference.",
    step: "03",
  },
];

const HowToUse = () => (
  <section id="how-to-use" className="bg-background">
    <div className="container max-w-5xl py-20">
      <h2 className="text-3xl font-extrabold mb-3 text-center">How It Works</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
        Three simple steps to generate your LLMs.txt file
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.step} className="relative p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:shadow-primary/5 transition-shadow">
            <span className="text-5xl font-extrabold text-primary/15 absolute top-4 right-5">{s.step}</span>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToUse;
