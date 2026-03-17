import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => (
  <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
    <div className="container max-w-6xl flex items-center justify-between h-16">
      <a href="https://letsmetrix.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="6" fill="hsl(18, 89%, 54%)" />
          <path d="M8 22V10h3v12H8Zm6-4V10h3v8h-3Zm6-3V10h3v5h-3Z" fill="white" />
        </svg>
        <span>
          <span className="text-foreground">LETS</span>
          <span className="text-primary">METRIX</span>
        </span>
      </a>

      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <a href="#how-to-use" className="hover:text-foreground transition-colors">How It Works</a>
        <a href="#why-use" className="hover:text-foreground transition-colors">Why Use</a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
      </nav>

      <Button asChild size="sm" className="rounded-full font-semibold px-5">
        <a href="https://letsmetrix.com" target="_blank" rel="noopener noreferrer">
          Get Started
          <ArrowRight className="h-3.5 w-3.5 ml-1" />
        </a>
      </Button>
    </div>
  </header>
);

export default Header;
