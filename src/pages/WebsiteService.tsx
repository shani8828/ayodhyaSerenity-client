import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code, Rocket, Palette, ArrowRight, CheckCircle2,
  ExternalLink, Building2, Store, ShoppingCart, Play, Loader2
} from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
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
  const [activePreviews, setActivePreviews] = useState<Record<string, boolean>>({});
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

  const togglePreview = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActivePreviews(prev => ({ ...prev, [name]: !prev[name] }));
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

      <main className="bg-[#000000] text-[#F9F9F6] pt-16 pb-12 min-h-screen flex flex-col selection:bg-[#FF6B00] selection:text-black">
        {/* Hero Section */}
        <section className="py-24 md:py-36 px-6 md:px-16 bg-gradient-warm border-b-[0.5px] border-white/5 shrink-0">
          <div className="max-w-4xl mx-auto text-center">
            <span className="block text-xs uppercase tracking-[0.3em] text-[#9AAB9B] font-medium mb-4">
              Digital Presence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-['Clash_Display'] font-bold tracking-tighter leading-[1.0] text-wrap-balance mb-6 text-[#F9F9F6]">
              Premium Website<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#F9F9F6]">
                Development
              </span>
            </h1>
            <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#F9F9F6]/80 leading-relaxed max-w-2xl mx-auto">
              Transform your business with modern, blazing-fast, and luxurious digital experiences tailored for Ayodhya's growing market.
            </p>
          </div>
        </section>

        {/* Templates Showcase (LAG FIXED: loaded on demand) */}
        <section className="py-20 md:py-32 px-6 md:px-16 bg-[#000000] border-b-[0.5px] border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#9AAB9B] font-medium block">
                Portfolio Showcase
              </span>
              <h2 className="text-3xl md:text-5xl font-['Clash_Display'] font-bold tracking-tighter">
                Luxurious Templates & Proven Work
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-[#F9F9F6]/80 text-sm max-w-2xl mx-auto">
                Explore our high-end, production-ready templates. Looking for our standard projects?{" "}
                <Link to="/projects" className="text-[#FF6B00] hover:underline font-bold">
                  View our average websites on the Projects page.
                </Link>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-12">
              {templates.map((template, idx) => (
                <motion.div
                  key={template.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.05 }}
                  className="flex flex-col space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-['Clash_Display'] text-xl font-bold tracking-tight">{template.name}</h3>
                    <a 
                      href={template.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#9AAB9B] hover:text-[#FF6B00] transition-colors"
                      title="Open in new tab"
                    >
                      <ExternalLink size={16} strokeWidth={1.5} />
                    </a>
                  </div>

                  {/* On-Demand Interactive Sandbox Mockup */}
                  <div className="relative h-[450px] w-full bg-[#0d0d0d] border border-white/10 flex flex-col justify-center items-center overflow-hidden">
                    {activePreviews[template.name] ? (
                      <iframe
                        src={template.link}
                        title={`Embedded preview of ${template.name}`}
                        className="h-full w-full border-none"
                        loading="lazy"
                      />
                    ) : (
                      <div className="p-8 text-center space-y-6 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center text-[#FF6B00]">
                          <template.icon size={24} strokeWidth={1} />
                        </div>
                        <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#F9F9F6]/60 max-w-xs leading-relaxed">
                          {template.description}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => togglePreview(template.name, e)}
                          className="bg-white/5 text-[#F9F9F6] border border-white/20 font-['Plus_Jakarta_Sans'] font-semibold px-5 py-3 rounded-none uppercase text-[9px] tracking-widest transition-all duration-300 hover:bg-[#FF6B00] hover:text-black hover:border-[#FF6B00] flex items-center gap-2"
                        >
                          <Play size={10} fill="currentColor" /> Activate Live Sandbox
                        </motion.button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Packages */}
        <section className="py-20 md:py-32 px-6 md:px-16 bg-[#000000] border-b-[0.5px] border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#9AAB9B] font-medium block">
                Investment
              </span>
              <h2 className="text-3xl md:text-5xl font-['Clash_Display'] font-bold tracking-tighter">
                Transparent Pricing
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-[#F9F9F6]/80 text-sm">
                Select a package that best fits your business goals
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 max-w-6xl mx-auto">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.05 }}
                  className={`flex flex-col space-y-8 p-8 border ${
                    pkg.popular ? 'border-[#FF6B00] bg-white/5' : 'border-white/5 bg-transparent'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-white/5 flex items-center justify-center text-[#FF6B00]">
                        <pkg.icon size={20} strokeWidth={1} />
                      </div>
                      {pkg.popular && (
                        <span className="bg-[#FF6B00] text-black text-[9px] font-bold px-3 py-1 uppercase tracking-widest">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-['Clash_Display'] font-bold tracking-tight text-[#F9F9F6]">{pkg.name}</h3>
                    <div className="text-lg font-bold text-[#FF6B00] tracking-wider">{pkg.price}</div>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#F9F9F6]/70 leading-relaxed min-h-[40px]">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="border-t-[0.5px] border-white/10 pt-6 space-y-4 flex-grow">
                    {pkg.features.map(feature => (
                      <div key={feature} className="flex items-start gap-2.5 font-['Plus_Jakarta_Sans']">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-xs text-[#F9F9F6]/85">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-none uppercase text-[10px] tracking-widest font-semibold font-['Plus_Jakarta_Sans'] transition-all ${
                      pkg.popular 
                        ? 'bg-[#FF6B00] text-black' 
                        : 'border border-white/20 text-[#F9F9F6] hover:bg-white/5'
                    }`}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, category: pkg.name }));
                      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Select Package
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20 md:py-32 px-6 md:px-16 bg-[#000000]">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <span className="text-xs uppercase tracking-[0.3em] text-[#9AAB9B] font-medium block">
                  Collab
                </span>
                <h2 className="text-3xl md:text-5xl font-['Clash_Display'] font-bold tracking-tighter">
                  Build With Us
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9F9F6]/80 max-w-md mx-auto">
                  Fill out the form below and our technical team will reach out to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 font-['Plus_Jakarta_Sans']">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Desired Package</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm appearance-none"
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
                  <label htmlFor="requirements" className="text-xs uppercase tracking-widest font-bold text-[#9AAB9B]">Project Requirements & Details</label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-none border border-white/10 bg-[#0d0d0d] focus:border-[#FF6B00] outline-none transition-all text-sm resize-none"
                    placeholder="Tell us about your business, features needed, and any reference sites..."
                  ></textarea>
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
                      <Loader2 size={14} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request <ArrowRight size={14} strokeWidth={1.5} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebsiteService;
