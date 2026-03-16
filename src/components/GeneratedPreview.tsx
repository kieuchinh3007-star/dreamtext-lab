import { Copy, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface GeneratedPreviewProps {
  content: string | null;
  isLoading: boolean;
  url: string;
}

const GeneratedPreview = ({ content, isLoading, url }: GeneratedPreviewProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!content) return;
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!content) return;
    const blob = new Blob([content], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "llms.txt";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <section className="bg-section-alt border-b border-border">
      <div className="container max-w-3xl py-16">
        <h2 className="text-2xl font-bold mb-6">Generated Preview</h2>

        {/* macOS-style window */}
        <div className="rounded-lg overflow-hidden border border-border shadow-sm">
          {/* Title bar */}
          <div className="bg-foreground/5 border-b border-border px-4 py-2.5 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-muted-foreground font-mono truncate max-w-[200px]">
              {url || "llms.txt"}
            </span>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleCopy} disabled={!content}>
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleDownload} disabled={!content}>
                <Download className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="bg-code p-5 min-h-[240px] max-h-[480px] overflow-auto">
            {isLoading ? (
              <div className="flex flex-col gap-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-4 rounded bg-code-foreground/10 animate-pulse-bar"
                    style={{ width: `${60 + Math.random() * 40}%`, animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            ) : content ? (
              <pre className="text-code-foreground text-sm font-mono whitespace-pre-wrap leading-relaxed">
                {content}
              </pre>
            ) : (
              <p className="text-code-foreground/50 text-sm font-mono text-center pt-16">
                Enter a URL above and click "Generate .txt" to see results here.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratedPreview;
