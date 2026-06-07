import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Users, Code, Send, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
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
    toast.promise(
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY),
      {
        loading: "Sending your message...",
        success: () => { setLoading(false); setSubmitted(true); return "Message sent successfully!"; },
        error: (err) => { setLoading(false); console.error(err); return "Failed to send message. Please try again."; },
      }
    );
  };

  const handleTabChange = (key: InquiryType, label: string) => {
    setActiveTab(key);
    setSubmitted(false);
    toast.info(`Switched to ${label} mode`, { description: "The form has been updated for your selection.", duration: 2000 });
  };

  return (
    <>
      <SEOHead
        title="Contact Ayodhya Serenity | Visit the Divine City"
        description="Get in touch with Ayodhya Serenity for inquiries, partnerships, or website development. Connect with the most trusted digital platform for Ayodhya."
        canonical="https://ayodhyaserenity.vercel.app/contact"
        breadcrumbs={[
          { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
          { name: "Contact", url: "https://ayodhyaserenity.vercel.app/contact" },
        ]}
      />

      <main className="bg-[#000000] text-[#F9F9F6] pt-16 pb-12 min-h-screen flex flex-col selection:bg-[#FF6B00] selection:text-black">
        {/* Header */}
        <section className="py-24 md:py-36 px-6 md:px-16 bg-gradient-warm border-b-[0.5px] border-white/5 shrink-0">
          <SectionHeading
            label="Get in Touch"
            title="Contact Ayodhya Serenity"
            subtitle="We'd love to hear from you. Choose the type of inquiry that best fits your needs."
          />
        </section>

        {/* Content Form Wrapper */}
        <section className="px-6 md:px-16 py-16 md:py-24 flex-grow">
          <div className="max-w-2xl mx-auto space-y-12">
            
            {/* Custom Luxury Tabs */}
            <div className="flex gap-3 flex-wrap justify-center border-b-[0.5px] border-white/5 pb-6">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => handleTabChange(t.key, t.label)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-none text-xs font-semibold uppercase tracking-widest font-['Plus_Jakarta_Sans'] transition-all duration-300 ${
                    activeTab === t.key 
                      ? "bg-[#FF6B00] text-black" 
                      : "bg-white/5 text-[#F9F9F6]/60 hover:bg-white/10 hover:text-[#F9F9F6]"
                  }`}
                  aria-label={`Select ${t.label} inquiry type`}
                >
                  <t.icon size={12} strokeWidth={1.5} aria-hidden="true" />
                  {t.label}
                </button>
              ))}
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="bg-white/5 border border-white/10 p-8 text-center space-y-6"
              >
                <CheckCircle size={40} className="text-[#FF6B00] mx-auto" strokeWidth={1} />
                <h3 className="font-['Clash_Display'] text-2xl font-bold">Message Sent!</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9F9F6]/85 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to Ayodhya Serenity. We will get back to you soon.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#FF6B00] text-black font-semibold font-['Plus_Jakarta_Sans'] px-6 py-3.5 rounded-none uppercase text-[10px] tracking-widest transition-all"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 font-['Plus_Jakarta_Sans']">
                <input type="hidden" name="inquiry_type" value={activeTab} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="from_name" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Name</label>
                    <input 
                      id="from_name" 
                      name="from_name" 
                      type="text"
                      placeholder="Your name" 
                      required 
                      className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm text-[#F9F9F6]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reply_to" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Email</label>
                    <input 
                      id="reply_to" 
                      name="reply_to" 
                      type="email" 
                      placeholder="you@example.com" 
                      required 
                      className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm text-[#F9F9F6]"
                    />
                  </div>
                </div>

                {activeTab === "partnership" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <label htmlFor="organization" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Organization</label>
                    <input 
                      id="organization" 
                      name="organization" 
                      type="text"
                      placeholder="Your organization or temple trust" 
                      className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm text-[#F9F9F6]"
                    />
                  </motion.div>
                )}

                {activeTab === "development" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <label htmlFor="project_type" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Project Type</label>
                    <input 
                      id="project_type" 
                      name="project_type" 
                      type="text"
                      placeholder="e.g. Temple website, Travel portal, Digital archive" 
                      className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm text-[#F9F9F6]"
                    />
                  </motion.div>
                )}

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Subject</label>
                  <input 
                    id="subject" 
                    name="subject" 
                    type="text"
                    placeholder="Subject of your inquiry" 
                    required 
                    className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm text-[#F9F9F6]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us more..." 
                    rows={5} 
                    required 
                    className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm resize-none text-[#F9F9F6]"
                  />
                </div>

                <motion.button 
                  type="submit" 
                  disabled={loading} 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 text-xs font-semibold uppercase tracking-widest bg-[#FF6B00] text-black hover:bg-[#E65100] transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={12} strokeWidth={2} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
