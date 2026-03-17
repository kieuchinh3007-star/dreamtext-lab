const Footer = () => (
  <footer className="border-t border-border bg-section-alt">
    <div className="container max-w-6xl py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Letsmetrix. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <a href="https://letsmetrix.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          Letsmetrix.com
        </a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
      </div>
    </div>
  </footer>
);

export default Footer;
