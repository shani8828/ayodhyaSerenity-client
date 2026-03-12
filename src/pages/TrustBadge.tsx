import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const TrustBadge = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Trust Badge Program - Verified by Ayodhya Serenity"
        description="Apply for the Ayodhya Serenity Trust Badge to display verified authenticity on your website. Join our trusted network of Ayodhya information providers."
        canonical="https://ayodhyaserenity.com/trust-badge"
      />

      <main className="pt-20">
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
                <h3 className="font-display text-2xl font-bold mb-6">Benefits</h3>
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
                      <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                      <p className="text-muted-foreground text-sm">{b}</p>
                    </div>
                  ))}
                </div>

                <h3 className="font-display text-2xl font-bold mt-10 mb-4">Eligibility</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Websites providing information about Ayodhya's temples, landmarks, travel, or cultural heritage are eligible. We review each application for accuracy, content quality, and alignment with our mission of authentic information.
                </p>
                <div className="flex items-center gap-3 bg-card rounded-lg p-4">
                  <ShieldCheck size={32} className="text-primary" />
                  <div>
                    <p className="font-semibold text-sm">Review Process</p>
                    <p className="text-xs text-muted-foreground">Applications are reviewed within 7 business days by our verification team.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold mb-6">Apply Now</h3>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card rounded-xl p-8 text-center"
                  >
                    <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                    <h4 className="font-display text-xl font-bold mb-2">Application Submitted!</h4>
                    <p className="text-muted-foreground text-sm">We'll review your application and get back to you within 7 business days.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 bg-card rounded-xl p-6 shadow-sm">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Website Name</label>
                      <Input placeholder="Your website name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Website URL</label>
                      <Input type="url" placeholder="https://your-website.com" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Contact Email</label>
                      <Input type="email" placeholder="you@example.com" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Description</label>
                      <Textarea placeholder="Tell us about your website and its connection to Ayodhya..." rows={4} required />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-saffron text-primary-foreground hover:opacity-90 font-semibold">
                      Submit Application <ArrowRight size={16} className="ml-2" />
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
