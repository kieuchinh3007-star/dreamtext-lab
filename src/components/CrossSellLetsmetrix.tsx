import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CrossSellLetsmetrix = () => (
  <section className="border-b border-border bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
    <div className="container max-w-3xl py-16 text-center">
      <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Powered by Letsmetrix</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Track Your App Store Rankings & Keywords
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
        Letsmetrix is the all-in-one ASO analytics platform. Monitor keyword rankings, track competitors, 
        and optimize your app store presence with data-driven insights.
      </p>
      <Button asChild size="lg" className="rounded-lg font-semibold px-8">
        <a href="https://letsmetrix.com" target="_blank" rel="noopener noreferrer">
          Explore Letsmetrix
          <ArrowRight className="h-4 w-4 ml-1" />
        </a>
      </Button>
    </div>
  </section>
);

export default CrossSellLetsmetrix;
