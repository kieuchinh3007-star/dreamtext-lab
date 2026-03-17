import { useState } from "react";
import { Search, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

interface HeroGeneratorProps {
  onGenerate: (url: string, isFull: boolean) => void;
  isLoading: boolean;
}

const HeroGenerator = ({ onGenerate, isLoading }: HeroGeneratorProps) => {
  const [url, setUrl] = useState("");
  const [isFull, setIsFull] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) onGenerate(url.trim(), isFull);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-20 right-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

      <div className="container max-w-4xl py-24 md:py-32 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            ✨ Free LLMs.txt Generator
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            <span className="text-primary">LLMs.txt Generator</span>
            <br />
            Create Files Instantly
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Convert any website into clean, structured text files optimized for LLM training and inference — powered by Letsmetrix.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2 shadow-lg shadow-primary/5"
        >
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="url"
              placeholder="Enter a URL (e.g. https://example.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="pl-12 border-0 shadow-none focus-visible:ring-0 h-12 text-base rounded-xl bg-transparent"
            />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer select-none">
              <Switch checked={isFull} onCheckedChange={setIsFull} />
              Full
            </label>
            <Button
              type="submit"
              disabled={isLoading || !url.trim()}
              size="lg"
              className="rounded-xl font-bold px-6 h-12"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating…
                </>
              ) : (
                <>
                  Generate
                  <ArrowRight className="h-4 w-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroGenerator;
