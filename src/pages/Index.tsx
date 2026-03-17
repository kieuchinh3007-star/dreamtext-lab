import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Header from "@/components/Header";
import HeroGenerator from "@/components/HeroGenerator";
import GeneratedPreview from "@/components/GeneratedPreview";
import HowToUse from "@/components/HowToUse";
import WhyUse from "@/components/WhyUse";
import ExampleFile from "@/components/ExampleFile";
import CrossSellLetsmetrix from "@/components/CrossSellLetsmetrix";
import FAQ from "@/components/FAQ";
import MoreTools from "@/components/MoreTools";
import Footer from "@/components/Footer";

const Index = () => {
  const [content, setContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const handleGenerate = async (url: string, isFull: boolean) => {
    setCurrentUrl(url);
    setIsLoading(true);
    setContent(null);

    try {
      const { data, error } = await supabase.functions.invoke("generate-llms-txt", {
        body: { url, isFull },
      });

      if (error) {
        toast.error(error.message || "Failed to generate llms.txt");
        return;
      }

      if (!data?.success) {
        toast.error(data?.error || "Failed to generate llms.txt");
        return;
      }

      setContent(data.content);
    } catch (err) {
      console.error("Generation error:", err);
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroGenerator onGenerate={handleGenerate} isLoading={isLoading} />
      <GeneratedPreview content={content} isLoading={isLoading} url={currentUrl} />
      <HowToUse />
      <WhyUse />
      <ExampleFile />
      <CrossSellLetsmetrix />
      <FAQ />
      <MoreTools />
      <Footer />
    </div>
  );
};

export default Index;
