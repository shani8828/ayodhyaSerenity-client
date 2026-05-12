import { useState, memo } from "react";
import { ChevronDown } from "lucide-react";

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
            className="rounded-2xl border border-border/60 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:border-primary"
            itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3>
                <button
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${faq.question}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-muted/40 rounded-2xl"
                >
                    <span className="text-base sm:text-lg font-semibold leading-relaxed text-foreground" itemProp="name">
                        {faq.question}
                    </span>

                    <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`} />
                </button>
            </h3>

            <div id={`faq-${faq.question}`} className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-sm sm:text-base leading-7 text-muted-foreground" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p itemProp="text">{faq.answer}</p>
                    </div>
                </div>
            </div>
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
        <section
            className="py-16 sm:py-20 lg:py-24"
            aria-labelledby="faq-heading"
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 sm:mb-14 text-center">
                    <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
                        FAQs
                    </p>

                    <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground" >
                        Frequently Asked Questions
                    </h2>

                    <p
                        className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-7 text-muted-foreground">
                        Everything you need to know about Ayodhya Serenity, pilgrimage
                        guidance, temple visits, and travel planning.
                    </p>
                </div>

                <div
                    className="space-y-4"
                    itemScope
                    itemType="https://schema.org/FAQPage"
                >
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