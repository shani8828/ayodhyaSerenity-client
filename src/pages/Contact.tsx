import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Users, Code, Send, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

type InquiryType = "general" | "partnership" | "development";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [activeTab, setActiveTab] = useState<InquiryType>("general");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const tabs: { key: InquiryType; icon: typeof Mail; label: string }[] = [
    { key: "general", icon: Mail, label: "General Inquiry" },
    { key: "partnership", icon: Users, label: "Partnership" },
    { key: "development", icon: Code, label: "Hire Developers" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ContactUs;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Using toast.promise to handle all states at once
    toast.promise(
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY),
      {
        loading: "Sending your message...",
        success: () => {
          setLoading(false);
          setSubmitted(true);
          return "Message sent successfully!";
        },
        error: (err) => {
          setLoading(false);
          console.error(err);
          return "Failed to send message. Please try again.";
        },
      }
    );
  };

  const handleTabChange = (key: InquiryType, label: string) => {
    setActiveTab(key);
    setSubmitted(false);
    toast.info(`Switched to ${label} mode`, {
      description: "The form has been updated for your selection.",
      duration: 2000,
    });
  };

  return (
    <>
      <SEOHead
        title="Contact Ayodhya Serenity"
        description="Get in touch with Ayodhya Serenity for general inquiries, partnerships, collaboration, or website development services."
        canonical="https://ayodhyaserenity.vercel.app/contact"
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
                  type="button"
                  onClick={() => handleTabChange(t.key, t.label)}
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
                <Button 
                  variant="outline" 
                  className="mt-6" 
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 bg-card rounded-xl p-6 shadow-sm">
                <input type="hidden" name="inquiry_type" value={activeTab} />
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name</label>
                    <Input name="from_name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <Input name="reply_to" type="email" placeholder="you@example.com" required />
                  </div>
                </div>

                {activeTab === "partnership" && (
                  <div>
                    <label className="text-sm font-medium mb-1 block">Organization</label>
                    <Input name="organization" placeholder="Your organization or temple trust" />
                  </div>
                )}

                {activeTab === "development" && (
                  <div>
                    <label className="text-sm font-medium mb-1 block">Project Type</label>
                    <Input name="project_type" placeholder="e.g. Temple website, Travel portal, Digital archive" />
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium mb-1 block">Subject</label>
                  <Input name="subject" placeholder="Subject of your inquiry" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <Textarea name="message" placeholder="Tell us more..." rows={5} required />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={loading}
                  className="w-full bg-gradient-saffron text-primary-foreground hover:opacity-90 font-semibold"
                >
                  {loading ? (
                    <Loader2 size={16} className="mr-2 animate-spin" />
                  ) : (
                    <Send size={16} className="mr-2" />
                  )}
                  {loading ? "Sending..." : "Send Message"}
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