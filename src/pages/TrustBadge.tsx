import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
        canonical="https://ayodhyaserenity.com/trust-badge"
        breadcrumbs={[
          { name: "Home", url: "https://ayodhyaserenity.com" },
          { name: "Trust Badge", url: "https://ayodhyaserenity.com/trust-badge" },
        ]}
      />

      <main className="pt-16">
        <section className="section-padding bg-gradient-warm">
          <SectionHeading
            label="Trust Program"
            title="Ayodhya Serenity Trust Badge"
            subtitle="Earn the 'Verified by Ayodhya Serenity' badge and join our network of trusted information sources."
          />
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">Benefits</h2>
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
                      <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      <p className="text-muted-foreground text-sm">{b}</p>
                    </div>
                  ))}
                </div>

                <h2 className="font-display text-2xl font-bold mt-10 mb-4">Eligibility</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Websites providing information about Ayodhya's temples, landmarks, travel, or cultural heritage are eligible. We review each application for accuracy and authenticity.
                </p>
                <div className="flex items-center gap-3 bg-card rounded-lg p-4">
                  <ShieldCheck size={32} className="text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-sm">Review Process</p>
                    <p className="text-xs text-muted-foreground">Applications are reviewed within 7 business days.</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-6">
                  Learn more <Link to="/about" className="text-primary hover:underline">about Ayodhya Serenity</Link> or view our <Link to="/projects" className="text-primary hover:underline">verified projects</Link>.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-6">Apply Now</h2>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card rounded-xl p-8 text-center">
                    <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                    <h4 className="font-display text-xl font-bold mb-2">Application Submitted!</h4>
                    <p className="text-muted-foreground text-sm">We'll review your application and get back to you within 7 business days.</p>
                    <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>Submit Another</Button>
                  </motion.div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-4 bg-card rounded-xl p-6 shadow-sm">
                    <div>
                      <label htmlFor="website_name" className="text-sm font-medium mb-1 block">Website Name</label>
                      <Input id="website_name" name="website_name" placeholder="Your website name" required />
                    </div>
                    <div>
                      <label htmlFor="website_url" className="text-sm font-medium mb-1 block">Website URL</label>
                      <Input id="website_url" name="website_url" type="url" placeholder="https://your-website.com" required />
                    </div>
                    <div>
                      <label htmlFor="contact_email" className="text-sm font-medium mb-1 block">Contact Email</label>
                      <Input id="contact_email" name="contact_email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div>
                      <label htmlFor="description" className="text-sm font-medium mb-1 block">Description</label>
                      <Textarea id="description" name="description" placeholder="Tell us about your website..." rows={4} required />
                    </div>
                    <Button type="submit" disabled={loading} size="lg" className="w-full bg-gradient-saffron text-primary-foreground hover:opacity-90 hover:scale-[1.02] font-semibold transition-all duration-300">
                      {loading ? <>Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" /></> : <>Submit Application <ArrowRight size={16} className="ml-2" /></>}
                    </Button>
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
