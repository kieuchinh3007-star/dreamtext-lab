import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CrossSellLetsmetrix = () => (
  <section className="bg-foreground">
    <div className="container max-w-4xl py-20 text-center">
      <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">Powered by Letsmetrix</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-primary-foreground">
        Track Your App Store Rankings & Keywords
      </h2>
      <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 leading-relaxed">
        Letsmetrix is the all-in-one ASO analytics platform. Monitor keyword rankings, track competitors,
        and optimize your app store presence with data-driven insights.
      </p>
      <Button asChild size="lg" className="rounded-full font-bold px-8 bg-primary text-primary-foreground hover:bg-primary/90">
        <a href="https://letsmetrix.com" target="_blank" rel="noopener noreferrer">
          Explore Letsmetrix
          <ArrowRight className="h-4 w-4 ml-1" />
        </a>
      </Button>
    </div>
  </section>
);

export default CrossSellLetsmetrix;
