import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is an llms.txt file?",
    a: "An llms.txt file is a standardized text file that provides LLM-friendly content extracted from a website. It follows a structured format with headings, links, and descriptions that large language models can easily parse and understand.",
  },
  {
    q: "Is this tool free to use?",
    a: "Yes, the basic generator is completely free. You can generate llms.txt files for any public website without signing up.",
  },
  {
    q: "What's the difference between llms.txt and llms-full.txt?",
    a: "The standard llms.txt contains a concise overview with key links and descriptions. The llms-full.txt version includes the complete crawled content from all discovered pages, providing more context for LLM training.",
  },
  {
    q: "How does the generator handle JavaScript-rendered pages?",
    a: "Our crawler uses headless browser rendering to capture dynamically loaded content, ensuring JavaScript-heavy single-page applications are fully processed.",
  },
  {
    q: "Can I use the generated files commercially?",
    a: "Yes. The generated text files are derived from publicly available website content. You're free to use them for LLM training, RAG pipelines, or any other purpose, subject to the source website's terms of service.",
  },
];

const FAQ = () => (
  <section className="bg-section-alt border-b border-border">
    <div className="container max-w-2xl py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg bg-card px-4">
            <AccordionTrigger className="text-left font-medium text-sm hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
