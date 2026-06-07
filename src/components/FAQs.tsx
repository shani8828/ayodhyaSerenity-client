import { useState, memo } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is Ayodhya Serenity?",
    answer:
      "Ayodhya Serenity is a trusted digital gateway to Ayodhya, providing verified information about temples, sacred landmarks, travel routes, and spiritual destinations for pilgrims and travelers.",
  },
  {
    question: "Where is Ayodhya Serenity located?",
    answer:
      "Ayodhya Serenity is based in Ayodhya, Uttar Pradesh, India, the ancient holy city revered as the birthplace of Lord Rama.",
  },
  {
    question: "Why should I use Ayodhya Serenity?",
    answer:
      "Ayodhya Serenity offers a structured and authentic guide to Ayodhya with verified temple information, local insights, nearby destinations, travel assistance, and pilgrimage planning resources.",
  },
  {
    question: "How can I plan my Ayodhya visit?",
    answer:
      "You can explore travel guides, best visiting times, temple etiquette, nearby attractions, accommodation details, and transportation options directly through Ayodhya Serenity.",
  },
];

type FAQItemProps = {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
};

const FAQItem = memo(({ faq, isOpen, onToggle }: FAQItemProps) => {
  return (
    <article
      className="border-b-[0.5px] border-white/10 bg-transparent transition-all duration-300 selection:bg-[#FF6B00] selection:text-black"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-${faq.question}`}
          className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-300 group"
        >
          <span
            className={`text-base md:text-lg font-['Clash_Display'] font-semibold leading-relaxed tracking-wide transition-colors duration-300 ${
              isOpen ? "text-[#FF6B00]" : "text-[#F9F9F6] group-hover:text-[#FF6B00]"
            }`}
            itemProp="name"
          >
            {faq.question}
          </span>
          <ChevronDown
            strokeWidth={1}
            className={`h-5 w-5 shrink-0 text-[#9AAB9B] transition-transform duration-500 ease-out ${
              isOpen ? "rotate-180 text-[#FF6B00]" : ""
            }`}
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-${faq.question}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div
              className="pb-6 text-sm sm:text-base leading-relaxed text-[#F9F9F6]/85 font-['Plus_Jakarta_Sans']"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
});

FAQItem.displayName = "FAQItem";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 md:py-32 bg-[#000000] selection:bg-[#FF6B00] selection:text-black" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-6 md:px-16">
        <div className="mb-16 text-center">
          <span className="block text-xs uppercase tracking-[0.3em] text-[#9AAB9B] font-medium mb-4">
            FAQs
          </span>
          <h2
            id="faq-heading"
            className="text-3xl md:text-5xl font-['Clash_Display'] font-bold tracking-tighter text-[#F9F9F6]"
          >
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[#F9F9F6]/80 font-['Plus_Jakarta_Sans']">
            Everything you need to know about Ayodhya Serenity, pilgrimage guidance, temple visits, and travel planning.
          </p>
        </div>

        <div className="space-y-2 border-t-[0.5px] border-white/10" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;