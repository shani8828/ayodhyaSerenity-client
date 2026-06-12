import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code, Rocket, Palette, ArrowRight, CheckCircle2,
  ExternalLink, Building2, ShoppingCart, Play, Loader2,
  Clapperboard,
  Bike,
  Smartphone,
  ArrowUpRight
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
    name: "Real Estate Company",
    icon: Building2,
    link: "https://plotting-alpha.vercel.app/",
  },
  {
    name: "Cinematic Studio",
    icon: Clapperboard,
    link: "https://cinematicstudio.vercel.app/",
  },
  {
    name: "E-Commerce Suite",
    icon: ShoppingCart,
    link: "https://ecommerce-rho-olive-50.vercel.app/",
  },
  {
    name: "Bike Agency Portal",
    icon: Bike,
    link: "https://bikeagency.vercel.app/",
  },
  {
    name: "Mobile Shop App",
    icon: Smartphone,
    link: "https://mobileshop-seven.vercel.app/",
  },
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
                High Quality Design Templates
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-[#F9F9F6]/80 text-sm max-w-2xl mx-auto">
                Explore our high-end, luxurious, production-ready templates.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {templates.map((template, index) => {
                const Icon = template.icon;

                return (
                  <motion.a
                    key={template.name}
                    href={template.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.985 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 transition-all duration-300 hover:border-[#9AAB9B]/30 hover:shadow-[0_20px_60px_rgba(255,107,0,0.08)]"
                  >
                    {/* Gradient Glow */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#FF6B00]/10 blur-3xl" />
                      <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-[#9AAB9B]/10 blur-3xl" />
                    </div>

                    <div className="relative z-10">
                      <div className="mb-10 flex items-start justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/5 transition-all duration-300 group-hover:border-[#FF6B00]/20">
                          <Icon className="h-6 w-6 text-[#FF6B00]" />
                        </div>

                        <ArrowUpRight className="h-5 w-5 text-[#9AAB9B] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FF6B00]" />
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {template.name}
                      </h3>

                      <p className="mt-2 text-sm text-[#9AAB9B]">
                        Open live preview
                      </p>

                      <div className="mt-8 h-px w-full bg-gradient-to-r from-[#FF6B00]/40 via-[#9AAB9B]/20 to-transparent" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[#F9F9F6]/80 text-sm max-w-2xl mx-auto mt-6 text-center align-middle">
              Looking for our standard projects? {" "}
              <Link to="/projects" className="text-[#FF6B00] hover:underline font-bold">
                View our other websites on the Projects page.
              </Link>
            </p>

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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: idx * 0.05,
                  }}
                  whileHover={{ y: -6 }}
                  className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500
      ${pkg.popular
                      ? "border border-[#FF6B00]/25 bg-white/[0.03] shadow-[0_20px_60px_rgba(255,107,0,0.08)]"
                      : "border border-white/10 bg-[#0d0d0d]"
                    }`}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#FF6B00]/10 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#9AAB9B]/10 blur-3xl" />
                  </div>

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Header */}
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.04]">
                          <pkg.icon
                            size={22}
                            strokeWidth={1.5}
                            className="text-[#FF6B00]"
                          />
                        </div>

                        {pkg.popular && (
                          <div className="rounded-full border border-[#FF6B00]/20 bg-[#FF6B00]/10 px-4 py-1">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
                              Most Popular
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className="font-['Clash_Display'] text-3xl font-bold tracking-tight text-white">
                          {pkg.name}
                        </h3>

                        <div className="mt-3 text-2xl font-bold tracking-tight text-[#FF6B00]">
                          {pkg.price}
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-[#9AAB9B]">
                          {pkg.description}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-8 h-px bg-gradient-to-r from-[#FF6B00]/30 via-[#9AAB9B]/10 to-transparent" />

                    {/* Features */}
                    <div className="flex-grow space-y-4">
                      {pkg.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2
                            size={16}
                            strokeWidth={2}
                            className="mt-0.5 shrink-0 text-[#FF6B00]"
                          />

                          <span className="text-sm text-white/85">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          category: pkg.name,
                        }));

                        document
                          .getElementById("contact-form")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`mt-8 h-14 rounded-2xl text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300
          ${pkg.popular
                          ? "bg-[#FF6B00] text-black hover:brightness-110"
                          : "border border-white/10 bg-white/[0.03] text-white hover:border-[#9AAB9B]/30 hover:bg-white/[0.05]"
                        }`}
                    >
                      Select Package
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          id="contact-form"
          className="relative py-24 md:py-36 px-6 md:px-16 bg-[#000000] overflow-hidden"
        >
          <div className="max-w-4xl mx-auto">

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d0d] p-8 md:p-12 lg:p-14">

              {/* Ambient Glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#FF6B00]/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#9AAB9B]/10 blur-3xl" />
              </div>

              <div className="relative z-10">

                {/* Heading */}
                <div className="text-center space-y-5 mb-14">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#9AAB9B] font-medium block">
                    Collab
                  </span>

                  <h2 className="font-['Clash_Display'] text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Build With Us
                  </h2>

                  <p className="max-w-md mx-auto text-sm leading-relaxed text-[#9AAB9B]">
                    Fill out the form below and our technical team will reach out
                    within 24 hours.
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8 font-['Plus_Jakarta_Sans']"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Name */}
                    <div className="space-y-3">
                      <label
                        htmlFor="name"
                        className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9AAB9B]"
                      >
                        Full Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="
                  w-full h-14 rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  px-5
                  text-sm text-white
                  placeholder:text-white/30
                  outline-none
                  transition-all duration-300
                  focus:border-[#FF6B00]/50
                  focus:bg-white/[0.05]
                  focus:shadow-[0_0_0_4px_rgba(255,107,0,0.08)]
                "
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-3">
                      <label
                        htmlFor="phone"
                        className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9AAB9B]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="
                  w-full h-14 rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  px-5
                  text-sm text-white
                  placeholder:text-white/30
                  outline-none
                  transition-all duration-300
                  focus:border-[#FF6B00]/50
                  focus:bg-white/[0.05]
                  focus:shadow-[0_0_0_4px_rgba(255,107,0,0.08)]
                "
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Email */}
                    <div className="space-y-3">
                      <label
                        htmlFor="email"
                        className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9AAB9B]"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="
                  w-full h-14 rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  px-5
                  text-sm text-white
                  placeholder:text-white/30
                  outline-none
                  transition-all duration-300
                  focus:border-[#FF6B00]/50
                  focus:bg-white/[0.05]
                  focus:shadow-[0_0_0_4px_rgba(255,107,0,0.08)]
                "
                      />
                    </div>

                    {/* Package */}
                    <div className="space-y-3">
                      <label
                        htmlFor="category"
                        className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9AAB9B]"
                      >
                        Desired Package
                      </label>

                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="
                  w-full h-14 rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  px-5
                  text-sm text-white
                  appearance-none
                  outline-none
                  transition-all duration-300
                  focus:border-[#FF6B00]/50
                  focus:bg-white/[0.05]
                  focus:shadow-[0_0_0_4px_rgba(255,107,0,0.08)]
                "
                      >
                        <option value="Starter / Basic">Starter / Basic</option>
                        <option value="Professional">Professional</option>
                        <option value="Luxurious / Custom">Luxurious / Custom</option>
                        <option value="E-Commerce Suite">E-Commerce Suite</option>
                        <option value="Not Sure Yet">Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-3">
                    <label
                      htmlFor="requirements"
                      className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9AAB9B]"
                    >
                      Project Requirements & Details
                    </label>

                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={5}
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="Tell us about your business, features needed, and any reference sites..."
                      className="
                w-full min-h-[160px]
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                px-5 py-4
                text-sm text-white
                placeholder:text-white/30
                resize-none
                outline-none
                transition-all duration-300
                focus:border-[#FF6B00]/50
                focus:bg-white/[0.05]
                focus:shadow-[0_0_0_4px_rgba(255,107,0,0.08)]
              "
                    />
                  </div>

                  {/* CTA */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    className="
              group
              relative
              h-14
              w-full
              overflow-hidden
              rounded-2xl
              bg-[#FF6B00]
              text-black
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              transition-all
              duration-300
              hover:shadow-[0_10px_40px_rgba(255,107,0,0.25)]
            "
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <ArrowRight
                            size={14}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebsiteService;
