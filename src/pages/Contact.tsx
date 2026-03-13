import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Users, Code, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

type InquiryType = "general" | "partnership" | "development";

const Contact = () => {
  const [activeTab, setActiveTab] = useState<InquiryType>("general");
  const [submitted, setSubmitted] = useState(false);

  const tabs: { key: InquiryType; icon: typeof Mail; label: string }[] = [
    { key: "general", icon: Mail, label: "General Inquiry" },
    { key: "partnership", icon: Users, label: "Partnership" },
    { key: "development", icon: Code, label: "Hire Developers" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact Ayodhya Serenity"
        description="Get in touch with Ayodhya Serenity for general inquiries, partnerships, collaboration, or website development services."
        canonical="https://ayodhyaserenity.com/contact"
      />

      <main className="pt-16">
        <section className="section-padding bg-gradient-warm">
          <SectionHeading
            label="Get in Touch"
            title="Contact Ayodhya Serenity"
            subtitle="We'd love to hear from you. Choose the type of inquiry that best fits your needs."
          />
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2 mb-8 flex-wrap justify-center">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => { setActiveTab(t.key); setSubmitted(false); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === t.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <t.icon size={16} />
                  {t.label}
                </button>
              ))}
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-xl p-8 text-center"
              >
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">Thank you for reaching out. We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-card rounded-xl p-6 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <Input type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                {activeTab === "partnership" && (
                  <div>
                    <label className="text-sm font-medium mb-1 block">Organization</label>
                    <Input placeholder="Your organization or temple trust" />
                  </div>
                )}
                {activeTab === "development" && (
                  <div>
                    <label className="text-sm font-medium mb-1 block">Project Type</label>
                    <Input placeholder="e.g. Temple website, Travel portal, Digital archive" />
                  </div>
                )}
                <div>
                  <label className="text-sm font-medium mb-1 block">Subject</label>
                  <Input placeholder="Subject of your inquiry" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <Textarea placeholder="Tell us more..." rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-saffron text-primary-foreground hover:opacity-90 font-semibold">
                  <Send size={16} className="mr-2" /> Send Message
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
