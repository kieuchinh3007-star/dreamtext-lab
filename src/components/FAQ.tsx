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
    a: "The standard llms.txt contains a concise overview with key links and descriptions. The llms-full.txt version includes the complete crawled content from all discovered pages.",
  },
  {
    q: "How does the generator handle JavaScript-rendered pages?",
    a: "Our crawler processes the HTML content directly. For JavaScript-heavy single-page applications, some dynamically loaded content may not be captured.",
  },
  {
    q: "Can I use the generated files commercially?",
    a: "Yes. The generated text files are derived from publicly available website content. You're free to use them for LLM training, RAG pipelines, or any other purpose.",
  },
];

const FAQ = () => (
  <section id="faq" className="bg-background">
    <div className="container max-w-2xl py-20">
      <h2 className="text-3xl font-extrabold mb-3 text-center">
        Frequently Asked <span className="text-primary">Questions</span>
      </h2>
      <p className="text-muted-foreground text-center mb-10">
        Everything you need to know about the LLMs.txt Generator
      </p>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl bg-card px-5">
            <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline py-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
