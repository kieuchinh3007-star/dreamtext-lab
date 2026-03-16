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
  <section className="bg-background border-b border-border">
    <div className="container max-w-3xl py-16">
      <h2 className="text-2xl font-bold mb-2 text-center">Example llms.txt File</h2>
      <p className="text-muted-foreground text-center mb-8 text-sm">
        Here's what a typical generated file looks like — clean, structured, and ready for LLMs.
      </p>
      <div className="rounded-lg overflow-hidden border border-border">
        <div className="bg-foreground/5 border-b border-border px-4 py-2 flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="text-xs text-muted-foreground ml-3 font-mono">llms.txt</span>
        </div>
        <pre className="bg-code text-code-foreground p-5 text-sm font-mono whitespace-pre-wrap leading-relaxed overflow-auto max-h-[400px]">
          {exampleContent}
        </pre>
      </div>
    </div>
  </section>
);

export default ExampleFile;
