const exampleContent = `# Example Corp

> A modern SaaS platform for team collaboration.

## About
Example Corp helps distributed teams stay aligned with real-time docs, 
task tracking, and integrated chat.

## Docs
- [Getting Started](https://example.com/docs/getting-started): Quick setup guide
- [API Reference](https://example.com/docs/api): REST API documentation
- [Webhooks](https://example.com/docs/webhooks): Event-driven integrations
- [SDKs](https://example.com/docs/sdks): Official client libraries

## Blog
- [Launching v2.0](https://example.com/blog/v2): Major release notes
- [Best Practices](https://example.com/blog/best-practices): Tips for power users

## Optional
- [Changelog](https://example.com/changelog): Version history
- [Status Page](https://status.example.com): System uptime`;

const ExampleFile = () => (
  <section className="bg-background">
    <div className="container max-w-3xl py-20">
      <h2 className="text-3xl font-extrabold mb-3 text-center">
        Example <span className="text-primary">llms.txt</span> File
      </h2>
      <p className="text-muted-foreground text-center mb-10 text-sm">
        Here's what a typical generated file looks like — clean, structured, and ready for LLMs.
      </p>
      <div className="rounded-2xl overflow-hidden border border-border shadow-lg shadow-primary/5">
        <div className="bg-foreground/5 border-b border-border px-5 py-3 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="text-xs text-muted-foreground ml-3 font-mono">llms.txt</span>
        </div>
        <pre className="bg-code text-code-foreground p-6 text-sm font-mono whitespace-pre-wrap leading-relaxed overflow-auto max-h-[400px]">
          {exampleContent}
        </pre>
      </div>
    </div>
  </section>
);

export default ExampleFile;
