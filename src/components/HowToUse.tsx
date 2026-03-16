import { Globe, Cpu, FileText } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "1. Enter Your URL",
    description: "Paste the website URL you want to convert into an LLM-friendly text file.",
  },
  {
    icon: Cpu,
    title: "2. We Crawl & Process",
    description: "Our engine crawls the site, extracts meaningful content, and removes noise like navigation and ads.",
  },
  {
    icon: FileText,
    title: "3. Download Your File",
    description: "Get a clean llms.txt file ready for LLM training, fine-tuning, or inference context.",
  },
];

const HowToUse = () => (
  <section className="bg-background border-b border-border">
    <div className="container max-w-4xl py-16">
      <h2 className="text-2xl font-bold mb-10 text-center">How to Use</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.title} className="text-center">
            <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <step.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToUse;
