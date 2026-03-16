import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
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
    <section className="bg-background border-b border-border">
      <div className="container max-w-3xl py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          LLMs.txt Generator
        </h1>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Generate consolidated text files from any website for LLM training and inference — powered by Letsmetrix.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-lg p-2 flex flex-col sm:flex-row items-center gap-2 shadow-sm"
        >
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="url"
              placeholder="Enter a URL (e.g. https://example.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="pl-10 border-0 shadow-none focus-visible:ring-0 h-11 text-base"
            />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer select-none">
              <Switch checked={isFull} onCheckedChange={setIsFull} />
              llms-full.txt
            </label>
            <Button type="submit" disabled={isLoading || !url.trim()} size="lg" className="rounded-lg font-semibold px-6">
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating…
                </>
              ) : (
                "Generate .txt"
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroGenerator;
