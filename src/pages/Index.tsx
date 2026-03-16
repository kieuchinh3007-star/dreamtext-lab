import { useState } from "react";
import HeroGenerator from "@/components/HeroGenerator";
import GeneratedPreview from "@/components/GeneratedPreview";
import HowToUse from "@/components/HowToUse";
import WhyUse from "@/components/WhyUse";
import ExampleFile from "@/components/ExampleFile";
import CrossSellLetsmetrix from "@/components/CrossSellLetsmetrix";
import FAQ from "@/components/FAQ";
import MoreTools from "@/components/MoreTools";

const MOCK_CONTENT = `# Letsmetrix

> ASO analytics platform for app store optimization.

## Docs
- [Getting Started](https://letsmetrix.com/docs/start): Quick setup guide
- [Keyword Tracking](https://letsmetrix.com/docs/keywords): Monitor keyword rankings
- [Competitor Analysis](https://letsmetrix.com/docs/competitors): Track competitor apps

## Features
- [Dashboard](https://letsmetrix.com/dashboard): Overview of your app metrics
- [Reports](https://letsmetrix.com/reports): Exportable analytics reports
- [Integrations](https://letsmetrix.com/integrations): Connect with your tools

## Optional
- [Blog](https://letsmetrix.com/blog): Latest ASO insights
- [Changelog](https://letsmetrix.com/changelog): Product updates`;

const Index = () => {
  const [content, setContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const handleGenerate = async (url: string, _isFull: boolean) => {
    setCurrentUrl(url);
    setIsLoading(true);
    setContent(null);

    // Simulate generation delay
    await new Promise((r) => setTimeout(r, 2000));

    setContent(MOCK_CONTENT.replace("Letsmetrix", new URL(url.startsWith("http") ? url : `https://${url}`).hostname));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      <HeroGenerator onGenerate={handleGenerate} isLoading={isLoading} />
      <GeneratedPreview content={content} isLoading={isLoading} url={currentUrl} />
      <HowToUse />
      <WhyUse />
      <ExampleFile />
      <CrossSellLetsmetrix />
      <FAQ />
      <MoreTools />
    </div>
  );
};

export default Index;
