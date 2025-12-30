import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Closings",
    questions: [
      {
        question: "What is the real estate closing process in Georgia?",
        answer:
          "The closing process in Georgia involves several steps: signing the purchase agreement, conducting a title search, obtaining title insurance, reviewing closing documents, transferring funds, and recording the deed. Our firm guides you through each step to ensure a smooth transaction.",
      },
      {
        question: "How long does a typical real estate closing take?",
        answer:
          "Most residential closings in Georgia take 30-45 days from contract to close. However, cash purchases or refinances can close in as little as 2-3 weeks. Commercial closings may take longer depending on complexity.",
      },
    ],
  },
  {
    category: "Family Law",
    questions: [
      {
        question: "How is child custody determined in Georgia?",
        answer:
          "Georgia courts determine custody based on the best interests of the child. Factors include each parent's relationship with the child, stability of home environment, work schedules, the child's wishes (if age-appropriate), and each parent's ability to meet the child's needs.",
      },
      {
        question: "How long does a divorce take in Georgia?",
        answer:
          "An uncontested divorce in Georgia can be finalized in as little as 31 days after filing. Contested divorces take longer, typically 6 months to a year or more, depending on the complexity of issues like property division, custody, and support.",
      },
    ],
  },
  {
    category: "Personal Injury",
    questions: [
      {
        question: "How long do I have to file a personal injury claim in Georgia?",
        answer:
          "Georgia's statute of limitations for most personal injury cases is 2 years from the date of the injury. However, some cases have different deadlines, so it's important to consult with an attorney as soon as possible after your injury.",
      },
      {
        question: "What compensation can I recover in a personal injury case?",
        answer:
          "You may recover medical expenses (past and future), lost wages, pain and suffering, property damage, and in some cases, punitive damages. The amount depends on the severity of your injuries and the circumstances of your case.",
      },
    ],
  },
  {
    category: "Alcohol Licensing",
    questions: [
      {
        question: "What types of alcohol licenses are available in Georgia?",
        answer:
          "Georgia offers various license types including retail dealer licenses (package stores), consumption on premises licenses (restaurants/bars), manufacturer licenses, and wholesale dealer licenses. The right license depends on your business type and how you plan to sell alcohol.",
      },
      {
        question: "How long does it take to get an alcohol license in Georgia?",
        answer:
          "The alcohol licensing process typically takes 60-90 days, depending on the jurisdiction and license type. Factors affecting timing include background checks, zoning approval, and local government processing times.",
      },
    ],
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-semibold tracking-wide uppercase mb-4">
            Common Questions
          </p>
          <h2 className="section-heading text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Get answers to common legal questions. For specific advice about
            your situation, contact us for a free consultation.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {faqs.map((category) => (
              <div key={category.category}>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary" />
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="border border-border bg-card px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-secondary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
