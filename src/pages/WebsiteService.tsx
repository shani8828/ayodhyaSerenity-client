import { useState } from "react";
import { motion } from "framer-motion";
import {
  Laptop, Code, Rocket, Palette, ArrowRight, CheckCircle2,
  ExternalLink, Building2, Store, ShoppingCart
} from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import api from "@/lib/axios";

const packages = [
  {
    name: "Starter / Basic",
    icon: Code,
    price: "₹4,999 - ₹9,999",
    description: "Perfect for small businesses or personal portfolios to get online quickly.",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Free Support"
    ],
    popular: false,
  },
  {
    name: "Professional",
    icon: Rocket,
    price: "₹14,999 - ₹24,999",
    description: "Ideal for growing businesses needing dynamic features and better performance.",
    features: [
      "Up to 10 Pages",
      "Custom UI/UX Design",
      "CMS Integration",
      "Advanced SEO Optimization",
      "Speed Optimization",
      "3 Months Free Support"
    ],
    popular: true,
  },
  {
    name: "Luxurious / Custom",
    icon: Palette,
    price: "Custom Quote",
    description: "High-end, bespoke digital experiences tailored precisely to your brand.",
    features: [
      "Unlimited Pages",
      "Premium Neo-Brutalist / Modern UI",
      "Complex Animations & Interactions",
      "Full Stack Development (E-commerce, Portals)",
      "Dedicated Project Manager",
      "1 Year Free Maintenance"
    ],
    popular: false,
  }
];

const templates = [
  {
    name: "E-Commerce Suite",
    icon: ShoppingCart,
    link: "https://ecommerce-rho-olive-50.vercel.app/",
    description: "A fully-featured online store with cart, checkout, and inventory management."
  },
  {
    name: "Bike Agency Portal",
    icon: Building2,
    link: "https://bikeagency.vercel.app/",
    description: "Premium showcase platform for vehicle agencies with 3D models and smooth scrolling."
  },
  {
    name: "Mobile Shop App",
    icon: Store,
    link: "https://mobileshop-seven.vercel.app/",
    description: "Dynamic and clean catalog for mobile and electronic retailers."
  }
];

const WebsiteService = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Professional",
    requirements: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || (!formData.email && !formData.phone)) {
      toast.error("Please provide your name and at least one contact method.");
      return;
    }

    setLoading(true);
    try {
      await api.post("/api/services/website-request", formData);
      toast.success("Request submitted successfully! Our team will contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "Professional",
        requirements: ""
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Website Development Services | Ayodhya Serenity"
        description="Professional, premium, and luxurious website development services for businesses in Ayodhya. E-commerce, portals, and custom web applications."
        canonical="https://ayodhyaserenity.vercel.app/services/website"
        breadcrumbs={[
          { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
          { name: "Services", url: "https://ayodhyaserenity.vercel.app/services" },
          { name: "Website Development", url: "https://ayodhyaserenity.vercel.app/services/website" },
        ]}
      />

      <main className="pt-16 pb-12 min-h-screen flex flex-col bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-warm shrink-0 border-b border-border/40">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              label="Digital Presence"
              title="Premium Website Development"
              subtitle="Transform your business with modern, blazing-fast, and luxurious digital experiences tailored for Ayodhya's growing market."
            />
          </div>
        </section>

        {/* Templates & Projects Callout */}
        <section className="py-12 bg-muted/30 border-b border-border/40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-display font-bold mb-4">Luxurious Templates & Proven Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our high-end, production-ready templates. Looking for our standard projects?
                <Link to="/projects" className="text-primary hover:underline ml-1 font-medium">View our average websites on the Projects page.</Link>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {templates.map((template, idx) => (
                <motion.a
                  key={template.name}
                  href={template.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <template.icon size={20} />
                    </div>
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <iframe
                    src={template.link}
                    title="Embedded Website"
                    className="h-[600px] w-full rounded-xl"
                  />
                  <h3 className="font-bold text-lg my-2">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Packages */}
        <section className="py-16 md:py-24 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Transparent Pricing</h2>
              <p className="text-muted-foreground">Select a package that best fits your business goals</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className={`relative flex flex-col p-6 md:p-8 rounded-2xl border ${pkg.popular ? 'bg-primary/5 border-primary shadow-xl scale-105 z-10' : 'bg-card border-border shadow-sm'}`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <pkg.icon size={32} className={`mb-4 ${pkg.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                    <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                    <div className="text-xl font-semibold text-primary mb-3">{pkg.price}</div>
                    <p className="text-sm text-muted-foreground h-12">{pkg.description}</p>
                  </div>

                  <div className="flex-grow space-y-3 mb-8">
                    {pkg.features.map(feature => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full mt-auto ${pkg.popular ? 'bg-primary hover:bg-primary/90' : 'bg-muted hover:bg-muted/80 text-foreground'}`}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, category: pkg.name }));
                      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Select Package
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 bg-muted/20 border-t border-border/40">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-card rounded-2xl border border-border shadow-lg p-6 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">Build With Us</h2>
                <p className="text-muted-foreground">Fill out the form below and our technical team will reach out to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name <span className="text-red-500">*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">Desired Package</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                    >
                      <option value="Starter / Basic">Starter / Basic</option>
                      <option value="Professional">Professional</option>
                      <option value="Luxurious / Custom">Luxurious / Custom</option>
                      <option value="E-Commerce Suite">E-Commerce Suite</option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="requirements" className="text-sm font-medium">Project Requirements & Details</label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your business, the features you need, and any reference websites..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 text-lg bg-gradient-saffron hover:opacity-90 transition-opacity"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Request <ArrowRight size={20} />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebsiteService;
