import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const TrustBadge = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);
    const promise = emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_badgeTrust,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    toast.promise(promise, {
      loading: 'Sending your application...',
      success: () => { setSubmitted(true); return 'Application submitted successfully!'; },
      error: () => { setLoading(false); return 'Failed to send application. Please try again.'; },
    });
    promise.finally(() => setLoading(false));
  };

  return (
    <>
      <SEOHead
        title="Ayodhya Serenity Trust Badge | Get Verified"
        description="Apply for the 'Verified by Ayodhya Serenity' trust badge. Join the network of authenticated Ayodhya temple and landmark information providers."
        canonical="https://ayodhyaserenity.vercel.app/trust-badge"
        breadcrumbs={[
          { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
          { name: "Trust Badge", url: "https://ayodhyaserenity.vercel.app/trust-badge" },
        ]}
      />

      <main className="bg-[#000000] text-[#F9F9F6] pt-16 pb-12 min-h-screen flex flex-col selection:bg-[#FF6B00] selection:text-black">
        {/* Header */}
        <section className="py-24 md:py-36 px-6 md:px-16 bg-gradient-warm border-b-[0.5px] border-white/5 shrink-0">
          <SectionHeading
            label="Trust Program"
            title="Ayodhya Serenity Trust Badge"
            subtitle="Earn the 'Verified by Ayodhya Serenity' badge and join our network of trusted information sources."
          />
        </section>

        {/* Content */}
        <section className="px-6 md:px-16 py-16 md:py-24 flex-grow">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
              
              {/* Benefits Column */}
              <div className="lg:col-span-6 space-y-8 font-['Plus_Jakarta_Sans']">
                <h2 className="font-['Clash_Display'] text-2xl font-bold tracking-tight text-[#F9F9F6]">Benefits</h2>
                <div className="space-y-4">
                  {[
                    "Display the verified trust badge on your website",
                    "Inclusion in the Ayodhya Serenity network directory",
                    "Increased visitor trust and credibility",
                    "Priority listing in our search and recommendations",
                    "Access to our content and image resources",
                    "Co-marketing opportunities with our platform",
                  ].map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-[#FF6B00] mt-0.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                      <p className="text-sm text-[#F9F9F6]/80">{b}</p>
                    </div>
                  ))}
                </div>

                <h2 className="font-['Clash_Display'] text-2xl font-bold tracking-tight text-[#F9F9F6] pt-4">Eligibility</h2>
                <p className="text-sm text-[#F9F9F6]/70 leading-relaxed">
                  Websites providing information about Ayodhya's temples, landmarks, travel, or cultural heritage are eligible. We review each application for accuracy and authenticity.
                </p>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-5">
                  <ShieldCheck size={28} className="text-[#FF6B00]" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-xs uppercase tracking-widest text-[#F9F9F6]">Review Process</p>
                    <p className="text-[11px] text-[#9AAB9B] mt-0.5">Applications are reviewed within 7 business days.</p>
                  </div>
                </div>
                
                <p className="text-xs text-[#F9F9F6]/60 pt-4">
                  Learn more <Link to="/about" className="text-[#FF6B00] hover:underline font-bold">about Ayodhya Serenity</Link> or view our <Link to="/projects" className="text-[#FF6B00] hover:underline font-bold">verified projects</Link>.
                </p>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-6">
                <h2 className="font-['Clash_Display'] text-2xl font-bold tracking-tight text-[#F9F9F6] mb-8">Apply Now</h2>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="bg-white/5 border border-white/10 p-8 text-center space-y-6"
                  >
                    <CheckCircle size={40} className="text-[#FF6B00] mx-auto" strokeWidth={1} />
                    <h4 className="font-['Clash_Display'] text-xl font-bold">Application Submitted!</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9F9F6]/80 leading-relaxed max-w-xs mx-auto">
                      We will review your application and get back to you within 7 business days.
                    </p>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#FF6B00] text-black font-semibold font-['Plus_Jakarta_Sans'] px-6 py-3.5 rounded-none uppercase text-[10px] tracking-widest transition-all"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another
                    </motion.button>
                  </motion.div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6 font-['Plus_Jakarta_Sans']">
                    <div className="space-y-2">
                      <label htmlFor="website_name" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Website Name</label>
                      <input 
                        id="website_name" 
                        name="website_name" 
                        type="text"
                        placeholder="Your website name" 
                        required 
                        className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm text-[#F9F9F6]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="website_url" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Website URL</label>
                      <input 
                        id="website_url" 
                        name="website_url" 
                        type="url" 
                        placeholder="https://your-website.com" 
                        required 
                        className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm text-[#F9F9F6]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact_email" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Contact Email</label>
                      <input 
                        id="contact_email" 
                        name="contact_email" 
                        type="email" 
                        placeholder="you@example.com" 
                        required 
                        className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm text-[#F9F9F6]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="description" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Description</label>
                      <textarea 
                        id="description" 
                        name="description" 
                        placeholder="Tell us about your website..." 
                        rows={4} 
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
                          Sending... <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Submit Application <ArrowRight size={14} strokeWidth={1.5} />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TrustBadge;
